import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 750px)'])
    .pipe(pluck('matches'), shareReplay());

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
