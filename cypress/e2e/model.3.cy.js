describe("Model 3", () => {
  beforeEach(() => {
    cy.visit("/model3");
  });

  it("Should verify the price of the Model 3 Rear-Wheel Drive", () => {
    cy.contains("Order Now").click({ force: true });
    cy.get('[for="$MT322-Model 3"]').should(
      "have.text",
      "Rear-Wheel DriveModel 3$43,490"
    );
  });

  it("Should navigate to the Model 3 payment page", () => {
    cy.contains("Order Now").click({ force: true });
    cy.contains("Continue to Payment").click();
    cy.get('[class="cf-h2-title tds-text--center"]').should(
      "have.text",
      "Your Model 3"
    );
    cy.get('[value="CREDITCARD"]').should("have.text", "Order with Card");
  });
});
