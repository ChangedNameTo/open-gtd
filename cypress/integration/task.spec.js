/// <reference types="cypress" />

context("Tasks", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
  });

  describe("Basic task CRUD actions", () => {
    it("Expects the add task input to be hidden", () => {
      cy.get("#addTaskInput").should("be.hidden");
    });

    it("Expects the add task input to be revealed after clicking on the button", () => {
      cy.contains("Add New Task").click();
      cy.get("#addTaskInput").should("be.visible");
    });

    it("Adds a new task", () => {
      cy.add_task("Cypress test task");
      cy.get("#taskList").contains("Cypress test task");
    });

    it("Adds a new task, and clears the text entry box", () => {
      cy.add_task("Cypress test task");
      cy.get("#addTaskInput").invoke("val").should("be.empty");
    });

    it("Expects tasks to be saved between refreshes", () => {
      cy.add_task("Cypress test task");
      cy.reload();
      cy.get("#taskList").contains("Cypress test task");
    });

    it("Expects tasks to not be added if the text is blank", () => {
      cy.contains("Add New Task").click();
      cy.get("#submitNewTaskButton").click();
      cy.get("#taskId0").should("not.exist");
    });

    it("Expects tasks to not be added if the text is spaces only", () => {
      cy.add_task("   ");
      cy.get("#taskId0").should("not.exist");
    });

    it("Expects tasks to be added after hitting the enter key", () => {
      cy.contains("Add New Task").click();
      cy.get("#addTaskInput").type("Cypress test task").type("{enter}");
      cy.get("#taskList").contains("Cypress test task");
    });
  });
});
