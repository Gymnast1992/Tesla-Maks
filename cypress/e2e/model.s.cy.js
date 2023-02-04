describe("Model S", () => {
  beforeEach(() => {
    cy.visit("/models");
  });

  it("Should verify the price of the Model S Dual Motor All-Wheel Drive", () => {
    cy.contains("Order Now").click({ force: true });
    cy.get('[for="$MTS13-Model S"]').should(
      "have.text",
      "Dual Motor All-Wheel DriveModel S$94,990"
    );
  });

  it.only("Should verify the price of the Model S Tri Motor All-Wheel Drive", () => {
    cy.contains("Order Now").click({ force: true });
    cy.get('[for="$MTS14-Model S Plaid"]').should(
      "have.text",
      "Tri Motor All-Wheel DriveModel S Plaid$114,990"
    );
  });
});
