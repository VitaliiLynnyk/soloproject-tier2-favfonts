import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from "rxjs";

import { GoogleFontsService } from "../../../services/googleFonts.service";

import { FontModel } from "../../../models/fontModel";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: [ './toolbar.scss' ]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Output()
  fontsChange = new EventEmitter<FontModel[]>();

  fonts: FontModel[] = [];

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.subscribeFontsChanged();
  }

  subscribeFontsChanged() {
    this.subscription = this.googleFontsService.fontsChanged.subscribe(fonts => this.fonts = fonts);
  }

  searchFont(event) {
    const { target: { value } } = event;

    if (value) {
      const filteredFonts = this.fonts.filter((e: FontModel) => e.family.toLowerCase().indexOf(value) >= 0);
      this.fontsChange.emit(filteredFonts);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
