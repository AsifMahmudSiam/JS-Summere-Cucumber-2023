Feature: Calendar

    @Calendar
    Scenario: Verify past dates are disabled in the current month Calendar
        Given I am on hotels landing page
        When I click on Dates button
        Then I verify past dates in current month are disabled