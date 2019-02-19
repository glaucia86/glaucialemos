---
title: Desenvolvendo bots com Microsoft Bot Framework & Node.Js – Parte 04
---

<p>
  Enquanto rolava o jogo Brasil x México, eu aproveitei o tempo disponível para falar sobre o LUIS. Então vamos dar continuidade à nossa série!
</p>

Vamos nessa?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141736/image1.jpg"/>  
</p>

## Breve resumo

<p>
  Nos últimos artigos, já falamos sobre o desenvolvimento de Bots com Microsoft Bot Framework e com isso, criamos bots simples.
</p>

<p>
  Mas, como mencionado no <b><a href="https://imasters.com.br/desenvolvimento/desenvolvendo-bots-com-microsoft-bot-framework-node-js-parte-03">artigo anterior</a></b>, agora vamos colocar um pouco mais inteligência em nosso Bot, usando justamente um dos <b><a href="https://azure.microsoft.com/pt-br/services/cognitive-services/">Serviços Cognitivos</a></b>.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141758/AZUURE.jpg"/>  
</p>

<p>
  Mas o que seriam os Serviços Cognitivos da Microsoft? O próprio site nos explica o que seria:
</p>

<p>
  “Turbine aplicativos, sites e bots com algoritmos para que eles vejam, ouçam, falem, entendam e interpretem as necessidades do usuário por meio de métodos naturais de comunicação. Transforme os seus negócios com a inteligência artificial hoje mesmo.”
</p>

<p>
  Resumindo, é uma coleção de API’s inteligentes que nos permite deixar as nossas aplicações mais interativas e que chega mais ‘próximo’ da linguagem humana.
</p>

E os principais serviços cognitivos disponíveis na plataforma da Microsoft, são:

