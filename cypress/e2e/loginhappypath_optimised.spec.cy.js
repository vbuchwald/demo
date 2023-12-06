import Users from '../fixtures/user.json'
import LoginPage from '../page-object/loginpage.js'
import InventoryPage from '../page-object/inventorypage.js'


describe('loginhappypath', () => {

  const USER = Users.happyPathUser

  it('loginhappypath', () => {
    cy.log('WHEN a User opens the login page')
    LoginPage.open()
    cy.log('AND types the username')
    LoginPage.userNameInputField.type(USER.name)
    cy.log('AND types the password')
    LoginPage.passwordInputField.type(USER.password)
    cy.log('AND clicks the [Login] button')
    LoginPage.loginButton.click()
    cy.log('THEN the Inventory page is opened.')
    InventoryPage.isInventoryPage()
  })
})