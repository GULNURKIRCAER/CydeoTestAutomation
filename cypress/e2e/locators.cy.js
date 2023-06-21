/// <reference types="cypress" />

describe('Find or get elements by using different locators', () => {
  beforeEach(() => {
    // beforeMethod in TestNG
    cy.clearAllCookies();

    cy.visit('/login');

    cy.get('input').each((item, index, list) => {
      // ayni degerde birden fazla element oldugunde kullanilir

      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // cy.get("input[name='username']").type('tomsmith');

    // cy.wait(3000);

    // cy.get("input[name='password']").type('SuperSecretPassword');

    // cy.wait(3000);

    // cy.get("button[type='submit']").click();

    // cy.wait(3000);

    // cy.get('#flash').should("be.visible");

    // // cy.get('#flash').contains('You logged into a secure area!');

    // //assertion
    // cy.get('#flash').should('include.text','You logged into a secure area!');
  });

  it('Check different locators strategies', () => {
    // by css locator
    cy.get("input[name='username']").type('CydeoStudent');

    // by attribute name and value
    cy.get("[type='text']").clear(); // clear what is typed

    // tagName
    cy.get('input').each((item, index, list) => {
      // assert the lenght of the list is 2
      // ayni degerde birden fazla element oldugunde kullanilir

      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });
    // by attribute name
    cy.get('[type]');

    // cy className
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by taveling through DOM', () => {
    // travel to find the login button
    cy.get("input[name='username']")
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it('Check Different type of Assertions', () => {
    // should assertions
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // expect assertions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
      expect(buttonElement).to.have.class('btn btn-primary');
    });
  });
});
