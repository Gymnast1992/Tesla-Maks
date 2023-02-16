import Homepage from "../../fixtures/pom/homepage/homepage.page"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to homepage", () => {
    Homepage.buttonMenu.should("be.visible");
    Homepage.buttonCustomerOrder.should("be.visible");
    Homepage.buttonDemoDrive.should("be.visible");
  });
});
