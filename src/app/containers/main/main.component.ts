import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from "rxjs";

import { GoogleFontsService } from "../../services/googleFonts.service";

import { FontModel } from "../../models/fontModel";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: [ './main.scss' ]
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  fonts: FontModel[] = [];
  pageNumber = 1;

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.subscribeFontChange();
  }

  subscribeFontChange() {
    this.subscription = this.googleFontsService.fontsChanged.subscribe(() => {
      this.setFonts(this.pageNumber);
    });
  }

  onScrollDown() {
    this.pageNumber++;
    this.setFonts(this.pageNumber);
  }

  setFonts(pageNumber: number) {
    this.fonts = this.googleFontsService.getFonts(pageNumber);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
