Feature: Rozetka Cucumber.js Autotests

    Background:
        Given the user is on the Rozetka>Notebook page

    Scenario: User is able to sets the products filter by price
        When the user sets the price range from "200" to "2000" 
        Then the user is able to see the added min and max price


