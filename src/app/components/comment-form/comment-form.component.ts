import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'fp-comment-form',
  templateUrl: './comment-form.component.html',
  //styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  commentForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
