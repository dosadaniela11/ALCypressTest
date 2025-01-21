describe('Facebook Link', () => {
  it('should redirect to the correct Facebook page', () => {
    cy.visit('https://airportlabs.com/');
    cy.get('[href="https://www.facebook.com/AirportLabs"]')
      .should('have.attr', 'href', 'https://www.facebook.com/AirportLabs');
    cy.get('[href="https://www.facebook.com/AirportLabs"]').click();
  });
});

describe('Instagram Link', () => {
  it('should open Instagram link in a new window', () => {
    cy.visit('https://airportlabs.com/');
    cy.get('[href="https://www.instagram.com/airportlabspeople/"]');
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'https://www.instagram.com/airportlabspeople/');
    cy.get('[href="https://www.instagram.com/airportlabspeople/"]').click();
   });
});

describe('LinkedIn Link', () => {
  it('should open LinkedIn link in a new window', () => {
    cy.visit('https://airportlabs.com/');
    cy.get('[href="https://www.linkedin.com/company/airportlabs/"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'https://www.linkedin.com/company/airportlabs/');
    cy.get('[href="https://www.linkedin.com/company/airportlabs/"]').click();
  });
});
