import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AuthenticationService } from '../../services/authentication.service';

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
  isLoginForm: boolean;
  signupForm: FormGroup;
  
  constructor(
        private authenticationService: AuthenticationService,
        public dialogRef: MdDialogRef<FkLoginComponent>,
        private fb: FormBuilder,
        @Inject(MD_DIALOG_DATA) public data: any) {
            this.createForm()
            this.isLoginForm = data == 'login' ? true : false;
        }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.signupForm.valueChanges
      .subscribe(data => {});
  }
    
  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();  
  }
  
  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.closeDialog();
                },
                error => {
                    this.model.errors = error
                    this.loading = false;
                });
    }

signUp() {
    if (this.signupForm.status == "INVALID") return;
      this.model = this.signupForm.value
      this.loading = true;
      this.authenticationService.signUp(this.model.username, this.model.email, this.model.password)
          .subscribe(
              data => {
                this.login();
                this.closeDialog();
              },
              error => {
                  this.model.errors = error
                  this.loading = false;
              });
  }
}