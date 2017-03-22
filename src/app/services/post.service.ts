import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';

export let POSTS: Post[] = [
  {id: 11, title: 'Training courses for students from Eurasian National University', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},

    {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
    {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
    {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
    {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
    {id: 11, title: 'Post #1', content: 'Content 1'},
  {id: 12, title: 'Post #2', content: 'Content 2'},
  {id: 13, title: 'Post #3', content: 'Content 3'},
];

@Injectable()
export class PostService {
  private PostsURL = "http://localhost:8000/posts/";

  constructor(private http: Http) {};

  getPosts(): Observable<Post[]> {
    return this.http.get(this.PostsURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [ ];
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

