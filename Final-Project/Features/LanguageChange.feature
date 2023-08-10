Feature: LanguageChange

    @LanguageChange
    Scenario: Verify language can be changed successfully
    Given I am on hotels landing page
    When I click on English button 
    And I Select Espanol (Estados Unidos) in Language dropdown
    And I click on Save button
    Then I Verify Espanol is displayed
    When I click on Espanol button
    And I select English (United States) in Language dropdow
    And I click on Guardar button
    Then I Verify English is displayed