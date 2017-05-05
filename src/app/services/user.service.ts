import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { CommonService } from './CommonService'; 

@Injectable()
export class UserService extends CommonService {

    private userURL = this.apiURL + "/auth/user/";
    public avatarURL = this.apiURL;

    constructor(private http: Http) { super()}
    
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