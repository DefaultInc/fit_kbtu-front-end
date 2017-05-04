import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    private emitShowProfileAction = new Subject<any>();
    // Observable string streams
    sidenavToggled$ = this.emitChangeSource.asObservable();
    showProfile$ = this.emitShowProfileAction.asObservable();
    // Service message commands
    toggleSidenav() {
        this.emitChangeSource.next();
    }

    showUserProfile(username: string) {
        this.emitShowProfileAction.next(username)
    }
}