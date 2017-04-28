import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-fk-news-card',
  templateUrl: './fk-news-card.component.html',
  styleUrls: ['./fk-news-card.component.css'],
})
export class FkNewsCardComponent implements OnInit {
 
  posts: Post[];
  user: User;
  constructor(private postService: PostService) { 
    this.user = JSON.parse(localStorage.getItem('currentUser'))
  }

  getPosts() {
    this.postService.getPosts().subscribe(
    posts => {
      this.posts = posts;
      this.posts.forEach(post => post.isLiked = this.postIsLiked(post));
    })
  }

  ngOnInit() {
    this.getPosts();
  }

  postIsLiked(post: Post): boolean {
    if (!this.user) return false;
    return post.likes.find(like => like.author.username==this.user.username) != undefined
  }

  likedPost(postID: number) {
    if (!this.user) return;
    var post = this.posts.find(post => post.id == postID)
    var like = post.likes.find(like => like.author.username==this.user.username);
    if (like) {
      this.postService.postLiked(postID);
      post.likes = post.likes.filter(like => like.author.username!=this.user.username);
      post.isLiked = false;
    } else {
      this.postService.postLiked(postID);
      post.likes.push({'author': this.user})
      post.isLiked = true;
    }
  }

}