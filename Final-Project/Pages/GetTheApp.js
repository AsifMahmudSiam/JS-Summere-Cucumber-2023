class GetTheAPP {


// Scan and QR code and download our app text locator

scanAndQRCodeTextLocator = '#marquee-title';

//qQR code Image Locator 

qRCodeImageLocator = '//img[@alt="QR code"]';





// Function for Scan and QR code and download displayed
async scanAndQRCodeTextDisplayed()
{
    return await $(this.scanAndQRCodeTextLocator).isDisplayed();
}


// Function for QR code Image Dispalyed

async qRCodeImageDisplayed()
{
    return await $(this.qRCodeImageLocator).isDisplayed();
}






}




module.exports = GetTheAPP;