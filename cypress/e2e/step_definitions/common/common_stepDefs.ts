/// <reference types="cypress-xpath" />
import {
  Given,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { Navigations } from '../../page-Objects/common/navigations.page'
import { CommonMethods } from '../../page-Objects/common/common.page'

const common = new CommonMethods()
const navigate = new Navigations()

Given('Navigate to admin page', () => {
  navigate.navigateToAdminPage()
})

Given('Login to application', () => {
  common.loginToApplication()
})

Then('Validate success message', () => {
  common.verifySuccessMessage()
})
