class property{

    // Property All Locator 
    
    // What would you like Message locator
    whatWouldYouLikeLocator = '//p[contains(text(), "What would you like to list?")]';
    
    //Lodging Text Locator
    lodgingTextLocator = '//h3[contains(text(), "Lodging")]';
    
    //Private Residence Text locator
    privateResdenceTextLocator = '//h3[contains(text(), "Private residence")]'; 

    // Private residence Button locator
    privateResdenceButtonLocator = '//p[contains(text(), "Private residence")]';

    //Step 1 of 3 Text locator 
    step1Of3TextLocator = '//div[contains(text(), "Step 1 of 3")]';

    //Property next Button locator
    propertyNextButtonLocator = '#propertyInfoNextBtn';

    //Step 2 of 3 Text locator 
    stepTwoOfThreeTextLocator = '//div[contains(text(), "Step 2 of 3")]';

    // Where is You Place Locator 
    whereIsYourPlaceLocator = '//h1[contains(text(), "Where\'s your place located?")]' 

    // Enter Address locator 
    enterAddressLocator = '#locationTypeAhead';

    // 121 Auto suggestion locator
    autoSuggestionLocator = '//li[@class="typeahead-prediction-item fds-list-item"]';
    
    //BedRoom count locator 
    bedRoomCountLocator = '//input[@name="bedroom-count"]';


    // Plus BedRoom Button locator
    plusBedRoomButtonLocator = '//button[@aria-label="Increase bedrooms"]';

    // Minus BedRoom Button locator
    minusBedRoomButtonLocator = '//button[@aria-label="Decrease bedrooms"]';

    //BathRoom count Locator 
    bathRoomCountLocator = '//input[@name="bathroom-count"]';

    //Plus Bathrom Button Locator 
    plusBathRoomButtonLocator = '//button[@aria-label="Increase bathrooms"]';

    //Minus Bathroom Button Locator

    minusBathRoomButtonLocator = '//button[@aria-label="Increase bathrooms"]';

    //Map Locator 
    mapLocator = '//div[contains(@style, "z-index: 3")]';

    //Map pin Locator
    mapPinLocator = '//img[@src="https://maps.gstatic.com/mapfiles/transparent.png"]'

    // Move the Pin adjust text locator
    moveThePinTextLocator= '//span[contains(text(),"Move the pin to adjust")]'









    // Property All Function


    // Function for dispaly What Would You Like
    async whatWouldYouLikeDisplayed()
    {
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await $(this.whatWouldYouLikeLocator).waitForDisplayed();
        return await $(this.whatWouldYouLikeLocator).isDisplayed();
    }

    // Function for Display Lodging Text

    async lodgingTextDisplayed()
    {
        await $(this.lodgingTextLocator).waitForDisplayed();
        return await $(this.lodgingTextLocator).isDisplayed();
    }

    //Function For text private Residence Text
    async privateResidenceTextDisplayed()
    {
        await $(this.privateResdenceTextLocator).waitForDisplayed();
        return await $(this.privateResdenceTextLocator).isDisplayed();
    }


    //Function For Private Residence clcik Button

    async clickPrivateResdence()
    {
        await $(this.privateResdenceButtonLocator).click();
    }


    //Function for 1 of 3 Tes Displayed
    async oneOfThreeTextDisplayed()
    {
        await $(this.step1Of3TextLocator).waitForDisplayed();
        return await $(this.step1Of3TextLocator).isDisplayed();
    }

    // Fuction for clcik property next button
     async clickPropertyNextButton()
     {
        await $(this.propertyNextButtonLocator).waitForClickable();
        await $(this.propertyNextButtonLocator).click()
     }

    //Function for 2 of 3 Tes Displayed
    async twoOfThreeTextDisplayed()
    {
        await $(this.stepTwoOfThreeTextLocator).waitForDisplayed();
        return await $(this.stepTwoOfThreeTextLocator).isDisplayed();
    }


    // Function for Where is your place Displayed

    async whereIsYourPlaceDisplayed()
    {
        await $(this.whereIsYourPlaceLocator).waitForDisplayed();
        return await $(this.whereIsYourPlaceLocator).isDisplayed();
    }

    //Function for write address
    async enterAddressFunction(addressProperty)
    {
        await $(this.enterAddressLocator).click();
        await $(this.enterAddressLocator).setValue(addressProperty)

    }


    //Function for auto Suggestion
    async selectFromAutoSuggestion(searchThis)
    {
        await browser.pause(2000);
        const allSuggestion = await $$(this.autoSuggestionLocator);

        for(const suggestions of allSuggestion)
        {
            const suggestionData = await suggestions.getText();
            
            if(suggestionData.startsWith(searchThis))
            {
               
                await suggestions.click();
               
                await browser.pause(3000);

                break;
               
                
            }
        }
    }




    // Function for select BedRoom
async getBedRoomCount()
{
    return await $(this.bedRoomCountLocator).getAttribute('value')
}

async selectBedRoom(expectedBedRoom)
{
     
   
    for(let i=0; i<10 ; i++)
    {
        const bedRoomCount  = await this.getBedRoomCount();
        await browser.pause(5000);
        if(Number(bedRoomCount)<Number(expectedBedRoom))
        {
            await $(this.plusBedRoomButtonLocator).click();
        }
        else if (Number(bedRoomCount)>Number(expectedBedRoom))
        {
            await $(this.minusBedRoomButtonLocator).click();
        }
        else
        {
            break;
        }
    }
}




    // Function for select BathRoom
    async getBathRoomCount()
    {
        return await $(this.bathRoomCountLocator).getAttribute('value')
    }
    
    async selectBathRoom(expectedBathRoom)
    {
         
       
        for(let i=0; i<10 ; i++)
        {
            const bathRoomCount  = await this.getBathRoomCount();
            await browser.pause(5000);
            if(Number(bathRoomCount)<Number(expectedBathRoom))
            {
                await $(this.plusBathRoomButtonLocator).click();
            }
            else if (Number(bathRoomCount)>Number(expectedBathRoom))
            {
                await $(this.minusBathRoomButtonLocator).click();
            }
            else
            {
                break;
            }
        }
    }
    


    //Fuction for map displayed 
    async mapIsDisplayed()
    {
        return await $(this.mapLocator).isDisplayed();
    }

    //Function for map pin displayed

    async mapPinDisplayed()
    {
        return await $(this.mapPinLocator).isDisplayed();
    }

    //Function for move the pin adjust displayed

    async moveThePinDisplayed()
    {
        return await $(this.moveThePinTextLocator).isDisplayed();
    }













}

module.exports = property;