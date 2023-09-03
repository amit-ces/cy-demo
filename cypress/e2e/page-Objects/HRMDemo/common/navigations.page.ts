import comm = require('../../../../fixtures/HRMDemoData/commonDetails.json')
import appLabel from '../../../../fixtures/HRMDemoData/appCommonEnum'

export class Navigations {
  navigateToDashboardPage() {
    cy.get(comm.navigationMenus.locator.menuItems)
      .contains(appLabel.dashboard)
      .click()
    cy.get(
      comm.navigationMenus.locator.pageTitle
    ).contains(appLabel.dashboard)
  }

  navigateToAdminPage() {
    //     cy.intercept('GET', '/cart').as('cartApi')
    // cy.get(cart.locator.cart_btn).click()
    // cy.wait('@cartApi')
    cy.intercept(
      'GET',
      '**/admin/viewSystemUsers'
    ).as('adminApi')
    cy.get(comm.navigationMenus.locator.menuItems)
      .contains(appLabel.admin)
      .click()
    cy.wait('@adminApi', { timeout: 10000 })
    cy.get(
      comm.navigationMenus.locator.pageTitle
    ).contains(appLabel.admin)
  }
}
