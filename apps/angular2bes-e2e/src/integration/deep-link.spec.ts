import { confirmSectionIsScrolledInView } from '../support/app.po';

describe('deep linking to a page / section', () => {
  beforeEach(() => cy.visit('/testing-observables'));

  /**
   * This test relies on an external document being available which techinally should be mocked.
   * However, I think this test is valid becuase it confirs the existence of a static external resource
   * which is good to know via automated tests in a ci pipeline.
   * See page-navigation.spec for proper external api mocking.
   */
  it('should scroll to testing-observables section in less than 2 seconds', () => {
    cy.wait(2000); // for scroll to complete

    confirmSectionIsScrolledInView('#testing-observables');
  });
});
