describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to homepage", () => {
    cy.contains("Menu").should("be.visible");
    cy.contains("Custom Order").should("be.visible");
    cy.contains("Demo Drive").should("be.visible");
  });

  it("", () => {});
});
