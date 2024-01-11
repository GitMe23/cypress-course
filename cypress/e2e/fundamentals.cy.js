describe('Fundamental test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    //  .contains() works, but this is an explicit assertion:
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
})