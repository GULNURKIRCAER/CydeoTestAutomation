/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
describe('How to do API tests with cypress', () => {
    it('Simple GET request, check status headers and body', () => {
      cy.request({
        // this function takes a json object as parameter, 
        // and inside this object we define core parts of HTTP request
        method: 'GET',
        // hardcoded url: https://demoqa.com/BookStore/v1/Books
        url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,// request body is ready
        // other than method and url the rest of options depend on your test case
        failOnStatusCode: false,
        
        //now response body
      }).then((response) => {
        expect(response.status).to.equal(200);
        // cy.log(response);
        cy.log(response.body.books[0].isbn);
        // verify second book has title: Learning JavaScript Design Patterns
        expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
        expect(response.headers.connection).to.equal('keep-alive');
  
        const {books} = response.body.books;

        //bununlada tum kitap isimleri console da gozukur
        // books.forEach(element => {
        //     console.log(element);
        // });
  
        // a loop for verification title
        cy.fixture('bookTitles').then((expectedBookTitle) => {
          for (let i = 0; i < 8; i++) {
            expect(response.body.books[i].title).to.equal(expectedBookTitle[i]);
            // console.log(expectedBookTitle[i]);
          }
        });
      });
    });
  });