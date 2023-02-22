class SideMenu {
  get buttonAccount() {
    return cy.get('[href="/teslaaccount"]');
  }
  get sideMenuItems() {
    return cy.get(".tds-modal-content .tds-site-nav-item");
  }
}

export default new SideMenu();
