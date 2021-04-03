import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doodle-submit',
  templateUrl: './doodle-submit.component.html',
  styleUrls: ['./doodle-submit.component.scss']
})
export class DoodleSubmitComponent implements OnInit {

  doodleImg: string = '';
  compressedDoodleImg: string = '';
  email = '';
  emailError = '';
  message = '';
  loading = false;
  responseMessage = '';

  constructor(
    private dialogRef: MatDialogRef<DoodleSubmitComponent>,
  ) { this.getDoodle() }

  getDoodle() {
    const node = document.querySelector('#draw-frame > svg');
    if (!node) return;

    // Firefox needs width and height to be explicitly defined in html
    node.setAttribute('width', node.clientWidth.toString());
    node.setAttribute('height', node.clientHeight.toString());
    const svgString = this.saveAsSvg(node);

    this.svgString2Image(
      svgString,
      Number(node.clientWidth),
      Number(node.clientHeight),
      'png',
      (img) => {
        this.doodleImg = img;
      }
    );
  }

  submit() {
    //// Error check
    // Reset any error that could have happened before
    this.emailError = '';

    if (!this.email && this.message) this.emailError = 'Email can\'t be empty';
    if (!/^\S+@\S+\.\S+$/.test(this.email) && this.email) this.emailError = 'Enter a valid email'

    // If an error happened exit
    if (this.emailError) return;

    // Only submit the doodle or message if theres any content
    if(!this.email && !this.message && document.querySelector('#draw-frame > svg')?.childElementCount == 0) {
      this.responseMessage = "Please enter a message";
      return;
    }

    const formData = {
      email: this.email,
      message: this.message || randomString(16) + "_doodle",
      doodle: this.compressedDoodleImg
    };

    this.loading = true;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": 'doodle-form',
        ...formData
      })
    }).then(() => {
      this.responseMessage = 'Thanks for the doodle';
      setTimeout(() => this.dialogRef.close(), 2000)
    })
      .catch(() => this.responseMessage = 'Something happened')
      .finally(() => this.loading = false);
  }

  close() {
    this.dialogRef.close();
  }

  private saveAsSvg(svgNode: Element): string {
    svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgNode);
    svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
    svgString = svgString.replace(/NS\d+:href/g, 'xlink:href');
    return svgString;
  }

  private svgString2Image(
    svgString: string,
    width: number,
    height: number,
    format: string,
    callback: (img: string) => void
  ) {
    // set default for format parameter
    format = format || 'png';
    // SVG data URL from SVG string
    const svgData = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    this.compressedDoodleImg = svgData;
    // create canvas in memory(not in DOM)
    const canvas = document.createElement('canvas');
    // get canvas context for drawing on canvas
    const context = canvas.getContext('2d');
    // set canvas size
    canvas.width = width;
    canvas.height = height;
    // create image in memory(not in DOM)
    const image = new Image();
    // later when image loads run this
    image.onload = () => {
      if (!context) return;
      // async (happens later)
      // clear canvas
      context.clearRect(0, 0, width, height);
      // draw image with SVG data to canvas
      context.drawImage(image, 0, 0, width, height);
      // snapshot canvas as png
      const pngData = canvas.toDataURL('image/' + format);
      // pass png data URL to callback
      callback(pngData);
    }; // end async
    // start loading SVG data into in memory image
    image.src = svgData;
  }

  ngOnInit(): void {
  }

}

function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function randomString(length: number) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}