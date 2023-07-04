---
title: PHP segue padrões SIM!!!
author: Diego Brocanelli
type: post
date: 2016-03-20T21:07:27+00:00
url: /php/php-segue-padroes-sim/
featured_image: /wp-content/uploads/2016/03/03_padroes_php.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1357;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - padrões
  - php
  - psr

---

Um dos maiores estigmas do PHP é afirmar que ele é bagunçado e cheios de gambiarras, onde os projetos desenvolvidos com ele são ruins por não seguirem padrões. Pois bem, hoje sinto informar para quem ainda tem essa mentalidade atrasada, que o PHP dispõem do [PHP-FIG](http://www.php-fig.org/) (PHP Framework Interop Group), grupo mantido pela comunidade PHP.

De acordo com o próprio site eles se definem como, “Um grupo de projetos PHP estabelecidos, cujo objetivo é falar sobre as semelhanças entre os projetos encontrando maneiras comuns para trabalhar em conjunto”

Sua fundação ocorreu em 2009 inicialmente com 5 membros e hoje dispõem de cerca de 44 membros. Dentre os membros temos [Guilherme Blanco](https://github.com/guilhermeblanco) ([@guilhermeblanco](https://twitter.com/guilhermeblanco)) representante do projeto [Doctrine](http://www.doctrine-project.org), excelente profissional que traz grande credibilidade para a comunidade PHP do Brasil.

Com esta iniciativa podemos afirmar que o PHP dispõe de uma lista de padrões já estabelecidas onde os frameworks mais utilizados do mercado como [Zend Framework 2](http://framework.zend.com/), [Symfony 2](https://symfony.com), [Slim](http://www.slimframework.com) [Framework](http://www.slimframework.com/), [Laravel](https://laravel.com/), [Zend Expressive](https://zendframework.github.io/zend-expressive) entre outros adotam estes padrões em suas arquiteturas. Trazendo com isso uma gama de benefícios enorme para a comunidade PHP.

Todo este trabalho do PHP FIG deu origem as PSR&#8217;s (PHP Standards Recommendation) onde são as recomendações de padrões estabelecidas e seguidas pelos frameworks. Visando melhorar os aspectos comuns no processo de desenvolvimento.

### PSR&#8217;s &#8211; ACCEPTED

* PSR – 1 : Basic Coding Standard
* PSR – 3 : Logger Interface
* PSR – 4 : Autoloading Standard
* PSR – 6 : Caching Interface
* PSR – 7 : HTTP Message Interface
* PSR – 11 : Container Interface
* PSR – 12 : Extended Coding Style Guide
* PSR – 13 : Hypermedia Links
* PSR – 14 : Event Dispatcher
* PSR – 15 : HTTP Handlers
* PSR – 16 : Simple Cache
* PSR – 17 : HTTP Factories
* PSR – 18 : HTTP Client
* PSR – 20 : Clock

### PSR&#8217;s &#8211; DRAFT

* PSR – 5 : PHPDoc Standard
* PSR – 19 : PHPDoc tags
* PSR – 21 : Internationalization
* PSR – 22 : Application Tracing

### PSR&#8217;s &#8211; DEPRECATED

* PSR – 0 : Autoloading Standard
* PSR – 2 : Coding Style Guide

Não é meu objetivo descrever em detalhes cada PSR, pois o site do PHP FIG tem uma excelente documentação. E como podemos notar temos a nossa disposição uma lista de padrões que devemos utilizar em nosso dia a dia nos projetos em que estamos envolvidos.

O que toda essas informações irão me ajudar em meu dia a dia?

Serão construídos aplicações com maior qualidade de código e de fácil manutenção, pois como seguimos padrões de conhecimento geral, qualquer outro desenvolvedor PHP que realizará manutenções ou novas implementações no projeto, onde terá maior facilidade em sua jornada.

Não irá mais ocorrer aquelas discussões sem sentido de “<i>a chave do if começa na mesma linha</i>”, “<i>não a chave do if começa em uma nova linha</i>”. Para tal eventualidade basta implementar o padrão e está tudo resolvido 🙂 sem maiores dores de cabeça ou eventualidades.

### Como é criado uma PSR?

#### Workflow

1. Roles:

* **Editor**
  * O editor é um membro altamente envolvido na gestão e acompanhamento de uma PSR, uma proposta não terá mais do que 2 editores de uma vez. O editor é responsável por gerenciar o desenvolvimento da PSR, e acompanhar a lista de discussões, deve coordenar os colaboradores e trabalhar em conjunto com o coordenador ao longo do processo de revisão. Caso o editor esteja ausente por mais de 60 dias sem nenhum tipo de comunicado prévio, em seguida é escolhido um novo editor para substitui-lo.
* **Sponsor**
  * Qualquer PSR deve dispor de 2 membros votantes como sponsors (patrocinadores) para dar sequencia no andamento do desenvolvimento da PSR.
  * Um _sponsor_ não necessariamente deve ser um editor, porem pode contribuir de forma normal ao desenvolvimento da PSR. Para que um sponsor torne-se um editor ele deve abdicar do cargo de sponsor da PSR enviando um e-mail a _Maling List_, onde será encontrado um novo sponsor para substitui-lo, e somente após este processo ele poderá sair do projeto.
  * Caso este processo ocorra em quanto uma votação estiver em curso, o mesmo é invalidada até que um substituto tenha sido escolhido. Esta manobra é adotada para que um único sponsor não tome as decisões sozinho.
* **Coordinator**
  * Um dos dois sponsors é o coordenador, decisão tomada entre os coordenadores. Responsável pelo processo de votação, acompanhando as datas de início e términos de cada votação, os membros votantes e a contagem de votos necessários. Enviam lembretes, conduzindo a votação, ao final do período de votação eles contabilizam os votos e analisam se o qorum foi estabelecido, e se o pedido foi ou não aceito.
* **Note:**
  * Cópia e-mail de [Paul M. Jones](https://twitter.com/pmjones).
* **Contributor:**
  * Qualquer membro que tenha contribuído significativamente para a PSR, pode ser enviado uma solicitação para adição de novo membro ao projeto, durante o período de pre-draft ou draft. Em caso de disputa o editor ou coordenador são responsáveis para determinar se um membro é qualificado para torna-se um colaborador.

2. Stages

* **Pre-draft**
  * É neste estágio que se analisa o interesse da maioria do PHP FIG em prosseguir com a publicação da PSR. Ocorrendo discussões e análises em cima do tema, podendo ser por meio de Mailing List ou IRC.
  * Uma vez que foi determinado em seguir em frente, é selecionado um editor e preparado um documento de proposta, que deve ser pulicado em um fork no [repositório oficial do PHP FIG](https://github.com/php-fig/fig-standards/tree/master). O conteúdo deve ser inserido dentro do diretório /proposed contendo um nome simples.
  * O editor deve então localizar os 2 sponsors que serão responsáveis pela PSR. Neste momento a proposta não é obrigatoriamente necessária ser totalmente desenvolvida, contendo no mínimo uma declaração do problema a ser resolvido.
  * É realizado um processo de votação, seguindo o [protocolo de votação](https://github.com/php-fig/fig-standards/blob/master/bylaws/001-voting-protocol.md). Em caso da votação ser positiva, a proposta passa para a etapa de draft, onde receberá um número PSR a partir do último PSR que já passou pelo voto de entrada.
* **Draft**
  * Tem como objetivo, discutir e aprimorar a proposta até que esteja adequado para o processo de review. Nesta etapa o editor ou qualquer contribuinte pode realizar alterações a qualquer momento por meio de pull request.
  * Caso um editor ou coordenador estejam convencidos de que uma proposta alternativa seja superiro a original, o editor e da proposta original é listado como contribuinte da proposta. Todo o processo deve ser documentado.
  * Quando o editor e sponsors decidem que a proposta está pronta e toda a documentação está completa, é realizado pelo coordenador a submissão da proposta de review.
* **Review**
  * Esta etapa tem como objetivo envolver a maior quantidade de membros do PHP &#8211; FIG para se familiarizarem com a proposta e decidirem se está pronta para realizar uma votação de aceitação, porem nenhum membro individual pode vetar uma proposta.
  * Nesta etapa as alterações se restringem somente a documentação, onde os sponsors devem realizar controle, estando proibido a intervenção dos sponsors no desenvolvimento da proposta.
  * Caso alguma abordagem alternativa seja descoberta que ainda não tenha sido listado, o coordenador deve abortar o review, a menos que o processo de votação para aceitação tenha iniciado.
  * Uma proposta deve permanecer no mínimo 2 semanas em review, antes de realizar um voto ce aceitação.
  * Quando os editores concordam que a proposta está pronta para se tornar uma PSR, é realizado um processo de voto de aceitação.
* **Accepted**
  * Quando a proposta é aceita ela torna-se oficialmente uma PSR, onde é movida de /proposed para /accepted por um membro com acesso ao GitHub e prefixado com seu número de identificação.

3. Meta Document

Está etapa tem como objetivo fornecer uma visão de alto nível de uma proposta para os eleitores.

* **Executive summary**
  * Contempla o resumo da proposta, com alguns exemplos simples.
* **Why bother?**
  * Uma lista contendo os pontos positivos e negativos de se criar a PSR. O objetivo desta etapa é convencer de que a proposta trará benefícios se for criada.
* **Scope**
  * Uma lista de objetivos e não-objetivos que a PSR deve alcançar.
* **Approaches**
  * Descreve as decisões de design realizadas, onde deve ser listadas as implicações positivas e negativas dessas decisões. Caso seja possível inserir link para posts individuais relevantes da lista de discussões.
* **People**
  * Contém os nomes dos membros envolvidos.
* **Errata**
  * Usada para adicionar esclarecimentos sobre pontos controversos.
* **Template**
  * Modelo de exemplo que podem ser utilizados para a construção da documentação.

#### Politicas de licenciamento


1. Código

* Todo código PHP-FIG deve ser licenciado sob a licença MIT.
* Inclui qualquer arquivo PHP (incluindo classes, funções, interfaces e código de procedimento), assim como exemplos, tutoriais, documentos e os próprios PSR&#8217;s.

2 .Documentação

* Todos os arquivos que não sejam códigos, devem ser licenciados como Creative Commons BY 3.0.

#### Protocolo de votação

A [seção de protocolo de votação](http://www.php-fig.org/bylaws/voting-protocol/), é onde se encontra todas as regras para os processos de votações.

#### Convenções de nomes da PSR

Interfaces

* Deve conter o sufixo: por exemplo Psr\Foo\BarInterface.

Classes abstratas

* Deve ser prefixado pelo Abstract: por exemplo Psr\Foo\AbstractBar;

Traits

* Deve conter o sufixo Trait: por exemplo Psr\Foo\BarTrait;

PSR-1, 4 e 12 devem ser seguidas.

Namespace

* A namespace de vendor deve ser Psr.
* Deve conter um package em segundo nível a namespace Psr que abrange o código.
* _Composer package_ devem seguir o nome psr/package: exemplo psr/log.

### Meios de contatos PHP-FIG

* https://twitter.com/phpfi
* http://www.php-fig.org/irc/
* https://github.com/php-fig
* https://groups.google.com/forum/?fromgroups#!forum/php-fig

### Só o PHP dispõem de padrões?

De maneira alguma, cada linguagem segue seu guia de estilo, por exemplo [Python](ttps://www.python.org/) segue a [PEP8](http://wiki.python.org.br//GuiaDeEstilo). O Java dispõem do [code conventions](http://www.oracle.com/technetwork/java/codeconvtoc-136057.htm).

O que saliento aqui é que um não é melhor que o outro. Onde o objetivo dos <i>style guides</i> é fornecer base solida para padrões seja ela em qual linguagem for abordar para que desenvolvedores possam criar projetos onde outros desenvolvedores poderão realizar manutenções e implementações sem ter que desvendar “o padrão” criado pelo desenvolvedor no momento da criação da aplicação.

### O estigma do sobrinho

Desde sua criação o PHP tem seu objetivo bem claro, ser um recurso valioso no desenvolvimento web. Porem como é uma linguagem de fácil aprendizagem, tornou-se comum que qualquer um que tenha acesso a um computador possa se aventurar no mundo do desenvolvimento com PHP.

Com isso surgiram vários “copiadores de código” que se intitulavam desenvolvedores, e isso não é exclusividade do PHP, pois várias outras linguagens sofrem deste mau, como por exemplo o javascript.

Porem com o avanço da linguagem hoje este cenário está mudando, Elencar o PHP – FIG e suas contribuições para isso, pois o PHP é uma linguagem altamente robusta sendo utilizados em projetos de grande porte como ecommerces, como exemplo posso listar o vídeo da palestra do [Guilherme Blanco no Intercon PHP 2014](https://www.youtube.com/watch?v=u-w4eULRrr0&feature=youtu.be&t=1m38s) onde ele menciona os números referente a uma aplicação da empresa onde trabalha, tudo isso tendo como base PHP, os números são, 67 milhões de usuários cadastrados no sistema e 12 mil requisições por segundo. Não é utilizado Hack, HHVM ou qualquer outra sopa de letrinhas, é utilizado PHP puro e simples. E saliento que isso foi a 2 anos onde não tínhamos a nossa disposição o <[PHP 7](http://php.net/) a sua mais nova versão, onde temos demonstrações [do grande ganho de performance](http://www.zend.com/en/resources/php7_infographic) em relação a última versão (PHP 5.6), entre várias outras melhorias.

O que quero dizer com isso é, que infelizmente o mercado de desenvolvimento de software sofre de um grande mau na minha opinião, que são desenvolvedores que ficam exaltando sua linguagem de programação favorita e denegrindo a imagem de outras, fazendo piadinhas ou gritando afirmações que são obsoletas a anos.

Nenhuma linguagem de programação é bala de prata, para cada cenário devemos analisar o problema e escolher a ferramenta mais adequada para a solução.

Espero ter ajudado com este post, onde meu objetivo de abrir os olhos para o que a comunidade PHP tem a sua disposição, que com certeza lhe ajudará muito. E que possamos a partir disso parar de ver o mercado de desenvolvimento como um campo de guerra entre linguagens de programação, pois hoje em dia é extremamente comum encontrarmos desenvolvedores que domina mais de uma linguagem.

Espero que tenham gostado e até a próxima pessoal! 🙂
