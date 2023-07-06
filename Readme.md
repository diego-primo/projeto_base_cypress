# Projeto de Testes E2E automatizados para o Sistema XPTO

## Dados Gerais

- Sistema responsável em gerenciar ...

&nbsp;

## Este projeto tem por objetivo a automação E2E do projeto Sistema XPTO. O projeto é desenvolvido através do framework [Cypress](https://www.cypress.io/) da base JavaScript

&nbsp;

## Pré-Requisitos

- `Dê preferência em executar os comantos no terminal do Git Bash`
- Git - [instalação do Git](https://git-scm.com/downloads)
- Nodejs >= 18.14.x - [instalação Node](https://nodejs.org/en/download/)
- Visual Studio Code >= 1.76.X - [instalação VS Code](https://code.visualstudio.com/download)

&nbsp;

## Repositório

- [não definido]()

&nbsp;

## Plugins VS Code

- [GitLens](vscode:extension/eamodio.gitlens)
- [Fold Plus](vscode:extension/dakara.dakara-foldplus)
- [Add Only](vscode:extension/ub1que.add-only)
- [Cypress Snippets](vscode:extension/andrew-codes.cypress-snippets)
- [ES6 Mocha Snippets](vscode:extension/spoonscen.es6-mocha-snippets)
- Bracket Pair Colorizer: vá em Arquivo->Preferências->Configurações e digite `Bracket Pair Colorization` e habilita para o projeto ou usuário e workspace.

&nbsp;

## Arquitetura do Projeto

&nbsp;

- `cypress`: Pasta raiz do projeto

  - `downloads`: local onde serão armazenados arquivos baixados no momento da execução automatizada dos testes;
  - `e2e`: local onde ficarão os arquivos de testes (`*.cy.js`);
  - `fixtures`: serve para armazenar objetos JSON, imagens, arquivos para auxílio nos testes além de ser sugerido pela comunidade a utilização de Moks;
    - `files`: Utilizado para armazenar aquivos para realização de upload no momento da execução dos testes;
    - `massaDadosTestes`: Utilizado para massa de testes;
  - `support`: Responsável pelos arquivos de configurações e comandos úteis no apoio da execução dos testes automatizados:
    - `utils`: arquivos com métodos genéricos que apoiam para implementação dos testes. Exemplo, o arquivo `utils.js` consta métodos utilizados para apoio em escrita de datas de calendário.
    - `commands`: métodos customuzados para o "cy." ;
    - `e2e`: Arquivos de suporte o qual carrega configurações antes da execução dos testes;
- Os demais arquivos ou pastas (ex.: `cypress.config.js`, `/node_modules`,`package.json`) são dependências e/ou configurações da estrutura do Nodejs, do Cypress e demais funcionalidades para o pleno funcionamento dos testes.
- A pasta `test-report` será o local de armazenamento do relatório de testes gerado pelo framework Allure. Maiores detalhes descritos mais abaixo.

&nbsp;

## Configurando o projeto (através do 'VS Code')

Vá até a pasta do projeto e de lá abra o VS Code:
 - Ou você abre o VS Code direto da pasta (mais informações pesquisar na internet);
 - Ou você abre o VS Code e vá em Files (Arquivos) -> Open Folder (Abrir pasta).

&nbsp;

### Passo a passo para criar aquiv

No VS Code, abra o terminal executando os comandos.

 - ctrl + '  ;
 - ou
 - menu -> Terminal -> Novo Terminal;

 **IMPORTANTE**: Deve-se estar com foco na pasta raiz do projeto e sugerimos utilização do terminal Git Bash.

&nbsp;

## Execute estes comandos no terminal para instalar ou atualizar as dependências do projeto no seu computador

&nbsp;
### Iniciar o npm dentro do projeto

```bash
  npm init -y
```

### Instalar / Atualizar o cypress (no momento é utilizado na versao 12.16.0)

```bash
  npm install -D cypress@12.16.0
```

### Plugin Xpath para Cypress

```bash
 npm install -D @cypress/xpath
```

### Após instalação do xpath, incluir o trecho do código abaixo no arquivo `'cypress\support\e2e.js'`

```bash
 require('@cypress/xpath');
```

 Para maiores detalhes acesse o [link a documentação do plugin](https://docs.cypress.io/plugins#Custom%20Commands)

&nbsp;

### Execute o comando `npx cypress open` para que o cypress crie corretamente o cache. Não precisa executar nenhum teste agora, logo após abertura da janela pode fechá-la em seguida.

```bash
  npx cypress open
```

&nbsp;

## Allure Report


- [Allure](https://docs.qameta.io/allure/)
- [Documentação do plugin Allure](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
- [Plugins Reports Cypress](https://docs.cypress.io/plugins#Reporting)
- [Github cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)

### Instalação de plugins do framework Allure Reports

```bash
 npm install -g allure-commandline --save-dev
```

```bash
 npm i -D @shelex/cypress-allure-plugin
```
&nbsp;

Para este projeto, será criado o diretório `test-report` o qual ficaram armazenados o relatório dos testes executados. O diretório será criado após execução dos comandos.

**OBSERVAÇÃO:** O Allure utiliza o pacote do java (SDK) para execução as respectivas funcionalidades. Baixe o [SDK 8](https://www.oracle.com/br/java/technologies/downloads/#java8) e siga os próximos passos:

Adicione a Variáveis do Sistema e Variáveis do Usuário:

- NOME: JAVA_HOME
- CAMINHO: diretório da pasta de instalação do java: "C:\Program Files\Java\jdk-XX.X.X".

> Após a inclusão das variável de ambiente é necessário reiniciar o vs code. Qualquer adversidade, reinicie o computador.
> Se houver dificuldades, pesquise na internet instruções de `configurar variavel de ambiente java`

&nbsp;

## Comandos adaptados
 Também, estes comandos estão configurados no arquivo `package.json`.

&nbsp;

### Atualização do pacote Node

```bash
 npm i
```

### Executa o cypress via linha de comando (headless), com allure e no navegador chrome

```bash
 npm run cy:tests
```

### Executa o cypress via linha de comando (headless), com allure e no navegador chrome e vídeo de gravação off

```bash
 npm run cy:run
```

### Instala ou Atualiza o cypress no projeto

```bash
 npm run cy.update
```

### Executa o cypress de modo interação

```bash
 npm run cy:open
```
### Iniciar um servidor na própria máquina e abrir o relatório no navegador

```bash
 npm run allure:open
```

### Gera o relatório a partir dos resultados existentes do Allure

```bash
 npm run allure:generate
```

### Exclui a pasta com os resultados gerados pelo allure

```bash
 npm run allure:clear
```