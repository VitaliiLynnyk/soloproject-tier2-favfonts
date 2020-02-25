import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { GoogleFontsService } from '../../../services/googleFonts.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: [ './toolbar.scss' ]
})
export class ToolbarComponent {
  @Input()
  scrolling: boolean;

  @Output()
  scrollingChange = new EventEmitter<boolean>();

  constructor(
    private googleFontsService: GoogleFontsService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  searchFont(event) {
    const { target: { value } } = event;

    if (value) {
      this.scrollingChange.emit(false);
      this.googleFontsService.filterFonts(value);
    } else {
      this.scrollingChange.emit(true);
      this.googleFontsService.getFonts();
    }
  }

  typeText(event) {
    const { target: { value } } = event;

    if (value) {
      this.googleFontsService.setTextInFonts(value);
    } else {
      this.googleFontsService.getFonts();
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

  changeView(event) {
    const { target: { checked } } = event;
    const articlesRes = this.doc.body.querySelector('#articles-res');

    if (checked) {
      articlesRes.classList.add('grid-table');
    } else {
      articlesRes.classList.remove('grid-table');
    }
  }
}
