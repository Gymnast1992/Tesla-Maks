class SideMenu {
  get buttonAccount() {
    return cy.get('[href="/teslaaccount"]');
  }
  get sideMenuItems() {
    return cy.get('.tds-site-nav-items--vertical .tds-site-nav-item-text');
  }
}

export default new SideMenu();
