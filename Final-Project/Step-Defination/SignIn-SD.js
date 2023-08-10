const { Given, When, Then } = require("@wdio/cucumber-framework");
const landingPage = require("../Pages/LandingPage");
const { expect } = require("chai");
const support = require("../Pages/Support");
const feedback = require("../Pages/Feedback");
const property = require("../Pages/Property");




const hotelLandingPage = new landingPage();
const supportPage = new support();
const feedbackPage = new feedback();
const pageProperty = new property();





Given(/^I am on hotels landing page$/, async function(){
    await browser.url('https://www.hotels.com/');
    await browser.pause(3000);

})


When(/^I click on (.+) button$/, async function(button){
    
    switch (button) {
        case 'SignInLink':
            await hotelLandingPage.clickSignInLink();
            
            break;

        case 'SignIn':
            await hotelLandingPage.clickSignInButton();
            break;
        
        case 'Continue':
            await hotelLandingPage.clickContinue();
            break;
        
        case 'English':
            await hotelLandingPage.clickEnglishButton();
            break;    
            
        case 'Save':
            await hotelLandingPage.clickLanguageSaveButton();
            break;
        
        case 'Espanol':
            await hotelLandingPage.espanoButtonClick();
            break;
        
        case 'Guardar':
            await hotelLandingPage.clickLanguageGuardarButton();
            break;

        case 'Support':
            await hotelLandingPage.clickSupportButton();
            break;

        case 'Site Feedback':
            await supportPage.clickSiteFeedback();
            break;

        case 'Submit':
            await feedbackPage.clickSubmitButton();
            break;
        
        case 'any overall rating':
            await feedbackPage.clickOverallButton();
            break;
            
        case 'any content rating':
            await feedbackPage.clickContentButton();
            break;
            
        case 'any design rating':
            await feedbackPage.clickDesignButton();
            break;
            
        case 'any ease of use rating':
            await feedbackPage.clickUsabilityButton();
            break;
            
        case 'travelers':
            await hotelLandingPage.clcikTravelersButton();
            break;

        case 'List Your Property':
            await hotelLandingPage.clickListOfYourProperty();
            break;
        
        case 'Private Residence':
            await pageProperty.clickPrivateResdence();
            break;

        case 'Next':
            await pageProperty.clickPropertyNextButton();
            break;
    


            

            

            
            
            
        default:
            break;
    }
    
    await browser.pause(3000);
})

When(/^I enter (.+) email address$/, async function(emailAdress){
    await hotelLandingPage.setEmailSignIn(emailAdress);
    await browser.pause(3000);
     
 })
 
 Then(/^I Verify error message is displayed$/,async function(){
     const errorDisplayed = await hotelLandingPage.SignInErrorMessageDispalyed();
     expect(errorDisplayed,'Sign In error message not displayed').to.be.true;
 
 })