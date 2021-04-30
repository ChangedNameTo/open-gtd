context("Selected Tasks", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
    cy.add_task("Cypress test task");
  });

  describe("Selected Task - Mechanical Page Changes", () => {
    it("Expects there to be no task selected on page load", () => {
      cy.reload();
      cy.get("#selectedTaskPane").should("not.exist");
    });

    it("Expects there to be a task selected after adding a task and clicking it", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskName").should("have.text", "Cypress test task");
    });

    it("Expects the selected task pane to close", () => {
      cy.get("#taskId0").click();
      cy.get("#closeSelectedTask").click();
      cy.get("#selectedTaskName").should("not.exist");
    });
  });

  describe("Selected Task - Task Title", () => {
    it("Expects the selected task to contain the task title", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskName")
        .invoke("val")
        .should("eq", "Cypress test task");
    });

    it("Expects the placeholder value when task title is cleared", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskName").clear();

      cy.get("#selectedTaskName").invoke("val").should("eq", "");
      cy.get("#selectedTaskName")
        .invoke("attr", "placeholder")
        .should("eq", "Empty task text");
    });
  });

  describe("Selected Task - Task Status", () => {
    it("Expects the default task status when task is created", () => {});

    it("Expects the default task status to persist", () => {});

    it("Expects the status to have a completed date on completion", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskCompleteButton").click();
      cy.get("#selectedTaskCompleted").should("not.have.text", "N/A");
    });

    it("Expects the modified date to change after update", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskName").clear();

      const createdDate = cy.get("#selectedTaskCreated");
      const modifiedDate = cy.get("#selectedTaskModified");

      cy.get(createdDate).should("not.eq", modifiedDate);
    });
  });

  describe("Selected Task - Task Tags", () => {
    it("Expects the modified date to change after update", () => {});
  });

  describe("Selected Task - Task Priority", () => {
    it("Expects the modified date to change after update", () => {});
  });

  describe("Selected Task - Task Note", () => {
    it("Expects the modified date to change after update", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskNote").type("Blah");

      const createdDate = cy.get("#selectedTaskCreated");
      const modifiedDate = cy.get("#selectedTaskModified");

      cy.get(createdDate).should("not.eq", modifiedDate);
    });
  });

  describe("Selected Task - Task Dates", () => {
    it("Expects the Completed date to be N/A by default", () => {
      cy.get("#taskId0").click();
      cy.get("#selectedTaskCompleted").should("have.text", "N/A");
    });
  });
});
