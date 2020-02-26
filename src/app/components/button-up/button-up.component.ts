import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-btn-up',
  templateUrl: './button-up.html',
  styleUrls: [ './button-up.scss' ]
})
export class ButtonUpComponent {

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  scrollToTop() {
    this.doc.body.scrollTop = 0; // For Safari
    this.doc.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
