class Shop {
  get fourShopSections() {
    return cy.get(".nav-mobile-categories");
  }
  get buttonMenu() {
    return cy.contains("Menu");
  }
  get buttonRegionNorthAmerica() {
    return cy.get(
      ".region--north-america > .tds-locale-selector-region > :nth-child(1) > :nth-child(1) > .tds-locale-selector-column > .locale-card > .tds-link"
    );
  }

  navigateToSideMenuItem() {
    const menuItems = {};

    this.fourShopSections.forEach(item => {
      menuItems[item.getText()] = item;
    });
    console.log(menuItems);

    // menuItems[menuItemText].click();
  }
}

export default new Shop();