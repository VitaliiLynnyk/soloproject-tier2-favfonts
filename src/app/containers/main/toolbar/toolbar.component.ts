import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FontModel } from "../../../models/fontModel";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class ToolbarComponent implements OnInit {
  // @Output()
  // fontsChange = new EventEmitter<FontModel[]>();

  @Input()
  fonts: FontModel[];

  ngOnInit() {
  }
}
