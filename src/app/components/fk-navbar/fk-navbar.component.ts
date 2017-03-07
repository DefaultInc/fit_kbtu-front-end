import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fk-navbar',
  templateUrl: './fk-navbar.component.html',
  styleUrls: ['./fk-navbar.component.css']
})
export class FkNavbarComponent implements OnInit {

  @Output() toggleMenuButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggleMenuButton.emit();
  }

}
