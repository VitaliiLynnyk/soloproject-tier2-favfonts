import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

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
    @Inject(DOCUMENT) private doc
  ) {}

  ngOnInit() {
    this.addFontFamily(this.fontFamilyName);
    this.addLink(this.fontFamilyUrl);
  }

  private addFontFamily(fontFamily) {
    this.el.nativeElement.style.fontFamily = fontFamily;
  }

  private addLink(url) {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', url);
    this.doc.head.appendChild(link);
  }

  private removeLink(url) {
    this.doc.header.querySelector(`link[href="${url}"]`).remove();
  }

  ngOnDestroy() {
    this.removeLink(this.fontFamilyUrl);
  }
}
