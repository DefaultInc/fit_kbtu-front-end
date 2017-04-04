import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'fp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  headerImgPath: String

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) { 
    this.headerImgPath = "/assets/header.jpg"
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/github-circle.svg'));
  }

  ngOnInit() {
  }

}
