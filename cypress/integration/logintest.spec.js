/// <reference types="cypress"/>

describe('Test login at Amazon webpage',()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('should login to the Amazon website',()=>{

        cy.fixture('loginData').then(function (data){

            this.data = data
            
            cy.login(this.data.userEmail, this.data.password)

            cy.get('#nav-link-accountList-nav-line-1').contains(this.data.userName)

            cy.logout()

            cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign-In')
        })
    })

    it('try login to the Amazon website with wrong password',()=>{

        cy.fixture('loginData').then(function (data){

            this.data = data
            cy.login(this.data.userEmail, this.data.wrongPassword)

            cy.get('#auth-error-message-box > .a-box-inner').contains(this.data.wrongPasswordCopy)

        })
    })

    it('try login to the Amazon website with wrong password',()=>{

        cy.fixture('loginData').then(function (data){

            this.data = data
            cy.login(this.data.userEmail, this.data.wrongUserEmail)

            cy.get('#auth-error-message-box > .a-box-inner').contains(this.data.wrongPasswordCopy)

        })
    })
})