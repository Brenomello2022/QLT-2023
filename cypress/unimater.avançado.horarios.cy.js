describe('Testando o login do aluno Materdei - Unimater', () => {
    beforeEach(() => {
      cy.login(Cypress.env(''), Cypress.env(''));
    })
  
    it('Tenta acessar as notas', () => { 
      cy.visit(Cypress.config() .baseUrl+'aluno-v2/')
        cy.get('.sidenav-item').contains('Acadêmico').click()
        cy.get('.sidenav-link').contains('Horários').click()
        cy.get('.card').contains('Seus horários').should('be.visible')
        cy.url('eq', '')
    })
  })