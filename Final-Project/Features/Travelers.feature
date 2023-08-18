Feature: Travelers

    @Travelers1
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



    @Travelers2
    Scenario: Verify user can update number of guests on Home page
        Given I am on hotels landing page
        When I change adults count to 4
        And I change children count to 3
        And I select child-1 age as 2
        And I select child-2 age as Under 1
        And I select child-3 age as 7
        And I click on Done button
        Then I verify the travelers count is updated correctly
