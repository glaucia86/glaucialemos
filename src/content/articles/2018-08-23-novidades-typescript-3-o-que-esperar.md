---
title: Novidades do Typescript 3.0 - O que Esperar?
---

Fala, pessoal! Tudo certo?

Estou aqui pra falar um pouco do último release que tivemos da versão 3.0 do tão aclamado Typescript!

<p style='text-align: justify;'>
  Bom, não percamos tempo; vamos às novidades dessa nova versão – uma vez que tem uma pancada de coisas legais pra falar aqui!
</p>

<p align="center">
  <img src="https://static.imasters.com.br/wp-content/uploads/2018/08/23154700/B3.jpg"/>  
</p>

<p style='text-align: justify;'>
  Sim, a versão 3.0 foi anunciada no último dia 30 de Julho de 2018, pela equipe de engenheiros da Microsoft pelo <b><a href="https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/">site oficialste</a></b> e tem bastante coisa legal nessa nova versão!
</p>

Vieram muitas coisas, mas só vou comentar as principais, sendo elas:

* Uso de Tuplas em parâmetros rest e expressões spread
* O novo type do Typescript: 'unknown'
* E, sim, o suporte ao 'defaultProps' em JSX

<p style='text-align: justify;'>
  Outra menção válida aqui, é que o Typescript 3.0 introduziu um novo mode para tsc, o flag “–build”, que permite compilações mais rápidas de referências de projetos em Typescript. Não entrarei em detalhes dessa mudança, mas caso queiram saber mais à respeito, recomendo entrar na documentação <b><a href="https://www.typescriptlang.org/docs/handbook/project-references.html">através deste link</a></b>.
</p>

Bom, vamos comentar as novidades que listei acima!

## Uso de Tuplas em parâmetros rest e expressões spread

<p style='text-align: justify;'>
  Antes de falarmos sobre Tuplas, é muito importante saber o que de fato são as Tuplas. O que seriam as Tuplas?
</p>

<p style='text-align: justify;'>
  Os tipos Tuplas (Tuple) são uma estrutura de dados que nos permitem expressar um determinado array, onde o tipo de número fixo de elementos é conhecido, mas que ao mesmo tempo não há necessidade de serem os mesmos.
</p>

<p style='text-align: justify;'>
  Vamos a um pequeno exemplo à respeito: imagine o seguinte cenário: vamos supor que você queira representar um determinado valor com um par de string e um outro com number:
</p>

```javascript

/**
* Arquivo: tuple-basic.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
*/

// Aqui estamos declarando x com um tipo 'tupla'
let x: [string, number];

// Aqui não haverá erro!
x = ['Oi! Tudo bem?', 10];

// Já aqui.... Not okay! 🙁
x = [10, 'Oi Tudo bem?'];

```

<p style='text-align: justify;'>
  Esse é um exemplo simples de como usar uma Tupla. Notem que a última linha não vai permitir executar o exemplo, uma vez que está errado. Vocês podem se aprofundar mais sobre uso de Tuplas neste link.
</p>

<p style='text-align: justify;'>
  Bom, mas vamos falar das mudanças feitas nesse tipo! Por exemplo, agora podemos usar tuplas em parâmetros rest. Mas como? Vejam o exemplo abaixo:
</p>

```javascript
/**

 * Arquivo: tuplas-rest-parameters.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
*/

// Aqui um exemplo de declaração de expressão com uso parâmetros rest com Tuplas
declare function foo(...args: [number, string, boolean]): void;

// Aqui o equivalente a declaração da função acima! 🙂
declare function foo(args_0: number, args_1: string, args_2: boolean): void;

```

Notem como a declaração fica mais intuitiva e mais simples de ler. Uma baita mudança, não é mesmo?

Outra mudança interessante é o uso de tuplas em expressões spread. Notem a mudança no código abaixo:

