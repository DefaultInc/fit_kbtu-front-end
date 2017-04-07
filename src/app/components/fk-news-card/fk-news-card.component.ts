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
  constructor(private postService: PostService) { }

  getPosts() {
    this.postService.getPosts().subscribe(
  posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}
