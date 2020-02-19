import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToolbarComponent } from "./main/toolbar/toolbar.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ContainersModule {}
