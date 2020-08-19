import { confirmSectionIsScrolledInView } from '../support/app.po';

describe('deep linking to a page / section', () => {
  beforeEach(() => cy.visit('/testing-observables'));

  it('should scroll to testing-observables section in less than 2 seconds', () => {
    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#testing-observables');
  });
});
