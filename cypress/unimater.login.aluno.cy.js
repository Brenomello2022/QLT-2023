describe('Teste', () => {
  it('Tenta acessar sem informar o usuário/senha', () => {
    cy.visit('')
      cy.get('[]').click()
      cy.get('[]').should('be.visible')
      cy.get('[]').should('be.visible')
  })
  it('Validando se o usuário e senha são validos', () => {
    cy.visit('')
      cy.get('[]').type('')
      cy.get('[]').type('')
      cy.get('[]').click()
      cy.get("").should('be.visible')
  })
  it('Validando com o usuário e senha validos', () => {
    cy.visit('')
      cy.get('[]').type('')
      cy.get('[]').type('')
      cy.get('[]').click()
      cy.url().should('eq', '')
  })
})