class SideMenu {
    get buttonAccount() {return cy.get('[href="/teslaaccount"]')}
    get sideMenuItems() {return cy.get('section [class="tds-site-nav-item-text"]')}


    //Create a function with menuItemsText
    navigateToSideMenuItem(menuItemText){

        //Create const for all menu items
        const menuItems = {}; 
        
        //Find the common selector for all sideMenuItems 
        //Loop through each element and getText
        this.sideMenuItems.forEach(element => {
            menuItems[element.getText()] = element;
        });
        
        //When we have our menuItemsText we click on it
        menuItems[menuItemText].click();

    }
}

export default new SideMenu()