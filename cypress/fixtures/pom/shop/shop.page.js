class Shop {
  get categoryMenu() {
    return cy.get(".category-menu .tds-site-nav-item");
  }
  get buttonMenu() {
    return cy.contains("Menu");
  }
  get buttonRegionNorthAmerica() {
    return cy.get(
      ".region--north-america > .tds-locale-selector-region > :nth-child(1) > :nth-child(1) > .tds-locale-selector-column > .locale-card > .tds-link"
    );
  }

  navigateToSideMenuItem(item) {
    this.categoryMenu.each((element) => {
      if (element.text().includes(item)) {
        cy.contains(item).click({ force: true });
      }
    });
  }
}

export default new Shop();
