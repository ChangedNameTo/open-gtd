context("Selected Tasks", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
  });

  describe("Selected Task Tests", () => {
    it("Expects there to be no task selected on page load", () => {
      cy.reload();
      cy.get("#selectedTaskPane").should("not.exist");
    });

    it("Expects there to be a task selected after adding a task and clicking it", () => {
      cy.add_task("Cypress test task");
      cy.get("#taskId0").click();
      cy.get("#selectedTaskTitle").should("have.text", "Cypress test task");
    });

    it("Expects the selected task to contain the task title", () => {
      cy.add_task("Cypress test task");
      cy.get("#taskId0").click();
      cy.get("#selectedTaskName")
        .invoke("val")
        .should("eq", "Cypress test task");
    });

    it("Expects the status to have a completed date on completion", () => {
      cy.add_task("Cypress test task");
      cy.get("#taskId0").click();
      cy.get("#selectedTaskCompletedButton").click();
      cy.get("#selectedTaskCompleted").should("not.have.text", "N/A");
    });

    it("Expects the selected task pane to close", () => {
      cy.add_task("Cypress test task");
      cy.get("#taskId0").click();
      cy.get("#closeSelectedTask").click();
      cy.get("#selectedTaskName").should("not.exist");
    });
  });
});
