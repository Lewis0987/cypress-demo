// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
Cypress.Commands.add('loginByToken', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      win.localStorage.setItem('token', Cypress.env('TOKEN'))
    }
  })
})


/*Cypress.Commands.add('closePopupIfExists', () => {
  cy.get('body').then($body => {

      // Subscribe popup
    if ($body.find("button:contains('Later')").length) {
      cy.contains('button', 'Later').click()
    }

    // 首充 / 輪盤 popup
    if ($body.find("img[alt='ic_close']").length) {
      cy.get("img[alt='ic_close']").first().click({ force: true })
    }

  })
})
*/