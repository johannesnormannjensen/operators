import { getHeader } from '../support/app.po';

describe('creators', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getHeader().get('h2').contains('Creators');
    getHeader().get('header').should('have.css', 'background-color', 'rgb(0, 128, 0)')
    getHeader().find("img").should('be.visible');
  });
});
