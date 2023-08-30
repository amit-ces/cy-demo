/// <referenc types="cypress" />
/// <referenc types="cypress-xpath" />

export class OrangeLogin {
  private readonly username =
    '[placeholder="Username"]'

  private readonly password =
    '[placeholder="Password"]'

  private readonly loginBtn =
    '//button[@type="submit"]'

  enterUsername() {
    return cy.get(this.username).type('Admin')
  }

  enterPassword() {
    return cy.get(this.password).type('admin123')
  }

  clickLogin() {
    return cy.xpath(this.loginBtn).click()
  }
}
