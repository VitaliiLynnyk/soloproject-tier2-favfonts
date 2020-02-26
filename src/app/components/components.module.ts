import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CardDirective } from '../directives/card.directive';

import { CardComponent } from './main/card/card.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { ButtonUpComponent } from './button-up/button-up.component';
import { ButtonUpDirective } from '../directives/button-up.directive';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  declarations: [
    CardComponent,
    CardDirective,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    ButtonUpComponent,
    ButtonUpDirective
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ButtonUpComponent,
    ButtonUpDirective
  ]
})
export class ComponentsModule {}
