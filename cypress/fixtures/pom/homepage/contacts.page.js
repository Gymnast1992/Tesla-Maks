class Contacts {
    get h1() {return cy.get('h1')}
    get h2() {return cy.get('h2')}
    get sectionTeslaHQTexas() {return cy.get('#tesla-rich-text-51594')}
}

export default new Contacts()