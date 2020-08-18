import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MeetupLink } from '../_shared/interfaces/meetup-link.interface';
import { ActivatedRoute } from '@angular/router';
import { MeetupsService } from '../_shared/services/meetups.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import {
  ScrollToService,
  ScrollToConfigOptions,
} from '@nicky-lenaers/ngx-scroll-to';

@UntilDestroy()
@Component({
  selector: 'app-scroll-view-container',
  templateUrl: './scroll-view-container.component.html',
  styleUrls: ['./scroll-view-container.component.scss'],
})
export class ScrollViewContainerComponent
  implements OnInit, OnDestroy, AfterViewInit {
  meetups: MeetupLink[] = [];
  showMeetups = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private meetupsService: MeetupsService,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollToService.scrollTo({ offset: -200 });

    this.meetupsService.meetups$
      .pipe(
        untilDestroyed(this),
        filter((m) => m.length > 0)
      )
      .subscribe((m) => {
        this.meetups = m;
        setTimeout(() => {
          this.initParamListener();
        }, 500);
      });

    this.meetupsService.refresh$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showMeetups = false;
      setTimeout(() => {
        this.showMeetups = true;
      }, 500);
    });
  }

  private initParamListener() {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      if (!params.id) {
        return;
      }

      this.gtm(params.id);

      switch (params.id) {
        case 'home':
        case 'about':
        case 'contact':
          this.scrollToSection(params.id);
          break;

        default:
          if (this.meetups.map((m) => m.id).includes(params.id)) {
            this.scrollToSection(params.id);
          } else {
            this.location.back();
          }
      }

      setTimeout(() => {
        console.log('test', params.id);
        const test = document.getElementById(params.id);
        console.log(test.scrollHeight, test.scrollTop);
      }, 5000);
    });
  }

  private gtm(page: string) {
    const data = {
      event: 'app.pageview',
      pagename: page,
    };
    (window as any).dataLayer.push(data);
  }

  private scrollToSection(section: string) {
    const config: ScrollToConfigOptions = {
      target: section,
      offset: 50,
    };

    console.log(section);

    this.scrollToService.scrollTo(config);
  }

  ngOnDestroy() {
    // method required for ngx-take-until-destroy
  }
}
