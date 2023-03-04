import Homepage from "../../fixtures/pom/homepage/homepage.page";
import Contacts from "../../fixtures/pom/homepage/contacts.page";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to homepage", () => {
    Homepage.buttonMenu.should("be.visible");
    Homepage.buttonCustomerOrder.should("be.visible");
    Homepage.buttonDemoDrive.should("be.visible");
  });

  it("Should navigate to the Contact page", () => {
    Homepage.fullPage.scrollTo('bottom');
    Homepage.buttonContact.click({force: true});
    Contacts.h1.should('contain.text', 'Contact');
    Contacts.sectionTeslaHQTexas
      .should('contain.text', 'Tesla Headquarters - Gigafactory Texas');
    Contacts.sectionTeslaHQTexas
      .should('contain.text', '1 Tesla Road')
    Contacts.sectionTeslaHQTexas
      .should('contain.text', 'Austin, TX 78725')    
  });
});
