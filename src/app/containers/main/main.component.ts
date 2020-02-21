import { Component, OnInit } from '@angular/core';

import { GoogleFontsService } from "../../services/googleFonts.service";

import { FontModel } from "../../interfaces/fontModel";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent implements OnInit {
  fonts: FontModel[] = [];

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.fetchFonts();
  }

  private fetchFonts() {
    this.googleFontsService.fetchFonts().subscribe(fonts => this.fonts = fonts.slice(0, 10));
  }
}
