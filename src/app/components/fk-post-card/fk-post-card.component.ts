import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-fk-post-card',
  templateUrl: './fk-post-card.component.html',
  styleUrls: ['./fk-post-card.component.css'],
  animations: [ slideInDownAnimation ]

})
export class FkPostCardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  public post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  getPost(id: number) {
    this.postService.getPostById(id).subscribe(
    post => this.post = post);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] as number) {
        this.getPost(params['id']);
      }
    });
  }

}
