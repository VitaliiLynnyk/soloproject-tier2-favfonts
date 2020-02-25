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

  changeBg(event) {
    const { target: { value } } = event;
    if (value === 'white') {
      this.doc.body.style.setProperty('--bg-color', '#fff');
      this.doc.body.style.setProperty('--text-color', '#222');
      this.doc.body.style.setProperty('--second-text-color', 'rgba(34, 34, 34, .5)');
    } else {
      this.doc.body.style.setProperty('--bg-color', '#222');
      this.doc.body.style.setProperty('--text-color', '#fff');
      this.doc.body.style.setProperty('--second-text-color', 'rgba(255,255,255, .5)');
    }
  }

}
