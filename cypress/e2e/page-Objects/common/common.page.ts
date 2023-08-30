export class CommonMethods {
  private readonly loginInfo = require('../../../fixtures/loginDetails')

  private readonly successMessage =
    '.oxd-toast-content--success .oxd-text--toast-title'

  loginToApplication() {
    cy.visit('/')
    cy.login(
      this.loginInfo.username,
      this.loginInfo.password
    )
  }

  verifySuccessMessage() {
    cy.get(this.successMessage, {
      timeout: 5000
    }).should('have.text', 'Success')
  }
}
