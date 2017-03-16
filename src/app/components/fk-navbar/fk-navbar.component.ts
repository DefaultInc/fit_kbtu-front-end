import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FkLoginComponent, FkSignupComponent } from '../fk-auth/fk-auth.component';

@Component({
  selector: 'app-fk-navbar',
  templateUrl: './fk-navbar.component.html',
  styleUrls: ['./fk-navbar.component.css']
})
export class FkNavbarComponent implements OnInit {

  @Output() toggleMenuButton = new EventEmitter();

  constructor(public dialog: MdDialog) { }

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
