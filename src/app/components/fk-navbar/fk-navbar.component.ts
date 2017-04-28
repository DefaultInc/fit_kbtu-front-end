import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MdDialog } from '@angular/material';
import { FkLoginComponent } from '../fk-auth/fk-auth.component';
import { AuthenticationService } from '../../services/authentication.service'
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-fk-navbar',
  templateUrl: './fk-navbar.component.html',
  styleUrls: ['./fk-navbar.component.css']
})
export class FkNavbarComponent implements OnInit {

  menuToggled: Boolean = true;
  navigationPathDisplayString: String[];
  navigationPath: String[];
  username: String;

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  constructor(public dialog: MdDialog, router:Router, public authService: AuthenticationService,
              private sharedService: SharedService) { 
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

    if (this.authService.isLoggedIn()) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser.username
    }
  });

  }

  ngOnInit() {
    console.log(this.loggedIn());
  }

  openLoginDialog() {
    this.dialog.open(FkLoginComponent, {
      data: 'login'
    });
  }
   
  openSignupDialog() {
    this.dialog.open(FkLoginComponent, {
      data: 'signup'
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.sharedService.toggleSidenav();
  }

}
