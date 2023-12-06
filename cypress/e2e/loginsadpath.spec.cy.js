describe('loginsadpath', () => {
    it('loginsadpath', () => {
      cy.log('WHEN a User opens the login page')
      cy.visit('/')
      cy.log('AND types the username')
      cy.get('[id="user-name"]').type("locked_out_user")
      cy.log('AND types the password')
      cy.get('[id="password"]').type("secret_sauce")
      cy.log('AND clicks the [Login] button')
      cy.get('[id="login-button"]').click()
      cy.log('THEN the error message is displayed.')
      cy.get('[data-test="error"]').should("contain","Epic sadface: Sorry, this user has been locked out.")
    })
  })