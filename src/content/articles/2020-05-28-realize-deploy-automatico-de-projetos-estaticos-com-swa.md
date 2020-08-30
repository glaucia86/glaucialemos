---
title: Realize Deploy Automático de Projetos Estáticos com Azure Static Web Apps!
tags: javascript, vue, beginner, webdev
---

Fala Coders! Tudo bem? 😃 

A partir de hoje começaremos uma série de artigos a qual estaremos comentando sobre os últimos lançamentos da Microsoft durante o **[Build 2020](https://mybuild.microsoft.com/)**.

E um desses lançamentos é sobre o **[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=staticwebapps-personal-gllemos)**. Se você deseja entender mais sobre esse incrível serviço, para que serve e como começar a usar, você está no lugar certo! Esse artigo é justamente sobre isso!

Então aqui vamos! 😃

## Mas, afinal.. O que é Azure Static Web Apps?!

O **[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=staticwebapps-personal-gllemos)** é um serviço que cria e realiza deploy automaticamente de aplicações Web com toda a stack completa do Azure a partir de um determinado repositório do GitHub! Sim, isso mesmo que vocês estão ouvindo! Diretamente de um repositório do GitHub! 😮😮

E como é que funciona esse fluxo?! A imagem abaixo nos ajuda a entender melhor como funciona:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9w83bqq6wrv6qz27ez7p.png)

