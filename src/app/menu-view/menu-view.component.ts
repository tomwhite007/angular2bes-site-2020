import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MeetupsService } from '../shared/services/meetups.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss'],
})
export class MenuViewComponent implements OnInit {
  @Output() menuItemClick = new EventEmitter();
  titles: string[];
  routes: string[];
  constructor(
    private markdownService: MarkdownService,
    private meetupService: MeetupsService
  ) {}

  ngOnInit(): void {
    this.markdownService
      .getSource('./assets/markdown/menu.md')
      .subscribe((res) => {
        const titlesBracketed = res.match(/\[.*\]/g);
        this.titles = titlesBracketed.map((t) => t.replace(/\[|\]/g, ''));
        const routesBracketed = res.match(/\(.*\)/g);
        this.routes = routesBracketed.map((r) => r.replace(/\(|\)/g, ''));

        this.meetupService.updateMeetups(this.routes);
      });
  }

  itemClick() {
    this.menuItemClick.emit('test');
  }
}
