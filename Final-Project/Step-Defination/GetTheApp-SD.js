const { Then } = require("@wdio/cucumber-framework");
const GetTheAPP = require("../Pages/GetTheApp");
const { expect } = require("chai");


const gtTheAppPage = new GetTheAPP();

Then(/^verify Scan the QR code and download our app is displayed$/,async function(){
    const scanTheQRCodeDisplayed = await gtTheAppPage.scanAndQRCodeTextDisplayed()
    expect(scanTheQRCodeDisplayed,'Scan the QR code and download our app is not displayed').to.be.true;

})

Then(/^verify QR Code is displayed$/,async function(){
    const qRCodeDisplayed = await gtTheAppPage.qRCodeImageDisplayed()
    expect(qRCodeDisplayed,'QR Code image is not displayed').to.be.true;

})