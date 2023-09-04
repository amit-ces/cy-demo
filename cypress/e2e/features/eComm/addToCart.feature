Feature: Add to cart with different discount

    Background: Login to application
        Given Navigate to ecomm India website

    Scenario: TC-02 - Add items with qty 2 and having 21 dicount and qty 1 with 8 discount
        # When User search for "mobiles phones under 1200"
        When User checks all products in list
        When User search for discounted product
        Then Verify added items in Cart
