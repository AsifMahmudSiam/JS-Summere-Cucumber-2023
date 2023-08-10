class landingPage {


    /** Page Object Model All The Locators */

    // Sign test case In All locaton 

    //SignIn link locator

    signInLinkLocator = '//button[text()="Sign in"]';

    //SignIn Button locator
    signInButtonLocator = '//a[text()="Sign in, it\'s free"]';

    //SignIn Email field locator
    signInEmailFieldLocator = '#loginFormEmailInput';

    //Contine Button locator
    continueButtonLocator = '#loginFormSubmitButton';

    //SignIn error message 
    signInErrorMessage = '#loginFormEmailInput-error';



    // Language change all locator 

    //English Language Button locator
    englishButtonLocator = '//div[contains(text(),"English")]' ;

    //select language locator 
    selectLanguageLocator = '#language-selector';

    // language change save button locator

    languageSaveButtonLocator = '//button[text()="Save"]';

    //Espanol button locator
    espanolButtonLocator = '//div[text()="Español"]';

    // language Guardar button locator
    languageGuardarButtonLocator = '//button[text()="Guardar"]';

    
    


    ///Feedback all locator
    
    // Support button locator 
    supportButtonLocator = '#support-cs';



    // Travelers all locator 

    travelersButtonLocator = '//button[@data-stid="open-room-picker"]';

    // Pluse children button locator
    plusChildrenButtonLocator= '(//button[@type="button"])[11]';

    //minus children button locator
    minusChildrenButtonLocator = '(//button[@type="button"])[10]';

    //Count children locator
    countChildrenLocator = '#traveler_selector_children_step_input-0'

    // no child dropdown verfication locator
    noDropdownChildMessageLocator = '//div[contains(text(), "Get the most accurate pricing by letting")]'

    // child2 age dropdown locator
    child2AgeDropdownLocator = '#age-traveler_selector_children_age_selector-0-1';
    // child5 age dropdown locator
    child5AgeDropdownLocator='#age-traveler_selector_children_age_selector-0-4';


    

    ///Property Test Case Locator 

    //List of your property locator
    listOfYourPropertyLocator = '#listYourProperty';










    /**Page Object Model All The Fuctions  */



    // Signin All function


    // SignIn link Click function

    async clickSignInLink()
    {
        await $(this.signInLinkLocator).click();
    }

    //SignIn Button click function
    async clickSignInButton()
    {
        await $(this.signInButtonLocator).click();
    }

    //SignIn email filed set value function

    async setEmailSignIn(setEmail)
    {
        return await $(this.signInEmailFieldLocator).setValue(setEmail);
    }

    // Click continue button function

    async clickContinue()
    {
        await $(this.continueButtonLocator).click();
    }

    async SignInErrorMessageDispalyed()
    {
        return await $(this.signInErrorMessage).isDisplayed();
    }


    
    // Language Chnage all function


    // Function for click English  Button

    async clickEnglishButton()
    {
        
        await $(this.englishButtonLocator).click();

    }

    //Function for select language
    async selectLanguage()
    {
        const languageDropdown = await $(this.selectLanguageLocator);

        return await languageDropdown.selectByVisibleText('Español (Estados Unidos)');

    }

    // Function for Click Language save button
    async clickLanguageSaveButton()
    {
        await $(this.languageSaveButtonLocator).waitForClickable();
        await $(this.languageSaveButtonLocator).click();
    }

    //Function for Espano button displayed
    async espanolButtonDisplayed()
    {
        return await $(this.espanolButtonLocator).getText();
    }
    
    // Function for Espano button click
    async espanoButtonClick()
    {
        await $(this.espanolButtonLocator).waitForClickable();
        await $(this.espanolButtonLocator).click();
    }

    //Function for select english language
    async selectEnglishLanguage()
    {
        const englishLanguageDropdown = await $(this.selectLanguageLocator);
        await englishLanguageDropdown.waitForClickable();
        return await englishLanguageDropdown.selectByVisibleText('English (United States)');
    }

    // Fuction for Guardar button click
    async clickLanguageGuardarButton()
    {
        await $(this.languageGuardarButtonLocator).waitForClickable();
        await $(this.languageGuardarButtonLocator).click();
    }

    // Function for English button displayed 
    async englishButtonDisplayed()
    {
        return await $(this.englishButtonLocator).getText();
    }


    

    // Function for support button locator

    async clickSupportButton()
    {
        await $(this.supportButtonLocator).waitForClickable();
        await $(this.supportButtonLocator).click();
    }





    // Travelers all function

    async clcikTravelersButton()
    {
        await $(this.travelersButtonLocator).waitForClickable();
        await $(this.travelersButtonLocator).click();
    }


    
    
    //function for children count

    async getChildrenCount()
    {
        return await $(this.countChildrenLocator).getAttribute('value')
    }

    // function for children select
    async selectChildren(expectedChild)
    {
     
   
        for(let i=0; i<10 ; i++)
        {
            const childCount  = await this.getChildrenCount();
            await browser.pause(5000);
            if(Number(childCount)<Number(expectedChild))
            {
                await $(this.plusChildrenButtonLocator).click();
            }
            else if (Number(childCount)>Number(expectedChild))
            {
                await $(this.minusChildrenButtonLocator).click();
            }
            else
            {
                break;
            }
        }
    }


    // Function for plus button enable
    async plusButtonEnable(enable)
    {
        return await $(this.plusChildrenButtonLocator).isEnabled(enable);
    }

    //Function for minus button enable
    async minusButtonEnable(enable)
    {
        return await $(this.minusChildrenButtonLocator).isEnabled(enable);
    }

   

    


    //Function for NoDropdown diplayed

    async NoChildDropdown()
    {
        return await $(this.noDropdownChildMessageLocator).isDisplayed();
    }


    //Function for child2 dropdown displayed

    async child2DropdownDisplayed(childAge)
    {
        return await $(this.child2AgeDropdownLocator).isDisplayed(childAge);
    }

    //Function for child5 dropdown displayed
    async child5DropdownDisplayed(childAge)
    {
        return await $(this.child5AgeDropdownLocator).isDisplayed(childAge);
    }



    /// List of your property function
    async clickListOfYourProperty()
    {
        await $(this.listOfYourPropertyLocator).waitForClickable();
        await $(this.listOfYourPropertyLocator).click();
    }





}

module.exports = landingPage;