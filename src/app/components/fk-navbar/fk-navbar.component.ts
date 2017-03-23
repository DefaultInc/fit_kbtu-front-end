import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MdDialog } from '@angular/material';
import { FkLoginComponent, FkSignupComponent } from '../fk-auth/fk-auth.component';

@Component({
  selector: 'app-fk-navbar',
  templateUrl: './fk-navbar.component.html',
  styleUrls: ['./fk-navbar.component.css']
})
export class FkNavbarComponent implements OnInit {

  @Output() toggleMenuButton = new EventEmitter();
  navigationPathDisplayString: String[];
  navigationPath: String[];

  constructor(public dialog: MdDialog, router:Router) { 
    router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
      this.navigationPath = event.url.split("/").filter(url => url.length > 0);
      this.navigationPathDisplayString = this.navigationPath.map(url => url.charAt(0).toUpperCase() + url.slice(1));
      if (this.navigationPath.length > 0) {
        this.navigationPath[0] = '/' + this.navigationPath[0];
        for (var i = 1; i < this.navigationPath.length; i++) {
          this.navigationPath[i] = this.navigationPath[i - 1] + '/' + this.navigationPath[i];
        }
      }
    }
  });
  }

  ngOnInit() {
  }

  openLoginDialog() {
    this.dialog.open(FkLoginComponent);
  }
   
  openSignupDialog() {
    this.dialog.open(FkSignupComponent);
  }

  toggleMenu() {
    this.toggleMenuButton.emit();
  }

}
