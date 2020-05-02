import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MeetupsService } from 'src/app/shared/services/meetups.service';
import { MeetupLink } from 'src/app/shared/interfaces/meetup-link.interface';

@Component({
  selector: 'app-meetup-view',
  templateUrl: './meetup-view.component.html',
  styleUrls: ['./meetup-view.component.scss'],
})
export class MeetupViewComponent implements OnInit, OnDestroy {
  meetups: MeetupLink[] = [];

  constructor(private meetupsService: MeetupsService) {}

  ngOnInit() {
    this.meetupsService.meetups$
      .pipe(untilDestroyed(this))
      .subscribe((m) => (this.meetups = m));
  }

  ngOnDestroy() {
    // method required for ngx-take-until-destroy
  }
}
