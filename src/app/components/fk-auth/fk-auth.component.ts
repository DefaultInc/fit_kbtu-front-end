import { Component, OnInit, Inject } from '@angular/core';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-fk-login',
  templateUrl: './fk-auth.component.html',
  styleUrls: ['./fk-auth.component.css']
})
export class FkLoginComponent implements OnInit {
  
  model: any = {};
  loading = false;
  returnUrl: string;
  focusTab: number;
  isLoginForm: boolean
  
  constructor(
        private authenticationService: AuthenticationService,
        public dialogRef: MdDialogRef<FkLoginComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) {
            this.isLoginForm = data == 'login' ? true : false;
        }
  
    
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
}