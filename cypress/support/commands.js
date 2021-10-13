Cypress.Commands.add('login',(userName, password) =>{
    cy.get('#ap_email').type(userName)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
})

Cypress.Commands.add('logout',() =>{
    cy.get('#nav-link-accountList').invoke('show')
    cy.contains('Sign').click({force: true})
})