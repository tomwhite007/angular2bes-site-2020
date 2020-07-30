# NgRx Entities and the Reactive & Performant "View Model" design pattern

## Meetup July 29, 2020

### Speaker: Tom White

## NgRx Entities

Better than arrays!

- Designed for keeping tabular records
- Designed for reducing boilerplate and bug opportunity
- Designed to provide all common table functions via a adapter functions
- Has concept for fixed sort order
- Has concept for selected record

A quick study (2-3hrs):
[Angular University: Angular NgRx Entity - Complete Practical Guide](blog.angular-university.io/ngrx-entity)

**An example Record Interface**

```javascript
interface Book {
  id: string;
  title: string;
}
```

**Example Entity State**

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

**Scaffolding with Schematics**

A demo or two:

- [https://github.com/tomwhite007/scaffolding-ngrx-with-nx-schematics](https://github.com/tomwhite007/scaffolding-ngrx-with-nx-schematics)
- [https://github.com/tomwhite007/scaffolding-with-ngrx-schematics](https://github.com/tomwhite007/scaffolding-with-ngrx-schematics)

**Nrwl Nx Schematics give you the most efficient scaffold**

Screenshots of how to scaffold NgRx with Nx: [Scaffolding_NgRx_with_Nx.pdf](/assets/content/Scaffolding_NgRx_with_Nx.pdf)

Converted steps in PDF above into command line instructions:

```
ng generate @nrwl/angular:ngrx --name=dummy --module=apps/demo/src/app/app.module.ts --root

ng generate @nrwl/angular:ngrx --name=dummy --module=apps/demo/src/app/dummy/dummy.module.ts --facade
```

## Post-lockdown Angular jobs and contract market

Not looking great, but what can we do?

[Here's a shared Google doc with our meetup group's suggestions](https://docs.google.com/document/d/1Ce9XhQ6wQ1qGTbVj6IDLAKwMaxmwLQSW8J6018i_R4E/edit?usp=sharing)

## Angular Standards for 2020

I've created a medium document that I'd like to share with you. I welcome comments and suggestions.

[Angular standards for 2020](https://medium.com/p/angular-standards-for-2020-d31f401fb90d?source=email-9ee788b6810c--writer.postDistributed&sk=6edc2777791efd12f09d3d67f0a447dd)

## WithNextFrom

`WithNextFrom`, Tom’s new RxJS operator for Angular devs, [hosted on npm](https://www.npmjs.com/package/@gyrus/ngx-with-next-from). Based on [withLatestFrom](https://rxjs-dev.firebaseapp.com/api/operators/withLatestFrom).

I believe the RxJs operator `withLatestFrom` is a super powerful operator that everybody should use if they use `zip` or `switchMap` operators a lot. But it's painful to mock in Angular unit tests. So I've built an alternative.
