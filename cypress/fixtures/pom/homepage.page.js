class Homepage {
    get buttonMenu() {return cy.contains("Menu")}
    get buttonCustomerOrder() {return cy.contains("Custom Order")}
    get buttonDemoDrive() {return cy.contains("Demo Drive")}
}

export default new Homepage()