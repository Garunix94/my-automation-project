  it('Loads', () => {
    cy.visit('localhost:3000')
    cy.contains('h1', 'Todos App')
  })