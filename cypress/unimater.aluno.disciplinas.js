describe('Testando o acesso a aba Academico', () => {
    it('Tenta acessar as disciplinas', () => {
      cy.visit('')
      cy.get('[id=login]').type('')
      cy.get('[id=senha]').type('')
      cy.get('[id=btn-login]').click()
        cy.get(".sidenav-item").contains("Acadêmico").click()
        cy.get(".sidenav-link").contains("Disciplinas Cursadas").click()
        cy.url('eq', '')
    })
  })