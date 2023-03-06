QualityMap Challenge

Documentação da instalação 

Pré-requisitos
Antes de começar, verifique se você atende aos seguintes requisitos de instalação:

* Visual Studio Code
* Nodejs no terminal verificar isntalação através do code node -v (caso não tenha instale a versão mais atualizada)
* Pasta de armazenamento do projeto

Instalação 

1. Abra o prompt de comando ou terminal,
2. Acesse o diretório do disco local C:
   Informe o comando:
   cd /c/
3. Crie a uma nova pasta com nome do projeto "qualityMapTeste"
   Informe o comando:
   mkdir qualityMapTeste
4. Acesse a pasta do projeto
   Informe o comando:
   cd /c/qualityMapTeste
5. Inicie o novo projeto npm
   ainda no terminal na pasta qualityMapTeste Informe o comando:
    npm init (respondi as perguntas do documento);
    nome "Alexandre", version "enter", description "qualitymap challenge", main:"index.js", test "npx cypress open"(para abrir o cypress no terminal), author "alexandre". YES
6. Instale o Cypress
   npm install cypress --save-dev (havendo erros na instalação do cypress execute o comando npm cypress cache clear) 
7. Instale cypress-xpath como dependência de desenvolvimento
    npm install -D cypress-xpath
Instalação realizada e ambiente pronto para começar a criar e executar testes automatizados solicitados no Qualitymap Challenge



Cenário de teste em Gherkin e automatizar utilizando Cypress.
Fazer um Registro com sucesso em "nopcommerce"

// Dado Quando Então

// Funcionaliade: Registrar no site nopCommerce com sucesso.

// Cenário: Registro de um novo usuário.
// Dado que acesso o site do NopCommerce
// E clico no botão "Regiter"
// E preencho todas as informações 
// Quando Clico no botão "Register"
// Então devo visualizar a mensagem de sucesso.


// Funcionalidade: Registro de um usuário com mensagem de erro

// Cenário: Validar mensagem de erro ao registrar com informações já utilizada
// Dado que acesso o site do NopCommerce 
// E clico no botão "Register"
// E preencho todas as informações
// Quando clico no botão "Register"
// Então devo visualizar a mensagem de erro por utilizar o mesmo email.