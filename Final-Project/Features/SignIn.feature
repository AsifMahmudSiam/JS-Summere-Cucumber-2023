Feature: SignIn
    @SignIn
    Scenario: Verify Verification message for invalid sign in credentials
    Given I am on hotels landing page
    When I click on SignInLink button
    And I click on SignIn button
    And I enter 1234 email address
    And I click on Continue button
    Then I Verify error message is displayed