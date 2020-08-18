describe('home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display home page title', () => {
    cy.get('app-home h1')
      .contains('Brighton / Worthing')
      .contains('Angular 2+ Meetup');
  });
});
