import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MeetupLink } from '../shared/interfaces/meetup-link.interface';
import { ActivatedRoute } from '@angular/router';
import { MeetupsService } from '../shared/services/meetups.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import {
  ScrollToService,
  ScrollToConfigOptions,
} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-scroll-view-container',
  templateUrl: './scroll-view-container.component.html',
  styleUrls: ['./scroll-view-container.component.scss'],
})
export class ScrollViewContainerComponent
  implements OnInit, OnDestroy, AfterViewInit {
  meetups: MeetupLink[] = [];

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
  }

  private initParamListener() {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      if (!params.id) {
        return;
      }

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
    });
  }

  private scrollToSection(section: string) {
    const config: ScrollToConfigOptions = {
      target: section,
      offset: -100,
    };

    console.log(section);

    this.scrollToService.scrollTo(config);
  }

  ngOnDestroy() {
    // method required for ngx-take-until-destroy
  }
}
