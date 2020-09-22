# Testing with Cypress & the Reactive & Performant "View Model" design

## Meetup September 09, 2020

### Speakers: Tom White & Max Mumford

<p>&nbsp;</p>

Here's a Link to the [YouTube video](https://www.youtube.com/watch?v=JdKkw3hlR6Y) of this meetup

### Integration testing with Cypress

Cypress is the default selection when you create a new Nrwl Nx workspace with a new app in it. Other alternatives like Protractor can be manually selected during this process.

See [Nrwl Nx 7.0: Better E2E testing with Cypress](https://blog.nrwl.io/nrwl-nx-7-0-better-e2e-testing-with-cypress-1b88336bef5e)

<p>&nbsp;</p>
Add a separate Cypress e2e project inside your Nrwl Nx workspace:

```
ng generate @nrwl/cypress:cypress-project
```

This can allow you to create a second e2e project for your existing app.

<p>&nbsp;</p>
Generate an app paired with a Cypress e2e project inside a workspace configured for Protractor:

```
ng generate application myApp --e2e-test-runner=cypress
```

<p>&nbsp;</p>

_Gotchas_

- [Page errors](https://github.com/cypress-io/cypress/issues/7915#issuecomment-655743195) stop tests passing
- `wait(route alias)` creates less issues than `wait(time)`
- Macs [can’t run tests on Electron](https://crbug.com/882238) when they’re complex
- Cypress is supposed to wait until a page hydrates, but sometimes Angular dom composition delays can cause a problem and you need to use `wait(time)`. Just use sparingly.

Demo app: https://github.com/tomwhite007/angular2bes-site-2020

<p>&nbsp;</p>

### The View Model pattern: Simplifying Component State and Improving Performance

How to leverage the View Model pattern and OnPush change detection in Angular

[Link to view Slide Deck](https://docs.google.com/presentation/d/19yaH2MkoLnpHNj6pzhrc5HuvseIRh1D4DXblOP_HQuI/edit?usp=sharing)

Demo app: https://github.com/maxmumford/view-model-angular

#### Summary of the View Model pattern

_Inside the Component_

```Javascript
vm$: Observable<VM>; // where VM is an object containing all your data to display in the template
```

_Inside the Template_

```Javascript
<ng-container *ngIf="vm$ | async as vm">
... rest of the template markup ...
</ng-container>
```

Using this pattern means even your top-most 'smart' container components can take advantage of OnPush change detection without you needing to worry about calling manually to `ChangeDetectorRef` `detectChanges()`
