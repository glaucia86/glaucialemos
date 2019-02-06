---
title: Cartão Pessoal em NPX - É Possível?!
---

<p align="center">
  <img src="https://i.imgsafe.org/27/2779c5a323.png"/>  
</p>

<p style='text-align: justify;'>
  A resposta para a pergunta do título deste artigo é: sim. E teremos um passo a passo ensinando a criar um em NPX.
</p>

<p style='text-align: justify;'>Como surgiu a ideia?</p>

<p style='text-align: justify;'>
  Essa ideia surgiu de um artigo do meu amigo <b><a href="https://twitter.com/bitandbang">Tierney Cyren</a></b>, que é Senior Cloud Developer Advocate da Microsoft e membro do comité do Node.js Foundation. Recomendo seguir o Tierney no Twitter – de vez em quando ele posta coisas muito bacanas.
</p>

<p style='text-align: justify;'>
  Todo crédito a ele, que criou esse  projeto! Graças ao seu trabalho, vários desenvolvedores que o seguem no Twitter começaram a criar os seus próprios NPX Personal Cards. E, claro, eu criei o meu também, como podem ver no começo do artigo.
</p>

<p style='text-align: justify;'>
  Querem aprender a criar um parecido? Vamos lá!
</p>

O que preciso para Desenvolver um Cartão Pessoal em NPX?


#### Recursos Usados:

* Visual Studio Code
* JavaScript
* Node.js
* Npm (criar uma conta pessoal no site npmjs.com)

#### Uso de Pacotes:

* Boxen
* Chalk
* Standard
* Commander

<p style='text-align: justify;'>
  É muito importante que você – antes de começar a criar seu cartão – crie uma conta pessoal no site do <b><a href="npmjs.com">npmjs.com</a></b>.
</p>

## Criando um Cartão Pessoal

<p style='text-align: justify;'>
  Vamos ao passo a passo. A primeira coisa que precisamos fazer é criar uma pasta do projeto de acordo com o seu nome do GitHub e digitar os seguintes comandos no prompt de comando (incluindo, claro, o seu nome):
</p>

```
> mkdir glaucia86
```

```
> cd glaucia86
```

```
> npm init
```

```
> mkdir bin
```

```
> touch card.js
```

<p style='text-align: justify;'>
  Depois que criar a estrutura do projeto, abra o prompt de comando novamente e digite o comando abaixo (dentro da pasta do projeto) para criar o arquivo <b>package.json</b>:
</p>

```
> npm init
```
<p style='text-align: justify;'>
  Em seguida, basta instalar os pacotes necessários para começarmos a desenvolver nosso Cartão Pessoal. Digitem os comandos abaixo:
</p>

```
> npm install standard --save-dev
```

```
> npm install chalk --save
```

```
> npm install boxen --save
```

```
> npm install commander --save
```

<p style='text-align: justify;'>
  Ao fazer isso estaremos instalando como Dependencies, os pacotes: <b>chalk</b>, <b>boxen</b>, <b>commander</b>, e como DevDependencies: <b>Standard</b>:
</p>

```json
(...)

"dependencies": {
    "boxen": "^2.1.0",
    "chalk": "^2.4.1",
    "commander": "^2.19.0"
  },
  "devDependencies": {
    "standard": "^12.0.1"
```

A estrutura do seu projeto deverá estar como na imagem abaixo:

<p align="left">
  <img src="https://static.imasters.com.br/wp-content/uploads/2019/01/18092729/ssk.jpg"/>  
</p>

Agora abra o arquivo card.js e copie o código abaixo (inclua seus dados):

```javascript
#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('Glaucia Lemos /'),
  handle: chalk.cyan('glaucia_lemos86'),
  work: chalk.white('Software Developer at HackDev'),
  twitter: chalk.cyan('https://twitter.com/glaucia_lemos86'),
  github: chalk.cyan('https://github.com/glaucia86'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/glaucialemos/'),
  web: chalk.cyan('https://code4coders.wordpress.com/'),
  npx: chalk.white('npx glaucia_lemos86'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)));

```
<p style='text-align: justify;'>
  Agora executaremos o comando abaixo para verificar a versão do npm (nesse momento é muito importante possuir uma conta no site npmjs.org):
</p>

```
> npm version major
```

Após verificar a versão do npm, vamos executar um outro comando:

```
> npm adduser
```

<p style='text-align: justify;'>
  E então publicaremos o nosso pacote para o site do npmjs. Para isso, basta executar o comando abaixo:
</p>

```
> npm publish
```

<p style='text-align: justify;'>
  Depois de publicar, execute o comando a seguir para visualizar o cartão criado:
</p>

```
> npx glaucia_lemos86
```

<p style='text-align: justify;'>
  Se tudo der certo, na janela do prompt aparecerá o seu Cartão Pessoal em NPX, conforme na imagem abaixo (fiz alterações no meu card):
</p>

<p align="center">
  <img src="https://i.imgsafe.org/27/2779c5a323.png"/>  
</p>

Simples, não é mesmo?

<p style='text-align: justify;'>
  Se quiserem fazer de maneira colorida, assim como eu, basta acessar meu código no repositório.
</p>

## Conclusão

<p style='text-align: justify;'>Vocês podem criar da maneira que acharem melhor. E se quiserem dar uma olhada no código desenvolvido, acessem este <b><a href="https://github.com/glaucia86/glaucia86">link</a></b>.</p>

<p style='text-align: justify;'>
  Caso queiram ver o meu cartão de maneira local em suas máquinas, já está liberado no <b><a href="https://www.npmjs.com/package/glaucia_lemos86">npmjs</a></b>. Basta digitar o seguinte comando:
</p>

```
> npm install glaucia_lemos86
```

<p style='text-align: justify;'>
  Quer contribuir ou ajudar a melhorar esse cartão? Não deixe de abrir issues no repositório, beleza?
</p>

Até a próxima pessoal! 😍😍

