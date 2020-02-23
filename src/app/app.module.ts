import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from "./components/components.module";

import { GoogleFontsService } from "./services/googleFonts.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [ GoogleFontsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
