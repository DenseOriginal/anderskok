import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
