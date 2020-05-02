import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../shared/services/meetups.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showMenu = false;
  burgerExpanded = false;
  showRefreshMarkdownLink = !environment.production;

  constructor(private meetupsService: MeetupsService) {}

  ngOnInit(): void {}

  showHideDropDown(open: boolean) {
    this.showMenu = open;
    this.burgerExpanded = open;
  }

  expandBurger() {
    this.burgerExpanded = !this.burgerExpanded;
  }

  overlayClicked() {
    this.showHideDropDown(false);
    this.burgerExpanded = false;
  }

  refreshMeetups() {
    this.meetupsService.refreshMeetups();
    this.showHideDropDown(false);
  }
}
