---
title: Desenvolvendo Aplicação de Medidor de Senhas Fortes e Seguras com AngularJS
---

Olá a todos!

<p style='text-align: justify;'>
  Hoje, vou escrever sobre como desenvolver uma aplicação utilizando uma biblioteca do JavaScript – zxcvbn – para criar um medidor de senha forte e segura em AngularJs.
</p>

Vamos prosseguir, e claro, dar as boas vindas a todos!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/youwelcome.jpg"/>  
</p>

Antes mais nada, esse artigo foi baseado nos seguintes sites:

- **[Scotch.io](https://scotch.io/tutorials/password-strength-meter-in-angularjs)**
- **[ZXCVBN](https://github.com/dropbox/zxcvbn)**

<p style='text-align: justify;'>
  Assim, todo mérito e honra a eles. Na época que escrevi esse artigo, estava desenvolvendo um projeto para fins pessoais sobre senhas fortes com AngularJS. E como gosto de blogar, resolvi escrever para fins de estudo pessoal meses atrás.
</p>

<p style='text-align: justify;'>
  A intenção inicial, era ser algo só para mim, mas como o WordPress é uma plataforma aberta… E acredito que se alguém buscar por essa dúvida no Google, pode acabar caindo aqui.
</p>

<p style='text-align: justify;'>
  Hoje, vamos criar um formulário de registro simples com campos: nome completo, e-mail e senha – utilizaremos a biblioteca zxcvbn. O objetivo dessa biblioteca do JavaScript é justamente estimar e mostrar para o usuário que está realizando o cadastro em um determinado formulário se a senha que ele está criando é segura e forte. A aplicação que vamos desenvolver será possível fornecer ao usuário um feedback visual. Também usaremos o AngularJs para realizar as ligações via two-way data binding na aplicação a ser desenvolvida.
</p>

## Mas, por que devemos medir as senhas criadas?

<p style='text-align: justify;'>
  Senhas são atualmente uma das coisas mais comuns que necessitamos para criar uma determinada autenticação do usuário na maioria das aplicações da web nos nossos dias. E por conta disso, se faz necessário que elas sejam bastante seguras e fortes.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/passwordstrengh.jpg"/>  
</p>

<p style='text-align: justify;'>
  Ao longo dos anos, técnicas como <b><a href="https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash_criptogr%C3%A1fica">Função Hash Criptográfica</a></b> – que envolve uma criptografia do tipo <b><a href="https://pt.wikipedia.org/wiki/Sal_(criptografia)">Sal</a></b>, que tem como objetivo, na maioria das vezes, para empregar e ocultar a representação real de senhas que serão armazenadas na base de dados.
</p>

<p style='text-align: justify;'>
  Embora a senha criada por meio de hash tenha proteção, o usuário ainda representa um grande desafio para a segurança de senhas. Isso porque, por mais que exista toda uma grande segurança no desenvolvimento da senha criptografada, se um determinado usuário escolher uma que seja considerada fácil, estará sob forte risco de ataque.
</p>

<p style='text-align: justify;'>
  Um usuário que usa uma palavra muito comum como senha, poderá tornar o esforço de hash inútil, uma vez que se o hacker fizer uso de um ataque de força bruta, poderá hackear essa senha em pouco tempo. E para piorar a situação, se o hacker fazer uso de uma infra-estrutura altamente sofisticada para realizar esse ataque, poderá levar milissegundos, dependendo da complexidade ou comprimento da senha.
</p>

<p style='text-align: justify;'>
  Muitas aplicações web hoje, como por exemplo Google, Twitter, Dropbox, Facebook entre outras, procuram orientar os usuários a criarem senhas consideravelmente fortes, justamente para poderem garantir um determinado comprimento mínimo de senha ou alguma combinação de caracteres alfanuméricos ou até mesmo utilização de caracteres especiais ou símbolos na senha.
</p>

<p style='text-align: justify;'>
  Mas, vem a pergunta: como é realizado um medidor de senha forte? Para garantir a total segurança de seus usuários, os desenvolvedores do <b><a href="https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/">Dropbox</a></b> desenvolveram um algoritmo par estimar uma senha forte. Este algoritmo está num pacote da biblioteca do JavaScript chamado <b><a href="https://github.com/dropbox/zxcvbn">zxcvbn</a></b>. Além disso, o pacote contém um dicionário de palavras, nomes e senhas em inglês mais usadas.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/DROPBOX.jpg"/>  
</p>

## Vamos começar?!

<p style='text-align: justify;'>
  Antes de começarmos esse artigo, gostaria de dizer que é preciso ter conhecimentos prévios em AngularJs. Caso não tenha, o próprio site do AngularJs fornece um tutorial totalmente step-by-step ensinando como desenvolver uma pequena aplicação com o framework. Os sites listados abaixo te auxiliarão na hora de aprender a desenvolver aplicações em AngularJs:
</p>

- [AngularJs.org – Tutorial](https://docs.angularjs.org/tutorial)
- [Canal Official Youtube – AngularJs](https://www.youtube.com/user/angularjs)
- [CodeSchool – Curso Shaping Up With Angular.Js](https://www.pluralsight.com/codeschool)
- [Codecademy – Learn AngularJs 1.x](https://www.codecademy.com/pt/pro-trial-expired)
- [Rodrigo Branas – Tudo sobre AngularJs](https://www.youtube.com/playlist?list=PLQCmSnNFVYnTD5p2fR4EXmtlR6jQJMbPb)

<p style='text-align: justify;'>
  Lembrando que se faz necessário ter conhecimentos básicos sobre JavaScript, ok? Caso não tenha, eu super recomendo o curso de JavaScript do Rodrigo Branas, o <b><a href="https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc">Desvendado a Linguagem JavaScript</a></b>.
</p>

<p style='text-align: justify;'>
  Obs.: Nesse artigo, utilizarei o AngularJs versão 1.x. Sei que já tem a versão 2, mas como é uma versão recente e pouco conhecida por alguns,vou estar utilizando a versão 1.x.
</p>

<p style='text-align: justify;'>
  Se faz necessário o download de todas as dependências que iremos precisar. E uma delas que vamos utilizar é o pacote Bower – se você ainda não tiver no seu computador, siga as instruções do Guia de Instalação <b><a href="https://bower.io/#install-bower">(aqui)</a></b>. Execute o seguinte comando para instalar todas as dependências para o artigo:
</p>

```
> bower install zxcvbn angularjs#1.5.9 bootstrap
```

<p style='text-align: justify;'>
  Lembrando que, para realizar o download do pacote acima, se faz necessário fazer download do <b><a href="https://nodejs.org/en/">Node.Js</a></b>!
</p>

Esse pacote já irá baixar: bootstrap, jquery, zxcvbn e o angularJs.

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/meme-13593-show-de-bola.jpg"/>  
</p>

A estrutura da aplicação será bem simples, contendo duas pastas e um arquivo:

- Pasta: assets
- Pasta: bower_components
- Arquivo: index.html

A estrutura do nosso projeto deverá ficar como segue a imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/screen-shot-01-20-17-at-08-27-pm-001.png"/>  
</p>

<p style='text-align: justify;'>
  Antes de começarmos, peço que façam o seguinte: vão até a pasta bower_components -> angularJs -> package.json e abaixo do scripts, adicione seguinte código:
</p>

```
(abaixo de script)
 
(...)
 
"postinstall": "bower install",
 
    "prestart": "npm install",
    "start": "http-server -a localhost -p 8000 -c-1 ./app",
 
    "pretest": "npm install",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js --single-run",
 
    "preupdate-webdriver": "npm install",
    "update-webdriver": "webdriver-manager update",
 
    "preprotractor": "npm run update-webdriver",
    "protractor": "protractor e2e-tests/protractor.conf.js"
 
    (...)
```

<p style='text-align: justify;'>
  Caso não consigam compreender onde e como, estou disponibilizando o código desse artigo no <b><a href="https://github.com/glaucia86/tutorial-senha-forte-angularjs">meu repositório do GitHub</a></b>
</p>

Bom, feito isso, estamos prontos para começar a desenvolver a nossa aplicação.

## Começando com o HTML

<p style='text-align: justify;'>
  Bom, vamos começar adicionando marcação básica para a nossa página no arquivo index.html. E também vamos aproveitar para poder fazer o link dos arquivos de bootstrap. Que nesse caso é:
</p>

- bootstrap.min.css
- bootstrap-theme.min.css
- angular.min.js

<p style='text-align: justify;'>
  E também, vamos incluir os arquivos CSS e JS no nosso projeto na pasta assets. Vejamos como vai ficar as primeiras linhas de código:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/HERE.jpg"/>  
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/sec.jpg"/>  
</p>

<p style='text-align: justify;'>
  Muitas linhas de código até aqui não é mesmo?! Peço que vocês adicionem os arquivos: .bower.json e package.json na raiz principal do projeto. Pois esses dois arquivos nos ajudarão quando formos executar o projeto via npm para abrir a aplicação via localhost, assim como segue a imagem abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/sec.jpg"/>  
</p>

<p style='text-align: justify;'>
  Agora, abra o cmd da sua máquina e vá até a pasta do projeto. Digite o comando npm start, depois digite <b>localhost:8000/index.html</b> e voilá! Vejam o resultado abaixo:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/BRANCO.jpg"/>  
</p>

<p style='text-align: justify;'>
  HTML e CSS simples (por enquanto… rs), mas chegando ao final do projeto, vamos fazer um ajustes para melhorar o visual dessa página.
</p>

## Carregando o zxcvbn de forma assíncrona

<p style='text-align: justify;'>
  Agora, vamos carregar de maneira assíncrona o pacote zxcvbn em nossa página. Para isso, devemos adicionar o script na pasta: assets/js/app.js. O script a seguir criará um novo elemento <script>, que é inserido antes do primeiro elemento script definido na página, quando o carregamento for terminado. O src dele elemento script apontará para o arquivo zxcvbn.js. O atributo async também será definido como true para permitir o carregamento assíncrono.
</p>

Adicione o código abaixo no arquivo: app.js

```
(function() {
    var ZXCVBN_SRC = 'bower_components/zxcvbn/dist/zxcvbn.js';
 
    var async_load = function() {
        var primeiroElemento, scrt;
 
        /* Criando um elemento para ser usado pelo DOM API*/
        scrt = document.createElement('script');
 
        /* Iniciar os atributos no elemento script */
        scrt.src = ZXCVBN_SRC;
        scrt.type = 'text/javascript';
        scrt.async = true; //async é um atributo do HTML5
 
        /* Agora aqui nós vamos pegar o primeiro elemento do script no documento */
        primeiroElemento = document.getElementsByTagName('script')[0];
 
        /* Em seguida vamos inserir o elemento antes do primeiro elemento no documento */
        return primeiroElemento.parentNode.insertBefore(scrt, primeiroElemento);
    };
 
    /* Agora... vamos adicionar o async_load como callback para o evento window load */
    if (window.attachEvent != null) {
        window.attachEvent('onload', async_load);
    } else {
        window.addEventListener('load', async_load, false);
    }
}).call(this);
```

<p style='text-align: justify;'>
  Agora, vamos testar a função zxcvbn() com qualquer string que simule uma senha no console do nosso navegador. A função zxcvbn() retorna um Object com inúmeras propriedades. Porém, neste artigo, estaremos mais focados na propriedade score, que é uma propriedade do tipo inteiro de 0 a 4 (muito útil para implementar uma barra de senha segura).
</p>

- 0 – senha extremamente fácil
- 1 – senha muito fácil
- 2 – senha fácil
- 3 – senha pouco forte
- 4 – senha extremamente forte

<p style='text-align: justify;'>
  Vamos executar e testar essa função no console do nosso navegador, simulando uma senha muito fácil e outra muito forte. Observem a propriedade score e vejam o resultado.
</p>

<p style='text-align: justify;'>
  Testaremos a função zxcvbn() com qualquer string que simule uma senha no console do nosso navegador. A função zxcvbn() retorna um Object com inúmeras propriedades. Porém aqui, estaremos mais focados na propriedade score, que é um propriedade do tipo inteiro de 0 a 4 (muito útil para implementar uma barra de senha segura).
</p>

- 0 – senha extremamente fácil
- 1 – senha muito fácil
- 2 – senha fácil
- 3 – senha pouco forte
- 4 – senha extremamente forte

<p style='text-align: justify;'>
  Agora, executaremos e testaremos essa função no console do nosso navegador simulando uma senha muito fácil e outra muito forte. Observem a propriedade score e vejam o resultado:
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/screen-shot-01-23-17-at-02-57-pm.png"/>  
</p>

<p style='text-align: justify;'>
  Show de bola, não é mesmo?! Isso é um sintoma de que a função que implementamos no arquivo app.js está funcionando. Agora, vamos implementar em nosso projeto o AngularJs!
</p>

## Usando elementos do AngularJs no projeto

<p style='text-align: justify;'>
  Vamos, agora, fazer algumas melhorias no nosso código usando o AngularJs. Primeiro, vamos criar um módulo para o nosso aplicativo e vamos chamar de SenhaSegura e um controlador simples para o nosso formulário chamado FormController. Então, para isso, vá até o arquivo: app.js e adicione abaixo do código já criado e acrescente essas duas linhas de código:
</p>

```
(...)
/* Criando um módulo da aplicação */
angular.module('senhaSegura', []);
 
/* Aqui estamos adicionando o controle do módulo criado */
angular.module('senhaSegura').controller('FormController',function($scope) {});

```

<p style='text-align: justify;'>
  A próxima coisa a fazer é alterar algumas partes do arquivo index.html para adicionarmos uma diretiva ng-app para o módulo no elemento <html> e uma diretiva ng-controller para o controlador no elemento <form>.
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/l.jpg"/>  
</p>

## Validando o formulário

<p style='text-align: justify;'>
  Agora que já adicionamos o AngularJs no projeto, vamos trabalhar com a questão do desenvolvimento da lógica da validação do formulário. Para isso, vamos seguir os passos abaixo:
</p>

<p style='text-align: justify;'>
  Vamos nomear os campos do nosso formulário. E também, adicionaremos as diretivas ng-model nos campos de entrada para que possamos usar o NgModelController.
  Em seguida, adicionamos a diretiva ng-required nos campos de entrada, uma vez que desejamos que os campos sejam preenchidos.
</p>
  
<p style='text-align: justify;'>
  Vamos também desabilitar o botão Enviar usando a diretiva ng-disabled e somente habilitar quando o formulário estiver totalmente preenchido e validado.
</p>

<p style='text-align: justify;'>
  E, finalmente, vamos aproveitar as diretivas ng-class e ng-show para fornecer uma mensagem de retorno para os elementos de entrada.
</p> 

O código do formulário modificado no arquivo index.html deverá estar de acordo com o código abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/box.jpg"/>  
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/cuut.jpg"/>  
</p>

<p style='text-align: justify;'>
  Vamos entender o que fizemos até agora aqui. No código acima, nomeamos o nosso formulário como cadastreAqui e damos os nomes aos elementos de entrada, tornando possível para aproveitar o NgModelController interno do AngularJs. Também criamos data-bindings para os elementos de entrada usando a diretiva ng-model.
</p>

<p style='text-align: justify;'>
  Usamos algumas propriedades de estado para fins de validação: -$dirty, $invalid, $error que já são fornecidas pela API NgModelController (mais informações <b><a href="https://docs.angularjs.org/api/ng/type/ngModel.NgModelController">aqui</a></b>) para determinar se o nosso formulário está totalmente validado. A diretiva ng-class é usada para adicionar dinamicamente uma classe de erro aos elementos de entrada com base nos critérios de validação.
</p>
  
<p style='text-align: justify;'>
  E também, usamos a diretiva ng-cloak para impedir que o navegador mostre as mensagens de erro durante a renderização. Uma vez que incluímos em nosso projeto o Angular.Js no final da nossa página, isso não seria eficaz. Para corrigir isso, adicionaremos a seguinte regra CSS ao arquivo style.css:
</p>
  
```
[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
    display: none !important;
}
```
Depois de realizar tais mudanças, o nosso formulário deve estar de acordo com a imagem abaixo:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/SBLUE.jpg"/>  
</p>

<p style='text-align: justify;'>
  Observem que o botão Enviar está desabilitado! Isso é um bom sinal de que as validações que desenvolvemos em AngularJs estão funcionando. Mas vamos prosseguir, pois ainda temos alguns detalhes para incluir em nosso projeto.
</p>

## Adicionando o medidor de força da senha

<p style='text-align: justify;'>
  Agora, vamos desenvolver a parte mais interessante em nosso projeto: o medidor de força de senha. Para isso, vamos criar uma nova diretiva para o nosso módulo senhaOk, que irá definir uma restrição de validação personalizada para o elemento password. Isso ajudará a garantir que uma senha válida deverá conter mais de 7 caracteres e deve ter uma pontuação mínima na função zxcvbn() de 2. Iremos também adicionar uma mensagem de retorno para o usuário para acompanhar o comprimento da senha criada.
</p>

<p style='text-align: justify;'>
  Primeiramente, vamos adicionar no arquivo index.html, após o elemento password, a lógica para medir a força da senha a ser criada:
</p>
  
<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/one.jpg"/>  
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/TWO.jpg"/>  
</p>

<p style='text-align: justify;'>
  Aqui estamos usando a classe ng-class e as classes do Bootstrap para fornecer uma mensagem de retorno com base no comprimento da senha. Também estamos usando um filtro de senha personalizado para formatar a exibição do comprimento da senha que, nesse caso, terá um comprimento acima de 7 caracteres.
</p>

<p style='text-align: justify;'>
  Realizando todas as modificações acima, o nosso projeto deve parecer como a imagem abaixo. Observe que há um comportamento estranho em nosso projeto, mas iremos resolver isso, uma vez que formos tratar o filtro tamanhoSenha:
</p>
  
<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/smaller.jpg"/>  
</p>

<p style='text-align: justify;'>
  Antes de prosseguir, vamos definir o filtro para o tamanhoSenha que irá formatar a exibição do comprimento da senha na visualização para o usuário. Vamos acrescentar o seguinte código no arquivo app.js para criarmos o filtro:
</p>

```
angular.module('SenhaSegura', []);
 
/* Aqui estamos adicionando o controle do módulo criado */
angular.module('SenhaSegura').controller('FormController',function($scope) {});
 
/** Criando um filtro para tamanhoSenha */
angular.module('SenhaSegura').filter('tamanhoSenha', [function() {
 return function(valor, maximo) {
 var valor = angular.isString(valor) ? valor : '',
 maximo = isFinite(maximo) ? maximo : 7;
 
 return valor && (valor.length > maximo ? maximo + '+' : valor.length);
 };
}]);
```

<p style='text-align: justify;'>
  No código acima, o filtro tamanhoSenha receberá um valor de uma cadeia de string e um parâmetro de valor máximo opcional que assume como padrão o valor 7. Se o comprimento da sequência de entrada for menor que o valor máximo, ele retornará o comprimento da sequência de caracteres. Caso contrário, ele retornará um valor {maximo}+
</p>

Observem a mensagem de erro visual para o comprimento da senha:

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/SLICE.jpg"/>  
</p>

<p style='text-align: justify;'>
  Bom, agora vamos continuar a criar uma diretiva chamada senhaOk para o campo senha. Vamos também criar um serviço que irá encapsular a implementação da função zxcvbn(). Vamos adicionar o código a seguir no arquivo app.js para criar o serviço:
</p>

```
/* Criando aqui um serviço para a funcionalidade zxcvbn() */
angular.module('SenhaSegura').factory('zxcvbn', [function(){
    return {
        score: function() {
            var count = zxcvbn.apply(null, arguments);
            return count && count.score;
        }
    };
}]);
```

<p style='text-align: justify;'>
  Aqui criamos um serviço chamado zxcvbn que fornecerá uma pontuação provido da API do método score. O score() utilizará os mesmos parâmetros que a função zxcvbn() e o chamará internamente. Com isso, irá retornar uma pontuação estimada da senha forte que o usuário está criando.
</p>

Agora, podemos aplicar esse serviço para criar a nossa diretiva. Adicionar o seguinte código no arquivo app.js:

```
/* Criando aqui uma diretiva para o 'senhaOk' como dependência do 'zxcvbn' */
angular.module('SenhaSegura').directive('senhaOk', ['zxcvbn', function(zxcvbn) {
    return {
        restrict: 'AC',
        required: 'ngModel',
        link: function($scope, $element, $attrs, $ngModelCtrl) {
            $element.on('blur change keydown', function(e) {
                $scope.$evalAsync(function($scope) {
                    var senha = $scope.senha = $element.val();
 
                    $scope.senhaSegura = senha ? (senha.length && 7 && zxcvbn.score(senha) || 0) : null;
 
                    ngModelCtrl.$setValidity('senhaOk', $scope.senhaSegura >= 2);
                });
            });
        }
    };
}]);
```

<p style='text-align: justify;'>
  Aqui definimos a diretiva senhaOk com o serviço zxcvbn como uma dependência. Especificamos que a diretiva pode ser usada como uma classe ou como um atributo. Também especificamos que precisamos do NgModelController.
</p>

<p style='text-align: justify;'>
  Na função link(), adicionamos um evento no elemento que será acionado nos eventos de desfocagem, alteração e keyup. O ouvinte de eventos usa o método $scope.$evalAsync() para atrasar a atualização das propriedades do escopo. Além disso, o método $setValidity() do NgModelController foi usado para definir o critério de validade para a restrição de validação senhaOk.
</p>

<p style='text-align: justify;'>
  E, finalmente, adicionaremos o senha-ok como atributo ou classe no elemento password para que seja aplicada a validação da diretiva criada.
</p>

Vejam o resultado final do nosso projeto desenvolvido!

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/or-1.jpg"/>  
</p>

<p style='text-align: justify;'>
  Notem que a barra que mede a força da senha está funcionando de maneira correta. Ou seja, está tudo funcionando corretamente!
</p>

<p style='text-align: justify;'>
  Agora, observem como o botão “Enviar” ficará habilitado uma vez que preenchemos todos os campos (fiz algumas alterações no html para deixar o projeto mais apresentável!):
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/TUT.jpg"/>  
</p>

Ficou bem mais lindo, não é mesmo?! <3

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/03/so-beautiful.gif"/>  
</p>

O código final da nossa página do index.html:

```
<!DOCTYPE html>
<html lang="pt-br" class="no-js" ng-app="SenhaSegura">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />

    <title>Aplicação Senha Forte e Segura em AngularJs</title>

    <!-- Inclusão dos arquivos minified do: Bootstrap e do CSS -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />

</head>

<body>
    <div class="jumbotron">
        <h1 class="text-center"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>Tutorial Code4Coders</h1>
        <h2 class="text-center">Glaucia Lemos - Full Stack Developer</h2>
        <h4 class="text-center">Desenvolvido com muito <span class="glyphicon glyphicon-heart" aria-hidden="true"></span> Brasil, Rio de Janeiro <a href="http://www.code4coders.wordpress.com" target="_blank"> - 2017</a> </h4>
    </div>
    <!--/ .container -->
    <div class="row">
        <div class="col-xs-6 col-md-4"></div>
        <div class="col-xs-6 col-md-4">
            <!-- Início do formulário -->
            <form action="" method="POST" role="form" name="cadastreAqui" ng-controller="FormController">
                <legend class="form-labe">Cadastre Aqui!</legend>

                <!-- Início do campo: Nome Completo -->
                <div class="form-group">
                    <label for="nomecompleto">Nome Completo</label>

                    <div class="error form-hint" ng-show="cadastreAqui.nomecompleto.$dirty && cadastreAqui.nomecompleto.$error.required" ng-cloak>
                        {{"Campo Obrigatório."}}
                    </div>

                    <input type="text" class="form-control" ng-class="(cadastreAqui.nomecompleto.$dirty && cadastreAqui.nomecompleto.$invalid) ? 'error' : ''" id="nomecompleto" name="nomecompleto" placeholder="Digite o seu Nome Completo" ng-required="true" ng-model="nomecompleto">
                </div>
                <!-- Fim do campo: Nome Completo -->

                <!-- Início do campo: Email -->
                <div class="form-group">
                    <label for="email">E-mail</label>

                    <div class="error form-hint" ng-show="cadastreAqui.email.$dirty && cadastreAqui.email.$error.required" ng-cloak>
                        {{"Campo Obrigatório."}}
                    </div>

                    <div class="error form-hint" ng-show="cadastreAqui.email.$dirty && cadastreAqui.email.$error.email" ng-cloak>
                        {{"E-mail inválido."}}
                    </div>

                    <input type="email" class="form-control" ng-class="(cadastreAqui.email.$dirty && cadastreAqui.email.$invalid) ? 'error' : ''" id="email" name="email" placeholder="Digite o seu E-mail" ng-required="true" ng-model="email">
                </div>
                <!-- Fim do campo: Email -->

                <!-- Início do campo: Senha -->
                <div class="form-group">
                    <label for="senha">Senha</label>

                    <div class="form-hint">Para que a senha digitada esteja dentro da conformidade com a nossa política de senha é necessário criar uma senha suficientemente forte. A senha deve conter mais de 7 caracteres.
                    </div>

                    <input type="password" class="form-control senha-ok" ng-class="(cadastreAqui.senha.$dirty && cadastreAqui.senha.$invalid) ? 'error' : ''" id="senha" name="senha" placeholder="Digite a Senha" ng-required="true" ng-model="senha">

                    <div class="label password-count" ng-class="senha.length > 7 ? 'label-success' : 'label-danger'" ng-cloak></div>

                    <div class="strength-meter">
                        <div class="strength-meter-fill" data-strength="{{senhaSegura}}"></div>
                    </div>

                </div>
                <!-- Fim do campo: Senha -->

                <button type="submit" class="btn btn-primary" ng-disabled="cadastreAqui.$invalid">Enviar</button>
            </form>
            <!-- Fim do formulário -->
        </div>
        <div class="col-xs-6 col-md-4"></div>
    </div>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>

</html>
```

## Palavras finais

<p style='text-align: justify;'>
  Hoje, aprendemos como implementar um medidor de força para senha com base na biblioteca JavaScript: zxcvbn em nossa aplicação AngularJs. Caso queira se aprofundar mais nessa biblioteca, há um guia detalhado com documentação no repositório do GitHub do zxcvbn <b><a href="">Teste</a></b>aqui.
</p>

<p style='text-align: justify;'>
  Os códigos desenvolvidos estão no <b><a href="https://github.com/glaucia86/tutorial-senha-forte-angularjs">meu repositório do GitHub</a></b>.
</p>

<p style='text-align: justify;'>
  E caso desejam ver a DEMO desse projeto encontra-se <b><a href="http://glaucia86.github.io/medidorSenhaForte/">aqui</a></b>.
</p>

<p style='text-align: justify;'>
  Ah! E não se esqueçam de se inscreverem no <b><a href="https://www.youtube.com/user/l32759?sub_confirmation=1">meu canal.</a></b>
</p>

Agradeço mais uma vez a todos e espero que tenham gostado! Até a próxima!

