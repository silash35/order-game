const options = { matchCase: false };

describe("Play the Game", () => {
  it("should lose!", () => {
    cy.visit("/");
    cy.contains("start", options).click();

    cy.contains(/^1$/).click();
    cy.contains(/^2$/).click();
    cy.contains(/^6$/).click();

    cy.contains("best time", options).should("not.exist");
    cy.contains("lose", options);
  });

  it("should Win!", () => {
    cy.visit("/");
    cy.contains("start", options).click();

    for (let i = 1; i <= 10; i++) {
      cy.contains(new RegExp(`^${i}$`)).click();
    }

    cy.contains("win", options);
  });
});
