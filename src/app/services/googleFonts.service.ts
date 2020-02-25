import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { FontModel } from '../models/fontModel';

interface GoogleFontsResponse {
  kind: string;
  items: FontModel[];
}

@Injectable()
export class GoogleFontsService {
  fontsChanged = new BehaviorSubject<FontModel[]>([]);

  private fonts: FontModel[] = [];

  constructor(private http: HttpClient) {}

  fetchFonts() {
    return this.http.get<GoogleFontsResponse>(`https://www.googleapis.com/webfonts/v1/webfonts?key=${ environment.googleFontsApi }`)
      .pipe(
        map(res => res.items.map(e => new FontModel(e))),
        tap(fonts => {
          this.setFonts(fonts);
          this.getFonts();
        })
      );
  }

  setFonts(fonts: FontModel[]) {
    this.fonts = fonts;
    this.fontsChanged.next(this.fonts.slice());
  }

  getFonts(page = 1, counter = 10) {
    this.fontsChanged.next(this.fonts.slice(0, page * counter));
  }

  filterFonts(value: string) {
    const filteredFonts = this.fonts.filter((e: FontModel) => e.family.toLowerCase().indexOf(value) >= 0);
    this.fontsChanged.next(filteredFonts);
  }

  setTextInFonts(value: string, filtered = false) {
    if(filtered) {
      const newFonts = this.fontsChanged.getValue().map(font => { return { ...font, text: value } });
      this.fontsChanged.next(newFonts);
    } else {
      const newFonts = this.fonts.map(font => { return { ...font, text: value } });
      this.setFonts(newFonts);
    }
  }
}
