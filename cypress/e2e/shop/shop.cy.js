import Shop from "../../fixtures/pom/shop/shop.page";

describe("Shop", () => {
  beforeEach(() => {
    cy.visit("https://shop.tesla.com/");
  });

  it("Should navigate to the shop homepage", () => {
    cy.get('[href="/"]').should("contains.text", "Shop");
  });

  it("Should loop through the categoryMenu and click on the right item", () => {
    
    const item = "Charging";

    Shop.buttonRegionNorthAmerica.click({ force: true });
    Shop.buttonMenu.click();
    Shop.navigateToSideMenuItem(item);
  });

  it("Should loop through the best seller items in the LifeStyle section", () => {
    Shop.navigateToTheLifeStyleSection();
    Shop.sectionBestSellers.should('have.length', 3);
  });
});
