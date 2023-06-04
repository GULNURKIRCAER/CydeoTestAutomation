/// <reference types="cypress" />

describe('Context: My First Tests', () => {

before(() => {
    // beforeClass in TestNG
  })

beforeEach(() => {
    // beforeMethod in TestNG
    cy.clearAllCookies();
  })

after(()=>{

    //afterClass in TestNG
}) 

afterEach(()=>{

    //afterMethod in TestNG
}) 

it('Open a web application',()=>{

    cy.get('.list-group > :nth-child(1) > a').click();

    cy.get('.nav-link').click();
})
})