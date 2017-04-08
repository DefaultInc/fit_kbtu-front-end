import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-fk-news-card',
  templateUrl: './fk-news-card.component.html',
  styleUrls: ['./fk-news-card.component.css']
})
export class FkNewsCardComponent implements OnInit {
 
  posts: Post[];
  username: string;
  constructor(private postService: PostService) { 
    this.username = JSON.parse(localStorage.getItem('currentUser')).username
  }

  getPosts() {
    this.postService.getPosts().subscribe(
  posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  likedPost(postID: number) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser')).username
    let post = this.posts.find(post => post.id == postID)
    var index = post.likes.indexOf(currentUser, 0);
    if (index > -1) {
      this.postService.postLiked(postID);
      delete post.likes.splice(index, 1);
    } else {
      this.postService.postLiked(postID);
      post.likes.push(currentUser)
    }
  }

}