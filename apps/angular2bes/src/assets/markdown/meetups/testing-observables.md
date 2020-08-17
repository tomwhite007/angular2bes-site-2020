# Angular Unit Testing Observables, Jest VS Jasmine, and Server Side Rendering

## Meetup September 18, 2019

### Speakers: Tom White & Max Mumford

## SSR

[https://alligator.io/angular/route-resolvers/](https://alligator.io/angular/route-resolvers/)

## Unit Testing Observables

### Unit Testing with Jasmine

Example unit test:

[https://jasmine.github.io/2.1/introduction](https://jasmine.github.io/2.1/introduction)

### Marbles Testing

[Marbles Testing presentation](https://docs.google.com/presentation/d/1aQm8S-w05Lv-UA9M-tELnBO5-QyMLoOkwu0tRF6gMqw/edit?usp=sharing)

### Marbles Testing Documentation

[Github Jasmine Marbles](https://github.com/synapse-wireless-labs/jasmine-marbles)

[Rxjs reference docs - Marbles Testing](https://rxjs-dev.firebaseapp.com/guide/overview)

[Github repo for Rxjs docs - Marbles Testing](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md)

[Github Jest Marbles](https://github.com/just-jeb/jest-marbles)

### Demo Repos

[https://github.com/tomwhite007/MarblesTesting](https://github.com/tomwhite007/MarblesTesting) - Jest

[https://github.com/tomwhite007/MarblesTestingJasmine](https://github.com/tomwhite007/MarblesTestingJasmine) - Jasmine

Note: this is not a full copy of the Jest repo. Only the tests for the Ngrx Effects are duplicated.

### Scaffolding with Nrwl Nx

Nrwl Nx version 8.5

[Nrwl Nx - Getting Started](https://nx.dev/angular/getting-started/getting-started) (create workspace and app)

npm init nx-workspace _myworkspace_

? What to create in the new workspace empty       \[an empty workspace\]

? CLI to power the Nx workspace       Angular CLI  \[Extensible CLI for Angular  applications. Recommended for Angular projects.\]

npm install --save-dev @nrwl/angular

[Issue raised: Dropped support for Karma and Jasmine](https://github.com/nrwl/nx/issues/1572)

ng g @nrwl/angular:app myapp --unit-test-runner=karma

Angular Console - generate - Ngrx feature

### Migrating to Jest

[https://jestjs.io/docs/en/migration-guide](https://jestjs.io/docs/en/migration-guide)

[https://fuhton.com/Migrating-from-Jasmine-to-Jest/](https://fuhton.com/Migrating-from-Jasmine-to-Jest/)

[https://medium.com/@hello_62448/moving-from-karma-jasmine-to-jest-cc32cc474a7f](https://medium.com/@hello_62448/moving-from-karma-jasmine-to-jest-cc32cc474a7f)

### Shouts

Mockito - [https://www.npmjs.com/package/ts-mockito](https://www.npmjs.com/package/ts-mockito)

Angular Weekly - [http://www.angular-weekly.com/](http://www.angular-weekly.com/)
