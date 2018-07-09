import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorksliderComponent } from './workslider/workslider.component';
import { RatedaysliderComponent } from './ratedayslider/ratedayslider.component';
import { MostimportantthingsliderComponent } from './mostimportantthingslider/mostimportantthingslider.component';
import { WhoimpactedsliderComponent } from './whoimpactedslider/whoimpactedslider.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksliderComponent,
    RatedaysliderComponent,
    MostimportantthingsliderComponent,
    WhoimpactedsliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
