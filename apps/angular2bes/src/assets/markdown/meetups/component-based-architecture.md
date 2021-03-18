# Component Based Architecture for Efficiency and Simplicity

## Meetup March 17, 2021

### Speakers: Max Mumford, Tom White and Dhaval Vaghani

<p>&nbsp;</p>

Here's a Link to the [YouTube video](https://youtu.be/nHYFqLi3Oe8) of this meetup

<p>&nbsp;</p>

### Component Based Architecture for Efficiency and Simplicity

Here's a link to [Max's slides](https://docs.google.com/presentation/d/1C_qs0_fhWmwAEc8820cDaUk1ftFSzWEJrOW1kyS1En0).

Here's a link to [Max's repo](https://github.com/maxmumford/angular-sussex-component-architecture)

Chat comments were made about:

`ng-deep` is deprecated but according to the docs it should be preferred until the Angular team will drop support https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep

Combining services to simplify injection into Container Components, possibly using RxJs Partition

Thomas's talk at ng conf for [push based architecture](https://youtu.be/h-F5uYM69a4)

Ng conf talk on [combining rxjs streams](https://www.youtube.com/watch?v=Z76QlSpYcck)

<p>&nbsp;</p>

### Environment configs in monorepos

Here's a link to [Tom's repo](https://github.com/tomwhite007/move-environment-to-lib), see README within.

Val Neekman presented an alternative solution using his own NPM lib, [Ngx-CFG](https://github.com/un33k/ngx-cfg)

Chat comments were made about:

I do copy assets and styles from libs, but for the environment object I do provide it with a CommonModule.forRoot() with a typed Token

<p>&nbsp;</p>

### The easiest way to move a library

How to move, rename or delete a lib and all its configs by using a Nrwl Nx schematic

Chat comments were made about:

Can you use it outside of an Nx workspace? Yes, if you [add Nx to your project.](https://nx.dev/latest/angular/migration/migration-angular)

Why Nx instead of Lerna? [Lerna vs Nx](https://blog.nrwl.io/migrating-from-lerna-to-nx-better-dev-ergonomics-much-faster-build-times-da76ff14ccbb)
