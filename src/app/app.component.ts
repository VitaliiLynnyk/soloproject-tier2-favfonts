import { Component, OnInit } from '@angular/core';

import { GoogleFontsService } from "./services/googleFonts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: [ './app.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.googleFontsService.fetchFonts().subscribe();
  }
}
