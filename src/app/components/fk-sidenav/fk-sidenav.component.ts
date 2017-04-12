import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-fk-sidenav',
  templateUrl: './fk-sidenav.component.html',
  styleUrls: ['./fk-sidenav.component.css']
})
export class FkSidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  
  constructor(private _sharedService: SharedService) { 
    _sharedService.sidenavToggled$.subscribe(
        text => {
            this.sidenav.toggle();
        });
  }

  ngOnInit() {
  }

}
