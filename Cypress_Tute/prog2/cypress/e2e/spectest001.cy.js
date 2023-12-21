// creating our own script 
/// <reference types="cypress"/>

describe('opencart sign page',()=>{
    beforeEach('invoke opencart ',()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
    })

    let n=10;
    while(n--){
    it('type to',()=>{
        console.log("hello")
        cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("name is phaldar")
        cy.get(':nth-child(3) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('this is the last name')
        cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('9835678920')
        cy.get('#userName').type('xyz@gmail.com')
        cy.get(':nth-child(7) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('sdbcskjdcdskcs.dcksm,s,.cdscmkjdvnscs.dsvns.dvsd.v,v,sdc,w,vre,v,rev,e,vev,,v,,brt,brt,b,t,b,')
        cy.get(':nth-child(8) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('kolkata')
        cy.get(':nth-child(9) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('west bengal')
        cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('9384756')
        cy.get('select').select('RUSSIA')
        cy.get('#email').type("xyzpqr@gmail.com")
        cy.get(':nth-child(14) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("12345678765432345671234567876543234567")
        cy.get(':nth-child(15) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("12345678765432345671234567876543234567")

        // cy.wait(3000)
        cy.get(':nth-child(17) > td > input').click()

        cy.get('td > :nth-child(2) > font > a').click()

        cy.get(':nth-child(1) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("xyzpqr@gmail.com")
        cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("12345678765432345671234567876543234567")
        cy.get(':nth-child(4) > td > input').click()


        cy.get(':nth-child(1) > [width="80"] > font > a').click()
        cy.get(':nth-child(2) > [width="80"] > a').click()
        cy.get(':nth-child(3) > [width="80"] > a').click()
        cy.get(':nth-child(4) > [width="80"] > font > a').click()
        cy.get(':nth-child(5) > [width="80"] > a').click()
        cy.get(':nth-child(6) > [width="80"] > a').click()
        cy.get(':nth-child(7) > [width="80"] > a').click()

        cy.get('.top-banner > table > tbody > tr > :nth-child(1) > :nth-child(1) > img').click()
    })
    }
})

