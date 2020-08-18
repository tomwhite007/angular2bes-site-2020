import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MeetupLink } from '../../_shared/interfaces/meetup-link.interface';
import { MeetupsService } from '../../_shared/services/meetups.service';

@UntilDestroy()
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
