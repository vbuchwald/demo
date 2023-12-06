class LoginPage {

	open() {
		cy.visit('/')
	}

	get userNameInputField() {
		return cy.get('[id="user-name"]').should("be.visible")
	}
    get passwordInputField() {
        return cy.get('[id="password"]').should("be.visible")
    }
    get loginButton() {
        return cy.get('[id="login-button"]').should("be.visible")
    }
    get errorMessage() {
        return cy.get('[data-test="error"]').should("be.visible")
    }
}
export default new LoginPage()