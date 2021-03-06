import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { CommonService } from './CommonService'; 

@Injectable()
export class AuthenticationService extends CommonService {
    public token: string;
    private loginURL = this.apiURL + "/auth/login/"
    private signupURL = this.apiURL + "/auth/register/"

    constructor(private http: Http) {
        super()
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedIn(): Boolean {
        // TODO(nurlashko): Add check and token refresh if needed
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return true
        } else {
            return false
        }
    }

    login(username: string, email: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.loginURL, JSON.stringify({ username: username, email: email, password: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ token: token, username: username}));
                    location.reload();
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    signUp(username: string, email: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.signupURL, JSON.stringify({ username: username, email: email, password: password }), options)
            .map((response: Response) => {
                if (response.status === 201) {
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }); 
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        location.reload();
    }
}
