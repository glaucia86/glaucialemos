---
title: Desenvolvendo bots com Microsoft Bot Framework & Node.Js – Parte 03
---

<p style='text-align: justify;'>
  Não, eu não me esqueci de vocês! Tenham certeza disso. E como prova, estou aqui escrevendo mais um artigo pra vocês. Vamos que vamos!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07135706/image12.png"/>  
</p>

## Depurando o Chatbot no VS Code

<p style='text-align: justify;'>
  Fugindo um pouco do que foi acordado com vocês, vi uma necessidade de ensinar a todos como depurar o nosso chatbot criado no VS Code. E como é uma dúvida de muitos,acredito que seria de suma importância ensinar a vocês, como proceder, uma vez que, depurar código faz parte da vida de cada desenvolvedor – e como salva nossas vidas!
</p>

<p style='text-align: justify;'>
  Só um lembrete: ainda farei o artigo sobre o uso do <b><a href="https://www.luis.ai/">LUIS</a></b>. Como algumas pessoas já me perguntaram como faz, resolvi dar um prioridade nesse assunto, mas tenham certeza de que no próximo artigo explicarei como criar intenções no LUIS para deixar o nosso ChatBot mais inteligente e principalmente mais interativo, ok?
</p>

<p style='text-align: justify;'>
  Usaremos o último exemplo do artigo anterior (caso não tenha visto, <b><a href="https://imasters.com.br/desenvolvimento/desenvolvendo-bots-com-microsoft-bot-framework-node-js-parte-02">clique aqui</a></b>). Abra o prompt de comando e digite o seguinte comando abaixo (dentro da pasta onde contém o arquivo):
</p>

```javascript
> nodemon --inspect dialogs.js 
```

Feito isso, veja se a sua tela está como na imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07135849/LA.jpg"/>  
</p>

<p style='text-align: justify;'>
  Para quem não sabe, o ‘inspector’ é uma lib interna que pertence ao Node.js e possui uma documentação muito bonita. Super recomendo a leitura da documentação, disponível neste link.
</p>

<p style='text-align: justify;'>
  Bom, feito isso, peço que abram o VS Code, cliquem no ícone do debug e escolham a opção “Node.js”, assim como na imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07135923/RED.jpg"/>  
</p>

Ao fazer isso ele vai gerar um arquivo de configuração ‘launch.json’ padrão do VS Code, conforme a imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07135948/square.jpg"/>  
</p>

<p style='text-align: justify;'>
  Agora vamos começar a configurar, para enfim conseguirmos depurar a nossa aplicação. Para isso, peço que alterem o arquivo ‘launch.json’ com as linhas de código abaixo:
</p>

```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to Node",
            "type": "node",
            "request": "attach",
            "port": 9229,
            "restart": true
        }
    ]
}
```

<p style='text-align: justify;'>
  Lembrando que é na porta “9229”! Feito isso, execute o debug dando o play e escolha um ponto do código para que possa realizar o debug, conforme a imagem abaixo (linha 46):
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07140214/SAYYY.jpg"/>  
</p>

<p style='text-align: justify;'>
  Ao fazer isso, observem o Debug Console. Ele vai pedir para executar a aplicação no Emulator. E é justamente o que faremos agora!
</p>

<p style='text-align: justify;'>
  Abram o Bot Emulator e vamos ver se ele vai parar no break point que escolhemos! Simulem uma conversação conforme a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07141025/SAY.jpg"/>  
</p>

Vejam o resultado!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07141049/ORAG.jpg"/>  
</p>

<p style='text-align: justify;'>
  Parou justamente onde queremos depurar o nosso código. Vamos agora entender algumas coisas aqui!
</p>

<p style='text-align: justify;'>
  Observem as setas acima na imagem. A seta pra baixo significa “Step Into” (F11). Ou seja, caso tivesse algum método aqui que quiséssemos ver a sua implementação, é ele que iríamos usar.
</p>

<p style='text-align: justify;'>
  Já a seta para cima é “Step Out” (F10) para você continuar a verificação do código em questão. E o botão de play é para você dar continuidade à execução do código. Para quem está acostumado a usar outras IDE’s, verá que as funcionalidades são as mesmas!
</p>

<p style='text-align: justify;'>
  Na parte de baixo do terminal integrado ao VS Code, há uma pequena linha de console onde você poderá testar o seu código e ver a resposta do mesmo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07141114/so.jpg"/>  
</p>

<p style='text-align: justify;'>
  E é só isso! Simples, não é mesmo? Agora vocês não têm desculpas para dizer que não sabem depurar código dentro do VS Code!
</p>

## Palavras Finais

<p style='text-align: justify;'>
  Depurar código, como disse acima, faz parte da vida de qualquer programador. E principalmente em linguagens funcionais como o JavaScript, fazer uso desse recurso nos auxilia e muito em identificar problemas e ter uma compreensão melhor do código. E claro que iremos precisar depurar em algum momento o nosso código ChatBot para identificar algum problema ou acompanhar o seu fluxo.
</p>

<p style='text-align: justify;'>
  No próximo artigo, como prometido, farei uso do LUIS, um serviço cognitivo da Microsoft que ajudará a deixar nosso Bot mais interativo e inteligente!
</p>

<p style='text-align: justify;'>
  Lembrando que estou fazendo uma série de vídeos sobre o assunto, e caso queiram acompanhar basta acessar o link abaixo:
</p>

Aulas 01 a 18 (Hands on em Desenvolvimento) **[AQUI](https://www.youtube.com/watch?v=ziHcgSZ7j0Q)**

Até a próxima pessoal!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/06/07141241/image71.gif"/>  
</p>


