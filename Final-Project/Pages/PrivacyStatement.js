const { expect } = require("chai");
const moment = require("moment");


class privacyStatement{

    //Privacy statement Text locator 
    privacyStatementTextLocator = '(//h2[@class="uitk-heading uitk-heading-4"][normalize-space()="Privacy Statement"])[1]'

    // Last Updated Date Locator 
    lastUpdatedDateLocator = '//p[contains(text(), "Last Updated")]';




    //Function For displayed privacy Statement
    async privacyStatementTextDisplayed()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[2]);
        return await $(this.privacyStatementTextLocator).isDisplayed();
    }


    //Function for Last Updated Date formation varify

   
    async verifyLastUpdatedDateFormate()
    {
        const lsstUpdatedDateElement = await $(this.lastUpdatedDateLocator);
        const lastUpdatedDateText = await lsstUpdatedDateElement.getText();

        const lastUpdatedDateTextSplit = lastUpdatedDateText.split(' ');
        const lastExtractDateText = lastUpdatedDateTextSplit.slice(2).join(' ');

        const lastExpectedDateFormat = "MMMM D, YYYY";
        const getLastExpectedDate = moment (lastExtractDateText,lastExpectedDateFormat,true);
        expect(getLastExpectedDate.isValid(),'Date is not the expected Format').to.be.true;

        
    }





}
module.exports = privacyStatement;