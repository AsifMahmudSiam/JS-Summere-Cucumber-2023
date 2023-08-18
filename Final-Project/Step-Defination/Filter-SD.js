const { When, Then } = require("@wdio/cucumber-framework");
const landingPage = require("../Pages/LandingPage");
const searchResult = require("../Pages/SearchResult");


const filter = new landingPage();
const searchResultPage = new searchResult();

When(/^I enter (.+) in Search box$/, async function(destination)
{
    await filter.destinationClick(destination);
    await browser.pause(5000);
})

When (/^I select (.+) from Search Autosuggestion$/,async function(pickFromAutoSuggestion)
{
    await filter.selectFromAutoSuggestion(pickFromAutoSuggestion);
})


When (/^I enter CheckIn date as (.+)$/,async function(checkIndate)
{
    await filter.clickCheckInDate(checkIndate);
    await browser.pause(5000);
})

When (/^I enter CheckOut date as (.+)$/,async function(checkOutdate)
{
    await filter.clickCheckInDate(checkOutdate);
    await browser.pause(5000);
    
})

When (/I click on Search Button$/,async function()
{
    await filter.clickSearchButton();
    
    
})

When (/I click On (.+) Star rating$/,async function(ratingNumber)
{
    await searchResultPage.clcikRation(ratingNumber);
    
    
})

When (/I select Price Low to High from sort by dropdown$/,async function()
{
    await searchResultPage.selectShortByLowToHigh();
    
    
})


Then('I verify all hotels are listed in increasing order price', async function () {
    const lowtoHighprice = await searchResultPage.getLowToHighPrices()
    const sortedPrices = [...prices].sort((a, b) => a - b);
  
    assert.deepEqual(lowtoHighprice, sortedPrices, 'Hotel prices are not in Low to High');
  });






