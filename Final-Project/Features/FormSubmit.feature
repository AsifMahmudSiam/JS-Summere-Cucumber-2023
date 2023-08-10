Feature: FormSubmit
    @FormSubmit
    Scenario: Verify user can submit feedback after completing the feedback form

    Given I am on hotels landing page
    When I click on Support button
    And I click on Site Feedback button
    And I click on any overall rating button
    And I click on any content rating button
    And I click on any design rating button
    And I click on any ease of use rating button
    And I click on Submit button
    Then I verify Thank you for you feedback is displayed