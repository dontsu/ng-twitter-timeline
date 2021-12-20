import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTwitterTimelineModule } from "projects/ng-twitter-timeline/src/lib/ng-twitter-timeline.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
