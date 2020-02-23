import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  constructor(private googleFontsService: GoogleFontsService) {}

  searchFont(event) {
    const { target: { value } } = event;

    if (value) {
      this.scrollingChange.emit(false);
      this.googleFontsService.filterFonts(value);
    } else {
      this.scrollingChange.emit(true);
      this.googleFontsService.getAllFonts();
    }
  }
}
