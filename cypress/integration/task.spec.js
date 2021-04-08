/// <reference types="cypress" />

context("Tasks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Basic task CRUD actions", () => {
    it("Adds a new task", () => {
      cy.contains("Add New Task").click();
      cy.get("#addTaskInput").type("Cypress test task");
      cy.get("#submitNewTaskButton").click();
      cy.get("#taskList").contains("Cypress test task");
    });

    it("Adds a new task, and clears the text entry box", () => {
      cy.contains("Add New Task").click();
      cy.get("#addTaskInput").type("Cypress test task");
      cy.get("#submitNewTaskButton").click();
      cy.get("#addTaskInput").invoke("val").should("be.empty");
    });
  });
});
