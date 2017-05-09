import { Component, OnInit, Inject } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'fp-fk-user-profile',
  templateUrl: './fk-user-profile.component.html',
  styleUrls: ['./fk-user-profile.component.scss']
})
export class FkUserProfileComponent implements OnInit {

  user: User;
  urlToUpload: string;
  isSettings: boolean;
  avatarURL: string;
  fullName: string;

  loading: boolean = false;
  src: string = "";
  resizeOptions: ResizeOptions = {
      resizeMaxHeight: 512,
      resizeMaxWidth: 512,
      resizeQuality: 1.0
  };

  constructor(private userService: UserService,
        public dialogRef: MdDialogRef<FkUserProfileComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) {
          this.isSettings = data["isSettings"]
          this.user = data["user"] || new User()
          var userRequest;
          if (this.isSettings || !this.user.id) {
            userRequest = this.userService.getCurrentUser()
          } else {
            userRequest = this.userService.getById(this.user.id)
          }
          
          userRequest.subscribe( userProfile => {
              this.user = userProfile
              if (userProfile.avatar) this.avatarURL = this.userService.avatarURL + this.user.avatar
              if (userProfile.first_name || userProfile.last_name) 
                this.fullName = (userProfile.first_name||"") + " " + (userProfile.last_name||"")
          })
        }

  ngOnInit() {
  }

  imageChanged(imageResult: ImageResult) {
      this.src = imageResult.resized
          && imageResult.resized.dataURL
          || imageResult.dataURL;
      this.user.avatar = this.src;
      this.avatarURL = null;      
  }

  updateUserProfile() {
    this.loading = true;
    if (this.avatarURL) delete this.user.avatar;
    this.userService.update(this.user).subscribe(data => {
      this.dialogRef.close(); 
    },
    error => {
      this.loading = false;
    });
  }

}
