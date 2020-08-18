import { mockMarkdownDocsRequests } from '../support/app.po';

describe('navigation via page links in menu', () => {
  beforeEach(() => {
    mockMarkdownDocsRequests();
    cy.visit('/');
  });

  it('should display two mocked documents', () => {
    cy.get('#ngrx-entities-and-view-model h1').contains('Test Title 1');

    cy.get('#sharing-code h1').contains('Test Title 2');
  });
});
