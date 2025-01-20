describe('Landing Page Title Verification', () => {
  it('should verify the title text, font size, and font style', () => {
    // Visit the landing page
    cy.visit('https://airportlabs.com/')
    
    // Locate the section title 
    cy.get('h1')  // 
      .should('be.visible')  // 

      // Verify the title text
      .should('have.text', 'Digital Innovation.Efficient Aviation.AirportLabs in the Press')  
  
      // Verify the font size
      .should('have.css', 'font-size', '72px') 
  
      // Verify the font weight 
      .should('have.css', 'font-weight', '300') 
  })
})