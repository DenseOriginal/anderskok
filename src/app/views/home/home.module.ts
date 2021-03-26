import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { NgWhiteboardModule } from 'ng-whiteboard';
import { MobileComponent } from './mobile/mobile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DoodleControllerComponent } from './doodle-controller/doodle-controller.component';


@NgModule({
  declarations: [HomeComponent, MobileComponent, DoodleControllerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgWhiteboardModule,
    LayoutModule
  ]
})
export class HomeModule { }
