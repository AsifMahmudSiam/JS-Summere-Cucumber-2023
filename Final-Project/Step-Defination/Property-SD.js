const { Then, When } = require("@wdio/cucumber-framework");
const property = require("../Pages/Property");
const { expect } = require("chai");

const propertyPage = new property;

Then(/^I verify What would you like to list is displayed$/,async function(){
    const whatWouldYouLike = await propertyPage.whatWouldYouLikeDisplayed();
    expect(whatWouldYouLike,'What Would You Like not Displayed').to.be.true;

})

Then(/^I verify Lodging option is displayed$/,async function(){
    const lodgingText = await propertyPage.lodgingTextDisplayed()
    expect(lodgingText,'Lodging is not Displayed').to.be.true;

})

Then(/^I verify Private Residence option is displayed$/,async function(){
    const privateResidenceText = await propertyPage.privateResidenceTextDisplayed();
    expect(privateResidenceText,'Private Residence is not Displayed').to.be.true;

})

Then(/^I verify Step 1 of 3 is displayed$/,async function(){
    const stepOneOfThree = await propertyPage.oneOfThreeTextDisplayed();
    expect(stepOneOfThree,'Step One Of Three is not Displayed').to.be.true;

})


When (/^I Enter (.+) as (.+)$/, async function(field, count)
{
    switch (field) {
        case 'Bedroom':
            await propertyPage.selectBedRoom(count);
            
            break;

        case 'Bathroom':
            await propertyPage.selectBathRoom(count);
    
        default:
            break;
    }
})




Then(/^I verify Step 2 of 3 is displayed$/,async function(){
    const stepTwoOfThree = await propertyPage.twoOfThreeTextDisplayed();
    expect(stepTwoOfThree,'Step Two Of Three is not Displayed').to.be.true;

})

Then(/^I verify Where is your place located is displayed$/,async function(){
    const whereIsYourPlace = await propertyPage.whereIsYourPlaceDisplayed();
    expect(whereIsYourPlace,'Where Is your Place Location? is not Displayed').to.be.true;

})

When(/^I Enter (.+) in address$/, async function(address)
{
    await propertyPage.enterAddressFunction(address);
    await browser.pause(5000);
})

When(/I Select (.+) from auto-suggestion$/, async function(autosuggestionPick)
{
    await propertyPage.selectFromAutoSuggestion(autosuggestionPick);
    await browser.pause(5000);
})


Then(/^I verify map is displayed$/,async function(){
    const fullMap = await propertyPage.mapIsDisplayed();
    expect(fullMap,'Map is not Displayed').to.be.true;

})

Then(/^I verify pin in map is displayed$/,async function(){
    const mapPin = await propertyPage.mapPinDisplayed();
    expect(mapPin,'Map Pin is not Displayed').to.be.true;

})

Then(/^I verify Move the pin to adjust the location of your property is displayed below graph$/,async function(){
    const moveThePinText = await propertyPage.moveThePinDisplayed();
    expect(moveThePinText,'Move the Pin  to adjust is not Displayed').to.be.true;

})
