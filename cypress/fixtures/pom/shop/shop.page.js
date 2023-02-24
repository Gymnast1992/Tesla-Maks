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
  get sectionBestSellers() {
    return cy.get(
      "#category--lifestyle--lifestyle_best .product-tile__container"
    );
  }
  get buttonShop() {return cy.contains('Shop')}
  get buttonLifestyle() {return cy.contains('Lifestyle')}

  navigateToSideMenuItem(item) {
    this.categoryMenu.each((element) => {
      if (element.text().includes(item)) {
        cy.contains(item).click({ force: true });
      }
    });
  }

  navigateToTheLifeStyleSection(){
    this.buttonShop.click({force: true});
    this.buttonLifestyle.click({force: true});
  }
}

export default new Shop();
