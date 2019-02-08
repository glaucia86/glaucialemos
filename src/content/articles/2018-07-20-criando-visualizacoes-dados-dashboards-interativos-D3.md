---
title: Criando Visualizações de Dados e Dashboards Interativos com D3.js
---

Fala, pessoal! Beleza?

<p style='text-align: justify;'>
  Bom, neste artigo falarei sobre como podemos criar visualizações de dados & Dashboards totalmente interativos com a bibliotecas do JavaScript: D3.js.
</p>

Já estava sentindo saudades de vocês! Vamos matar essa saudade agora?

## O que é D3.js?

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/19091809/D3D.jpg"/>  
</p>

<p style='text-align: justify;'>
  O <b><a href="https://d3js.org/">D3.js</a></b> é uma biblioteca do JavaScript que ajuda a manipular documentos baseados em dados, e o mais legal dessa biblioteca é que você pode fazer a integração desses dados usando: HTML, CSS e SVG.
</p>

<p style='text-align: justify;'>
  Por que eu resolvi escrever sobre isso? Porque eu estava realizando um trabalho dentro de uma empresa de seguros (a qual não posso mencionar), e eles precisavam fazer uso de alguma biblioteca que precisasse integrar as informações/dados do sistema para a WEB.
</p>

<p style='text-align: justify;'>
  E a solução (até o momento) que eles estavam pensando, era o <b><a href="https://neo4j.com/">Neo4j Graph</a></b>, outra excelente biblioteca – a qual poderei escrever outro artigo a respeito. Mas, devido a alta complexidade da biblioteca e falta de documentação, acabaram desistindo e indo para uma outra opção (agora não sei, uma vez que não estou mais lá).
</p>

<p style='text-align: justify;'>
  Bom, como sou uma pessoa super curiosa, quando cheguei em casa eu procurei realmente testar o Neo4j e também achei um pouco complexo. Mas, quando eu encontrei o D3.js, foi desse jeito:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/19091839/image11.jpg"/>  
</p>

<p style='text-align: justify;'>
  Por que do nome D3.js? Significa “Data-Driven Documents”, e o melhor disso; é <b><a href="https://github.com/d3/d3">open source</a></b> e vocês podem ajudar na contribuição dessa maravilhosa biblioteca!
</p>

<p style='text-align: justify;'>
  Os recursos que essa biblioteca nos fornece são inúmeros! Entre eles: geração de visualizações simples e complexas, interações com o usuário e efeitos de transição, fácil manipulação, já que faz uso de programação declarativa, e entre vários outros recursos!
</p>

<p style='text-align: justify;'>
  E os benefícios também são inúmeros entre elas: você não precisa de nenhum plugin, ótima visualização de dados, e a melhor parte: permite a manipulação do DOM.
</p>

Veja abaixo alguns gráficos feitos usando o D3.js:

