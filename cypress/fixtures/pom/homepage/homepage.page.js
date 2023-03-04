class Homepage {
    get buttonMenu() {return cy.contains("Menu")}
    get buttonCustomerOrder() {return cy.contains("Custom Order")}
    get buttonDemoDrive() {return cy.contains("Demo Drive")}
    get fullPage() {return cy.get('.tds-shell')}
    get buttonContact() {return cy.contains('Contact')}
}

export default new Homepage()