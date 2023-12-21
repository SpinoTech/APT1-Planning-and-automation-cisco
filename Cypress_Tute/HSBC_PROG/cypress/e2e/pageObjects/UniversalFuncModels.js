/// <reference types="cypress" />

class generalFunctionalities {

    // this function works for launching the url
    LaunchApp = (url) => {
        cy.visit(url);
    }
    // clicking functionality
    clickOn = (selector, multiple = false) => {
        if (multiple) {
            cy.get(selector).click({ multiple: true });
        } else {
            cy.get(selector).click();
        }
    };


    // typing functionallity
    typeSomthing = (selector, msg) => {
        const objClick = cy.get(selector);
        objClick.type(msg);
    }
    // just validate if the item is visible or not
    validateitem = (selector) => {
        cy.get(selector).should('be.visible');
    }
    // just validating if the item is desable or enable
    validateStatus(selector, status) {
        cy.get(selector).should(status);
    }
    // validating the page title
    validateHomePageTitle = (text) => {
        cy.title().should('eq', text);
    }
    // valodating the selected text
    validateText = (selector, text) => {
        cy.get(selector).contains(text);
    }
    // scrool to some position
    scrollDownTo(position) {
        cy.scrollTo(position);
    }
    // url checking (includes somthing or not)
    validateNewPageURL(url) {
        cy.url().should('include', url);
    }
    // hovering on somthing
    hoverOver(selector) {
        cy.get(selector).trigger('mouseover');
    }
    // validating the image attribute 
    validateImg = (selector , attribute , value) => {
        cy.get(selector).first().should('have.attr', attribute, value);
    }

    // checking the selected product count
    selectedProductCount=(totalSelector , nonSelectedSelector , totalValue , nonSelectedValue)=>{
        cy.get(totalSelector).its('length').should('eq',totalValue)
        cy.get(nonSelectedSelector).its('length').should('eq',nonSelectedValue);
    }
}


export default generalFunctionalities;