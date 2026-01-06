//GUI 印出log token
describe('env test', () => {
  it('check token', () => {
    cy.log('TOKEN = ' + Cypress.env('TOKEN'))
  })
})