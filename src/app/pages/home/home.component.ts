import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgWhiteboardService } from 'ng-whiteboard';
import { Observable } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 930px)'])
    .pipe(pluck('matches'), shareReplay());

  color: string = "#212121";
  isDrawing = false;
  displaySplash = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private whiteboardService: NgWhiteboardService
  ) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(isHandset => { this.isDrawing = !isHandset });
  }

  undo() {
    this.whiteboardService.undo();
  }

}
