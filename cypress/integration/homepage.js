context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has title', () => {
    cy.title().should('equal', 'Tabelca')
  })
})