* [Visão](https://azure.microsoft.com/pt-br/services/cognitive-services/directory/vision/)
* [Conhecimento](https://azure.microsoft.com/pt-br/services/cognitive-services/directory/know/)
* [Idioma](https://azure.microsoft.com/pt-br/services/cognitive-services/directory/lang/)
* [Fala](https://azure.microsoft.com/pt-br/services/cognitive-services/directory/speech/)
* [Pesquisa](https://azure.microsoft.com/pt-br/services/cognitive-services/directory/search/)

<p>
  Nesse artigo, estaremos explorando um dos serviços cognitivos da Microsoft, que nos permite deixar a nossa aplicação compreender melhor a linguagem humana, que é o <b><a href="https://www.luis.ai/home">LUIS</a></b>!
</p>

## Mas afinal, o que é LUIS?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141823/languagge.jpg"/>  
</p>

<p>
  LUIS (Language Understanding Intelligent Service) é um serviço de nuvem, que tem como objetivo fazer com que a interação entre ser humano e computador seja mais simples. O LUIS pode interpretar texto, extrair intenções ou entidades ao mesmo tempo.
</p>

<p>
  O mais legal disso tudo é que você pode usar o LUIS em diferentes contextos de aplicações:
</p>

* **Chatbots**
* **IOT Devices**
* **Commerce Chatbot**

<p>
  Nessa imagem temos um modelo exemplo de uma arquitetura de um Chatbot que usa a API do LUIS:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141848/T.jpg"/>  
</p>

Os conceitos importantes de LUIS, são:

* **Utterance** (Enunciados – input):
Pode ser uma mensagem falada ou escrita. Resumindo, são os enunciados. Ex.: “Quero comprar bilhete para Paris!”

* **Intent** (Intenções – output):
Representa as ações que os usuários querem obter. Ex.: App de viagem: BookFlight

* **Entity** (Entidades – output):

Representa as informações mais detalhadas que serão relevantes ao enunciado. Ex.: “Reserve um bilhete para Paris.”

<p>
  Caso queiram saber mais informações detalhadas sobre o LUIS, usem e abusem da documentação neste link.
</p>

Feito esse pequeno resumo, vamos ao que interessa! Vamos começar a usar o LUIS!

## Usando o LUIS

<p>
  Para usarmos o LUIS, vamos acessar o site oficial desse <b><a href="https://www.luis.ai/home">Serviço Cognitivo LUIS.ai</a></b> e depois clique em Log in/Sign in (para acessar a página há necessidade de criar uma conta Microsoft de e-mail).
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141911/sss.jpg"/>  
</p>

<p>
  Depois que fizer o login, vocês verão a seguinte página abaixo. Cliquem em “Create New App“:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141932/MY-APSSS.jpg"/>  
</p>

<p>
  Depois de clicar em “Create New App“, abrirá uma janela popup como segue a imagem abaixo e depois clique em “Done“:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03141956/done-done-done.jpg"/>  
</p>

Seguindo esses passos, o site direcionará para a página da aplicação criada:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142016/MUUU.jpg"/>  
</p>

## Vamos criar as Intenções!

<p>
  Nas palestras que eu tenho feito sobre uso de Bots com LUIS, eu tenho comentado a importância de sabermos usar cada contexto de palavras de acordo com as intenções e ações para justamente facilitar o LUIS.
</p>

<p>
  Nesta parte, vamos criar as Intents (Intenções) da nossa aplicação. Para isso, vamos adicionar várias intenções. Façam o seguinte:
</p>

<p></p>
Clique em Intents. Ao fazermos isso, aparecerá uma nova página para adicionarmos as nossas intenções, conforme segue a imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142121/FLIP.jpg"/>  
</p>

<p>
  Feito isso, clique agora em “Create new Intent“. É justamente aí que iremos criar as nossas intenções. Abrirá uma nova janela, conforme segue a imagem abaixo, e depois clique em “Done“.
</p>

<p>
  Depois de clicarmos em “Done“, seremos direcionados para uma outra página do LUIS, conforme segue a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142121/FLIP.jpg"/>  
</p>

Agora criaremos cada frase que poderá ser usadas dentro das nossas intenções:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142233/CANCEL.jpg"/>  
</p>

<p>
  Notem que são possíveis frases que o usuário poderá usar durante uma determinada solicitação do ChatBot. Sintam-se a vontade para incluir mais intenções aqui. Fica esse exercício para vocês fazerem.
</p>

## Definindo a Entities (Entidades)

<p>
  Nas palestras também eu sempre digo que as entities seriam o substantivo principal que estaremos lidando. Por ex.: numa aplicação que lida com pedido de pizza, qual seria a nossa entidade? a Pizza! É de suma importância saber identificar o que é cada um: o que seria a Entidade e o que seriam as Intenções.
</p>

<p>
  Para a nossa aplicação, como estamos lidando com uma Lanchonete, nossa entidade será: ”Lanche’. Depois que definirmos a nossa Entidade, criaremos ela no dashboard na página do LUIS, conforme segue a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142316/clls.jpg"/>  
</p>

<p>
  Feito isso, vamos agora incluir uma Entidade pré-definida. No site do LUIS, podemos ver uma lista de Entidades pré-definidas que podemos usar em nossa aplicação. No nosso caso, usaremos a “DateTime“.
</p>

<p>
  Clique em “Add or remove prebuilt entities” e coloque na label “datetime”. Selecione e clique em “Done“, conforme segue a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142337/FUTURE.jpg"/>  
</p>

<p>
  Agora estamos ‘listos’ e prontos para melhorar os nossos modelos criados no Intents. Vamos prosseguir!!!
</p>

## Especificando melhor o nosso Modelo

<p>
  Voltem agora no Intents para melhorarmos nosso modelo da seguinte maneira (incluir mais intenções aqui. Fiz algumas alterações, conforme segue a imagem abaixo):
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142357/nbg.jpg"/>  
</p>

<p>
  Feito isso, agora vamos ‘Treinar’ os nossos Intents. Para isso, cliquem no botão: ‘Train” (localizado no canto esquerdo).
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142421/PEDIR.jpg"/>  
</p>

<p></p>
Depois de clicar em ‘Train“, clique em “Publish” e vai abrir a seguinte página, conforme a imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142443/Publisishh.jpg"/>  
</p>

<p>
  É de suma importância que escolham a opção to TimeZone de São Paulo. Notem que, quando for gerar a key, aparecerá uma url e no final dela com o parâmetro -180.
</p>

<p>
  Peguem essa mesma key e guardem, pois iremos precisar para usar na nossa aplicação. Após isso, cliquem em “Publish“.
</p>

<p>
  Feito! Agora estamos prontos para começar a codificar o nosso Bot com Node.js! Vamos nessa!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142505/image2.jpg"/>  
</p>

## Criando um ChatBot com: Node.Js + LUIS!

<p>
  Agora vou pedir para vocês abrirem o VS Code e criarem a seguinte estrutura da aplicação, conforme a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142744/image3.png"/>  
</p>

<p>
  Notem que criei uma nova pasta chamada “parte-4” e dentro dela um arquivo chamado “lanchoneteApp.js“. É justo aí que vamos criar a nossa lógica que ligará com o LUIS. E também criei um outro arquivo “.env“. Esse arquivo é onde estará a url gerada lá na página do LUIS, pois como esse arquivo está listado no .gitignore, quando fizermos o commit da aplicação ele não será enviado ao repositório.
</p>

Abram o arquivo: package.json e adicionem os seguintes pacotes:

* dotenv-extended: para saber mais a respeito desse pacote, [cliquem aqui](https://www.npmjs.com/package/dotenv-extended).
* moment: para saber mais a respeito desse pacote, [cliquem aqui](https://www.npmjs.com/package/moment).

Copiem e colem o código do “lanchoneteApp.js“:

```javascript
/**
 *
 * Arquivo: lanchoneteApp.js
 * Data: 02/07/2018
 * Descrição: Desenvolvimento de um Bot de pedido de lanche integrado com o LUIS.
 * Author: Glaucia Lemos
 *
 */

// Aqui estou carregando os enviroments que estão vindo do
// arquivo 'env':
require('dotenv-extended').load({
    path: '../../.env'
});

const moment = require("moment");
const builder = require("botbuilder");
const restify = require("restify");

const server = restify.createServer();

//===> Configuração do Bot:
let connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

let bot = new builder.UniversalBot(connector);

//===> Configuração LUIS:
let recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
let intents = new builder.IntentDialog({ recognizers: [recognizer] });

//===> Configuração dos 'Intents'(Intenções):

//Endpoint - Saudar:
intents.matches("Saudar", (session, results) => {
    session.send("Oi! Tudo bem? Em que eu posso ajudar?");
});

//Endpoint - Pedir:
intents.matches("Pedir", [
    (session, args, next) => {
        var lanches = [
            "Tapioca",
            "Pizza",
            "Suco",
            "Batata Frita",
            "Hamburger",
            "X-Burger",
            "Sobremesa"
        ];
        let entityLanche = builder.EntityRecognizer.findEntity(args.entities, "Lanche");

        //Aqui estaremos verificando com o LUIS os melhores 'matches' para a solicitação
        //do pedido dos lanches através da Entidade: Lanche:
        if (entityLanche) {
            var match = builder.EntityRecognizer.findBestMatch(lanches, entityLanche.entity);
        }

        //Caso não encontre o que o usuário está solicitando:
        if (!match) {
            builder.Prompts.choice(session, "No momento só temos esses lanches disponíveis. Qual que você gostaria de pedir?", lanches);
        } else {
            next({ response: match });
        }
    },
    (session, results) => {
        //Aqui é para indicar em quanto tempo o pedido do lanche deverá ser entregue: em 30 minutos:
        if (results.response) {
            var time = moment().add(30, "m");

            session.dialogData.time = time.format("HH:mm");
            session.send("Pronto! Seu lanche **%s** chegará às **%s**.", results.response.entity, session.dialogData.time);
        } else {
            session.send("Sem problemas! Se não gostarem, podem pedir numa próxima vez! :D");
        }
    }
]);

//Endpoint - Cancelar:
intents.matches("Cancelar", (session, results) => {
    session.send("Pedido cancelado com sucesso! Muito Obrigada! Até a próxima!");
});

//Endpoint - Verificar:
intents.matches("Verificar", (session, results) => {
    session.send("Seu lanche chegará às **%s**", session.dialogData.time);
});

//Endpoint - Default:
let teste = intents.onDefault(
    builder.DialogAction.send("Desculpe! Mas, não entendi o que você quis pedir!")
);

bot.dialog("/", intents);

//Configuração do Servidor via Restify:
server.post("/api/messages", connector.listen());

server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("Aplicação executando na porta %s", server.name, server.url);
});
```

<p>
  E agora incluam a url contida no site do LUIS dentro do arquivo .env. Feito isso, testaremos a nossa aplicação no Bot Emulator!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142804/flipflop.jpg"/>  
</p>

<p>
  Beleza! Feito isso, abra o cmder ou prompt comando, vá até o local onde está o arquivo “lanchoneteApp.js” e digite: nodemon lanchoneteApp.js.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142831/14.jpg"/>  
</p>

Vejam como fica a nossa interação com o ChatBot com o pedido da Lanchonete Rio Mais:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142856/hey.jpg"/>  
</p>

<p>
  O pacote “moment” é responsável por fazer a lógica do tratamento de tempo dentro da aplicação.
</p>

Agora vamos verificar e ver se o nosso pedido irá chegar a tempo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03142924/PURPLE-YELLU.jpg"/>  
</p>

<p>
  Note que o usuário perguntou que horas chegaria o pedido dele, e com isso o LUIS foi até o endpoint de “Verificar” e retornou a resposta para o usuário. Legal, né?
</p>

<p>
  Mas, vamos supor que esse pedido esteja demorando de mais e o usuário não queira mais; vamos ver se a intenção criada no LUIS funcionará para o cancelamento de pedido?
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03143316/HIGHTS.jpg"/>  
</p>

<p>
  Quando o usuário digitou “cancelar pedido” dentro de um contexto de uma frase, o LUIS automaticamente entendeu que o endpoint era justo de “Cancelar“, e retornou ao usuário a resposta de acordo com o que foi solicitado. Nosso chatbot da Lanchonete Rio Mais está completo e funcional!
</p>

<p>
  Se vocês notarem, dentro da página do LUIS há uma parte pra analisar todas as inclusões que o usuário está escrevendo. Ou seja, diariamente esse chatbot ficará mais inteligente conforme você for ‘treinando’ ele! E por mais que você não tenha definido nos Intents, o LUIS mostrará qual será a probabilidade que aquela determinada frase digitada pelo usuário pertencerá ao determinado Intent.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03143344/heey.jpg"/>  
</p>

<p>
  Muito legal, não é mesmo? Dá para fazer muita coisa legal com o LUIS. Fica a dica para vocês deram uma lida na documentação desse maravilhoso e incrível serviço cognitivo da Microsoft!
</p>

## Palavras Finais

<p>
  Estes últimos quatro artigos eu fiz com o objetivo de vocês conhecerem mais o SDK do Bot Framework, que nos permite desenvolver incríveis ChatBots, tanto em Javascript, C#, PHP, Ruby e Python.
</p>

Lembrando que, a partir dessa semana, estarei de volta dando continuidade às vídeo aulas do Hands on de Bots com Node.Js. <b><a href="https://www.youtube.com/playlist?list=PLb2HQ45KP0Ws3dVMoxliVX5ici53RmiNV">Link da Playlist</a></b>

<p>
  Espero que tenham gostado dessa série de artigos e caso tenham alguma dúvida inerente a algum artigo não hesitem em deixar um Issue no repositório do Github dessa série que se encontra <b><a href="https://github.com/glaucia86/chatbot-nodejs-imasters">aqui</a></b>.
</p>

Até o próximo artigo pessoal! Abraços a todos.

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/03154935/image8.png"/>  
</p>
