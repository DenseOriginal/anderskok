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
  displaySplash = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private whiteboardService: NgWhiteboardService
  ) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(isHandset => { this.isDrawing = !isHandset });
    if(getCookie('hasSeenSplash') != 'true') {
      document.cookie = "hasSeenSplash=true; max-age=" + 60 * 60 * 24 * 30;
      this.displaySplash = true;
    } 
  }

  undo() {
    this.whiteboardService.undo();
  }

}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return undefined;
}