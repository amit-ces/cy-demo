import { When } from '@badeball/cypress-cucumber-preprocessor'
import { AdminPage } from '../../page-Objects/HRMDemo/adminPO/admin.page'

const admin = new AdminPage()

When('click on Add button', () => {
  admin.clickAdd()
})

When('Fill user details', () => {
  admin.selectUserRole()
  admin.selectStatus()
  admin.enterEmployeeName()
  admin.enterUsername()
  admin.enterPasswords()
})

When('Click on Save button to add user', () => {
  admin.clickSaveEmployeeDetails()
})
