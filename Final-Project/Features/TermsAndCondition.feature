Feature: TermsAndCodition
    @TermsAndCondition
    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page
    Given I am on hotels landing page
    When I click on SignInLink button
    And I click on SignIn button
    And I click on One Key Rewards Terms & Conditions button
    Then I verify One Key Terms and Conditions heading is displayed
    Then I verify Effective from date format  is in correct format
    When I click on Privacy Statement button
    Then I verify Privacy Statement heading is displayed
    Then I verify Last Updated date format