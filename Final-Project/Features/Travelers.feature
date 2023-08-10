Feature: Travelers

    @Travelers
    Scenario: Verify the travelers count is correct
        Given I am on hotels landing page
        When I click on travelers button
        And I change children count to 2
        Then I verify Children age dropdown are 2
        And I verify plus button is enabled
        And I verify minus button is enabled
        When I change children count to 6
        Then I verify Children age dropdown are 6
        And I verify plus button is disable
        And I verify minus button is enabled
        When I change children count to 5
        Then I verify Children age dropdown are 5
        And I verify plus button is enabled
        And I verify minus button is enabled
        When I change children count to 0
        Then I verify Children age dropdown is NOT displayed
        And I verify plus button is enabled
        And I verify minus button is disable
