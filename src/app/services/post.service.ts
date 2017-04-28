import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';

@Injectable()
export class PostService {
  private PostsURL = "http://localhost:8000/posts/";
  private likeURL = "http://localhost:8000/like/";
  constructor(private http: Http) {};

  getPosts(pageNum: number): Observable<Post[]> {
    return this.http.get(this.PostsURL+"?page="+pageNum)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get(this.PostsURL + id.toString()+"/")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  postLiked(id: number) {
    this.http.post(this.likeURL, {"post": id}, this.jwt()).subscribe()
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

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}

