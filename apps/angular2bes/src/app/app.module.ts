import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuViewComponent } from './nav/menu-view/menu-view.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './scroll-view-container/home/home.component';
import { ScrollViewContainerComponent } from './scroll-view-container/scroll-view-container.component';
import { MeetupViewComponent } from './scroll-view-container/meetup-view/meetup-view.component';
import { AboutComponent } from './scroll-view-container/about/about.component';
import { ContactComponent } from './scroll-view-container/contact/contact.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MenuViewComponent,
    FooterComponent,
    ScrollViewContainerComponent,
    MeetupViewComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
