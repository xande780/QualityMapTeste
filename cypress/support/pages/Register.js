const el = require('./elements').elements;
import 'cypress-xpath'

class Register {

    goNopCommerce() {
        cy.visit('/');
    }

    acessarPaginaRegistro() {
        cy.xpath(el.btnRegister)
            .click()
    }

    selecionarGenero() {
        cy.xpath(el.selecionarGeneroMasculino)
            .click()
    }

    informarNome(nome) {
        cy.xpath(el.nome)
            .type(nome)
    }

    informarSobrenome(sobrenome) {
        cy.xpath(el.sobrenome)
            .type(sobrenome)
    }

    dataNascimento(dia) {
        cy.xpath(el.data)
            .select(dia)
    }
    
    mesNascimento(mes) {
        cy.xpath(el.mes)
            .select(mes)
    }

    anoNascimento(ano) {
        cy.xpath(el.ano)
            .select(ano)
    }

    informarEmail(email) {
        cy.xpath(el.email)
            .type(email)
    }

    informarEmpresa(empresa) {
        cy.xpath(el.empresa)
            .type(empresa)
    }

    assinarNoticia() {
        cy.xpath(el.receberNoticia)
            .click()
    }

    suaSenha(senha) {
        cy.xpath(el.senhaEscolhida)
            .type(senha)
    }

    confirmeSenha(senha) {
        cy.xpath(el.confirmarSenhaEscolhida)
            .type(senha)
    }

    registrarconta() {
        cy.xpath(el.btnCriarConta)
            .click()
    }

    validarMsgErro() {
        cy.xpath(el.validarMsgErro)
        .should('be.visible')
    }

    validarMsgSucesso() {
        cy.contains('Your registration completed')
    }
}
export default new Register
