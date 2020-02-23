import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { FontModel } from '../models/fontModel';

interface GoogleFontsResponse {
  kind: string;
  items: FontModel[];
}

@Injectable()
export class GoogleFontsService {
  fontsChanged = new Subject<FontModel[]>();

  private fonts: FontModel[] = [];

  constructor(private http: HttpClient) {}

  fetchFonts() {
    return this.http.get<GoogleFontsResponse>(`https://www.googleapis.com/webfonts/v1/webfonts?key=${ environment.googleFontsApi }`)
      .pipe(
        map(res => res.items.map(e => new FontModel(e))),
        tap(fonts => this.setFonts(fonts))
      );
  }

  setFonts(fonts: FontModel[]) {
    this.fonts = fonts;
    this.fontsChanged.next(this.fonts.slice());
  }

  getFonts(pageNumber = 1, counter = 10): FontModel[] {
    return this.fonts.slice(0, pageNumber * counter);
  }

  getAllFonts(): FontModel[] {
    return this.fonts.slice();
  }
}
