import { Component, OnInit, Input } from '@angular/core';
import { IComment } from "../../models/comment";

@Component({
  selector: 'fp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: IComment;

  constructor() { }  

  ngOnInit() {
  }

}
