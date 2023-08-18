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

    //Plus adult Button Locator
    plusadultButtonLocator = '(//button[@type="button"])[9]';
    
    //Minus Adult Button Locator
    minusAdultButtonLocator = '(//button[@type="button"])[8]';

    //Count Adult Locator
    countAdultLocator = "#traveler_selector_adult_step_input-0";

    childAgeDropdownLocator_starts = '//select[@id="age-traveler_selector_children_age_selector-0-';
    childAgeDropdownLocator_ends = '"]';
   
    //traveler done button locator
    travelerDoneButtonLocator = '#traveler_selector_done_button';

    // total Travelers count locator
    totalTravelersLocator ='//button[contains(text(), "7 travelers")]';
   
   
   
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


    /// Get The App Locator
    getTheAppLocator = '//div[contains(text(), "Get the app")]';


   
    /// Calender Test Case Locator

    /// Calender Dates button locator
    calendarDatesButtonLocator = '#date_form_field-btn';

    // Previous Calender Button Locator
    previousCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';

    //Next Calender Button Locator
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';

    //Left Calender Heading Locator
    leftCalendarHeadingLocator = '(//h2)[1]'

    allDatesInAMonthLocator_Start = '//h2[text()="';
    allDatesInAMonthLocator_End = '"]/following-sibling::table//button';


   
   
   
   
   
    // Search destination button locator
    destinationSeachButtonLocator = '//button[@aria-label="Going to"]';

    //Destination auto suggestion locator
    autoSuggestionLocator =  '//button[@data-stid="destination_form_field-result-item-button"]';

    //Destination value input locator
    destinationInputLocator = '#destination_form_field';

    // Search button locator
    searchButtonLocation = '#search_button'












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


       //Function adult
    async getAdultCount()
    {
        return await $(this.countAdultLocator).getAttribute('value');
    }
    
    //Function for adult select
    async selectAdult(expectedAdult)
    {
        await $(this.travelersButtonLocator).click();

        await browser.pause(5000);

        for(let i=0 ; i<=10; i++)
        {
            const adultCount = await this.getAdultCount();
            if(Number(adultCount)<Number(expectedAdult))
            {
                await $(this.plusadultButtonLocator).click();
            }
            else if (Number(adultCount)>Number(expectedAdult))
            {
                await $(this.minusAdultButtonLocator).click();
            }
            else
            {
                break;
            }


        }
    }

    async childAgeSelect(childNumber,ChildAge)
    {
        childNumber= Number(childNumber)-1;
        const childAgeLocator = this.childAgeDropdownLocator_starts + childNumber + this.childAgeDropdownLocator_ends;
        const childDropDown = await $(childAgeLocator);
        await childDropDown.selectByVisibleText(ChildAge);
        await browser.pause(5000);

    }


    //Function for click done button

    async clickDoneButton()
    {
        await $(this.travelerDoneButtonLocator).click();
    }

    async totalTravelersDisplay()   
    {
        return await $(this.totalTravelersLocator).isDisplayed();
    
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

    // Function for click Get The App

    async clickGetTheApp()
    {
        await $(this.getTheAppLocator).click()
    }


    //Function For click calendar Dates Button
    async clcikCalendarDatesButton()
    {
        await $(this.calendarDatesButtonLocator).click()
    }
    
    // Function for go to calender
    async goToCalendar(monthYear)
    {
        const previousCalendarButtonEnable = await $(this.previousCalendarButtonLocator).isEnabled();

        await browser.pause(5000);

        for(let i=0 ; i<=10; i++)
        {
            const LeftCalenderHeading = await $(this.leftCalendarHeadingLocator).getText();
            
            if(LeftCalenderHeading.localeCompare(monthYear)!==0)
            {
                if(previousCalendarButtonEnable)
                {
                    await $(this.previousCalendarButtonLocator).click()
                }
                else
                {
                    await $(this.nextCalendarButtonLocator).click()
                }
            }
            else
            {
                break;
            }

            
        
        }
       

    }

    async disabledDatesCount(monthYear) {
        const allDatesInAMonthLocator = this.allDatesInAMonthLocator_Start + monthYear + this.allDatesInAMonthLocator_End;
        const allDates = await $$(allDatesInAMonthLocator);
        let disabledDateCount = 0;
        for (const date of allDates) {
            const classAttributeValue = await date.getAttribute('class');
            if (classAttributeValue.includes('is-disabled')) {
                disabledDateCount++;
            }
        }
        return disabledDateCount;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //search function 
     async destinationClick(destiantionToGo)
     {
         await $(this.destinationSeachButtonLocator).click();
     
         await $(this.destinationInputLocator).setValue(destiantionToGo);
        
     }
     
     async selectFromAutoSuggestion(searchThis)
     {
         await browser.pause(2000);
         const allSuggestion = await $$(this.autoSuggestionLocator);
 
         for(const suggestions of allSuggestion)
         {
             const suggestionData = await suggestions.getAttribute("aria-label");
             if(suggestionData.startsWith(searchThis))
             {
                 await suggestions.click();
                 break;
             }
         }
     }
     
     async clickSearchButton()
     {
        await $(this.searchButtonLocation).waitForClickable() ;
        await $(this.searchButtonLocation).click();
        //await browser.pause(20000);

         
     }


    // CheckInLocator

    checkInLocator = '//button[@class="uitk-date-picker-day"]';


    //function for check in 
    async clickCheckInDate(checkIN)
    {
        let dateFound = false;


        while(!dateFound)
        {
            const previousCalendarButtonElement = await $(this.previousCalendarButtonLocator);
            const nextCalendarButtonElement = await $(this.nextCalendarButtonLocator);
        
            const allAvailableCheckInDates = await $$(this.checkInLocator);

            for (const date of allAvailableCheckInDates) 
            {
                const suggestionCheckInDate = await date.getAttribute("aria-label");
                if (suggestionCheckInDate === checkIN) 
                {
                  await date.click();
                  dateFound = true;
                  break;
                }
            }

              if (!dateFound) 
               {
                    const isPreviousCalendarButtonEnabled = await previousCalendarButtonElement.isEnabled();
                    const isNextClalendarButtonEnabled = await nextCalendarButtonElement.isEnabled();
          
                    if (isPreviousCalendarButtonEnabled && !isNextClalendarButtonEnabled) 
                    {
                        await previousCalendarButtonElement.click();
                    } 
                    else if (!isPreviousCalendarButtonEnabled && isNextClalendarButtonEnabled) 
                    {
                        await nextCalendarButtonElement.click();
                    }
                }
        }
        
    }



    //Function for checkout

    async clickCheckOutDate(checkOut)
    {
        let dateFound = false;


        while(!dateFound)
        {
            const previousCalendarButtonElement = await $(this.previousCalendarButtonLocator);
            const nextCalendarButtonElement = await $(this.nextCalendarButtonLocator);
        
            const allAvailableCheckOutDates = await $$(this.checkInLocator);

            for (const date of allAvailableCheckOutDates) 
            {
                const suggestionCheckOutDate = await date.getAttribute("aria-label");
                if (suggestionCheckOutDate === checkOut) 
                {
                  await date.click();
                  dateFound = true;
                  break;
                }
            }

              if (!dateFound) 
               {
                    const isPreviousCalendarButtonEnabled = await previousCalendarButtonElement.isEnabled();
                    const isNextClalendarButtonEnabled = await nextCalendarButtonElement.isEnabled();
          
                    if (isPreviousCalendarButtonEnabled && !isNextClalendarButtonEnabled) 
                    {
                        await previousCalendarButtonElement.click();
                    } 
                    else if (!isPreviousCalendarButtonEnabled && isNextClalendarButtonEnabled) 
                    {
                        await nextCalendarButtonElement.click();
                    }
                }
        }
        
    }

    // Calendar done button locator 
    calendarDoneButtonLocator = '//button[contains(@data-stid, "apply-date-picker")]'

    async clickCalendarDoneButton()
    {
        await $(this.calendarDoneButtonLocator).click();
    }

        








}

module.exports = landingPage;