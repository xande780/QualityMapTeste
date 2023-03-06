import Register from '../support/pages/Register';
//require("cypress-xpath");
import 'cypress-xpath'
import validacao from '../fixtures/validacao.json'


describe('Validar a criação de um registro', function () {
     Cypress.on('uncaught:exception', (err, runnable) => {
         return false
    });

    before('Visitar nopCommerce', function () {
        Register.goNopCommerce()
    });

    beforeEach(function () {
        cy.fixture('validacao').then((validacao) => {
            this.validacao = validacao;
        })
    })

    it('Criar um registro com sucesso', function () {

        Register.acessarPaginaRegistro()
        Register.selecionarGenero()
        Register.informarNome(validacao.test.nome)
        Register.informarSobrenome(validacao.test.sobrenome)
        Register.dataNascimento(validacao.test.data)
        Register.mesNascimento(validacao.test.mes)
        Register.anoNascimento(validacao.test.ano)
        Register.informarEmail(validacao.test.email)
        Register.informarEmpresa(validacao.test.empresa)
        Register.assinarNoticia()
        Register.suaSenha(validacao.test.senha)
        Register.confirmeSenha(validacao.test.senha)
        Register.registrarconta()
        Register.validarMsgErro()
    });
})