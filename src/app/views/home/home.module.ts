import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { NgWhiteboardModule } from 'ng-whiteboard';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [HomeComponent, MobileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgWhiteboardModule
  ]
})
export class HomeModule { }
