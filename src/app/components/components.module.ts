import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoodleControllerComponent } from "./doodle-controller/doodle-controller.component";
import { MobileComponent } from "./mobile/mobile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
      DoodleControllerComponent,
      MobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
      DoodleControllerComponent,
      MobileComponent
  ]
})
export class ComponentModule { }
