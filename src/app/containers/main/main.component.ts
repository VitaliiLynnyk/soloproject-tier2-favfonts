import { Component, OnInit } from '@angular/core';

import { GoogleFontsService } from "../../services/googleFonts.service";

import { FontModel } from "../../models/fontModel";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent implements OnInit {
  fonts: FontModel[] = [];
  pageNumber = 1;

  constructor(private googleFontsService: GoogleFontsService) {}

  ngOnInit() {
    this.fetchFonts();
  }

  onScrollDown() {
    this.pageNumber++;
  }

  getFonts(pageNum = 1) {
    return this.fonts.slice(0, pageNum * 10);
  }

  private fetchFonts() {
    this.googleFontsService.fetchFonts().subscribe(fonts => this.fonts = fonts);
  }
}
