class signIn {

    //One Key reward Link locator 

    oneKeyRewardKeyLocator = '//a[contains(text(), "One Key Rewards")]';

     //privacy Statement locator 
     privacyStatementLocator = '//a[contains(text(), "Privacy Statement")]';


   
   
    //Function For click one key reward
   
    async clickOneKeyReward()
    {
        await $(this.oneKeyRewardKeyLocator).click();
    }

   
    //Function for click privacy statement
    async clickPrivacyStatement()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[0]);
        await $(this.privacyStatementLocator).click();
    }




}

module.exports = signIn;