class Model3 {
    get buttonOrderNow() {return cy.contains("Order Now")}
    get buttinContinueToPayment() {return cy.contains("Continue to Payment")}
    get textYourModel3() {return cy.get('[class="cf-h2-title tds-text--center"]')}
    get buttonOrderWithCard() {return cy.get('[value="CREDITCARD"]')}
    get fieldRearWheelDrive() {return cy.get('[for="$MT322-Model 3"]')}
    get textModel3() {return cy.contains('Model 3')}
}

export default new Model3()