# NgRx Entities and the Reactive & Performant "View Model" design pattern

## Meetup July 29, 2020

### Speakers: Tom White & Max Mumford

## [Click Here for Live Notes during the meetup...](https://docs.google.com/document/d/1-U5ctRAamzOkw3JOQ86eOmHo0KPY7KWzXBBQAMxVadY/edit?usp=sharing)

**Agenda:**

- NgRx Entities and scaffolding the most efficient way ([see below](#ngrx-entities))
- How to use the View Model design pattern to build reactive and highly performant Angular components
- [Angular standards for 2020](https://medium.com/p/angular-standards-for-2020-d31f401fb90d?source=email-9ee788b6810c--writer.postDistributed&sk=6edc2777791efd12f09d3d67f0a447dd)
- [WithNextFrom, Tom’s new RxJS operator for Angular devs, hosted on npm.](https://www.npmjs.com/package/@gyrus/ngx-with-next-from)
- Post-lockdown Angular jobs and contract market, and how we can help

### NgRx Entities

Better than arrays!

- Designed for keeping tabular records
- Designed for reducing boilerplate and bug opportunity
- Designed to provide all common table functions via a adapter functions
- Has concept for fixed sort order
- Has concept for selected record

A quick study (2-3hrs):
[Angular University: Angular NgRx Entity - Complete Practical Guide](blog.angular-university.io/ngrx-entity)

#### An example Record Interface

```javascript
interface Book {
  id: string;
  title: string;
}
```

#### Example Entity State

based on the Book record interface

```javascript
{
  books: {
    ids: [
      'one',
      'two',
      'three'
    ],
    entities: {
      one: {
        id: 'one',
        title: 'A book title'
      },
      two: {
        id: 'two',
        title: 'Another book title'
      },
      three: {
        id: 'three',
        title: 'A classic book title'
      }
    },
    loaded: true,
    selectedId: 'three'
  }
}
```

A demo or two:

- [https://github.com/tomwhite007/scaffolding-ngrx-with-nx-schematics](https://github.com/tomwhite007/scaffolding-ngrx-with-nx-schematics)
- [https://github.com/tomwhite007/scaffolding-with-ngrx-schematics](https://github.com/tomwhite007/scaffolding-with-ngrx-schematics)
