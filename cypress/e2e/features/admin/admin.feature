Feature: Admin Page

    Admin Page Functionalities

Background: Login to application
    Given Login to application

Scenario: TC-01 Validate adding a new user from admin page components
    Given Navigate to admin page
    When click on Add button
    When Fill user details
    When Click on Save button to add user
    Then Validate success message

# Scenario Outline: Scenario Outline name