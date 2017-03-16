import { Post } from '../models/post';

import { Injectable } from '@angular/core';

export let POSTS: Post[] = [
  {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
];

@Injectable()
export class PostService {
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
}

