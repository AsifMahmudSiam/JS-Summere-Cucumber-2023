Feature: Filter
    @Filter
    Scenario: Verify filter-by and sort-by functionality works as expected

    Given I am on hotels landing page
    When I enter bor in Search box
    And I select Bordeaux Gironde, France from Search Autosuggestion
    When I click on Dates button
    And I enter CheckIn date as Sep 29, 2023
    And I enter CheckOut date as Oct 10, 2023
    And I click on Calendar Done button
    And I click on Search Button
    And I click On 5 Star rating
    And I select Price Low to High from sort by dropdown
    #Then I verify all hotels are listed in increasing order price
    