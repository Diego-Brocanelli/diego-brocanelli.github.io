---
title: Construindo um Silex Skeleton Application
author: Diego Brocanelli
type: post
date: 2016-05-18T00:17:43+00:00
url: /php/construindo-um-silex-skeleton-application/
featured_image: /wp-content/uploads/2016/05/08_silex_skeleton.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1362;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - application
  - silex
  - skeleton

---

Olá pessoal tudo bem?

Irei construir um skeleton application utilizando o micro framework [Silex](http://silex.sensiolabs.org/). Este micro framework é irmão do [Symfony](https://symfony.com/) framework full stack e ambos os projetos são mantidos pela comunidade PHP e a empresa SensioLabs empresa fundada pelo Fabien Potencier e criador de ambos frameworks citados acima.

O Silex tem como base o Symfony e Pimple  e foi inspirado pelo Sinatra um framework Ruby. Tendo como foco a simplicidade no desenvolvimento de aplicações.

### E qual é a finalidade do skeleton?

Você irá aprender a utilizar o micro framework, seguindo boas práticas e como resultado final terá em mãos, uma base que facilitará a construção de aplicações utilizando o Silex.

Nosso projeto terá a seguinte estrutura de diretórios:

* config
* src/App/Controller
* public
* templates

**Sendo:**

* **config:** Local que armazenara as configurações globais do projeto e as rotas da aplicação.
* **public:** Responsável por manter as informações publicas que o usuário terá acesso pelo navegador, sendo eles:
  * index.php
  * css
  * js
  * images
* **src/App/Controller:** Responsável por manter o nosso cotroller da aplicação.

Após termos criados nossa estrutuda de diretórios, vamos criar nosso arquivo composer.json. Pois iremos controlar todas as dependências do nosso projeto pelo [Composer](https://getcomposer.org/).

Para criar o arquivo vamos acessar pelo terminal o diretório raiz do projeto, devemos executar o seguinte comando:

```bash
composer init
```

Este comando é auto explicativo, e no terminal ele irá lhe guiar passo a passo em sua construção.

No momento em que for solicitado a lista das dependências, devemos informar as seguintes dependências.

```json
"php": ">=5.3.3",
"silex/silex": "~1.0",
"symfony/twig-bridge": "~2.3"
```

Após a criação devemos configurar o autoload para nosso módulo.

```json
"autoload": {
  "psr-4": {
    "App\\": "src/App/"
  }
}
```

O seu composer deve ficar similar ao demonstrado abaixo:

```json
{
   "name": "Diego-Brocanelli/silex_skeleton_application",
   "description": "A Silex Skeleton application, for references in blog post.",
   "license": "MIT",
   "authors": [
       {
           "name": "Diego Brocanelli",
           "email": "contato@diegobrocanelli.com.br"
       }
   ],
   "minimum-stability": "dev",
   "require": {
       "php": ">=5.3.3",
       "silex/silex": "~1.0",
       "symfony/twig-bridge": "~2.3"
   },
   "autoload": {
       "psr-4": { 
           "App\\": "src/App/" 
       }
   }
}
```

Após as configurações serem inseridas no composer, vamos instalar nossas dependências, para isso devemos executar o seguinte comando.

```bash
composer install
```

Agora que já configuramos o nosso projeto, Show me the code!!!!

#### Implementação do bootstrap.php

Inicialmente devemos criar o arquivo bootstrap.php, dentro do diretório config.

Após a criação do arquivo devemos importar o autoloader do composer, pois é ele que irá gerenciar nossas dependências.

```php
<?php

require_once __DIR__.’/../vendor/autoload.php
```

Devo salientar que utilizei o require_once, tendo em vista que o autoload.php é fundamental para o devido funcionamento da aplicação. Em seguida eu apontei para o diretório e o arquivo que desejo, a instrução ‘/../’ é para voltar um diretório, pois o diretório vendor está na raiz do nosso projeto.

Agora devemos importar o componente Silex\Application responsável pela execução do framework.

```php
<?php

require_once __DIR__.’/../vendor/autoload.php

use Silex\Application;
```

Após importação vamos instanciar nosso objeto para podermos utiliza-lo.

```php
<?php

require_once __DIR__.’/../vendor/autoload.php

use Silex\Application;

$app = new Application();
```

Como estamos desenvolvendo um skeleton como estudo, o Silex fornece a seguinte funcionalidade:

```php
$app[‘debug’] = true;
```

Onde habilita o modo de _debug_ da aplicação, nossa implementação ficará da seguinte maneira:

```php
<?php

require_once __DIR__.’/../vendor/autoload.php

use Silex\Application;

$app = new Application();

$app[‘debug’] = true;
```

Com isso finalizamos a implementação inicial do nosso arquivo de configuração.

#### Implementação do routes.php


Este arquivo deve ser criado dentro do diretório config, junto ao arquivo bootstrap.php.

Logo no início importaremos o nosso arquivo de configuração, que acabamos de cirar.

```php
<?php

require_once __DIR__.’/bootstrap.php’;
```

Após a importação vamos desde já registrar nossa primeira rota.

```php
<?php

require_once __DIR__.’/bootstrap.php’;

$app->get('/', 'App\Controller\AppController::welcomeAction')->bind('home');
```

Vou descrever o que acabamos de codigicar.

O primeiro parâmetro, identifica a rota desejada, em nosso caso / (root).

O segundo parâmetro, estou apontando diretamente para o controller e a action que desejo que retorno os dados para esta rota.

Por último defino que o nome desta rota será &#8220;home&#8221;.

No Silex podemos tratar cada tipo de request de forma isolada, por exemplo:

* GET
  * $app->get();
* POST
  * $app->post();
* PUT
  *$app->put();
* DELETE
* $app->delete();

Viram como é fácil trabalhar com as request solicitadas pelo usuário. 🙂

**Implementação do AppController.php**

Não é segredo nenhum que podemos utilizar o padrão MVC para desenvolvimento com PHP, e o Silex não seria diferente, ainda melhor pois sendo ele um micro framework ele deixa a cargo do desenvolvedor essa tomada de decisão.

Vamos acessar o diretório src/App/Controller e em seguida criar o arqivo AppController.php



Após a criação do nosso controller, vamos implementar sua estrutura básica.`

```php
<?php

namespace App\Controller;

use Silex\Application;

/**
 * @author Diego Brocanelli <contato@diegobrocanelli.com.br>
 */
class AppController
{

}
```

Primeiro definimos nossa namespace, e caso esteja com dúvida, nós configuramos o autoloder do composer para gerenciar nosso módulo App, por isso podemos definir tranquilamente nossa namespace.

Eu importei o componente Silex\Application, pois ele será consumido pelo método de boas vindas.

Implementação do método welcomeAction

Devemos implementar o método responsável por retornar as boas vindas quando o usuário acessar nosso skeleton.

```php
<?php

namespace App\Controller;

use Silex\Application;

/**
 * @author Diego Brocanelli <contato@diegobrocanelli.com.br>
 */
class AppController
{
  /**
   * Render welcome view.
   *
   * @param &nbsp;Application $app Silex\Application
   * @return Twig_Environment
   */
  public function welcomeAction(Application $app)
  {
    return 'Hello World!';
  }
}
```

Como podemos analisar, o método apenas retorno a string ‘Hello World!’, e de fato por enquanto é o que desejamos.

Implementação do index.php

Ok, implementamos nossas configurações, a rota e nosso controller o que devemos fazer agora?

Devemos implementar o arquivo index.php, onde todo “mambo jambo” do Silex irá ocorrer.

Devemos criar o arquivo index.php dentro do diretório public, contendo a seguinte estrutura.


```php
<?php

require_once __DIR__.’/../config/routes.php’;

$app->run();
```

Aqui foi realizado a importação das configurações, no caso importamos as rotas que por sua vez consome o bootstrap.php

E o método run() é o responsável por iniciar nossa aplicação, ele “liga o motor” para que o silex entre em ação.

Apresentação do resultado

Vamos fazer uso do servidor embutido do PHP, para isso devemos acessar o diretório raiz do nosso projeto e executar o seguinte comando.

```bash
php -S localhost:8080 -t public public/index.php
```

![a](/wp-content/uploads/2016/05/resultado_silex_skeleton.png)

Como podemos notar, toda a parte de rotas da nossa aplicação foi facilmente implementada utilizando o silex, o que com certeza é um alivio de carga de desenvolvimento monstruoso, O Silex é muito extensível e também podemos utilizar componentes de outros frameworks para assim montar a estrutura ideal do seu projeto. Como por exemplo a engine de templates Twig sendo uma excelente escolha para trabalharmos com nossas estruturas HTML.

Utilizando o Twig

Como dito anteriormente o Twiw é um motor de renderização de templates rápido, seguro e flexível. Eu particularmente acho a melhor engine para ser utilizada.

Para podermos utilizar esse componente antes devemos alterar nosso arquivo composer.json, para isso devemos incluir no require as dependências:

```json
"symfony/twig-bridge": "~2.3"
```

Este componente é um provider, e o que seria um provider?

De acordo com a própria documentação do Silex:

> “Providers allow the developer to reuse parts of an application into another one. Silex provides two types of providers defined by two interfaces: ServiceProviderInterface for services and ControllerProviderInterface for controllers.”


 _Tradução livre_

> “Providers permitem que o desenvolvedor reutilizar partes de uma aplicação para outra. Silex fornece dois tipos de providers definidos por duas interfaces: ServiceProviderInterface para camada de serviços e ControllerProviderInterface para camada dos controladores.”

Após alteração do composer.json o mesmo ficará da seguinte maneira

```json
{

"name": "Diego-Brocanelli/silex_skeleton_application",

"description": "A Silex Skeleton application, for references in blog post.",

"license": "MIT",

"authors": [

    {

        "name": "Diego Brocanelli",

        "email": "contato@diegobrocanelli.com.br"

    }

],

"minimum-stability": "dev",

"require": {

    "php": ">=5.3.3",

    "silex/silex": "~1.0",

    "symfony/twig-bridge": "~2.3"

},

"autoload": {

    "psr-4": {

        "App\\": "src/App/"

    }

}

}
```

Agora bata acessarmos novamente o diretório do nosso projeto e executarmos o seguinte comando.

```bash
composer update
```

Criação da estrutura de diretórios para utilizar o twig.

Devemos criar o diretório templates na raiz do projeto, para que possamos armazenar nossos arquivos das nossa view.

Criação do layout.html

Dentro do diretório templates devemos criar o arquivo layout.html e inserir a seguinte estrutura interna.

```html
<!DOCTYPE html>
<html lang="pt_BR">
   <head>
       <meta charset="UTF-8">
       <title>Silex Skeleton</title>
   </head>
   <body>
       {% block content %}
       {% endblock %}
   </body>
</html>
```

Note que estou utilizando comandos do Twig dentro do código HTML onde definimos o bloco content, para a exibição do nosso conteúdo para o usuário.

Criação da view welcome.html

Dentro do diretório templates devemos criar o arquivo welcome.html e inserir a seguinte estrutura interna.

```php
{% extends "layout.html" %}

{% block content %}
   <h1>{{content}}</h1>
{% endblock %}
```

Uma breve explicação, logo no início do arquivos nós estendemos o layout desejado e em seguida incluímos o bloco content, onde fará ligação com sua referencia no layout. Em resumo o texto do controller será exibido nesta view que utiliza nosso layout.

Mas apenas isso não é suficiente para que nosso projeto funcione como desejamos, devemos configurar nosso twig service provider, e como é uma configuração global vamos implementar no arquivo bootstrap.php Incluímos nossa dependência em nosso arquivo.

```php
use Silex\Provider\TwigServiceProvider;
```

Em seguida registramos nosso provider

```php
//Configuration TwigServiceProvider
$app->register(new TwigServiceProvider(), array(
   'twig.path' => __DIR__.'/../templates',
));
```

Note que passamos como segundo parâmetro o local onde nossos templates se encontram.

Agora devemos incluir o Twig em nosso app.

```php
$app['twig'] = $app->share($app->extend('twig', function ($twig, $app) {
   return $twig;
}));
```

Após nossas alterações o arquivo bootstrap.php deve ficar semelhante ao demonstrado abaixo.

```php
<?php

require_once __DIR__.'/../vendor/autoload.php';

use Silex\Application;
use Silex\Provider\TwigServiceProvider;

$app = new Application();

//Configuration TwigServiceProvider
$app->register(new TwigServiceProvider(), array(
   'twig.path' => __DIR__.'/../templates',
));

$app['twig'] = $app->share($app->extend('twig', function ($twig, $app) {
   return $twig;
}));

$app['debug'] = true;
```

Apresentação dos resultados

Após a realização das etapas acima estamos prontos para visualizar nosso skeleton em pleno funcionamento, vamos executar o servidor embutido novamente para analisarmos o resultado.

```bash
php -S localhost:8080 -t public public/index.php
```

![Resultado com twig](/wp-content/uploads/2016/05/resultado_silex_skell_twig.png)

E pronto, temos um skeleton application para construirmos nossas aplicações utilizando o micro framework Silex, viram como é muito simples o seu uso. Claro que o framework dispõem de uma vasta gama de recursos e que cabe análise do que é necessário para sua aplicação, porem o básico para o start está pronto 🙂

Próximos passos

Abaixo estão listados os próximos passos que iremos executar para aprimorar nosso skeleton, deixando ele ainda mais fortalecido.

* **Teste Unitários**
  * Em um próximo post irei implementar toda a estrutura que permitira nosso skeleton suportar e executar testes unitários com PHPUnit.
* **Log do sistema**
  * Em um próximo post irei implementar toda a estrutura que permitira nosso skeleton suportar e executar logs no sistema com o Monolog.


Caso tenham duvidas ou sugestões deixem nos comentários ou acessem o repositório no GitHub [silex_skeleton_application](https://github.com/Diego-Brocanelli/silex_skeleton_application).

Espero que tenham gostado e que tenha ajudado a iniciar ou compreender melhor o fascinante framework Silex.

Até a próxima pessoal!
