# Structuring Angular Apps

## Meetup June 27, 2018

### Speaker: Tom White

­

## Project

In most cases, use the Angular CLI [https://cli.angular.io/](https://cli.angular.io/)

If using the Angular CLI, utilize 'ng update' when possible

Follow the Angular Style Guide [https://angular.io/guide/styleguide](https://angular.io/guide/styleguide)

Visual Studio Code is the recommended IDE

Use Prettier, code formatter

Use Move TS to simplify refactoring: [https://marketplace.visualstudio.com/items?itemName=stringham.move-ts](https://marketplace.visualstudio.com/items?itemName=stringham.move-ts)

Use John Papa’s Angular Essentials: [https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

Consider folder structure: [https://johnpapa.net/angular-2-styles/](https://johnpapa.net/angular-2-styles/)

Review your project output with source map explorer [https://www.npmjs.com/package/source-map-explorer](https://www.npmjs.com/package/source-map-explorer)

## Angular

Utilize Component Architecture and Feature Modules.

Lazy load resources whenever possible

Smart / Container Components : Communicate with Services and render child components  
Dumb / Presentation Components: Accepts data via inputs Emit data change via event outputs

Data flows down and Events emit up.   
One-way dataflow promotes reusable components and can increase performance

Make use of TypeScripts advanced features when possible. ES6 and ES7 commands means less code, and clearer intent.

Avoid doing much in the constructor of a component. Utilize the lifetime hooks e.g. ngOnInit

Use trackBy option for \*ngFor directive - “Angular 2 — Improve performance with trackBy” [https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5](https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5)

Recommended Virtual Scroll component: [https://github.com/rintoj/angular2-virtual-scroll](https://github.com/rintoj/angular2-virtual-scroll)

Wildcard routes for 404 handling

Use Environment Variables when you have to change values for dev or prod

## RxJS

Use Async Pipe as much as possible - it reduces boilerplate. But if you can't, remember to unsubscribe any observables that can still be running in ngOnDestroy

ShareReplay() - [https://blog.strongbrew.io/rxjs-best-practices-in-angular/](https://blog.strongbrew.io/rxjs-best-practices-in-angular/)

Gotcha: multiple Async pipes for the same API request will call the API multiple times

Use the pipe() method in RxJS 6.0 (started in 5.5 but got better in 6)

## Enterprise

Nrwl Nx for larger apps or, if you want to reuse chunks of code. [https://nrwl.io/nx](https://nrwl.io/nx)

## State Management

Ngrx is currently the recommend library for application state management. Keep an eye on Mobx.

Deborah Kurata Pluralsight - [https://www.pluralsight.com/courses/angular-ngrx-getting-started](https://www.pluralsight.com/courses/angular-ngrx-getting-started)
