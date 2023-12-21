/// <reference types="cypress"/>

describe('testing started',()=>{
    beforeEach('launch the app',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login')
    })

    it('Enter the credentials',()=>{
    //  validatio starts for login page 
       cy.title().should('eq','Your store. Login')
    // validation ends for login page 
        cy.get('#Email').clear()
       cy.get('#Email').type('admin@yourstore.com')
       cy.get('#Password').clear()
       cy.get('#Password').type('admin')
       cy.get('#RememberMe').check()
       cy.get("button[type='submit']").click()
       //  validatio starts for dashbord page 
       cy.title().should('eq','Dashboard / nopCommerce administration')
       // validation ends for dashbord page 
       cy.wait(5000)
       cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
    })
})