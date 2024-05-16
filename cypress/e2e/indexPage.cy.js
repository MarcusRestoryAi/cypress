describe('template spec', () => {
  //Skall utföras före varje test
  beforeEach(() => {
    cy.visit("index.html")
  })

  it('Kontrollera titel på index sida', () => {
    //Kontrollera H1 taggen
    cy.get("h1").should("contains.text", "My Index Page")
  })

  it("Kontrollera titel på Second Page", () => {
    // Gå till Second Page
    cy.visit("secondPage.html")

    //Kontrollera h1 tag på sidan
    cy.get("h1").should("contains.text", "Detta är second page")
  })
})