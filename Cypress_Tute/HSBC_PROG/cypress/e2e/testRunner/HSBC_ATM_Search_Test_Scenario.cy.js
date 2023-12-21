/// <reference types="cypress" />

import generalFunctionalities from "../pageObjects/UniversalFuncModels";

describe('HSBC ATM Search Test Scenario',()=>{
    const obj = new generalFunctionalities();
    beforeEach(() => {
        obj.LaunchApp("https://www.hsbc.co.in/"); // launching the app
    });
    it('scrool down to bottom',()=>{
        obj.scrollDownTo('bottom');
    })
    it('atm part',()=>{
        obj.clickOn("nav > .footer-large > :nth-child(2) > a") //Clicking on Find your nearest branch or ATM link in footer section
        obj.validateNewPageURL('/ways-to-bank/branches/'); //Validating in new page the URL has String = ‘/ways-to-bank/branches/’
        obj.validateText('h1[class="A-TYP38L-RW-ALL text-container text "]','Branches & ATM')//Validate Header as Branches & ATM
        obj.clickOn('a[id="content_main_button_1"]') //Clicking on before Branch & ATM Locator button
        obj.typeSomthing('#searchInput','india'); //Type country name as India
        cy.wait(2000); // waiting for the dropdown
        obj.typeSomthing('#searchInput','{enter}');//In drop-down option click option India
        obj.validateText('.jAgR1vyHAyAVW7gdvNl5r > :nth-child(3)',"Rajbhavan Road") //. Validate ATM Header name is showing as Rajbhavan Road
        obj.clickOn('._3VOnY-qV7atMV73oAncmTd')//Click on add Show more results button
        obj.validateText(':nth-child(2) > .jAgR1vyHAyAVW7gdvNl5r > ._1nAFRMoI28oPbmH36_mOM_ > ._3zecnNb8Kg2iB0lbqG6_sp > ._1OVu0dKjGeodXsBo3rrQ-i','2')//Check second ATM branch name tooltip as 2 in red color is getting displayed
        obj.validateitem('a[href="https://instagram.com/hsbc_in/"]')//Check Instagram in social media option in footer section
        obj.validateitem('a[href="https://www.facebook.com/HSBCIndia/"]') //Check Facebook in social media option in footer section
        obj.validateitem('a[href="https://www.twitter.com/HSBC_IN"]') //Check Twitter in social media option in footer section
        obj.validateitem('a[href="https://www.youtube.com/channel/UC3Nt_U6gzLlKdAL9Evq0KXQ/featured"]') //Check Youtube in social media option in footer section
        obj.clickOn('.header-logo > a > img')//Click on HSBC Logo
        obj.validateHomePageTitle("HSBC India - Credit Cards, NRI Services, Saving and Deposit")//. Validate page is navigating to home page by its title
        obj.scrollDownTo('bottom');//Scroll down to the bottom
        obj.validateitem('.lg-7 > .footer-supplementary > :nth-child(3) > a')//Checking Privacy link
        obj.clickOn('.lg-7 > .footer-supplementary > :nth-child(3) > a')//Clicking Privacy link
        obj.validateText('h1[class="A-TYP48T-RW-ALL text-container text "]','Privacy Statement') //Validate Privacy Statement as Header
    })
})