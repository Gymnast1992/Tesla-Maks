class ModelS {
    get buttonOrderNow() {return cy.contains("Order Now")}
    get textPlaid() {return cy.contains('Plaid')}
}

export default new ModelS()