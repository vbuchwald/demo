import Users from '../fixtures/user.json'
import LoginPage from '../page-object/loginpage'

describe('loginsadpath', () => {

const USER = Users.sadPathUser, 
      ERROR_MESSAGE = "Epic sadface: Sorry, this user has been locked out."

    it('loginsadpath', () => {
      cy.log('WHEN a User opens the login page')
      LoginPage.open()
      cy.log('AND types the username')
      LoginPage.userNameInputField.type(USER.name)
      cy.log('AND types the password')
      LoginPage.passwordInputField.type(USER.password)
      cy.log('AND clicks the [Login] button')
      LoginPage.loginButton.click()
      cy.log('THEN the error message is displayed.')
      LoginPage.errorMessage.should("contain", ERROR_MESSAGE)
    })
  })