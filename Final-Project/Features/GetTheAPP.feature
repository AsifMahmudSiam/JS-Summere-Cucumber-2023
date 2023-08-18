Feature: FormSubmit
    
    @GetTheAPP
    Scenario: Verify Get the app section

    Given I am on hotels landing page
    When I click on Get The APP button
    Then verify Scan the QR code and download our app is displayed
    Then verify QR Code is displayed