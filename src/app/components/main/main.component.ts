import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { GoogleFontsService } from '../../services/googleFonts.service';

import { FontModel } from '../../models/fontModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: [ './main.scss' ]
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  fonts: FontModel[] = [];
  pageNumber = 1;
  scrolling = true;

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.subscribeFontChange();
  }

  subscribeFontChange() {
    this.subscription = this.googleFontsService.fontsChanged.subscribe(fonts => {
      this.fonts = fonts;

      if (!this.scrolling) this.pageNumber = 1;
    });
  }

  onScrollDown() {
    if (this.scrolling) {
      this.pageNumber++;
      this.googleFontsService.getFonts(this.pageNumber);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
