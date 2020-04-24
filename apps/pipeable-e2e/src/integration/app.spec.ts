import { getHeader } from '../support/app.po';

describe('creators', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getHeader().get('h2').contains('Pipeable');
    getHeader().get('header').should('have.css', 'background-color', 'rgb(20, 48, 85)')
    // getHeader().find("img").should('be.visible');
  });
});