- **[Bubble Chart](https://bl.ocks.org/mbostock/raw/4063269/)**
- **[Bullet Charts](https://bl.ocks.org/mbostock/raw/4061961/)**
- **[Population Pyramid](https://bl.ocks.org/mbostock/raw/4062085/)**
- **[Outros exemplos](https://github.com/d3/d3/wiki/Gallery)**

<p style='text-align: justify;'>
  Ok, eu falei bastante sobre os benefícios e recursos que essa biblioteca JavaScript nos dá, mas, como todo bom desenvolvedor(a), vamos começar a brincar!
</p>

## Demo! Demo! Demo!

<p style='text-align: justify;'>
  Calma, gente! Vamos à demo, então. Para isso, peço que usem os seguintes recursos:
</p>

- **Visual Studio Code**
- **Node.Js**

<p style='text-align: justify;'>
  Sim, simplesmente disso que precisaremos. Vamos agora, passo a passo, desenvolver um simples gráfico usando o D3.js.
</p>

<p style='text-align: justify;'>
  Primeira coisa: peço que procurem estruturar o projeto, conforme a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/19091904/image31.png"/>  
</p>

Notem que incluí três arquivos na pasta 'src':

- **index.html**
- **index.js**
- **index.css**

<p style='text-align: justify;'>
  Vamos focar nesses três arquivos contidos dentro da pasta src! É justamente aí que toda a brincadeira vai começar! Vamos instalar o D3.js via npm no projeto. Para isso, peço que executem os seguintes comandos:
</p>

```javascript
> npm install http-server -g
> npm install --save-dev d3
```

<p style='text-align: justify;'>
  Feito isso, podemos agora começar a desenvolver. Abram o Visual Studio Code e vamos começar criando o estilo para o nosso gráfico. Para isso, vamos começar a desenvolver o arquivo: <b>index.css</b>:
</p>

```css
.chart div {
    font: 12pxsans-serif;
    background-color: #8A2BE2;
    padding: 4px;
    margin: 2px;
    color:  #FFF8DC;
}
```

<p style='text-align: justify;'>
  Até aqui, nada diferente. Estamos criando uma classe chamada ‘chart’, a qual, dentro dessa div, haverá todo esse estilo pré-determinado aqui!
</p>

<p style='text-align: justify;'>
  Bom, vamos ao segundo passo, dessa vez, no arquivo <b>index.html</b>. Inclua o seguinte código abaixo:
</p>

```html
<div class="chart">
</div>
```
<p style='text-align: justify;'>
  Beleza! Agora vamos para o arquivo onde a brincadeira vai funcionar! Abra o arquivo <b>index.js</b> e coloque o seguinte bloco de código abaixo:
</p>

```javascript
/**
*
* Arquivo: index.js
* Data: 17/07/2018
* Descrição: Desenvolvimento de um simples gráfico usando a biblioteca do Js: D3.js
* Author: Glaucia Lemos
*
*/

var data = [56, 89, 125, 264, 397, 451, 582, 654];

d3.select(".chart")
 .selectAll("div")
 .data(data)
 .enter()
 .append("div")
 .style("width", (d) => {
 return 'R$ '+ d;
});
```

<p style='text-align: justify;'>
  Bom, vamos entender alguns pontos aqui. Na linha 10 podemos ver a criação de um array com oito valores que estarão no nosso bar chart.</p>

<p style='text-align: justify;'>
  Das linhas 14 a 19, já estamos definindo alguns itens que serão importantes para a criação do nosso gráfico. O <b>selectAll</b> pegará todos os itens dentro de uma determinada <b>div</b>. Já o método <b>data</b> retornará o nosso array declarado acima e o método <b>enter</b> servirá para retornar um determinado elemento do DOM, que será encontrado. Já o método ‘append‘ retornará uma nova seleção contendo elementos anexados, que neste exemplo é a <b>div</b>.
</p>

<p style='text-align: justify;'>
  Bom, explicando agora o que é cada parte, vamos prosseguir com o nosso desenvolvimento.

  Voltemos ao arquivo <b>index.html</b>. Inclua o seguinte bloco de código:
</p> 

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gráfico de Ganhos - iMasters</title>

    <!-- Inclusão da biblioteca do D3.js via cdn -->
    <script src="https://d3js.org/d3.v3.min.js"></script>

    <!-- Inclusão do estilo do gráfico -->
    <link rel="stylesheet" href="index.css">
</head>

<body>

    <div id="dashboard">
        <p>Ganhos de Vendas</p>
        <div class="chart">

        </div>
    </div>

    <!-- Chamada do arquivo 'index.js' (parte da lógica) -->
    <script src="index.js"></script>
</body>

</html>
```

<p style='text-align: justify;'>
  Feito isso, vamos voltar agora para o arquivo <b>index.css</b> para fazer algumas alterações por lá. Vejam o código abaixo:
</p>


```css
.chart div {
    font: 12px sans-serif;
    background-color: #8A2BE2;
    padding: 4px;
    margin: 2px;
    color:  #FFF8DC;
}

#dashboard {
    width: 450px;
    border: 1px solid black;
}

p {
    text-align: center;
}
```

<p style='text-align: justify;'>
  Aqui, incluímos os estilos para <b>dashboard</b> e <b>p;</b> simples assim e em seguida, vamos para o arquivo <b>index.js</b>:
</p>

```javascript
/**
 *
 * Arquivo: index.js
 * Data: 17/07/2018
 * Descrição: Desenvolvimento de um simples gráfico usando a biblioteca do Js: D3.js
 * Author: Glaucia Lemos
 *
 */

var data = [56, 89, 125, 264, 397, 451, 582, 654];

var scale = d3.scale.linear()
    .domain([0, 654])
    .range([0, 400])

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", (d) => { return scale(d) + 'px' })
    .text((d) => {return 'R$ ' + d; });
```

<p style='text-align: justify;'>
  Notem que houve uma alteração no código comparado a primeira parte do desenvolvimento desse arquivo. Incluímos uma variável 'scale', justamente para determinar o range do tamanho do gráfico dentro da div!

  Vamos ver como vai ficará em ação? Abram o prompt de comando dentro da pasta onde vocês criaram o projeto e execute o seguinte comando:
</p>

```
> http-server
```

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/19131810/YELLOWW.jpg"/>  
</p>

Vá até o browser e digite: localhost:8080/src/index.html e veja o resultado:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/07/19131833/image41.png"/>  
</p>

<p style='text-align: justify;'>
  Lindo, não? Dá para fazer muita coisa com o D3.js. Basta dar uma olhada nos examples contidos no repositório da biblioteca, neste <b><a href="https://github.com/d3/d3">link</a></b>.
</p>


## Palavras finais

<p style='text-align: justify;'>
  Já venho mostrando em alguns artigos o poder que o JavaScript nos dá. Simplesmente podemos fazer qualquer coisa – mas qualquer coisa quando fazemos uso do JavaScript. Procurem sempre estudar JS e terão o poder em suas mãos!

  Falando em estudar, estou com o seguinte workshop: “Criando uma App REST API com Node.js & MongoDb” voltado para níveis iniciante a intermediário! Para quem quiser, está um preço muito bom e será totalmente online.

  Caso estejam interessados, façam a inscrição através deste <b><a href="https://www.sympla.com.br/criando-uma-app-rest-api-com-nodejs--mongodb__322154">link</a></b>, mesmo que não dê para fazer online no dia, não tem problema, eu enviarei o material do workshop por e-mail para cada participante que se inscrever.

  É isso, pessoal! Até a próxima.
</p>

