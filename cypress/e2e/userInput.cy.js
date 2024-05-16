describe('template spec', () => {
  beforeEach(() => {
    cy.visit("index.html")
  })


  it('Mater in Marcus som värde', () => {
    const name = "Marcus"

    //Simulera user skriver in ett värde i input fält
    cy.get("#txtName").type(name)
  
    //Klicka på knappen
    cy.get("#btnSubmit").click()
  
    //Kontrollera output
    cy.get("#output").should("contains.text", `Hejsan ${name}`)
  })

  it("Matar in Anders som värde", () => {
    const name = "Anders"
    
    //Simulera user skriver in ett värde i input fält
    cy.get("#txtName").type(name)
  
    //Klicka på knappen
    cy.get("#btnSubmit").click()
  
    //Kontrollera output
    cy.get("#output").should("contains.text", `Hejsan ${name}`)
  })

  function userInput (name) {
    
  }

})