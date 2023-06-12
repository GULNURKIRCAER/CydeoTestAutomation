/// <reference types="cypress" />

describe('Find or get elements by using different locators', () => {
    
    beforeEach(() => {
        // beforeMethod in TestNG
        cy.clearAllCookies();

        cy.visit('/login');

        cy.get("input").each((item,index,list)=>{
// ayni degerde birden fazla element oldugunde kullanilir

        expect(list).to.have.length(2);
        expect(item).to.have.attr("type");

        })
    
        cy.get("input[name='username']").type('tomsmith');

        cy.wait(3000);
        
        cy.get("input[name='password']").type('SuperSecretPassword');

        cy.wait(3000);

        cy.get("button[type='submit']").click();

        cy.wait(3000);

        cy.get('#flash').should("be.visible");

        // cy.get('#flash').contains('You logged into a secure area!');
        
        //assertion
        cy.get('#flash').should('include.text','You logged into a secure area!');
      })
      
    it('Check different locators strategies',()=>{
      
    })    
})