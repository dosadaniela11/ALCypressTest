import 'cypress-xpath'

describe('Our Activity in Numbers Section Verification', () => {
    it('should verify the statistic value, font size, and font style', () => {
      // Visit the landing page
      cy.visit('https://airportlabs.com/')
      
      cy.get(':nth-child(2) > :nth-child(2) > .h4') 
      cy.xpath("//h2[.='10']").should('be.visible')  // the statistic is visible on the page
        .contains('10')  
    
        // Verify the font size 
        .should('have.css', 'font-size', '40px')  // Adjust this to the actual font size
    
        // Verify the font weight 
        .should('have.css', 'font-weight', '300')  // 700 is typically used for bold text
    })
  })
  