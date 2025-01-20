
Feature: Verify social media links redirect to correct pages

  Scenario: Verify that the Facebook link redirects to the correct page
    Given I am on the Airport Labs homepage
    When I click on the Facebook social media link
    Then I should be redirected to the Facebook page

  Scenario: Verify that the Instagram link redirects to the correct page
    Given I am on the Airport Labs homepage
    When I click on the Instagram social media link
    Then I should be redirected to the Twitter page

  Scenario: Verify that the LinkedIn link redirects to the correct page
    Given I am on the Airport Labs homepage
    When I click on the LinkedIn social media link
    Then I should be redirected to the LinkedIn page