```javascript
/**

 * Arquivo: tuplas-spread-expression.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
*/

// Exemplo de tuplas sem uso da expressão spread
const args: [number, string, boolean] = [32, 'chocolate', true];
foo(32, 'chocolate', true);

// Exemplo da chamada da função com o uso da expressão spread
foo(args[0], args[1], args[2]);
foo(...args);

```
<p style='text-align: justify;'>
  Notem no exemplo acima que quando fazemos uma chamada de uma determinada função que tenha uma expressão spread com o tipo tupla, a expressão corresponderá a uma sequência de argumentos discretos dos tipos correspondentes dos elementos da tupla.
</p>

<p style='text-align: justify;'>
  Vamos agora a uma outra mudança interessante: uso de genéricos em parâmetros Rest. Vamos a um outro exemplo abaixo e logo em seguida explicarei o que mudou:
</p>

```javascript
/**
 * Arquivo: generic-rest-parameters.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
*/

declare function bind<G, L extends any[], U>(f: (x: G, ...args: L) => U, x: U): (...args: L) => U;
```

<p style='text-align: justify;'>
  Notem o exemplo acima. Parece meio louco, né? Mas, vou explicar aqui o que está acontecendo: nós temos os parâmetros 'args' – parâmetros rest – que estão herdando de um array do tipo 'any'. O que o Typescript fará? Ele irá extrair essa lista de parâmetros para qualquer coisa que colocarmos ou passarmos para ‘f’ e transformará numa tupla!
</p>

Vamos continuar com o nosso exemplo, sendo que agora todo ele:

```javascript
/**
 * Arquivo: generic-rest-parameters.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

declare function bind<G, L extends any[], U>(f: (x: G, ...args: L) => U, x: U): (...args: L) => U;

declare function f3(x: number, y: string, z: boolean) : void;

const f2 = bind(f3, 4); // (y: string, z: boolean) => void
const f1 = bind(f2, 'chocolate'); // (z: boolean) => void
const f0 = bind(f1, true); // () => void

f3(2, 'chocolate', true);
f2('chocolate', true);
f1(true)
f0();
```

Notem a função ‘f2’. Ele faz inferência aos tipos:

* G: number
* L: [string, boolean]
* U: void

<p style='text-align: justify;'>
  Já L, que é um tipo tupla, é inferido com a sequência de parâmetros e depois expandido para uma lista de parâmetros.
</p>

<p style='text-align: justify;'>
  Isso é interessante, pois nos permite uma melhor ordenação e declaração de listas parciais de parâmetros. Vamos a uma outra mudança interessante:
</p>

* Elementos opcionais

<p style='text-align: justify;'>
  O que seria isso? Agora podemos usar ‘?’ para indicar para uma determinada tupla que é opcional. Vejam o exemplo abaixo:
</p>

```javascript
/**
 * Arquivo: optional-elements.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 *
 */

let teste: [number, string?, boolean?];

teste = [42, 'chocolate', true];
teste = [42, 'chocolate'];
teste = [42]
```

Notem que ao fazermos uso do “?”, estamos indicando que aquele parâmetro é opcional. Legal, não é mesmo?

Vamos agora para a próxima mudança que veio na versão 3.0 do Typescript: tipo 'unknown'

## Tipo Unknown

Sim, na versão 3.0 do Typescript teremos agora um novo tipo: ‘unknown’.

<p style='text-align: justify;'>
  O tipo unknown seria uma versão mais segura – por assim dizer – do tipo 'any'. Como o tipo 'any' pode ser qualquer coisa e qualquer valor, dificultava na hora de fazer a verificação desse tipo. Já com o tipo unknown, podemos atribuir qualquer valor ao tipo 'unknown' (assim como já acontece com o tipo 'any').
</p>

<p style='text-align: justify;'>
  Outro ponto a salientar aqui, é que com o tipo ‘unknown’ não podemos fazer operações antes de definir para um tipo específico. E ele também é atribuído para ele mesmo ou ao tipo ‘any’. Bom, para ficar claro essa mudança, vamos ver no código:
</p>

