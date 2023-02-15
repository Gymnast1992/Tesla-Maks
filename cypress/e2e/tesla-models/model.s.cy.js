import ModelS from "../../fixtures/pom/tesla-models/model.s.page";

describe("Model S", () => {
  beforeEach(() => {
    cy.visit("/models");
  });

  it("Should navigate to the Model S page", () => {
    ModelS.textPlaid.should("be.visible");
  });

  it("Should verify the price of the Model S Dual Motor All-Wheel Drive", () => {
    ModelS.buttonOrderNow.click({ force: true });
    ModelS.fieldDualMotorAllWheelDrive.should(
      "have.text",
      "Dual Motor All-Wheel DriveModel S$94,990"
    );
  });

  it("Should verify the price of the Model S Tri Motor All-Wheel Drive", () => {
    ModelS.buttonOrderNow.click({ force: true });
    ModelS.fieldTriMotorAllWheelDrive.should(
      "have.text",
      "Tri Motor All-Wheel DriveModel S Plaid$114,990"
    );
  });
});
