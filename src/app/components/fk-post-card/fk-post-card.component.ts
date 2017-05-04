import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

import { Post } from '../../models/post';
import { User } from '../../models/user';

import { PostService } from '../../services/post.service';
import { CommentService } from "../../services/comment.service";
import { SharedService } from "../../services/shared.service";


@Component({
  selector: 'app-fk-post-card',
  templateUrl: './fk-post-card.component.html',
  styleUrls: ['./fk-post-card.component.scss'],
  animations: [ slideInDownAnimation ]

})
export class FkPostCardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  public post: Post;
  user: User;

  constructor(
    private postService: PostService, 
    private commentService: CommentService, 
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) { 
    this.user = JSON.parse(localStorage.getItem('currentUser'))
  }

  getPost(id: number) {
    let path = "http://fit.kbtu.kz:8000";
    this.postService.getPostById(id).subscribe(
      post => { 
        this.post = post;
        this.post.isLiked = this.postIsLiked(this.post);
        this.post.image = path + post.image;
    });
  }

  ngOnInit() {
    this.commentService.onCreate.subscribe(comment => {      
      this.post.comments.push(comment);
    });
    this.route.params.subscribe(params => {
      if (params['id'] as number) {
        this.getPost(params['id']);
      }
    });
  }

  postIsLiked(post: Post): boolean {
    if (this.user) {
      return post.likes.find(like => like.author.username==this.user.username) != undefined
    } else {
      return false
    }
  }

  likedPost() {
    var like = this.post.likes.find(like => like.author.username==this.user.username);
    if (like) {
      this.postService.postLiked(this.post.id);
      this.post.likes = this.post.likes.filter(like => like.author.username!=this.user.username);
      this.post.isLiked = false;
    } else {
      this.postService.postLiked(this.post.id);
      this.post.likes.push({'author': this.user})
      this.post.isLiked = true;
    }
  }
  showPostAuthorProfile() {
    this.sharedService.showUserProfile(this.post.author.username)
  }
}
