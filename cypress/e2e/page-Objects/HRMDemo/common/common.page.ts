import userInfo = require('../../../../fixtures/HRMDemoData/userDetails.json')
import ecomm = require('../../../../fixtures/eComm/eCommDetails.json')
import loginInfo = require('../../../../fixtures/HRMDemoData/loginDetails.json')
import emp from '../../../../fixtures/HRMDemoData/employeeEnum'

export class CommonMethods {
  loginToApplication() {
    cy.visit('/')
    cy.login(
      loginInfo.data.username,
      loginInfo.data.password
    )
  }

  verifySuccessMessage() {
    cy.get(userInfo.locator.successMessage, {
      timeout: 5000
    }).should('have.text', emp.successMessage)
  }

  openEcomm() {
    cy.visit(ecomm.appDetails.ecommURL)
  }
}
