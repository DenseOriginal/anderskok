import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  @Output() done = new EventEmitter();
  animate = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.animate = true, 500);
  }

  animationEnd(e: AnimationEvent) {
    if(e.animationName != "splash") return;
    console.log('Splash done');
    this.done.emit();
  }
}
