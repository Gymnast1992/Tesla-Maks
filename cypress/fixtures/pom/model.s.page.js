class ModelS {
    get buttonOrderNow() {return cy.contains("Order Now")}
    get textPlaid() {return cy.contains('Plaid')}
    get fieldDualMotorAllWheelDrive() {return cy.get('[for="$MTS13-Model S"]')}
    get fieldTriMotorAllWheelDrive() {return cy.get('[for="$MTS14-Model S Plaid"]')}
}

export default new ModelS()