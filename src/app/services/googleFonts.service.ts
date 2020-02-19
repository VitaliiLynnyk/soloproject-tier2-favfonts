import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

import { FontModel } from "../interfaces/fontModel";

interface GoogleFontsResponse {
  kind: string;
  items: FontModel[];
}

@Injectable()
export class GoogleFontsService {
  constructor(private http: HttpClient) {}

  fetchFonts() {
    return this.http.get<GoogleFontsResponse>(`https://www.googleapis.com/webfonts/v1/webfonts?key=${environment.googleFontsApi}`)
      .pipe(
        map(res => res.items.map(e => new FontModel(e)))
      );
  }
}
