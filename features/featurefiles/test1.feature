Feature: Launch the google page

    Scenario Outline: Launch the google page
        Given user navigate to the "<GooglePage>" page
        Then I enter the "<data>" in googleEdit field
        Then I click on googleSearch button
        Given I enter all fields in BS page for CC "data","data2","data","data2","data","data2","data","data2"

        Examples:
            | GooglePage | data    |
            | GooglePage | testing |