import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appCardDirective]'
})
export class CardDirective implements OnInit, OnDestroy {
  @Input()
  fontFamilyName: string;

  @Input()
  fontFamilyUrl: string;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.addFontFamily(this.fontFamilyName);
    this.addLink(this.fontFamilyUrl);
  }

  private addFontFamily(fontFamily) {
    this.el.nativeElement.style.fontFamily = fontFamily;
  }

  private addLink(url) {
    if (!this.doc.head.querySelector(`link[href="${ url }"]`)) {
      let link: HTMLLinkElement = this.doc.createElement('link');
      link.setAttribute('href', url);
      this.doc.head.appendChild(link);
    }
  }

  private removeLink(url) {
    const link = this.doc.head.querySelector(`link[href="${ url }"]`);
    if (link) link.remove();
  }

  ngOnDestroy() {
    this.removeLink(this.fontFamilyUrl);
  }
}
