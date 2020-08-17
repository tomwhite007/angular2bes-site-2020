# New Year Angular Meetup

## Meetup January 16, 2019

### Speaker: Tom White

## Angular service worker

[https://angular.io/guide/service-worker-intro](https://angular.io/guide/service-worker-intro)

ng add @angular/pwa --project _\*project-name\*_

ng build --prod

## Jasmine

describe ( it( ) )

fit( ) - only this one

xit( ) - exclude

(done) => {  
done();  
}

async (done) => {  
await...  
done();  
}

spyOn( (<any>_class_), _‘privateMethod’_)

spyOn( _ClassThatGetsNewedInsideYourMethod_.prototype, _'methodName'_ )

serviceSpy = jasmine.createSpyObj(serviceName, \[ 'stubbedMethod1', 'stubbedMethod2' \]);

A fix to my previously failed service mocking demo:

[https://github.com/tomwhite007/JasmineMock/blob/master/src/app/app.component.spec.ts](https://github.com/tomwhite007/JasmineMock/blob/master/src/app/app.component.spec.ts)

observableSpy = jasmine.createSpyObj('anotherService', \[ 'methodReturnsObservable' \]);

observableSpy.methodReturnsObservable.and.returnValue({  
subscribe: () => {},  
});

## Nrwl Nx

[https://nrwl.io/nx](https://nrwl.io/nx)

ng g app _new-app-inside-workspace_

? In which directory should the application be generated?

? Would you like to add Angular routing? Yes

? Which Unit Test Runner would you like to use for the application? Karma \[ https://karma-runner.github.io \]

? Which E2E Test Runner would you like to use for the application? Protractor \[ https://www.protractortest.org \]

? Which tags would you like to add to the application? (used for linting)

## Material Theming

[https://material.angular.io/guide/theming](https://material.angular.io/guide/theming)

## SCSS

[https://tutorialzine.com/2016/01/learn-sass-in-15-minutes](https://tutorialzine.com/2016/01/learn-sass-in-15-minutes)

[http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)

## Training

[https://www.udemy.com/the-complete-guide-to-angular-2/](https://www.udemy.com/the-complete-guide-to-angular-2/)

[https://www.udemy.com/build-an-app-with-aspnet-core-and-angular-from-scratch/](https://www.udemy.com/build-an-app-with-aspnet-core-and-angular-from-scratch/)

Net Ninja: [https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

MPJ on Javascript: [https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)

Thenewboston Angular FREE: [https://www.youtube.com/watch?v=hXfigUyeHaY](https://www.youtube.com/watch?v=hXfigUyeHaY)

## State Management with Akita

[https://blog.angularindepth.com/state-management-in-angular-using-akita-82f117d282dd](https://blog.angularindepth.com/state-management-in-angular-using-akita-82f117d282dd)

## State Management with Ngrx

[https://ngrx.io/](https://ngrx.io/)

Two nerds don’t make a right
