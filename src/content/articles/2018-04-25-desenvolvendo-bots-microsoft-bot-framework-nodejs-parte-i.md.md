---
title: Desenvolvendo Bots com Microsoft Bot Framework & Node.Js – Parte 01
---

Fala, pessoal! Tudo certo?

<p style='text-align: justify;'>
  Como promessa é dívida, estou aqui com uma série de artigos no iMasters, sobre desenvolvimento de ChatBots com Microsoft Bot Framework & Node.Js.
</p>

<p style='text-align: justify;'>
  Nesta primeira parte, explicarei o que são Bots e a importância do uso deles em todas as esferas comerciais, sendo: e-commerce, booking, booking flight, entre outros – e claro, o nosso primeiro: Hello World!
</p>

<p style='text-align: justify;'>
  Na segunda parte iremos aprofundar um pouco mais, pois iremos trabalhar com dialogs para deixar o nosso ChatBot mais interativo para o usuário.
</p>

<p style='text-align: justify;'>
  Na terceira parte falarei sobre o uso de um serviço cognitivo chamado <b><a href="https://luis.ai/">LUIS</a></b> (Language Understanding Intelligent Service). Isso mesmo que vocês estão lendo! Explicarei nos artigos vindouros sobre o LUIS, e na última parte, como fazer o deploy do seu ChatBot na plataforma <b><a href="https://azure.microsoft.com/pt-br/">Azure</a></b>!
</p>

Eu não perderia essa série por nada! E vocês?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/image3.jpg"/>  
</p>

## Breve introdução: o que seria um Bot?

<p style='text-align: justify;'>
  Bot é um diminutivo de Robot e é usado como uma ferramenta para implementar o conceito de Conversação como Plataforma de acordo com agentes inteligentes que interagem com diálogos de conversação. Eles nos permitem interagir por meio de:
</p>

* Textos
* Voz
* Vídeos
* Imagens
* Botões/Ações

<p style='text-align: justify;'>
  Conseguimos enxergar uma infinidade de usos de ChatBots em plataformas de mensagerias como, por exemplo: Telegram, Skype, Facebook, ou em plataformas de e-commerce como a Magazine Luiza, com a Lu, a empresa iFood e outros exemplos.
</p>

<p style='text-align: justify;'>
  Os ChatBots nos auxiliam a responder questões de um determinado produto que compramos ou aderimos, sem a necessidade de, por exemplo, contar com um serviço de Telemarketing que tem hora para funcionar, uma vez que um ChatBot estará na plataforma do cliente 24 horas por dia.
</p>

## Ok, entendi. Mas como eu identifico um bot?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/image5-1.gif"/>  
</p>

<p style='text-align: justify;'>
  Simples. Eu sempre digo nas minhas palestras que o melhor exemplo de um Bot é justamente o Jarvis, que é o assistente do Homem de Ferro. #GoTeamIronMan!
</p>

<p style='text-align: justify;'>
  Um outro exemplo que podemos observar é a Cortana, um bot de reconhecimento de voz onde você pergunta, por exemplo: “Qual é a temperatura no Rio de Janeiro hoje?”. E ela fornecerá a resposta!
</p>

<p style='text-align: justify;'>
  Mas, abaixo podemos ver algumas características que nos auxiliam a identificar um Bot. Basta imaginar um Bot com as seguintes características:
</p>

* “Assistente” ou “Secretário(a)”
* Interage com o usuário “conversando” em Linguagem Natural
* Se comunica por meio de: texto, voz e vídeo
* Possui tarefas e habilidades específicas

<p style='text-align: justify;'>
  Como já citado acima, você pode encontrar os bots em diferente esferas, sendo:
</p>

* Atendimento ao cliente
* Experiência de Compras
* Help Desk
* Suporte ao Empregado

## Puxa, então bots são inteligência artificial?

<p style='text-align: justify;'>
  A resposta para essa pergunta, é: Não! Por que? Uma vez que, eles só processam: voz, textos, imagens e vídeos. E sem contar que fazem uso de serviços cognitivos externos, como por exemplo: LUIS e PLN.
</p>

<p style='text-align: justify;'>
  Quem sabe um dia teremos um BB8 em nossas casas, que nos auxiliem com tudo! Ou melhor: SOPHIA!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/image6.gif"/>  
</p>

## Mas como eu posso Desenvolver um bot?!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/image1-5.png"/>  
</p>

<p style='text-align: justify;'>
  O Microsoft Bot Framework auxilia no desenvolvimento dos ChatBots, com um SDK que nos permite desenvolver em C# e Node.Js. É uma plataforma totalmente open source, inclusive há uma documentação muito bem explicada e extensiva sobre o assunto <b><a href="https://docs.microsoft.com/en-us/azure/bot-service/?view=azure-bot-service-3.0">neste link (v.3)</a></b>.
</p>

<p style='text-align: justify;'>
  E a cereja do bolo – por assim dizer – do Bot Framework, é que o seu SDK permite conectar o seu ChatBot com inúmeros canais, entre eles:
</p>

* Skype
* Slack
* Telegram
* Twitter
* Office 365
* Entre outros

<p style='text-align: justify;'>
  E o segredo disso tudo está nessa arquitetura Bot Connector, conforme vocês podem perceber na imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/OR.jpg"/>  
