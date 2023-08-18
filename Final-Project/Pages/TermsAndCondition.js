const { expect } = require("chai");
const moment = require("moment");

class termsAndCondition{

    
    // One key terms and Condition location
    oneKeyTermsAndConditionLocator = '//h1[contains(text(), "One Key Terms")]';
    
    //effective From Date locatoor
    effectiveFormDateLocator = '//p[contains(text(), "Effective from")]';

   




    //Function for One key Terms and Condition Displayed
    async oneKeyTermsAndConditionDisplayed()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        return await $(this.oneKeyTermsAndConditionLocator).isDisplayed();

    }

    //Function For varify One key date formate
    async verifyOneKeyDateFormate()
    {
        const effectiveFormDateElement = await $(this.effectiveFormDateLocator);
        const getDateText = await effectiveFormDateElement.getText();

        const dateTextSplit = getDateText.split(' ');
        const extractDateText = dateTextSplit.slice(2).join(' ');

        const expectedDateFormat = "MMMM D, YYYY";
        const getExpectedDate = moment (extractDateText,expectedDateFormat,true);
        expect(getExpectedDate.isValid(),'Date is not the expected Format').to.be.true;

        
    }


    



}
module.exports = termsAndCondition;