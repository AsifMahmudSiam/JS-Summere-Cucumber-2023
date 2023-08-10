class support {

    // site Feedback locator
    siteFeedBackLocator = '//a[text()="Site Feedback"]'


    // Function for click site feedback

    async clickSiteFeedback()
    {
        await $(this.siteFeedBackLocator).waitForClickable();
        await $(this.siteFeedBackLocator).click()
    }



}

module.exports = support;