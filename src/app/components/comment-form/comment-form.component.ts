import { IComment } from "../../models/comment";
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentService } from "../../services/comment.service";
import { Post } from "../../models/post";
import { User } from "../../models/user";


@Component({
  selector: 'fp-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() commentForm:FormGroup;
  @Input() post: number;
  public currentUser;
  constructor(private fb: FormBuilder, private commentService: CommentService) { }

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
    this.commentForm.reset();
    const comment: IComment = {    
      author: this.currentUser.username,
      content: form.content,
      publish_date: new Date().toDateString(),
      post: this.post
    };    
    this.commentService.create(comment);
  }
}