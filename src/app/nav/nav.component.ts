import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showMenu = false;
  burgerExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  showHideDropDown(open: boolean) {
    this.showMenu = open;
  }

  expandBurger() {
    this.burgerExpanded = !this.burgerExpanded;
  }

  overlayClicked() {
    this.showHideDropDown(false);
    this.burgerExpanded = false;
  }
}
