import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MeetupLink } from '../interfaces/meetup-link.interface';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  meetups$: BehaviorSubject<MeetupLink[]> = new BehaviorSubject([]);

  constructor() {}

  updateMeetups(routes: string[]) {
    const meetups: MeetupLink[] = routes.map((r) => ({
      src: `/assets/markdown/meetups/${r}.md`,
      id: r.replace('/', ''),
    }));
    this.meetups$.next(meetups);
  }
}
