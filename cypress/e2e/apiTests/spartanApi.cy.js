/* eslint-disable prettier/prettier */
describe('Spartan API tests', { baseUrl: 'https://listenapi.planetradio.co.uk/api9.2/' }, () => {
  it('Get a single api', () => {
    cy.request('GET', '/initweb/ki1').then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body.stationName).to.equal('KISS');
    });
  });
  
  it.only('POST one spartan test', () => {
    cy.request({
      method: 'POST',
      url: '/shuttlelinks',
      body: {
        id: 0,
        application_id: 3,
        title: "string",
      }
    }).then((response) => {
      expect(response.status).to.equal(200);

      // cy.log(response.body);

      expect(response.body.application_id).to.equal(3);
      expect(response.body.slug).to.equal(null);
    });
  });
});