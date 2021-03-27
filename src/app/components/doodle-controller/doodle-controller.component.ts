import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'doodle-controller',
  templateUrl: './doodle-controller.component.html',
  styleUrls: ['./doodle-controller.component.scss']
})
export class DoodleControllerComponent implements OnInit {

  @Input() color: string = "#212121";
  @Output() colorChange = new EventEmitter<string>();
  @Output() undo = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
