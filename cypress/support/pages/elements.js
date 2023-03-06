export const elements = {
    btnRegister:'//*[@class="ico-register"]', //botão Register da pagina inicial
    selecionarGeneroMasculino: '//*[@id="gender-male"]',
    nome: '//*[@id="FirstName"]',
    sobrenome: '//*[@id="LastName"]',
    data: '//*[@name="DateOfBirthDay"]',
    mes: '//*[@name="DateOfBirthMonth"]',
    ano:'//*[@name="DateOfBirthYear"]',
    email:'//*[@id="Email"]',
    empresa:'//*[@id="Company"]',
    receberNoticia:'//*[@id="Newsletter"]', 
    senhaEscolhida:'//*[@id="Password"]', //102030
    confirmarSenhaEscolhida:'//*[@id="ConfirmPassword"]', //102030
    btnCriarConta:'//*[@id="register-button"]',
    validarMsgErro:'//*[text()="The specified email already exists"]',

// especificar...só pra eu saber como faz na mesma linha do elemento
//*[text()="Register"][@id="register-button"]
}