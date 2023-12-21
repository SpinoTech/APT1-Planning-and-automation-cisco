/// <reference types="cypress" />
import generalFunctionalities from "../pageObjects/UniversalFuncModels";

describe('HSBC Login Test Scenario', () => {
    const obj = new generalFunctionalities();
    beforeEach(() => {
        obj.LaunchApp("https://www.hsbc.co.in/"); // launching the app
    });

    it('Validate HSBC Bank Logo', () => {
        obj.validateitem('img[src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"]'); // validating the logo
    });

    it('Validate Home Page Title', () => {
        obj.validateHomePageTitle('HSBC India - Credit Cards, NRI Services, Saving and Deposit') // validating the homepage title
    });

    it('Login page testing',()=>{
        obj.clickOn(":nth-child(5) > .header-dropdown > .selected-item"); // clicking on the logON button
        obj.validateText('.col-sm-12 > .pull-left > span', 'Log On'); // validating Log On text
        obj.validateitem(':nth-child(5) > .col-sm-12 > button')  //validating the continue button
        obj.validateStatus(':nth-child(5) > .col-sm-12 > button' , 'be.disabled') // checking the button status (disabled)
        obj.typeSomthing('#username','dummyEmail@gmail.com')//Type any random email in the username field
        obj.validateStatus(':nth-child(5) > .col-sm-12 > button' , 'not.be.disabled') // checking the button status (enabled)
        obj.validateStatus('#rememberMe','not.be.checked')//Validate Remember me check box is not checked by default
        obj.validateitem('#username_help_link > [role="text"] > .icon')//Validate there is a question mark tooltip present on the page
        obj.clickOn('#username_help_link > [role="text"] > .icon')//Click on the tooltip
        obj.validateText('.t16b > span','Username') // Now validate the username header in the new pop-up screen
        obj.validateitem('.close-btn > [role="text"] > .icon')//Validate there is a Close button in the new pop-up screen
        obj.clickOn('.close-btn > [role="text"] > .icon')//Click on the close button present in the new pop-up screen
    })

})