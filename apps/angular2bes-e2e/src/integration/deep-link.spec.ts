import { getGreeting } from '../support/app.po';

describe('deep linking to a page / section', () => {
  beforeEach(() => cy.visit('/testing-observables'));

  it('should scroll to testing-observables section in less than 2 seconds', () => {
    cy.wait(2000);

    cy.window().then(($window) => {
      cy.get('#testing-observables').then(($sectionContainer) => {
        const topOfContainer = $sectionContainer.offset().top;

        expect($window.scrollY).to.be.closeTo(topOfContainer, 100);
      });
    });
  });
});
