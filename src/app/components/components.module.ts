import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoodleControllerComponent } from "./doodle-controller/doodle-controller.component";
import { MobileComponent } from "./mobile/mobile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { DoodleSubmitComponent } from './doodle-submit/doodle-submit.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
      DoodleControllerComponent,
      MobileComponent,
      SkillsComponent,
      DoodleSubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [
      DoodleControllerComponent,
      MobileComponent,
      SkillsComponent
  ]
})
export class ComponentModule { }
