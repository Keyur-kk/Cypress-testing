/// <reference types="cypress" />

describe ('Login Page Check', () => {
    it('The webpage loads fine', () => {
        //cy.visit('http://localhost:3000/')
        cy.visit('http://localhost:4200/')   
   
    })
    it('Unsuccessful login should display correct error', () => {

        cy.wait(3000)
        cy.contains('Email').click()
        .type('ktrivedi906@gmail.com')
        cy.wait(2000)

        cy.contains('Password').click()
        .type('testing1234!@#$')
        cy.wait(2000)

        cy.contains('Submit')
        .click()

        cy.contains('Incorrect username or password')

    })
    it('successful login should work fine', () => {
        cy.visit('/')
        cy.wait(3000)
        cy.contains('Email').click()
        .type('ktrivedi906@gmail.com')
        cy.wait(2000)

        cy.contains('Password').click()
        .type('Computer@12')
        cy.wait(2000)

        cy.contains('Submit')
        .click()
        cy.wait(3000)

        cy.log('Successful login works!')
        cy.contains('homepage works!')
        //cy.wait(4000)

    //it('The login page links works', () => {
       // cy.visit('/')
        cy.wait(2000)
        cy.contains('#gc-tctr > :nth-child(1)','Terms and conditions')
        .click()
        cy.wait(2000)
        cy.contains('h1', 'Web Experience Toolkit (WET) - Terms and Conditions of Use')
        cy.wait(1500)

        //cy.visit('/')
       cy.go('back')
       cy.wait(2000)
        cy.contains('#gc-tctr > :nth-child(2)', 'Transparency')
        .click()
        cy.contains('h1', 'Transparency: Treasury Board of Canada Secretariat')
        cy.wait(2000)
        cy.go('back')
        
        cy.contains('Sign out')
        .click()

        //cy.visit('/')
       

    })
})        


   /* it('mobile test', () => {
        cy.viewport ('iphone-x')
        cy.visit('http://localhost:4200/')
    })*/
