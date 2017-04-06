
import { IComment } from "../../models/comment";
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'fp-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() commentForm:FormGroup;
  public currentUser;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.BuildForm();    
  }
  private BuildForm() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    
    this.commentForm = this.fb.group({
      content: ''
    });
  }

  onSubmit() {
    const form = this.commentForm.value;
    const comment: IComment = {    
      author: this.currentUser.email,
      content: form.content,
      publish_date: new Date().toDateString()
    }
}
