/// <reference types="cypress" />
describe('page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/static/index.html');
  })

  it('finds text in separate elements with exact whitespace matching (cypress before v4)', () => {
    cy.get('.container')
        .contains('n  +p  ')
        .should('exist');
  });

  it('finds text in separate elements ignoring whitespace (my expectations for v4)', () => {
    cy.get('.container')
        .contains('n+p')
        .should('exist');
  });

  it('finds text in separate elements ignoring whitespace (my alternative expectations for v4)', () => {
    cy.get('.container')
        .contains('n + p')
        .should('exist');
  });

  it('finds text in separate elements ignoring whitespace (what actually works in v4)', () => {
    cy.get('.container')
        .contains('n +p')
        .should('exist');
  });

})
