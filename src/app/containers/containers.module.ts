import { NgModule } from '@angular/core';

import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ContainersModule {}
