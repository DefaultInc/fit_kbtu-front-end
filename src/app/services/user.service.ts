import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {

    private userURL = "http://localhost:8000/auth/user/";
    public avatarURL = "http://localhost:8000"

    constructor(private http: Http) { }
    
    getCurrentUser() {
        return this.http.get(this.userURL, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.userURL + id, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.userURL, user, this.jwt()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token});
            return new RequestOptions({ headers: headers, });
        }
    }
}