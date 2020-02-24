import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { GoogleFontsService } from '../../../services/googleFonts.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: [ './toolbar.scss' ]
})
export class ToolbarComponent {

  constructor(
    private googleFontsService: GoogleFontsService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  searchFont(event) {
    const { target: { value } } = event;

    if (value) {
      this.googleFontsService.filterFonts(value);
    } else {
      this.googleFontsService.getAllFonts();
    }
  }

  typeText(event) {
    const { target: { value } } = event;

    if (value) {
      this.googleFontsService.setTextInFonts(value);
    } else {
      this.googleFontsService.getAllFonts();
    }
  }

  selectFontSize(event) {
    const { target: { value } } = event;
    this.doc.body.style.setProperty('--text-size', `${ value }px`);
  }
}
