class feedback {


    /** Page Object Model All The Locators */



    //Submit button locator 

    submitButtonLocator = '//input[@type="submit"]'
    //submitButtonLocator = '(//input[contains(@type,"submit")])[1]'
    errorFeedbackMessageLocator = '(//p[contains(text(),"Please select options that best describe your expe")])[1]'

    // one error locator 
    errorOneLocator = '#error-1'
    
    //overall button locator 
    overallButtonLocator = '#overall-3'

    //content button locator
    contentButtonLocator = '#content-4'

    // design button locator 
    designButtonLocator = '#design-1'

    //usability button locator 
    usabilityButtonLocator = '#usability-2'

    // thanks feedback mesasge locator
    thanksFeedbackMessageLocator = '#int-thankyou-heading'










    /**Page Object Model All The Fuctions  */


    // function for click submit button
    async clickSubmitButton()
   {

        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);

        await $(this.submitButtonLocator).waitForClickable();
        await $(this.submitButtonLocator).click();
        await browser.pause(8000);
   } 

   // function for error message is displayed
   async errorFeedbackMessageDisplayed()
   {
        await $(this.errorFeedbackMessageLocator).waitForDisplayed();
        return await $(this.errorFeedbackMessageLocator).getText();
        
   }

   // Function for one error displayed 
   async errorOneDisplayed()
   {
        return await $(this.errorOneLocator).isDisplayed();
   }

   //Function for click overall
   async clickOverallButton()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await $(this.overallButtonLocator).waitForClickable();
        await $(this.overallButtonLocator).click();
        
     }

     // Function for click content

     async clickContentButton()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await $(this.contentButtonLocator).waitForClickable();
        await $(this.contentButtonLocator).click();
        
     }

     // function for click Design

     async clickDesignButton()
     {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await $(this.designButtonLocator).waitForClickable();
        await $(this.designButtonLocator).click();
     }

     // Function for click usability
     
     async clickUsabilityButton()
     {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await $(this.usabilityButtonLocator).waitForClickable();
        await $(this.usabilityButtonLocator).click();
     }

     // Function for Thanks feedback message displayed

     async thanksFeedbackMessageDisplayed()
     {
         
          return await $(this.thanksFeedbackMessageLocator).getText();
     }







}

module.exports = feedback;