import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoodleControllerComponent } from "./doodle-controller/doodle-controller.component";
import { MobileComponent } from "./mobile/mobile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
      DoodleControllerComponent,
      MobileComponent,
      SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
      DoodleControllerComponent,
      MobileComponent,
      SkillsComponent
  ]
})
export class ComponentModule { }
