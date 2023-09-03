import ecomm = require('../../../fixtures/eComm/eCommDetails.json')
import cart = require('../../../fixtures/eComm/eCommCart.json')

export class ECommSearchPage {
  getItemName() {
    cy.log('Print product names on loading page')
    cy.get(ecomm.locators.allProducts).each(
      ($el) => {
        cy.wrap($el)
          .find(ecomm.locators.itemName)
          .should('be.visible')

        cy.wrap($el)
          .find(ecomm.locators.itemName)
          .invoke('text')
          .then((text1) => {
            cy.log(text1) //  Save Item
          })
      }
    )
  }

  addDiscountedProduct() {
    cy.log('Add discounted Product to Cart')

    cy.get(ecomm.locators.itemDetails).each(
      ($el) => {
        cy.wrap($el)
          .find(ecomm.locators.itemPrice)
          .then(($span) => {
            if (
              $span.hasClass(
                ecomm.locators.itemOldPrice
              )
            ) {
              cy.wrap($el)
                .find(
                  ecomm.locators.addToCart_Btn
                )
                .click() //  Save Item
              cy.log('Add to Cart - Clicked')

              cy.wrap($el)
                .find(
                  ecomm.locators
                    .itemName_InsideDetails
                )
                .invoke('text')
                .then((text1) => {
                  cy.log('Item Name..::', text1)
                  const nameOfItem: string = text1

                  cy.wrap(nameOfItem).as(
                    'nameOfItem'
                  )
                })
              cy.get('@nameOfItem').then(
                (itemName: any) => {
                  cy.log(
                    'Name Of Item is 22::' +
                      itemName
                  )
                }
              )
            }
          })
      }
    )
  }

  checkProductInCart() {
    this.navigateToCart()
    // cy.get(cart.locator.cart_btn).click()

    cy.get('@nameOfItem').then(
      (itemName: any) => {
        cy.log('Name Of Item IS 33::' + itemName)
        cy.get(
          cart.locator.added_productName_Cart
        )
          .invoke('text')
          .then((ProductName) => {
            expect(ProductName).to.be.eq(
              itemName,
              'Product Name Matches'
            )
          })
      }
    )
  }

  navigateToCart() {
    cy.intercept('GET', '**/cart').as('cartApi')
    cy.get(cart.locator.cart_btn).click()
    cy.wait('@cartApi')
  }
}
