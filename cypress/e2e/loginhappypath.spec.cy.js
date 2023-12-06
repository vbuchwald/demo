describe('loginhappypath', () => {
  it('loginhappypath', () => {
    cy.log('WHEN a User opens the login page')
    cy.visit('https://www.saucedemo.com')
    cy.log('AND types the username')
    cy.get('[id="user-name"]').type("standard_user")
    cy.log('AND types the password')
    cy.get('[id="password"]').type("secret_sauce")
    cy.log('AND clicks the [Login] button')
    cy.get('[id="login-button"]').click()
    cy.log('THEN the Inventory page is opened.')
    cy.url().should("contain","inventory")
  })
})