describe('Example', () => {
  it('adds 1 + 2 to equal 3', () => {
    cy.wrap(sum(1, 2)).should('equal', 3);
  });
});

function sum(a, b) {
  return a + b;
}
