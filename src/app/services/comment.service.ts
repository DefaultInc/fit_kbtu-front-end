import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IComment } from "../models/comment";

@Injectable()
export class CommentService {
    
    constructor(private http: Http) { }
 
    create(comment: IComment) {
        console.log("Submitted");
        return this.http.post('http://127.0.0.1:8000/comments/', comment, this.jwt()).map((response: Response) => response.json());
    }
 
    update(comment: IComment) {
        return this.http.put('http://127.0.0.1:8000/comments/' + comment.id, comment, this.jwt()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('http://127.0.0.1:8000/comments/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    private jwt() {        
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
