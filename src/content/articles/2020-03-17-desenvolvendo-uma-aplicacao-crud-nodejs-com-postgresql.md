---
title: Desenvolvendo uma Aplicação CRUD Node.js com PostgreSQL
tags: tutorial, nodejs, postgresql, webdev
---

Fala Coders! Tudo certo? Hoje vamos começar uma série de artigos onde estaremos desenvolvendo uma aplicação CRUD com Node.js & PostgreSQL com enfoque no Back-End. Após isso, estaremos migrando o projeto para arquitetura serverless com **[Azure Functions](https://docs.microsoft.com/azure/javascript/node-howto-write-serverless-code?WT.mc_id=personal-blog-gllemos)**, migrando a base de dados local para **[Azure PostgreSQL](https://azure.microsoft.com/services/postgresql/?WT.mc_id=personal-blog-gllemos)** e finalmente realizando o deploy dessa aplicação usando o **[GitHub Actions](https://docs.microsoft.com/azure/app-service/deploy-github-actions?WT.mc_id=personal-blog-gllemos)** com **[Azure DevOps](https://docs.microsoft.com/azure/devops-project/azure-devops-project-nodejs?WT.mc_id=personal-blog-gllemos)**.

Acredito que o artigo será divido em 5 partes, justamente visando ensinar passo a passo a todos vocês aqui. Dependendo, estarei transformando os posts em forma de vídeo, pois sei que muitas pessoas amam aprender coisas por meio de vídeos **(sempre na semana seguinte ao artigo postado)**. Abaixo seguem as 5 partes dessa série:

| Código Exemplo | Link do artigo | Vídeo Aula |
|---|---|---|
| **[Project-1](project-1/README.md)** | **[Desenvolvendo uma Aplicação CRUD Node.js com PostgreSQL – Parte I](project-1/README.md)** | **[Vídeo 01 - Em Breve]()** |
| **Em Breve**  | **[Realizando o deploy da Aplicação Back-End (Node.js) na Nuvem – Parte II]()** | **[Vídeo 02 - Em Breve]()** |
| **Em Breve**  | **[Migrando o Back-End para o Serverless e Persistindo no PostgreSQL – Parte III]()** | **[Vídeo 03 - Em Breve]()** |
| **Em Breve** | **[Migrando a base de dados local da Aplicação para o Azure PostgreSQL – Parte IV]()** | **[Vídeo 04 - Em Breve]()** |
| **Em Breve** | **[Automatizando o deploy da aplicação para Nuvem com Azure DevOps & GitHub Actions – Parte V]()** | **[Vídeo 05 - Em Breve]()** |

Criei um repositório **[Link do Repositório](https://github.com/glaucia86/nodejs-postgresql-azure)**, onde estará alocado todos os código fontes desse projeto e mais os recursos que estarei mencionando durante os 5 artigos. 

>**Informação importante:** o enfoque do projeto será no Back-End. Caso ao chegarmos no final do projeto, quisermos testar a API do Back-End criado em alguma aplicação no Front-End, posso depois estar criando um Front-End genérico justamente para testar a api criada!

Bom, já falei muito, vamos nessa?!

## Recursos Utilizados no Desenvolvimento da Aplicação

Vou citar aqui alguns recursos que estaremos utilizando durante o desenvolvimento dessa aplicação no decorrer desse artigo. São eles:

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=personal-blog-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[Pacote - node-postgres](https://node-postgres.com/)**
* **[PostgreSQL](https://www.postgresql.org/)**

Uma das coisas que atrai a muitos a usarem o PostgreSQL é que ele é totalmente gratuito, disponível em qualquer Sistema Operacional e o melhor de tudo: é totalmente **[Open Source](https://github.com/postgres)**! Inúmeras grandes empresas como: Uber, Netflix, Spotify, Instagram, Reddit e tantas outras fazem uso do PostgreSQL. Por isso, a sua grande popularidade! 

O PostgreSQL foi a primeira base de dados que eu tive contato e foi com ele que aprendi nas aulas de Banco de Dados I e II no ano de 2012 na Faculdade. Sempre gostei dele porque é muito simples e fácil de usar!

Precisaremos instalar o PostgreSQL na nossa máquina. Mas, também fiquem à vontade de usarem alguma imagem Docker para dar continuidade nesse tutorial.

## Instalando o PostgreSQL 

Bom, estarei ensinando aqui para diferentes usuários de S.O:

* **Windows**: para usuários Windows, bastam realizar o download **[AQUI](https://www.postgresql.org/download/windows/)**. Instalação comum, como se estivesse instalando um programa no Windows. 

* **MacOS**: para usuários do Mac, bastam realizar o download dos pacotes **[AQUI](https://www.postgresql.org/download/macosx/)**. E também, precisará já ter instalado o **[Homebrew](https://brew.sh/)**. Caso tenham dificuldades para instalar, recomendo que deem uma olhada nesse vídeo **[AQUI](https://www.youtube.com/watch?v=5AOkxqFaYEE)**

* **Linux**: para usuários Linux, como existem inúmeras versões diferentes de Linux, recomendo que deem uma olhada nesse guia do PostgreSQL **[AQUI](http://postgresguide.com/setup/install.html)**

No meu caso, estarei usando o Windows, uma vez que é a minha máquina principal de desenvolvimento. Estarei fazendo uso da versão 12 do PostgreSQL. Depois de instalar, basta pesquisar por **pgAdmin**. Abrirá um browser: [http://127.0.0.1:16450/browser/](http://127.0.0.1:16450/browser/) e começar a usar!

[![Screen-Shot-03-01-20-at-10-01-PM.png](https://i.postimg.cc/fybcCy7H/Screen-Shot-03-01-20-at-10-01-PM.png)](https://postimg.cc/phg5X268)

## Criando Tabela no PostgreSQL

Vamos criar agora a tabela com as propriedades que serão usadas para persistir e serem usadas no nosso Back-End.

A classe será: `Produto`

```bash
Classe: Product

- productId: integer primary
- product_name_: varchar
- quantity: int
- price: real
```

Agora abrem o PgAdmin. É provável que você precise incluir a senha para realizar algumas ações dentro do PgAdmin. É provável que você precise criar um `Database`. Bastam criar com o nome que vocês desejarem. Depois que você criou o seu Database, clique com o botão direito em **Create Script** e execute o script abaixo no PostgreSQL (conforme o gif abaixo):

```sql
CREATE TABLE products (
	productId SERIAL PRIMARY KEY,
	productName VARCHAR(255) NOT NULL,
	quantity INTEGER NOT NULL,
	price NUMERIC(5,2)
);
```

[![postgresql-01.gif](https://s5.gifyu.com/images/postgresql-01.gif)](https://gifyu.com/image/IKZa)

Agora, bastam acessar a tabela recém criada!

[![postgresql-02.gif](https://s5.gifyu.com/images/postgresql-02.gif)](https://gifyu.com/image/IKZt)

Ótimo! Já temos a nossa tabela criada!

## Criando a Arquitetura da Aplicação no Node.js

Agora que a nossa tabela está criada, vamos criar o projeto no Node.js. Nesse projeto, estarei seguindo o princípio de SOLID & Clean Code. Caso vocês queiram saber mais sobre esses dois assuntos, recomendo os links abaixo:

* 📺 **[Clean Code: SOLID - Beau teaches JavaScript](https://youtu.be/XzdhzyAukMM)**
* 📄 **[SOLID Code in Node.JS](https://medium.com/@nanofaroque/solid-code-in-nodejs-a87685b4cdfe)**

Bom, vamos começar a arquitetar o nosso projeto. Crie uma pasta chamada `api` e execute o seguinte comando:

```bash
> npm init -y
```

Esse comando criará um arquivo padrão do `package.json`. E vamos agora instalar os seguintes pacotes:

```bash
> npm i --save-dev husky nodemon
```

E também instalar os demais pacotes como `dependencies`

```bash
> npm i cors dotenv express express-promise-router pg
```

No final, o arquivo `package.json` ficará da seguinte forma:

```json
{
  "name": "crud-nodejs-psql",
  "version": "1.0.0",
  "description": "Aplicação CRUD com Node.js & PostgreSQL",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon",
    "lint": "eslint --ext .js,.html -f ./node_modules/eslint-friendly-formatter . --fix",
    "prepush": "npm run lint",
    "start": "node server.js"
  },
  "keywords": [
    "node.js",
    "javascript",
    "postgresel",
    "azure",
    "serverless",
    "azure-functions",
    "azure-devops",
    "azure-storage",
    "github-actions",
    "app-service",
    "express"
  ],
  "author": "Glaucia Lemos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/glaucia86/nodejs-postgresql-azure/issues"
  },
  "homepage": "https://github.com/glaucia86/nodejs-postgresql-azure#readme",
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.1",
    "husky": "^4.2.3",
    "nodemon": "^2.0.2"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-plugin-html": "^6.0.0",
    "express": "^4.17.1",
    "express-promise-router": "^3.0.3",
    "pg": "^7.18.2"
  }
}

```

Notem que há pacotes adicionais que incluí aqui. Caso desejam saber um pouco mais sobre o `husky` e o `eslint`, fiz um vídeo explicando sobre eles e como instalar e configurar no projeto.

Youtube: {% youtube D9L6yYaQY2o %}

Crie a estrutura das pastas e arquivos conforme a imagem abaixo:

[![Screen-Shot-03-05-20-at-10-50-PM.png](https://i.postimg.cc/Xv6KhNwR/Screen-Shot-03-05-20-at-10-50-PM.png)](https://postimg.cc/9D1qwhgb)

Se tiverem dúvidas como está a estrutura das pastas e dos arquivos, bastam acessar o repositório do projeto **[AQUI](https://github.com/glaucia86/nodejs-postgresql-azure/tree/master/project-1)**. E caso queiram saber um pouco mais e entender a estrutura inicial do projeto, fiz também um vídeo ensinando um padrão que eu costumo adotar para criar um projeto Node.js em todos os meus projetos:

Youtube: {% youtube 5ahj4TM3GxQ %}

## Desenvolvimento da Aplicação

Daqui em diante, não vou explicar o que cada arquivo faz. Pois o foco principal do artigo é criar uma API RESTful e que no final deve ser persistada no PostgreSQL. Mas, se ficarem curiosos a respeito de cada linha desenvolvida, recomendo que deem uma olhada nos vídeos que eu fiz de uma API parecida com essa, onde eu explico detalhadamente o que é cada arquivo e as suas respectivas responsabilidades **[AQUI - Vídeos: Aula 13 à Aula 26.1](https://www.youtube.com/playlist?list=PLb2HQ45KP0Wv5ZKHK-qHENtY_63LiumFq)**.

Abram o **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=personal-blog-gllemos)** e vamos começar a desenvolver o arquivo: `server.js` e inclua o seguinte bloco de código:

* **arquivo: server.js**

```js
/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 02/03/2020
 * Author: Glaucia Lemos
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});

```

Agora, abram o arquivo `src -> app.js` e inclua o bloco de código abaixo:

* **arquivo: app.js**

```js
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', productRoute);

module.exports = app;

```

Observem que, nesse arquivo `app.js`, há várias linhas de código comentadas, justamente para poder fazer executar inicialmente a nossa API e ver se estamos desenvolvendo corretamente. Mas, lá para frente estaremos fazendo algumas alterações significativas nesse arquivo e depois descomentar essas linhas.

E finalmente, abram o arquivo `src -> routes -> index.js` e incluam o bloco de código abaixo:

* **arquivo: src -> routes -> index.js**

```js
/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 02/03/2020
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;

``` 

Agora, abram o prompt de comando dentro da pasta `api` e executem o comando:

```bash
> nodemon
```

E, em seguida, abram o postman e incluam a seguinte URL no (GET): `localhost:3000/api/` e vejam o resultado:

[![Screen-Shot-03-02-20-at-12-47-AM.png](https://i.postimg.cc/L5rv4Wbk/Screen-Shot-03-02-20-at-12-47-AM.png)](https://postimg.cc/jn4yZMKC)

Se apareceu conforme a imagem acima é porque está funcionando a nossa API de forma correta! Agora, vamos nos aprofundar no desenvolvimento. Aqui vamos!

## Entendendo um pouco mais sobre pacote: 'node-postgres'

Vocês devem ter notado que, no momento que instalamos alguns pacotes, incluímos o pacote **[node-postgres](https://node-postgres.com/)**. Esse pacote será fundamental para que possamos trabalhar com o Client do PostgreSQL no Node.js.
Esse pacote é um projeto **[open source](https://github.com/brianc/node-postgres)**. E possui uma documentação simples e direta - ensinando como podemos implementar esse pacote em Promises ou usando Async/Await. Me ajudou e muito a desenvolver esse tutorial! 

Recomendo a leitura da documentação do pacote, que encontra-se aqui **[AQUI](https://node-postgres.com/features/pooling)**

Nesse projeto preferi usar ele do que o **[Sequelize](https://sequelize.org/)**, que é um ORM muito usado para quem usa o PostgreSQL, MySQL, MariaDB, SQLite e o Microsoft SQL Server. Justo para deixar esse `projeto-1` mais simples. 

Se vocês desejarem, quando eu terminar essa série, posso criar um projeto na mesma estrutura usando o Sequelize. Deixem nos comentários abaixo se desejam que eu faça um artigo com o Sequelize! 😉

Como já instalamos o pacote `node-postgres` no início, vamos avançar!

## Criando uma variável de ambiente com 'dotenv'

Outro ponto que vocês devem ter percebido é que também instalamos o pacote **[dotenv](https://github.com/motdotla/dotenv)**. Esse pacote server para que possamos armazenar as nossas variáveis de ambiente que não desejamos deixar disponível para o público ao realizar um `commit`. 

E como usaremos a **connection String** da base de dados e como essa connection string possui dados sensíveis não queremos disponibilizar isso para todo mundo. Vamos tratar isso agora no nosso projeto. Para isso, sigam os seguintes passos abaixo:

Na raiz do projeto, dentro da pasta `api` crie o arquivo `.env`. E dentro dele inclua o seguinte bloco de código:

```sql
DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
```

No meu caso, ficou da seguinte forma:

```sql
DATABASE_URL=postgres://postgres:glau123@localhost:5432/crud-nodejs-psql
```

Se vocês não souberem qual é o `db_username` do seu PostgreSQL, bastam  clicar com o botão direito do Server do PgAdmin e ir em `Properties -> Connections` que vocês encontrarão o username. Vejam no gif abaixo:

[![postgresql-03.gif](https://s5.gifyu.com/images/postgresql-03.gif)](https://gifyu.com/image/IuWY)

## Configurando a conexão com a Base dados no arquivo: 'database.js'

Agora que já incluímos a nossa connectionstring no arquivo `.env`, agora é o momento de comerçamos a desenvolver e configurar a conexão da base dados da nossa aplicação ao PostgreSQL. 

Para isso, abram o arquivo `database.js` e incluam o seguinte bloco de código:

* **config/database.js** 

```javascript
/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 04/03/2020
 * Author: Glaucia Lemos
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

```

Esse bloco está nada mais do que fazendo a conexão com a nossa connection string para que assim possamos enfim, começar a persistir os dados no PostgreSQL através do Node.js.

Notem que estamos usando o pacote `node-postgres`. Se desejarem entender um pouco mais sobre o `pg.Pool`, recomendo a leitura **[AQUI](https://node-postgres.com/api/pool)**, pois a partir de agora usaremos bastante ele, incluso as propriedades desse construtor! 

## Criando a rota: (POST) 'Create Product'

Já fizemos a configuração da nossa aplicação e já estamos realizando a conexão com a base de dados! Agora é que de fato começará a brincadeira! E para isso, vamos desenvolver a primeira rota. Para isso, vamos usar bastante a partir de agora dois arquivos: `product.controller.js` e `product.routes.js`.  

Sigam os seguintes passos:

Inclua o bloco de código abaixo no arquivo `product.routes.js`

* **arquivo: product.routes.js**

```javascript
// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 04/03/2020
 * Author Glaucia Lemos
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

module.exports = router;
```

Agora vamos desenvolver a lógica do método `createProduct`dentro do arquivo `product.controller.js`

* **controllers/product.controller.js**

```javascript
const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price }
    },
  });
};
``` 

Observe, que simplesmente usamos a query de inserção no código, assim como faríamos num script de SQL. Simples assim. E claro que, para retornar todos os valores inseridos colocamos uma mensagem para confirmar o produto criado e retornando todos os values desse produto.

Agora precisamos atualizar o arquivo `app.js` antes de testar a nossa aplicação. Para isso, descomente as linhas onde estavam as rotas de `product.routes`:

* **arquivo: app.js**

```javascript
/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 02/03/2020
 * Author: Glaucia Lemos
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

module.exports = app;

```

Abre o prompt de comando e digite o seguinte comando dentro da pasta `api`

```bash
> nodemon
```

5. Agora sim, podemos testar a nossa primeira rota criada. Para isso, abram o **[Postman](https://www.postman.com/)** no seguinte endpoint: (POST)`localhost:3000/api/products`, conforme o gif abaixo:

[![postgresql-04.gif](https://s5.gifyu.com/images/postgresql-04.gif)](https://gifyu.com/image/IucG)

Se aparecer a seguinte mensagem como abaixo:

```json
{
    "message": "Product added successfully!",
    "body": {
        "product": {
            "product_name": "Logitech MK270 Wireless Keyboard and Mouse Combo",
            "quantity": "2",
            "price": "18.99"
        }
    }
}
```

É porque persistiu perfeitamente. Para termos certeza disso, abram o PgAdmin da tabela criada e façam conforme o gif abaixo:

[![postgresql-05.gif](https://s5.gifyu.com/images/postgresql-05.gif)](https://gifyu.com/image/IugE)

Perfeito! Uma vez que a gente consegue criar a primeira rota, as demais serão fáceis! 

Vamos dar continuidade!

## Criando a rota: (GET) 'List All Products'

Agora vamos criar a rota que listará todos os produtos criados e persistidos no PostgreSQL. Seria interessante vocês aproveitarem que a rota `POST` já está criada e incluírem mais dados, para ajudar nas rotas futuras!

Retorne novamente ao arquivo **product.routes.js** e inclua a rota para listar todos os produtos:

* **arquivo: product.routes.js**

```js

// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

```

Agora, volte ao arquivo **funcionario.controller.js** e vamos desenvolver a lógica do método **listAllProducts**:

* **arquivo: funcionario.controller.js**

```js

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
  const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
  res.status(200).send(response.rows);
};

``` 

Notem a query que fiz aqui: **SELECT * FROM products ORDER BY product_name ASC**. Aqui estou pedindo para retornar todos os produtos persistidos no PostegreSQL em ordem alfabética! Fiz isso para deixar um pouco diferente! ;)

Vamos testar, abram o Postman e vejam o resultado:

[![postgresql-06.gif](https://s5.gifyu.com/images/postgresql-06.gif)](https://gifyu.com/image/Iu4g)

Funcionou perfeitamente! Notem que, se precisarmos fazer um `SELECT` mais elaborado com subconsultas, seguindo a lógica, vai funcionar perfeitamente! :)

## Criando a rota: (GET) 'List Product by Id'

Agora, ficou muito fácil. Basta juntar os nossos conhecimentos de SQL com os demais CRUD's que já criamos em outras aplicações Node.js.

Vamos agora criar a rota para listar um determinado produto pelo Id. Novamente, abram o arquivo `product.routes.js` e incluam mais uma rota:

* **arquivo: product.routes.js**

```javascript
(...)

// ==> Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

(...)
```

Agora abram o arquivo `funcionario.controller.js` e vamos desenvolver a lógica dessa rota:

* **arquivo: funcionario.controller.js**

```javascript
(...)

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId]);
  res.status(200).send(response.rows);
}
```

Vamos testar agora essa rota no Postman e vejamos o que acontece:

[![postgresql-07.gif](https://s5.gifyu.com/images/postgresql-07.gif)](https://gifyu.com/image/Iu6x)

E vamos prosseguir!

## Criando a rota: (PUT) 'Update Product by Id'

Vamos agora novamente retornar ao arquivo `product.routes.js` para criar a rota `updateProductById` que será responsável por atualizar o produto pelo Id:

* **arquivo: product.routes.js**

```javascript
(...)

// ==> Rota responsável por atualizar 'Product' pelo 'Id': (PUT): localhost: 3000/api/products/:id
router.put('/products/:id', productController.updateProductById);
```

Retornemos ao arquivo `updateProductById` para desenvolver a lógica do método `funcionario.controller.js`:

* **arquivo: funcionario.controller.js**

```javascript
(...)

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  const response = await db.query(
    "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4",
    [product_name, quantity, price, productId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
};

```

Está atualizando perfeitamente! Vejam no gif abaixo: 

[![postgresql-08.gif](https://s5.gifyu.com/images/postgresql-08.gif)](https://gifyu.com/image/IWMz)

Agora vamos para a nossa última rota!

## Criando a rota: (DELETE) 'Delete Product by Id'

Enfim, chegamos a última rota da nossa api! Voltemos ao arquivo `product.routes.js` e vamos criar a rota para o método `deleteProductById`:

* **arquivo: product.routes.js**

```javascript
(...)

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

(...)
```

E enfim, desenvolver a lógica dessa rota no arquivo `funcionario.controller.js`:

* **arquivo: funcionario.controller.js**

```javascript
(...)

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db.query('DELETE FROM products WHERE productId = $1', [
    productId
  ]);

  res.status(200).send({ message: 'Product deleted successfully!', productId });
};
```

Tudo funcionando perfeitamente, se abrirmos o PostgreSQL veremos que agora só temos 5 produtos cadastrados!

[![postgresql-10.gif](https://s5.gifyu.com/images/postgresql-10.gif)](https://gifyu.com/image/IWMx)

## Palavras Finais

Hoje aprendemos a criar um CRUD API RESTFul com Node.js persistindo localmente no PostgreSQL. No próximo artigo estaremos ensinando a como realizar o deploy dessa aplicação no **[Azure App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-nodejs?WT.mc_id=personal-blog-gllemos)**! Depois de realizar esse deploy iremos testar no Postman e consequentemente no Swagger!

Lembrando que essa série está dividida em 5 partes, a qual vocês podem acompanhar desde os códigos desenvolvidos, os links de cada parte dos artigos e os vídeos de cada série: **[AQUI](https://github.com/glaucia86/nodejs-postgresql-azure)**

Outra coisa muito importante que gostaria de falar com todos vocês. Eu realizei uma votação na minha **[Conta do Twitter](https://twitter.com/glaucia_lemos86)** para saberem se vocês desejariam que eu transformasse essa série de artigos em um e-book. E já temos o resultado final!

{% twitter 1235217545998880769 %}

Então sim. Já estarei providenciando isso o quanto isso e todas as vezes que eu terminar de escrever um artigo, já irá para o e-book, que provavelmente farei no VuePress! 

E para ficarem por dentro de várias outras novidades, não deixem de me seguir lá no twitter!

[![Twitter](https://code4coders.files.wordpress.com/2019/05/image-12.png)](https://twitter.com/glaucia_lemos86)

Nos vemos! Até a próxima pessoal! 😍
