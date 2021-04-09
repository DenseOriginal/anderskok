import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { DoodleSubmitComponent } from '../doodle-submit/doodle-submit.component';

@Component({
  selector: 'doodle-controller',
  templateUrl: './doodle-controller.component.html',
  styleUrls: ['./doodle-controller.component.scss']
})
export class DoodleControllerComponent implements OnInit {

  @Input() color: string = "#212121";
  @Output() colorChange = new EventEmitter<string>();
  @Output() undo = new EventEmitter<boolean>();
  
  doodleColor1 = getComputedStyle(document.body).getPropertyValue('--doodle-color-1').trim();
  doodleColor2 = getComputedStyle(document.body).getPropertyValue('--doodle-color-2').trim();
  doodleColor3 = getComputedStyle(document.body).getPropertyValue('--doodle-color-3').trim();
  doodleColor4 = getComputedStyle(document.body).getPropertyValue('--doodle-color-4').trim();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submitDoodle() {
    const dialogRef = this.dialog.open(DoodleSubmitComponent, {
      width: '90vw',
      height: '90vh',
      maxWidth: '470px',
      maxHeight: '650px',
      panelClass: 'doodle-submit'
    });
  }
}
