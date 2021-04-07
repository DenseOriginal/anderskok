import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoodleControllerComponent } from "./doodle-controller/doodle-controller.component";
import { MobileComponent } from "./mobile/mobile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { DoodleSubmitComponent } from './doodle-submit/doodle-submit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    DoodleControllerComponent,
    MobileComponent,
    SkillsComponent,
    DoodleSubmitComponent,
    ProjectComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    DoodleControllerComponent,
    MobileComponent,
    SkillsComponent,
    SplashComponent
  ]
})
export class ComponentModule { }
