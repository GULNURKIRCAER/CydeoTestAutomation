/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  before(() => {
    // beforeClass in TestNG
  });

  beforeEach(() => {
    // beforeMethod in TestNG
    cy.clearAllCookies();
  });

  after(() => {
    // afterClass in TestNG
  });

  afterEach(() => {
    // afterMethod in TestNG
  });

  it('Open a web application', () => {
    cy.visit('/hovers');

    cy.get('.nav-link').click();
  });

  it('Test 2', () => {
    expect(false).to.equal(false);
  });

  it('Test 3', () => {
    expect(false).not.to.equal(true);
  });

  it('Test 4', () => {
    expect(5).to.equal(5);
  });

  it('Test 5', () => {
    expect(true).to.equal('5' === 5);
  });
});
