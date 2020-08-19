import {
  mockMarkdownDocsRequests,
  confirmSectionIsScrolledInView,
} from '../support/app.po';

describe('navigation via page links in menu', () => {
  beforeEach(() => {
    mockMarkdownDocsRequests();
    cy.visit('/');
    cy.wait('@second-page-request');
  });

  it('should navigate to first mocked document', () => {
    cy.get('nav #dropdownMenuButton').contains(' Meetups ').click();

    cy.get('app-menu-view a[href="/ngrx-entities-and-view-model"]')
      .contains('2020 July 29 - NgRx Entities & View Model Pattern')
      .click();

    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#ngrx-entities-and-view-model');

    cy.get('#ngrx-entities-and-view-model h1').contains('Test Title 1');
  });

  it('should navigate to second mocked document', () => {
    cy.get('nav #dropdownMenuButton').contains(' Meetups ').click();

    cy.get('app-menu-view a[href="/sharing-code"]')
      .contains('2020 March 06 - Shared Code Solutions - Evaluation')
      .click();

    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#sharing-code');

    cy.get('#sharing-code h1').contains('Test Title 2');
  });

  it('should navigate to About', () => {
    cy.get('nav .nav-link[href="/about"]').contains('About').click();

    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#about');

    cy.get('app-about h2').contains('About');
  });

  it('should navigate to Contact', () => {
    cy.get('nav .nav-link[href="/contact"]').contains('Contact').click();

    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#contact');

    cy.get('app-contact h2').contains('Contact');
  });
});
