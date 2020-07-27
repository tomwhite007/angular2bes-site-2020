import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MeetupLink } from '../interfaces/meetup-link.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  meetups$: BehaviorSubject<MeetupLink[]> = new BehaviorSubject([]);
  refresh$: Subject<void> = new Subject();

  constructor() {}

  updateMeetups(routes: string[]) {
    const uniqueNum = new Date().getTime();
    const meetups: MeetupLink[] = routes.map((r) => ({
      src: `${environment.rootMarkdownUrl}meetups/${r}.md?cb=${uniqueNum}`,
      id: r.replace('/', ''),
    }));
    this.meetups$.next(meetups);
  }

  refreshMeetups() {
    this.refresh$.next();
  }
}
