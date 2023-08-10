Feature: Feedback
    @Feedback
    Scenario: Verify error is displayed when user submits the empty feedback form

    Given I am on hotels landing page
    When I click on Support button
    And I click on Site Feedback button
    And I click on Submit button
    Then I verify error message is displayed
    Then I verify red box is displayed around Overall section
