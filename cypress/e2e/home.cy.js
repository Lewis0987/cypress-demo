
describe('Home page popups', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.closePopupIfExists()
  })

  it('should enter hall', () => {
    cy.url().should('include', '/hall')
  })

})


