Feature: Property

    @Property
    Scenario: Verify List your Property flow
        Given I am on hotels landing page
        When I click on List Your Property button
        Then I verify What would you like to list is displayed
        And I verify Lodging option is displayed
        And I verify Private Residence option is displayed
        When I click on Private Residence button
        Then I verify Step 1 of 3 is displayed
        When I Enter Bedroom as 4
        And I Enter Bathroom as 2.5
        And I click on Next button
        Then I verify Step 2 of 3 is displayed
        And I verify Where is your place located is displayed
        When I Enter 1211 in address
        And I Select 1211 6th Avenue, New York, NY from auto-suggestion
        Then I verify map is displayed
        And I verify pin in map is displayed
        And I verify Move the pin to adjust the location of your property is displayed below graph



        
