const { Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const feedback = require("../Pages/Feedback");



const feedbackpage = new feedback;



Then(/^I verify error message is displayed$/,async function(){
    const verifyErrorFeedbackMessage = await feedbackpage.errorFeedbackMessageDisplayed();
    expect(verifyErrorFeedbackMessage,'Feedback error message not displayed').to.be.equal('Please select options that best describe your experience.');

})

Then(/^I verify red box is displayed around Overall section$/,async function(){
    const verifyErrorOneDispalyed = await feedbackpage.errorOneDisplayed();
    expect(verifyErrorOneDispalyed,'Red box not displayed').to.be.true;

})

Then(/^I verify Thank you for you feedback is displayed$/,async function(){
    const verifyThanksDispalyed = await feedbackpage.thanksFeedbackMessageDisplayed();
    expect(verifyThanksDispalyed,'Thanks feedback message not displayed').to.be.equal('THANK YOU FOR YOUR FEEDBACK.')

})


