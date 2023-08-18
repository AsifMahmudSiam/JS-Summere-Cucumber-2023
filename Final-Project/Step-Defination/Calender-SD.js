const { Then } = require("@wdio/cucumber-framework");
const landingPage = require("../Pages/LandingPage");
const moment = require("moment/moment");
const { expect } = require("chai");

const calendar = new landingPage();

Then(/^I verify past dates in current month are disabled$/, async function () {
  
    const currentMonthYear = moment().format('MMMM yyyy');
    const currentDate = moment().format('D');
    await calendar.goToCalendar(currentMonthYear);
    const disabledDateCount = await calendar.disabledDatesCount(currentMonthYear);
    expect(currentDate - 1, 'Number of disbaled dates are not as expected').to.be.equal(disabledDateCount)

});