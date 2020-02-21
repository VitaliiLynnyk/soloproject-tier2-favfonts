import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: '[appCardDirective]'
})
export class CardDirective implements OnInit {
  @Input()
  fontFamily: string;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private doc
  ) {}

  ngOnInit() {
    this.addFontFamily(this.fontFamily);
    this.addLink(`https://fonts.googleapis.com/css?family=${this.fontFamily}&display=swap`);
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
}
