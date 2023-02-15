import AccountData from "../../fixtures/data/account.data.json";
import SignInPage from "../../fixtures/pom/account/sign.in.page";
import Homepage from "../../fixtures/pom/homepage/homepage.page";
import SideMenu from "../../fixtures/pom/side-menu/side.menu.page";
import UserPage from "../../fixtures/pom/user/user.page";

describe("Sign in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to Sign In with existing account", () => {
    const data = AccountData.credentials;

    //Navigate to Sign In page
    Homepage.buttonMenu.click();
    SideMenu.buttonAccount.click();

    //Input in the existing data
    SignInPage.inputEmail.type(data.email);
    SignInPage.buttonNext.click();

    //-----------------------------------------
    // And here I have the ACCESS DENIED message
    // But I continue to show my experience with Cypress
    //-------------------------------------------------

    SignInPage.inputPassword.type(data.password);
    SignInPage.buttonSignIn.click();

    UserPage.labelH1.should("contains.text", "Dashboard");
    UserPage.buttonDashboard.click();
    UserPage.buttonSignOut.click();

    //User was redirected to the Homepage and verified info
    Homepage.buttonMenu.should("be.visible");
    Homepage.buttonCustomerOrder.should("be.visible");
    Homepage.buttonDemoDrive.should("be.visible");
  });
});
