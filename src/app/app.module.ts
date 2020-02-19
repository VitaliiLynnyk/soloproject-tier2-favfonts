import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContainersModule } from "./containers/containers.module";

import { GoogleFontsService } from "./services/googleFonts.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContainersModule
  ],
  providers: [ GoogleFontsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
