it("renders the web component", () => {
  cy.visit("/")
  cy.get("editor-wc").shadow().find("button").should("contain", "Run Code")
})

// it("runs the python code", () => {
//   cy.visit("/")
//   cy.get("editor-wc").shadow().find("div[class=cm-content]").type("\nprint('Hello world')")
//   cy.get("editor-wc").shadow().find("button").click()
// })

