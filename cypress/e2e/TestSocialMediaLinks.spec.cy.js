
import { defineStep } from '@badeball/cypress-cucumber-preprocessor'
defineStep('I am on the homepage', () => {
  cy.visit('https://www.airportlabs.com/')  // Replace with your website URL
})

defineStep('I click on the Facebook social media link', () => {
  cy.xpath("//img[@src='https://cdn.prod.website-files.com/621780e23ce4730dbde38ef2/621780e23ce47317c5e38f41_icon-Facebook-white.svg']").click()  // Adjust selector based on the actual element
})

// When('I click on the Twitter social media link', () => {
//   cy.get('a[href*="twitter.com"]').click()  // Adjust selector based on the actual element
// })

// When('I click on the LinkedIn social media link', () => {
//   cy.get('a[href*="linkedin.com"]').click()  // Adjust selector based on the actual element
// })

// Then('I should be redirected to the Facebook page', () => {
//   cy.url().should('include', 'facebook.com')  // Ensure URL contains 'facebook.com'
// })

// Then('I should be redirected to the Twitter page', () => {
//   cy.url().should('include', 'twitter.com')  // Ensure URL contains 'twitter.com'
// })

// Then('I should be redirected to the LinkedIn page', () => {
//   cy.url().should('include', 'linkedin.com')  // Ensure URL contains 'linkedin.com'
// })