Na imagem acima, vocês podem perceber que, o fluxo de trabalho da implantação das aplicações do Azure Static Web Apps são criados com base nas interações e fluxos do GitHub! Resumindo: quando você configura um determinado fluxo de trabalho via **[GitHub Actions](https://azure.microsoft.com/blog/github-actions-for-azure-is-now-generally-available/?WT.mc_id=staticwebapps-personal-gllemos)** por meio do seu repositório onde se encontra o seu código ou aplicação, no momento em que você enviar um push ou for aceitar um determinado Pull Request que esteja monitorada pelo Actions, automaticamente será realizada o deploy da sua aplicação automaticamente para o Azure! Incrível não é mesmo?! 😄

## E esse serviço... é Gratuito?! 

Sim! A resposta é um grande **SIM!!!** 

As hospedagens de aplicações estáticas como: HTML, CSS, JavaScript e imagens são totalmente gratuita! Sim! Sabe aquele site ou aplicação estática ou feita num **[JamStack](https://jamstack.org/)** que você tem e não sabe onde colocar de maneira gratuita?! Agora já sabem onde hospedar de graça! Diretamente no **[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=staticwebapps-personal-gllemos)**!

Entre outras coisas bastante interessantes que estão inclusas nesse serviço e que são gratuitas:

* ✅ **Suporte e integração ao Azure Functions**
* ✅ **Integração com o GitHub**
* ✅ **Certificados SSL gratuitos**
* ✅ **Geração de versões Staging**

Se vocês desejam entender um pouco mais todo esse fluxo e as principais características desse novo serviço, indico a **[Documentação Oficial do Azure Static Web Apps - AQUI](https://azure.microsoft.com/blog/github-actions-for-azure-is-now-generally-available/?WT.mc_id=staticwebapps-personal-gllemos)**

## E quais linguagens e frameworks estão disponíveis?

Todos os frameworks e sites JamStack generators. Para listar:

* ✅ **[Angular](https://angular.io/)**
* ✅ **[React](https://reactjs.org/)**
* ✅ **[Vue](https://vuejs.org/)**
* ✅ **[Gatsby](https://www.gatsbyjs.org/)**
* ✅ **[Hugo](https://gohugo.io/)**
* ✅ **[VuePress](https://vuepress.vuejs.org/)**
* ✅ **[Next.js](https://nextjs.org/)**
* ✅ **[Nuxt.js](https://nuxtjs.org/)**

E se for no lado do Back-End se usa o **[Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=staticwebapps-personal-gllemos)**. Mas, essa parte deixaremos para o próximo artigo! 😉

Bom... acho que eu falei demais aqui... vamos para a demo?! 

## Demo Time!

Para essa demo, vamos precisar dos seguintes recursos:

* ✅ **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=staticwebapps-personal-gllemos)**
* ✅ **[Vue](https://vuejs.org/)**
* ✅ **[Conta Azure](https://azure.microsoft.com/free?WT.mc_id=staticwebapps-personal-gllemos)**
* ✅ **[Conta no GitHub](https://github.com/)**

##### Conta - Azure for Students ⭐️

> Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=staticwebapps-personal-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=staticwebapps-personal-gllemos)**

Para fins de demo, estaremos fazendo uso do recurso do GitHub: **[GitHub Templates](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)**. Se deseja saber mais como criar um template e entender o que é bastam acessar **[AQUI](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)**.

Cliquem nesse link **[https://github.com/staticwebdev/vue-basic/generate](https://github.com/staticwebdev/vue-basic/generate)** e logo em seguida crie um nome para esse repositório, conforme segue a imagem abaixo:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jsj24yxq4e4pezwiqc0k.PNG)

Logo em seguida clique no botão: **Create Repository from Template**. Após isso, estará já criada uma aplicação modelo em Vue.js para que possamos testar a nossa aplicação direto do GitHub!

Agora, vamos ao próximo passo. Abre o **[Portal Azure](https://azure.microsoft.com/free/?WT.mc_id=staticwebapps-personal-gllemos)** e segue os seguintes passos:

1. Clique em: Create a Resource
2. Depois digite: Static Web Apps 

E logo em seguida aparecerá a seguinte janela:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/kxsl7fi8r2qbrsw2kgbg.PNG)

> obs.: versão preview

Agora vamos preencher todas as informações necessárias para criar o nosso recurso dentro do Azure! Vejam na imagem abaixo:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wpj13mhhts8ok14okxoc.PNG)

Observem no botão **Sign in with GitHub**. É justamente aí que faremos a nossa integração do Azure Web Static Apps com a nossa aplicação contida no GitHub! Cliquem nesse botão e inclua o seu handler e senha do GitHub e clique em: **Authorize Azure-App-Service-Static-Web-Apps**.

Você retornará ao Portal Azure e aparecerá mais informações para que possamos incluir. Vamos incluir agora, para isso, bastam seguir conforme a imagem abaixo:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jx62cybt7nz55njorgl9.PNG)

Observem que, no ato que permitimos e autorizamos o Azure Static Web Apps, conseguimos listar todos os repositórios! Bom, como já criamos uma app de modelo, vamos usar o repositório: **[aswa-demo-vue](https://github.com/glaucia86/aswa-demo-vue)**. E depois clique no botão: **Next -> Build**

Aparecerá uma nova janela. É nessa parte que incluiremos as informações mais importantes. Observem na imagem abaixo:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/buyu1vaac81wi7d0opvw.PNG)

1. Inclua **/** em App Location. 
2. Remova o valor: **api** de Api location
3. E inclua a pasta que gera os arquivos estáticos da sua aplicação. No caso do Vue.js essa pasta é a **dist**
4. Clique no botão: **Review + Create** e depois **Create**

Abrirá uma nova janela informando que a implantação do Recurso foi criado com sucesso e depois bastam clicar em: **Go to Resource**

Antes de vermos a nossa aplicação no ar, quero mostrar algo bastante interessante para todos vocês que foi criado no nosso repositório depois de fazer essa implementação.

Retornem ao repositório da aplicação e observem que foi criada uma pasta chamada: **.github/workflows**. Cliquem nela:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/uey7040jx5p6g9akcovl.PNG)

Observem que ele criou no momento da implementação um arquivo **.yml** com todo o fluxo do GitHub Actions para nós!

Vamos testar esse fluxo?! Para isso, cliquem em **Actions** no próprio repositório conforme imagem abaixo:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qmbiw1ij088xbvtp1ky3.PNG)

Ótimo! Agora observem uma coisa linda! Ele já cria para nós todo um processo de C.I & C.D automaticamente. Ou seja, todas as vezes que formos fazer um push, pull request ou commit, ele vai gerar um Build e deploy dessa aplicação! Sensacional isso, não é mesmo?!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/6yrln0s67hr8m91f2ms1.PNG)

Quero ver a aplicação no ar? Não tem problema. Voltemos para o Portal Azure onde o recurso foi criado e clique em: **URL** e vejam o resultado:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5lu4hqhgyg13d7hlqxmq.PNG)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/hpdb89bg7hbvck8mfv2i.PNG)

Legal, não é mesmo?! Mas, e se essa aplicação tiver um Back-End, o que acontece?

Deixemos para o próximo artigo!

## Palavras Finais

Agora ficou muito fácil de implementar de forma automática suas aplicações estáticas com o **[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=staticwebapps-personal-gllemos)**. E se vocês desejarem saber um pouco mais sobre esse novo serviço, deixo abaixo uma lista incrível de recursos, vídeos e documentação que te auxiliarão no seu conhecimento:

* ✅ **[Documentação Oficial do Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Curso Grátis - Publique uma Aplicação Estática no Angular, React, Vue ou Javascript & API](https://docs.microsoft.com/pt-br/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Curso Grátis - Crie e Publique um site estático com Gatsby](https://docs.microsoft.com/pt-br/learn/modules/create-deploy-static-webapp-gatsby-app-service/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no Gatsby](https://docs.microsoft.com/azure/static-web-apps/publish-gatsby/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no Hugo](https://docs.microsoft.com/azure/static-web-apps/publish-hugo/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no VuePress](https://docs.microsoft.com/azure/static-web-apps/publish-vuepress/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no Next.js](https://docs.microsoft.com/azure/static-web-apps/publish-vuepress/?WT.mc_id=staticwebapps-personal-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no Nuxt.js](https://docs.microsoft.com/azure/static-web-apps/deploy-nuxtjs/?WT.mc_id=staticwebapps-personal-gllemos)**

E para ficarem por dentro de várias outras novidades, não deixem de me seguir lá no twitter!

[![Twitter](https://code4coders.files.wordpress.com/2019/05/image-12.png)](https://twitter.com/glaucia_lemos86)

Nos vemos! Até a próxima pessoal! 😍

