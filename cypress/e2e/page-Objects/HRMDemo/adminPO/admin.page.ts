import { faker } from '@faker-js/faker'
import userInfo = require('../../../../fixtures/HRMDemoData/userDetails.json')
import emp from '../../../../fixtures/HRMDemoData/employeeEnum'

export class AdminPage {
  private readonly password =
    faker.internet.password()

  clickAdd = () =>
    cy.get(userInfo.locator.add_btn).click()

  selectUserRole = () => {
    cy.get(userInfo.locator.userRole_DD).click()
    cy.get(userInfo.locator.option_DD)
      .contains(emp.userRole)
      .click()
  }

  selectStatus = () => {
    cy.get(userInfo.locator.status_DD).click()
    cy.get(userInfo.locator.option_DD)
      .contains(emp.status)
      .click()
  }

  enterEmployeeName = () => {
    cy.get(
      userInfo.locator.employeeName_Textfield
    ).type(emp.employeeName)
    cy.get(userInfo.locator.option_DD, {
      timeout: 5000
    })
      .eq(0)
      .click()
  }

  enterUsername = () =>
    cy
      .get(userInfo.locator.username_Textfield)
      .type(faker.internet.userName())

  enterPasswords = () => {
    cy.get(userInfo.locator.password_Textfield)
      .eq(0)
      .type(emp.password)
    cy.get(userInfo.locator.password_Textfield)
      .eq(1)
      .type(emp.password)
    return this
  }

  clickSaveEmployeeDetails = () =>
    cy.get(userInfo.locator.save_btn).click()
}
