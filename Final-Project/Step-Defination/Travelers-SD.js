const { When, Then } = require("@wdio/cucumber-framework");
const landingPage = require("../Pages/LandingPage");
const { expect } = require("chai");


const travelers = new landingPage;

When (/^I change (.+) count to (.+)$/, async function(field, count)
{
    switch (field) {

        case 'children':
            await travelers.selectChildren(count);
    
        default:
            break;
    }
})

Then(/^I verify Children age dropdown are (.+)$/,async function(age){
    
    switch (age) {
        case '2':
            const child2Dropdown = await travelers.child2DropdownDisplayed()
            expect(child2Dropdown,'Child2 drop down not displayed').to.be.true;
            break;
        case '5':
            const child5Dropdown = await travelers.child5DropdownDisplayed()
            expect(child5Dropdown,'Child2 drop down not displayed').to.be.true;
            break;

        default:
            break;
    }

})












Then(/^I verify plus button is enabled$/,async function(){
    const plusButtonEnable = await travelers.plusButtonEnable();
    expect(plusButtonEnable,'Plus button not Enable').to.be.true;

})

Then(/^I verify minus button is enabled$/,async function(){
    const minusButtonEnable = await travelers.minusButtonEnable();
    expect(minusButtonEnable,'Minus button not Enable').to.be.true;

})


Then(/^I verify plus button is disable$/,async function(){
    const plusButtondisable = await travelers.plusButtonEnable();
    expect(!plusButtondisable,'Plus button Enable').to.be.true;

})



Then(/^I verify minus button is disable$/,async function(){
    const minusButtondisable = await travelers.minusButtonEnable();
    expect(!minusButtondisable,'Minus button not disable').to.be.true;

})


Then(/^I verify Children age dropdown is NOT displayed$/,async function(){
    const noDropdownDiplayed = await travelers.NoChildDropdown();
    expect(!noDropdownDiplayed,'There is child age dropdown').to.be.true;

})