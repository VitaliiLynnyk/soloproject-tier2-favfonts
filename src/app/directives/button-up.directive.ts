import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appButtonUpDir]'
})
export class ButtonUpDirective {
  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunction();
  }

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  scrollFunction() {
    const scrolled = this.doc.documentElement.scrollTop;
    if (scrolled > 150) {
      this.el.nativeElement.style.display = 'block';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