```javascript
/**
 * Arquivo: unknown-type.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

let textoExemplo: unknown = 10;

// O código abaixo não irá executar uma vez que 'textoExemplo' é do tipo 'unknown'
textoExemplo.x.prop;
textoExemplo.y.prop;
textoExemplo.z.prop;

textoExemplo();
new tetextoExemplost();
upperCase(textoExemplo);
textoExemplo `Oi Pessoal!`;

function upperCase(x: string) {
    return x.toUpperCase();
}
```

Esse código de forma alguma irá executar conforme descrito no comentário. Mas, vamos alterar algumas coisas aqui:

```javascript
/**
 * Arquivo: unknown-type.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

// Agora sim.. vai funfar!!
let textoExemplo: unknown = 10;

// Aqui vamos colocar com o tipo ‘any’
function verificarTipos(obj: any): obj is { x: any, y: any, z: any } {
    return !!obj &&
        typeof obj === 'object' &&
        'x' in obj &&
        'y' in obj &&
        'z' in obj;
}

// Agora ficarão as propriedades ficarão acessíveis:
if(verificarTipos(textoExemplo)) {
    textoExemplo.x.prop;
    textoExemplo.y.prop;
    textoExemplo.z.prop;
}

upperCase(textoExemplo as string);

function upperCase(x: string) {
    return x.toUpperCase();
}
```

<p style='text-align: justify;'>
  Notem que estamos forçando eles para verificar os tipos ou usar um tipo mais assertivo que a aplicação/sistema acha melhor para ele!
</p>

<p style='text-align: justify;'>
  Vamos agora falar da última mudança dessa versão 3.0: suporte para 'defaultProps' em JSX!
</p>

## defaultProps em JSX

<p style='text-align: justify;'>
  Essa mudança é super conveniente para desenvolvedores front-end que trabalham com React e Typescript! Antes, o Typescript não permitia fazer declarações em aplicações React com o defaultProps dentro de componentes JSX.
</p>

<p style='text-align: justify;'>
  Tínhamos que declarar propriedades opcionais e usar afirmações não nulas dentro de render, conforme segue o exemplo abaixo:
</p>

```javascript
/**
 * Arquivo: defaultProps-jsx.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

// Antes:
export interface Props { name?: string }

export class Saudar extends React.Component<Props> {
    render() {
        const { nome } = this.props;
        return <div>Fala ${nome!.toUpperCase()}!</div>
    }

    static defaultProps = { nome: 'Glaucia Lemos' }
}
```

Agora com a nova versão, podemos fazer da seguinte maneira:

```javascript
/**
 * Arquivo: defaultProps-jsx.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

// Antes:
/*export interface Props { name?: string }

export class Saudar extends React.Component<Props> {
    render() {
        const { nome } = this.props;
        return <div>Fala ${nome!.toUpperCase()}!</div>;
    }

    static defaultProps = { nome: 'Glaucia Lemos' }
}*/

// Depois (com a versão 3.0):
export interface Props {
    nome: string
}

export interface Props {
    nome: string
}

export class Saudar extends React.Component<Props> {
    render() {
        const { nome } = this.props;
        return <div>Fala ${nome.toUpperCase()}!</div>;
    }
    static defaultProps = { nome: "Glaucia Lemos"}
}

// Sem a necessidade de fazer uso de tipo assertion aqui:
let texto = <Saudar />
```

<p style='text-align: justify;'>
  Legal, né? Há algumas limitações ao fazer uso desse suporte. Peço que entrem no site oficial da documentação do Typescript para ver outros exemplos e explicações de forma mais completa sobre as mudanças da versão 3.0 através <b><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html">deste link</a></b>.
</p>

## Conclusão

<p style='text-align: justify;'>
  Como já mencionado no início desse artigo, há outras mudanças que vieram para facilitar nossas vidas. Peço que entrem neste link para saberem mais sobre as outras mudanças não mencionadas aqui. Os códigos desenvolvidos se encontram no meu <b><a href="https://github.com/glaucia86/typescript-3-novidades-imasters">repositório do GitHub</a></b>.
</p>

Até a próxima pessoal! 😍😍




