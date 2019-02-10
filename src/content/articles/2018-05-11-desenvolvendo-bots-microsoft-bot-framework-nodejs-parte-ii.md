---
title: Desenvolvendo Bots com Microsoft Bot Framework & Node.Js – Parte 02
---

Fala, pessoal! Tudo bem?

<p style='text-align: justify;'>
  Conforme falado no último artigo, daremos continuidade a sequência de artigos que abordam o desenvolvimento de bots usando o Microsoft Bot Framework & Node.js.
</p>

<p style='text-align: justify;'>
  Nesta segunda parte falaremos sobre o uso de ‘Dialogs’, um dos conceitos chave e mais importantes quando se desenvolve um determinado ChatBot.
</p>

E aí? Vamos embarcar na segunda parte?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/05/image1.jpg"/>  
</p>

## O que são Dialogs?

<p style='text-align: justify;'>
  Assim como no mundo real precisamos ‘dialogar’ com as pessoas para obter uma determinada informação, o mesmo se passa com um Bot.
</p>

<p style='text-align: justify;'>
  Porém, no conceito de Bots, ‘dialogs’ nos permitem gerenciar um determinado fluxo de conversação, que nesse caso será entre o Bot com o usuário. E essas conversas são organizadas por ‘dialogs’. Pois é justamente através de um dialog que o seu Bot irá interagir com o usuário.
</p>

<p style='text-align: justify;'>
  E uma das características mais importantes do dialogs são as cascatas de conversação (waterfalls), que seriam uma alternação de diálogos em resposta ao usuário com o Bot. Quando vocês forem analisar os blocos de código de exemplo,observarão que esses waterfalls de dialogs são pequenas funções que têm como objetivo retornar de maneira satisfatória alguma resposta ou informação determinada para o usuário. Por isso que, dentro do mundo dos Bots, saber e entender bem o fluxo de conversação é de suma importância para quem está desenvolvendo um ChatBot.
</p>

Através deles, poderemos:

* Executar e gerenciar fluxos de conversação: sendo elas simples ou complexas;
* Manipular esses fluxos de maneira encadeada ou arrays;
* E podemos criar fluxos de 2 maneiras (uma delas já ditas acima): via prompt ou via waterfall – a qual pertencem ao SDK do Bot Builder para Node.js;

## Beleza! Mas o que são Waterfalls & Prompts?

Waterfall (cascata) auxilia a criar um determinado modelo de fluxo de conversação do Bot. Como o próprio nome já diz, quando criamos blocos de cascata, por consequência criamos uma sequência de passos de fluxo de conversação do nosso Bot.

Já os <b>prompts</b>, nada mais são do que as ações contidas nesses fluxos que serão concedidas através do usuário. Quando começarmos a escrever algum bloco de código aqui, essas duas definições ficarão mais simples para todos vocês!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/05/image3.jpg"/>  
</p>

Os principais métodos mais usados num fluxo de conversação de um Bot, são:

* beginDialog
* endDialog
* endDialogWithResults
* replaceDialog
* cancelDialog
* endConversation

<p style='text-align: justify;'>
  Caso queiram obter mais informações a respeito desses métodos, não deixem de olhar a documentação do SDK do Bot Builder (Node.Js) <b><a href="https://docs.microsoft.com/en-us/azure/bot-service/?view=azure-bot-service-3.0">neste link(v.3)</a></b>. Recomendo darem uma olhada, uma vez que para todo programador a documentação de um SDK é como um dicionário da língua portuguesa. Caso queiramos entender e compreender o que estamos escrevendo, precisamos entender melhor o que cada coisa faz. #ficaadica
</p>

## Okay! Bora codar?

<p style='text-align: justify;'>
  Sim, claro! Tudo fica mais fácil quando programamos. Abram o VS Code de vocês e escrevam as linhas de código logo abaixo. Em seguida explicarei o que é cada coisa.
</p>


```javascript
/** * * Arquivo: olaMundoBot.js * Data: 23/04/2018 * Descrição: Desenvolvimento de um Bot via Bot Emulator. * Author: Glaucia Lemos * * */
var restify = require('restify');
var builder = require('botbuilder'); // Configuração do Server via Restify: 
var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s Aplicação está executando na porta %s', server.name, server.url);
});

// Criação do chat connector para comunicar com o serviço do Bot Framework: 
var connector = new builder.ChatConnector({
  appId: '',
  appPassword: ''
});

//Endpoint para executar as mensagens para os usuários via Bot Emulator: 
server.post("/api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

// Bloco de Dialogs: 
bot.dialog("/", [session => {
  builder.Prompts.text(session, "Oi! Como você se chama?");
}, (session, results) => {
  let nome = results.response;
  session.send(`Oi! ${nome}`);
  session.beginDialog("/perguntarPratoPredileto");
}]);

bot.dialog("/perguntarPratoPredileto", [session => {
  builder.Prompts.text(session, "Qual é o seu prato predileto?");
}, (session, results) => {
  let pratoPredileto = results.response;
   session.endDialog(`Puxa que legal! Então você gosta de comer **${pratoPredileto}**!`);
  session.beginDialog("/perguntarLugarPreferido");
}]);

bot.dialog("/perguntarLugarPreferido", [session => {
  builder.Prompts.text(session, "Qual é o seu lugar preferido?");
}, (session, results) => {
  let lugar = results.response;
   session.endDialog(`Amamos **${lugar}**! É simplesmente um lugar muito bonito!`);
}]);
```

<p style='text-align: justify;'>
  Vamos entender alguns pontos antes de testarmos esse nosso bot. Notem que, das linhas 30 a 62 já estamos trabalhando com o conceito de waterfalls em nosso fluxo de conversação. Outros pontos muito interessantes a serem observados, são:
</p>

<p style='text-align: justify;'>
  A cada novo fluxo criado, criamos um ‘bot.dialog(‘/)’
  Todas as vezes que o usuário precisa responder algo ao ChatBot, usamos os Prompts.
  Nas linhas 41, 54 e 65 estamos usando os métodos já explicados acima: beginDialog e endDialog. Por que estamos usando? Porque estamos trabalhando com fluxos de conversação. E toda conversa precisa ter início e fim!
</p>

<p style='text-align: justify;'>
  Vamos executar esse código? Para isso, abram o emulator e vejam o resultado – lembrando que antes precisamos executar o nodemon e o arquivo criado!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/05/rd-1.jpg"/>  
</p>

Agora, sim, podemos executar o Emulator!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/05/cre.jpg"/>  
</p>

<p style='text-align: justify;'>
  Lindo, não é mesmo? Notem como fica mais fluido o fluxo de conversação do nosso ChatBot! Há muitas outras coisas envolvidas nessa parte do Bot! Caso queiram se inteirar mais a respeito desse assunto, peço que deem uma olhada nos vídeos que ando fazendo sobre o assunto – especialmente as aulas 09 a 11 **[AQUI](https://www.youtube.com/watch?v=-pB48tj_9_w)**:
</p>

## Palavras finais

<p style='text-align: justify;'>
  Como falado acima, há muita coisa que podemos aproveitar no fluxo de diálogos dentro de um ChatBot, tornando ele mais fluído e especialmente mais interativo com o nosso usuário final. Peço que deem uma olhada na documentação da Microsoft neste link, e nas vídeo aulas que estou fazendo sobre o assunto.
</p>

<p style='text-align: justify;'>
  No próximo artigo falarei sobre o uso do LUIS. Um serviço cognitivo da Microsoft, que deixará o nosso ChatBot mais inteligente! Nos vemos, pessoal! Até a próxima! 😄😄
</p>


