/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve aumentar o número de contatos em mais 1 ', () => {
        cy.get('input[type="text"]').type('Felipe Lima')
        cy.get('input[type="email"]').type('felip321@gmail.com')
        cy.get('input[type="tel"]').type('83 90903210')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk ul').should('have.length', 4)
    })

    it('Deve alterar o nome do contato Felipe Lima para "Felipe(trabalho)', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Felipe(trabalho)')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk ul').last().should('include.text', 'Felipe(trabalho)')
    })

    it('Deve remover o último contato inserido', () => {
        cy.get('.delete').last().click()
        cy.get('.sc-iAEyYk ul').should('have.length', 3)
    })
})