describe('Maria Input', () => {
  beforeEach(() => {
    cy.visit("index.html")
  })


  it('Mater in Marcus som värde. Stannar kvar på Index page', () => {
    const name = "Marcus"

    //Simulera user skriver in ett värde i input fält
    cy.get("#txtName").type(name)
  
    //Klicka på knappen
    cy.get("#btnSubmit").click()
  
    //Kontrollera output
    cy.get("h1").should("contains.text", "My Index Page")
  })

  it('Mater in Maria som värde. Går till second page', () => {
    const name = "Maria"

    //Simulera user skriver in ett värde i input fält
    cy.get("#txtName").type(name)
  
    //Klicka på knappen. Cypress kommer att vänta tills det att funktionenn, inklusive location-change är färdig.
    cy.get("#btnSubmit").click()
  
    //Kontrollera output
    cy.get("h1").should("contains.text", "Detta är second page")
  })
})