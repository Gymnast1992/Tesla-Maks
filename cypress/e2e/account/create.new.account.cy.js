import AccountData from "../../fixtures/data/account.data.json";
import CreateAccount from "../../fixtures/pom/account/create.account.page";
import SignInPage from "../../fixtures/pom/account/sign.in.page";
import Homepage from "../../fixtures/pom/homepage/homepage.page";
import SideMenu from "../../fixtures/pom/side-menu/side.menu.page";

describe("Create new account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to verify the input fields on the create new account page", () => {
    const data = AccountData.credentials;
    const randomFirstName = CreateAccount.randomNoNumbersData(5);
    const randomLastName = CreateAccount.randomNoNumbersData(7);

    Homepage.buttonMenu.click();
    SideMenu.buttonAccount.click();
    SignInPage.buttonCreateAccount.click();

    //-----------------------------------------
    // And here I have the ACCESS DENIED message
    // But I continue to show my experience with Cypress
    //-------------------------------------------------

    //Verification the Create Account page
    CreateAccount.lableH1.should("contains.text", "Create Account");

    //Input in the existing data
    CreateAccount.inputFirstName.type(randomFirstName);
    CreateAccount.inputLastName.type(randomLastName);

    //Because there is the Captcha we can't automate this test case
    //Just for verificatin the input field I'll put there the RANDOM input data!!!
    CreateAccount.inputCaptcha.should(CreateAccount.randomData(5));

    //Verification that button Next exists on the page
    CreateAccount.buttonNext.should("contains.text", "Next");
  });
});
