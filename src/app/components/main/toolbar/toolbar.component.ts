import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';

import { GoogleFontsService } from '../../../services/googleFonts.service';

import { FontModel } from '../../../models/fontModel';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: [ './toolbar.scss' ]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Input()
  fonts: FontModel[];

  @Output()
  fontsChange = new EventEmitter<FontModel[]>();

  @Input()
  scrolling: boolean;

  @Output()
  scrollingChange = new EventEmitter<boolean>();

  fontsFullArray: FontModel[] = [];

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.subscribeFontsChanged();
  }

  subscribeFontsChanged() {
    this.subscription = this.googleFontsService.fontsChanged.subscribe(() => this.fontsFullArray = this.googleFontsService.getAllFonts());
  }

  searchFont(event) {
    const { target: { value } } = event;

    if (value) {
      this.scrollingChange.emit(false);
      const filteredFonts = this.fonts.filter((e: FontModel) => e.family.toLowerCase().indexOf(value) >= 0);
      this.fontsChange.emit(filteredFonts);
    } else {
      this.scrollingChange.emit(true);
      this.fontsChange.emit(this.fontsFullArray);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
