import { faker } from '@faker-js/faker'
/// <referenc types="cypress" />
/// <referenc types="cypress-xpath" />

export class AdminPage {
  private readonly userInfo = require('../../../fixtures/userDetails')
  private readonly password =
    faker.internet.password()

  private readonly add_btn =
    'button.oxd-button--medium.oxd-button--secondary[type="button"]'

  private readonly addUser_Heading =
    '.orangehrm-main-title'

  private readonly userRole_DD =
    'div[class*="input-group"]:has(label:contains("User Role")) div[class*="oxd-select-text--active"]'

  private readonly option_DD =
    '[role="listbox"] [role="option"] span'

  private readonly status_DD =
    'div[class*="input-group"]:has(label:contains("Status")) div[class*="oxd-select-text--active"]'

  private readonly employeeName_Textfield =
    'input[placeholder="Type for hints..."]'

  private readonly username_Textfield =
    'div[class*="input-group"]:has(label:contains("Username")) input[class*="oxd-input--active"]'

  private readonly password_Textfield =
    'input[type="password"]'

  private readonly save_btn = '[type="submit"]'

  clickAdd() {
    return cy.get(this.add_btn).click()
  }

  selectUserRole() {
    cy.get(this.userRole_DD).click()
    cy.get(this.option_DD)
      .contains(this.userInfo.userRole)
      .click()
    return this
  }

  selectStatus() {
    cy.get(this.status_DD).click()
    cy.get(this.option_DD)
      .contains(this.userInfo.status)
      .click()
    return this
  }

  enterEmployeeName() {
    cy.get(this.employeeName_Textfield).type(
      this.userInfo.employeeName
    )
    cy.get(this.option_DD, {
      timeout: 5000
    })
      .eq(0)
      .click()
    return this
  }

  enterUsername() {
    return cy
      .get(this.username_Textfield)
      .type(faker.internet.userName())
  }

  enterPasswords() {
    cy.get(this.password_Textfield)
      .eq(0)
      .type(this.password)
    cy.get(this.password_Textfield)
      .eq(1)
      .type(this.password)
    return this
  }

  clickSaveEmployeeDetails() {
    return cy.get(this.save_btn).click()
  }
}
