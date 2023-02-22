import Homepage from "../../fixtures/pom/homepage/homepage.page";
import SideMenu from "../../fixtures/pom/side-menu/side.menu.page";

describe("Side Menu", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should verify the amount of items in the sideMenu section", () => {
    Homepage.buttonMenu.click();
    SideMenu.sideMenuItems.should('have.length', 21);
  });
});
