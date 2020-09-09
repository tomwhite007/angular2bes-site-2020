# Testing with Cypress & the Reactive & Performant "View Model" design

## Meetup September 09, 2020

### Speakers: Tom White & Max Mumford

<p>&nbsp;</p>

**_More notes will appear here after the meetup_**

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

### Simplifying Component State and Improving Performance

How to leverage the View Model pattern and OnPush change detection in Angular

[Link to view Slide Deck](https://docs.google.com/presentation/d/19yaH2MkoLnpHNj6pzhrc5HuvseIRh1D4DXblOP_HQuI/edit?usp=sharing)
