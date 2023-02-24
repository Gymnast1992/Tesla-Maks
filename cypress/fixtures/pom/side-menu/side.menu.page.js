class SideMenu {
  get buttonAccount() {
    return cy.get('[href="/teslaaccount"]');
  }
  get sideMenuItems() {
    return cy.get('.tds-modal .tds-site-nav-item-text')
  }

  // navigateToSideMenuItem(text){
  //   let menuItems = {};

  //   cy.get('.tds-modal .tds-site-nav-item-text').forEach(element => {
  //     menuItems[element] = element.getText();
  //   });

  //   menuItems[text].click();
  // }
}

export default new SideMenu();
