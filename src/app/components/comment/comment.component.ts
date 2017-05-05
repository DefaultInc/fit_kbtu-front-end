import { Component, OnInit, Input } from '@angular/core';
import { IComment } from "../../models/comment";
import { SharedService } from "../../services/shared.service";
import { User} from '../../models/user';

@Component({
  selector: 'fp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: IComment;

  constructor(private sharedService: SharedService) { }  

  ngOnInit() {
  }

  showCommentAuthorProfile(comment) {
    this.sharedService.showUserProfile(this.comment.author)
  }

}
