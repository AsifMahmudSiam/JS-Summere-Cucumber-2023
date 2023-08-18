const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const termsAndCondition = require("../Pages/TermsAndCondition");
const privacyStatement = require("../Pages/PrivacyStatement");


const termsAndConditionPage = new termsAndCondition()
const privacyStatementPage = new privacyStatement()


Then(/^I verify One Key Terms and Conditions heading is displayed$/,async function(){
    const oneKeyTermsAndCondition = await termsAndConditionPage.oneKeyTermsAndConditionDisplayed()
    expect(oneKeyTermsAndCondition,'One key terms and condition message not displayed').to.be.true;

})

Then(/^I verify Effective from date format  is in correct format$/,async function(){
      await termsAndConditionPage.verifyOneKeyDateFormate();
    

})

Then(/^I verify Privacy Statement heading is displayed$/,async function(){
    const privacyStatementText = await privacyStatementPage.privacyStatementTextDisplayed()
    expect(privacyStatementText,'Privacy Statement Text is not displayed').to.be.true;

})

Then(/^I verify Last Updated date format$/,async function(){
    await privacyStatementPage.verifyLastUpdatedDateFormate();

})





