/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login.
     * @example cy.login('username', 'password')
     */
    login(
      username: string,
      password: string,
    ): void
  }
}
