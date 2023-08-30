export class Navigations {
  private readonly pageTitle = 'h6'
  private readonly menuItems = 'a > span'

  navigateToDashboardPage() {
    cy.get(this.menuItems)
      .contains('Dashboard')
      .click()
    cy.get(this.pageTitle).contains('Dashboard')
  }

  navigateToAdminPage() {
    cy.get(this.menuItems)
      .contains('Admin')
      .click()
    cy.get(this.pageTitle).contains('Admin')
  }
}
