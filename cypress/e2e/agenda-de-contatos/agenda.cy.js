/// <reference types="cypress" />

describe('Teste para agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve testar a função de inclusão', () => {
    cy.get('input[placeholder="Nome"]').type('Lucas')
    cy.get('input[placeholder="E-mail"]').type('santanafx@hotmail.com')
    cy.get('input[placeholder="Telefone"]').type('997915856')
    cy.get('.adicionar').click()
    cy.get('.sc-beqWaB').should('have.length', 4)
  })

  it('Deve testar a função de alteração', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('input[placeholder="Nome"]').clear()
    cy.get('input[placeholder="Nome"]').type('Rodrigo')
    cy.get('input[placeholder="E-mail"]').clear()
    cy.get('input[placeholder="E-mail"]').type('rodrigo@hotmail.com')
    cy.get('input[placeholder="Telefone"]').clear()
    cy.get('input[placeholder="Telefone"]').type('997915050')
    cy.get('.alterar').click()
    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should(
      'contain',
      'Rodrigo'
    )
    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should(
      'contain',
      '997915050'
    )
    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should(
      'contain',
      'rodrigo@hotmail.com'
    )
  })

  it('Deve testar a função de remoção', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    cy.get('.sc-beqWaB').should('have.length', 3)
  })
})
