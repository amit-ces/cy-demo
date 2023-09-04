import loginInfo = require('../../../fixtures/HRMDemoData/loginDetails.json')

export class OrangeLogin {
  enterUsername() {
    return cy
      .get(loginInfo.locator.username)
      .type(loginInfo.data.username)
  }

  enterPassword() {
    return cy
      .get(loginInfo.locator.password)
      .type(loginInfo.data.password)
  }

  clickLogin() {
    return cy
      .xpath(loginInfo.locator.loginBtn)
      .click()
  }
}
