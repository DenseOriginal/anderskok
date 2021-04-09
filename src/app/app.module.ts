import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWhiteboardModule } from 'ng-whiteboard';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { ComponentModule } from "./components/components.module";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgWhiteboardModule,
    LayoutModule,
    // MatButtonModule,
    // MatIconModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
