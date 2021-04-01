import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() imgUrl!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() facts?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
