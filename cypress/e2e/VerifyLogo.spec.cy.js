describe('Image verification', () => {
    it('Verify the AirportLabs logo image exists and check its properties', () => {
      cy.visit('https://airportlabs.com/');
  
      // Căutăm imaginea cu logo-ul AirportLabs
      cy.get('img[src*="https://cdn.prod.website-files.com/621780e23ce4730dbde38ef2/6218c570693ffd35d9005f03_AL_Logo_White_Horizontal.svg"]')  // Înlocuiește cu selectorul corect pentru imaginea logo-ului
        .should('exist')  // Verificăm că imaginea există
        .and('be.visible')  // Verificăm că imaginea este vizibilă
  
        // Verificăm dimensiunile imaginii
        .should(($img) => {
          const width = $img[0].naturalWidth;
          const height = $img[0].naturalHeight;
          
          expect(width).to.be.greaterThan(0);
          expect(height).to.be.greaterThan(0);
  
          expect(width).to.equal(300);  
          expect(height).to.equal(85); 
        });
    });
  });
  