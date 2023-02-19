import SideMenu from "../../fixtures/pom/side-menu/side.menu.page";
import Shop from "../../fixtures/pom/shop/shop.page";

describe("Shop", () => {
    beforeEach(() => {
      cy.visit("https://shop.tesla.com/");
    });
  
    it("Should navigate to the shop homepage", () => {
      cy.get('[href="/"]').should('contains.text', 'Shop')
    });

    it.only("Should loop through the menuContent and click on the right button", () => {
        Shop.buttonRegionNorthAmerica.click( {force: true});
        Shop.buttonMenu.click();
        Shop.fourShopSections.should('have.length', 4);
        Shop.navigateToSideMenuItem('CHARGING')
      });
  });