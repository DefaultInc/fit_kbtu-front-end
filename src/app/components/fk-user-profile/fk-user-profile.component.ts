import { Component, OnInit, Inject } from '@angular/core';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'fp-fk-user-profile',
  templateUrl: './fk-user-profile.component.html',
  styleUrls: ['./fk-user-profile.component.scss']
})
export class FkUserProfileComponent implements OnInit {

  username: string;

  constructor(private userService: UserService,
        public dialogRef: MdDialogRef<FkUserProfileComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) {
          if (!data["isSettings"]) {
            this.username = data["username"]
          } else {
            this.username = null
          }
        }

  ngOnInit() {
  }

}
