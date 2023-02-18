import Homepage from "../../fixtures/pom/homepage/homepage.page";
import SideMenu from "../../fixtures/pom/side-menu/side.menu.page";

describe("Side Menu", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should loop through side menu items and click on the item with name Roadster", () => {
    Homepage.buttonMenu.click();
    SideMenu.sideMenuItems.should("have.length", 22);
    SideMenu.navigateToSideMenuItem('ROADSTER');
  });
});
