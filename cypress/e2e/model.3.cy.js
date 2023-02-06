import Model3 from "../fixtures/pom/model.3.page"

describe("Model 3", () => {
  beforeEach(() => {
    cy.visit("/model3");
  });

  it("Should verify the price of the Model 3 Rear-Wheel Drive", () => {
    Model3.buttonOrderNow.click({ force: true });
    Model3.fieldRearWheelDrive.should(
      "have.text",
      "Rear-Wheel DriveModel 3$43,490"
    );
  });

  it("Should navigate to the Model 3 payment page", () => {
    Model3.buttonOrderNow.click({ force: true });
    Model3.buttinContinueToPayment.click();
    Model3.textYourModel3.should(
      "have.text",
      "Your Model 3"
    );
    Model3.buttonOrderWithCard.should("have.text", "Order with Card");
  });
});
