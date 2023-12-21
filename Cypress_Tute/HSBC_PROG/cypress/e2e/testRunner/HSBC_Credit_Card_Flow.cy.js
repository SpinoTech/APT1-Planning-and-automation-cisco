/// <reference types="cypress" />

import generalFunctionalities from "../pageObjects/UniversalFuncModels";

describe('HSBC Credit Card Flow', () => {
    const obj = new generalFunctionalities();
    beforeEach(() => {
        obj.LaunchApp("https://www.hsbc.co.in/"); // launching the app
    });
    it('credit card testing part', () => {
        // obj.hoverOver("li.header-main-navigation-item:eq(0)") //Hover cursor on Banking menu navigation
        obj.clickOn('li.header-main-navigation-item:eq(0)');
        cy.wait(1000)
        obj.LaunchApp('https://www.hsbc.co.in/credit-cards/features/');
        obj.validateText('.A-TYP38L-RW-ALL', 'Credit Card')//Validate Credit Card as a header text
        obj.validateitem('#content_main_button_1')//Validate Apply Now button
        obj.clickOn('.A-PAR16R-RW-ALL > a')
        obj.validateImg('#listing_main_image_3', 'alt', 'HSBC Visa Cashback Credit Card')//Validate first credit Card image attribute is HSBC Visa Cashback Credit Card
        obj.validateText('#listing_main_creditCardProductModule_1 > .product-general > .md-8 > .A-LNKND38L-RW-ALL', ' HSBC Cashback Credit Card')//Validate first credit Card header text is HSBC Cashback Credit Card
        obj.validateitem('#listing_main_button_1')//Validate first credit Card has attached Compare cards button
        obj.validateitem('#listing_main_button_2')//Validate first credit Card has attached Find out more button
        obj.validateitem('#listing_main_button_3')//Validate first credit Card has attached Apply now button
        obj.clickOn('#listing_main_button_1')//Click on First Credit card’s Compare cards button
        obj.validateitem('.close-button')// Validate the new pop up has a close button
        obj.validateText('#title-pp_tools_productComparator_4', 'Select cards to compare')//Validate Select cards to compare is header of the pop up
        obj.validateText('#subtitle-pp_tools_productComparator_5', '4')// Check that there are four credit cards options are available in the pop up to compare
        // Check first and second Credit Card checkbox to compare
        obj.clickOn('.modal-checkbox:eq(0)'); // for the first checkbox
        obj.clickOn('.modal-checkbox:eq(1)'); // for the second checkbox
        obj.clickOn('.A-BTNP-RW-ALL'); //Click on Compare button
        obj.selectedProductCount('.product-select-container > .product-select', '.product-select-container > .add-product', 4, 2) //Validate total two credit cards have been selected
        //Validate two remove links are present for both the credit card
        for (let i = 1; i <= 2; i++) {
            obj.validateitem(`:nth-child(${i}) > .A-TYPS7R-RW-DEV`)
        }
        obj.clickOn(':nth-child(3) > .A-TYPS7R-RW-DEV')//Click on Add card link
        obj.clickOn('.modal-checkbox:eq(2)'); // for the third checkbox
        obj.clickOn('.A-BTNP-RW-ALL'); //Click on Compare button
        obj.selectedProductCount('.product-select-container > .product-select', '.product-select-container > .add-product', 4, 1)//Now validate total three credit cards have been selected
        // Validate total three remove links are present
        for (let i = 1; i <= 3; i++) {
            obj.validateitem(`:nth-child(${i}) > .A-TYPS7R-RW-DEV`)
        }
        obj.clickOn(':nth-child(3) > .A-TYPS7R-RW-DEV')//Click on the last remove link
        obj.selectedProductCount('.product-select-container > .product-select', '.product-select-container > .add-product', 4, 2) // Now only two credit card options should available in the page
        obj.clickOn(':nth-child(3) > .A-TYPS7R-RW-DEV')// Again click on Add card link
        obj.clickOn('.close-button')//In pop-up, click on close button
        obj.selectedProductCount('.product-select-container > .product-select', '.product-select-container > .add-product', 4, 2) // Now only two credit card options should available in the page
        // and that is validating that we are in the main page after clickig the pop-up close button 
    })
})