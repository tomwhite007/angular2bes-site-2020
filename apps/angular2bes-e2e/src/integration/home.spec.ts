describe('home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display home page title', () => {
    cy.get('app-home h1').contains('Angular Sussex');
  });
});
