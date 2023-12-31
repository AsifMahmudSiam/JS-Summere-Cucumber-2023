class searchResult{

    rationLocatorStarts = '//label[contains(@aria-label,';
    rationLocatorEnds = ')]';


    //Function for click ration
    async clcikRation(rating)
    {
        const ratingLocator = `${this.rationLocatorStarts}"${rating}"${this.rationLocatorEnds}`;
        const ratingLocatorElement = await $(ratingLocator)
        await ratingLocatorElement.waitForClickable();
        await ratingLocatorElement.click();
        await browser.pause(5000);
    }


    // Sort By locator 
    shortByLocator = '#sort-filter-dropdown-sort';


    //function for select short by 
    
    async selectShortByLowToHigh()
    {
        const shortByLowtoHigh = await $(this.shortByLocator);
        await shortByLowtoHigh.selectByVisibleText('Price: low to high')
        await browser.pause(5000);
    }


    hotesStarsLocartorStarts = '//span[text()= "'
    
    hotesStarsLocartorEnds ='out of 5"]';
    hotelAllStarLocator = '//a[@data-stid="open-hotel-information"]';

    async verifyHotelsStars(expectedStar)
    {
      const hotelAllStarElements = await $$(this.hotelAllStarLocator);

      for (const hotelAllStarElement of hotelAllStarElements)
      {
        const hoteForStarElement = `${this.hotesStarsLocartorStarts}${expectedStar}${this.hotesStarsLocartorEnds}`;
        const hotelStarsElemnt = await hotelAllStarElement.$(hoteForStarElement);
        
        if(!hotelStarsElemnt||!(await hotelStarsElemnt.isDisplayed()))
        {
          return false;
        }
        
      }
      return true;


    }
    
    //price locsator 
    lowtoHighpriceLocator = '//div[contains(text(), "The price is")]';

  async getLowToHighPrices() {
    const priceElements = await $$(this.lowtoHighpriceLocator);
    const prices = [];

    for (const priceElement of priceElements) {
      const priceText = await priceElement.getText();
      const priceTextSplits = await priceText.split(" ");
      const extractPrice = await priceTextSplits.slice(3).join(" ");
      prices.push(extractPrice);
    }

    return prices;
  }







}

module.exports = searchResult;