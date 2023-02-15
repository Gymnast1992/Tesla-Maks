class UserPage {
    get labelH1() {return cy.get('h1')}
    get buttonDashboard() {return cy.get('.tds-text--h3')}
    get buttonSignOut() {return cy.contains('Sign Out')}
}

export default new UserPage()