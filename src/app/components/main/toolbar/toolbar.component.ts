import { Component, EventEmitter, Input, Output } from '@angular/core';

import { GoogleFontsService } from '../../../services/googleFonts.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: [ './toolbar.scss' ]
})
export class ToolbarComponent {

  constructor(private googleFontsService: GoogleFontsService) {}

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
}
