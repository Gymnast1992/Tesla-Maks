class SignInPage {
    get buttonCreateAccount() {return cy.get('[id="form-button-create"]')}
    get inputEmail() {return cy.get('[id="form-input-identity"]')}
    get buttonNext() {return cy.get('[id="form-submit-continue"]')}
    get inputPassword() {return cy.get('[id="form-input-credential"]')}
    get buttonSignIn() {return cy.get('[id="form-submit-continue"]')}
}

export default new SignInPage()