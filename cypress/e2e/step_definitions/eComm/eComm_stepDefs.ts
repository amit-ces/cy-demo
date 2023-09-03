import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { ECommSearchPage } from '../../page-Objects/eCommPO/eComm.page'
const ecomm = new ECommSearchPage()

When('User checks all products in list', () => {
  ecomm.getItemName()
})

When('User search for discounted product', () => {
  ecomm.addDiscountedProduct()
})

Then('Verify added items in Cart', () => {
  ecomm.checkProductInCart()
})
