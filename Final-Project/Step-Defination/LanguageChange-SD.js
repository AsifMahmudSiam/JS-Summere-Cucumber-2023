const { When, Then } = require("@wdio/cucumber-framework");
const landingPage = require("../Pages/LandingPage");
const { expect } = require("chai");


const changeLanguage = new landingPage;

When(/^I Select Espanol \(Estados Unidos\) in Language dropdown$/, async function(){

    await changeLanguage.selectLanguage();
    await browser.pause(3000);
})

Then(/^I Verify Espanol is displayed$/, async function(){
    const verifyEspanolButton = await changeLanguage.espanolButtonDisplayed();
    expect(verifyEspanolButton, 'Espanol Button not displayed').to.be.equal('Español');
})


When(/^I select English \(United States\) in Language dropdow$/, async function(){

    await changeLanguage.selectEnglishLanguage();
   
})

Then(/^I Verify English is displayed$/, async function(){
    const verifyEnglishButton = await changeLanguage.englishButtonDisplayed();
    expect(verifyEnglishButton, 'English Button not displayed').to.be.equal('English');
})
