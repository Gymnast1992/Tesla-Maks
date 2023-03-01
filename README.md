# Tesla Cypress UI test framework

## Requirements:
1.Node version 14+

## How to set up framework:
1.Clone the repository - ```git clone git@github.com:Gymnast1992/tesla.git```
2.Install all dependencies - ```npm i```

## How to run tests:
1.Non-headless - ```npx cypress open```
2.Headless - ```./node_modules/.bin/cypress run```

To-do:
1.Ask devs to add unique attributes for all actionable items (buttons, text fields, drop downs, etc + text that is on the page);
2.Create data over api or seed through db in order to avoid ata test colision(when many test work with the same dtat or user use the same data

Per best practices: All tests should be isolated 

##Faker
How to import:
import { faker } from '@faker-js/faker';