import { Component, Input } from '@angular/core';

import { FontModel } from "../../../models/fontModel";

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  @Input()
  font: FontModel;

  @Input()
  fontUrl: string;
}
