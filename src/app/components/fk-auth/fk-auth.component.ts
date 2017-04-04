import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-fk-login',
  templateUrl: './fk-login.component.html',
  styleUrls: ['./fk-auth.component.css']
})
export class FkLoginComponent implements OnInit {
  
  model: any = {};
  loading = false;
  returnUrl: string;
  
  constructor(
        private authenticationService: AuthenticationService,
        public dialogRef: MdDialogRef<FkLoginComponent>) { }
  
    
  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();  
  }
  
  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.closeDialog();
                },
                error => {
                    this.loading = false;
                });
    }
}

@Component({
  selector: 'app-fk-signup',
  templateUrl: './fk-signup.component.html',
  styleUrls: ['./fk-auth.component.css']
})
export class FkSignupComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService,
              public dialogRef: MdDialogRef<FkSignupComponent>) { }
  
  closeDialog() {
    this.dialogRef.close();  
  }
  
  signUp() {
      this.loading = true;
      this.authenticationService.signUp(this.model.username, this.model.password)
          .subscribe(
              data => {
                this.login();
                this.closeDialog();
              },
              error => {
                  this.loading = false;
              });
  }

  private login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
              },
              error => {
                  this.loading = false;
              });
  }

  ngOnInit() {
  }

}