</p>

<p style='text-align: justify;'>
  Notem que no meio temos o Bot Builder, que nada mais é que do que o SDK que irá interagir com a linguagem (regras de lógica ou negócios do seu Bot) com o Bot Framework Connector, onde o resultado final é enviar o seu ChatBot para alguns daqueles canais listados, podendo ser: Skype, Telegram ou Slack.
</p>

<p style='text-align: justify;'>
  O Bot Builder SDK é um projeto open source! Caso vocês queiram contribuir para esse lindo projeto, não deixem de fazer os PR’s para ajudar. O link está aqui.
</p>

<p style='text-align: justify;'>
  O mais legal é que o Bot Builder nos permite desenvolver excelentes diálogos com Node.Js e C#. E nesta série que farei aqui, o enfoque será totalmente em Node.Js, porque Node é vida!
</p>

<p style='text-align: justify;'>
  Antes de mais nada, para seguir e desenvolver esse Bot, é necessária a instalação dos itens abaixo:
</p>

* [Instalar Node.Js](https://nodejs.org/en/)
* [Instalar Microsoft Bot Framework Emulator - v. 3.x](https://github.com/Microsoft/BotFramework-Emulator/releases)
* [Instalar Visual Studio Code](https://code.visualstudio.com/)
* [Instalar a versão Python 2.x](https://www.python.org/downloads/)
* [Instalar globalmente o node-gyp: acompanhar a documentação](https://github.com/nodejs/node-gyp)

Depois de instalar tudo, poderemos começar a codar!

## Desenvolvendo o meu primeiro bot!

<p style='text-align: justify;'>
  Para desenvolvermos o Bot, peço que abram o Visual Studio Code e depois o prompt de comando. Com ele aberto, digitem o comando abaixo:
</p>

```javascript
> npm init -f
```

<p style='text-align: justify;'>
  Feito isso, você criará o package.json de maneira padrão, assim como na imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/ACC.jpg"/>  
</p>

<p style='text-align: justify;'>
  Agora podemos instalar as nossas dependências. Para isso, digitem o seguinte comando:
</p>

```javascript
> npm install --save botbuilder npm install --save restify
```

<p style='text-align: justify;'>
  Feita a instalação, estaremos prontos para desenvolver algumas linhas de código em Node.Js e consequentemente o nosso ChatBot!
</p>

<p style='text-align: justify;'>
  Bom, como é uma sequencia de artigos sobre ChatBots, vou pedir que sigam o padrão de estrutura do projeto, pois assim estarei dividindo em quatro partes os códigos, como na imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/image4-2.png"/>  
</p>

<p style='text-align: justify;'>
  Como podem notar, dentro da pasta “parte-1”, criei um arquivo chamado: olaMundo.js. Vamos criar o nosso primeiro bot nesse arquivo.
</p>

Para isso, sigam o código abaixo:

```javascript
> var restify = require('restify');

var builder = require('botbuilder');

//Configuração do Server via Restify:

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function() {

console.log('%s Aplicação está executando na porta %s', server.name, server.url);

});

//Criação do chat connector para comunicar com o serviço do Bot Framework:

var connector = new builder.ChatConnector({

appId:'',

appPassword:''

});

//Endpoint para executar as mensagens para os usuários via Bot Emulator:

server.post("/api/messages", connector.listen());

//Aqui entra os nossos diálogos:

var bot = new builder.UniversalBot(connector, function(session) {

session.send("Você disse: %s", session.message.text);

});
```

<p style='text-align: justify;'>
  Agora podemos executar o nosso primeiro ChatBot no Emulator. Para isso, abram o emulator e executem o comando abaixo:
</p>

```javascript
> npm install nodemon -g
```

Depois, dentro da pasta-1, o seguinte comando:

```javascript
> nodemon olaMundo.js
```

<p style='text-align: justify;'>
  Com isso, no prompt de comando aparecerá a seguinte mensagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/PO-1.jpg"/>  
</p>

<p style='text-align: justify;'>
  Agora abram o Emulator e coloquem as configurações conforme na imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/LASK.jpg"/>  
</p>

<p style='text-align: justify;'>
  Cliquem em Connect, escrevam qualquer coisa no texto abaixo e vejam o resultado:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/04/BAR.jpg"/>  
</p>

<p style='text-align: justify;'>
  Notem que esse bot em especial replica aquilo que vocês digitam. Por enquanto não estamos trabalhando com diálogos, mas conforme formos avançando nesta série, deixaremos o nosso ChatBot mais interativo e inteligente!
</p>

<p style='text-align: justify;'>
  Caso tenham dúvidas a respeito do código desenvolvido, deixarei aqui duas referências:
</p>

* [Código no GitHub](https://github.com/glaucia86/chatbot-nodejs-imasters)
* [Série de vídeos sobre Bots com Node.js + Microsoft Bot Framework](https://youtu.be/ziHcgSZ7j0Q):

<p style='text-align: justify;'>
  No próximo artigo falarei sobre o uso de Dialogs, pois eles nos possibilitam deixar os nossos ChatBots mais legais e fáceis de interagir com o usuário!
</p>

<p style='text-align: justify;'>
  É isso, pessoal! Um forte abraço para todos e até a próxima! 😍😍
</p>





