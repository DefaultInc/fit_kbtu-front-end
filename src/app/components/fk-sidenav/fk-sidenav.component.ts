import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { NavigationStart, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-fk-sidenav',
  templateUrl: './fk-sidenav.component.html',
  styleUrls: ['./fk-sidenav.component.css']
})
export class FkSidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  isDiscussion: boolean;

  constructor(private _sharedService: SharedService,
              private router: Router) { 
    _sharedService.sidenavToggled$.subscribe(
        text => {
            this.sidenav.toggle();
        });

       router.events.subscribe(event => { 
         console.log(event)
         if (event instanceof NavigationStart) {
           this.isDiscussion = (event.url == "/discussions")
         }
       })
  }

  ngOnInit() {
  }

}
