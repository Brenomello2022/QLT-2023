describe('Teste', () => {
  it('Acesso à pagina de login', () => {
    cy.visit('')
      cy.get('[]').click()
      cy.get('[]').should('be.visible')
      cy.get('[]').should('be.visible')
  })
})