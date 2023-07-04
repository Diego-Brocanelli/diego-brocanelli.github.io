---
title: Twig – A Super engine template para PHP
author: Diego Brocanelli
type: post
date: 2016-10-04T13:46:38+00:00
url: /php/twig-a-super-engine-template-para-php/
featured_image: /wp-content/uploads/2016/10/18_twig_template_engine.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1372;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - php
  - template engine
  - twig

---

Olá pessoal tudo certo?!

Quem nunca se deparou com um projeto no qual teria que trabalhar com renderização HTML? Praticamente todos em algum momento certo? Pois é inevitável a construção de um sistema web PHP sem a interação com o usuário, e com isso surge o grande problema: Como vamos trabalhar as páginas HTML e como podemos utilizar o conceito de template para que nosso sistema fique robusto e com um super visual.

O PHP dispõe de grandes ferramentas para solucionar esse problema, e auxiliar na construção de templates e views para nossos sistemas, e hoje veremos o [Twig](http://twig.sensiolabs.org/) onde de acordo com a home do site diz:

> The flexible, fast, and secure template engine for PHP&#8221; (Tradução: flexível, rápido e seguro motor de template para PHP)

Twig é uma ferramenta mantida pela [Sensiolabs](https://sensiolabs.com/), empresa por de traz de nada menos que o [Symfony](https://symfony.com/). Um  dos frameworks mais fantásticos para PHP.

Para que possamos utilizar o componente, primeiros vamos definir nosso projeto, onde ele terá a seguinte estrutura:


* tutorial_twig 
  * view 
    * layout.html
    * index.html
  * bootstrap.php
  * index.php

Após temos criado nossa estrutura básica para darmos início ao projeto, devemos acessar pelo terminal a raiz do nosso projeto. Caso você não tenha familiaridade em utilizar o terminal, incentivo que aprenda a utilizar, pois é uma das ferramentas que mais utilizamos em nosso dia a dia, e que facilita e muito nosso trabalho. Ao acessarmos o diretório raiz do projeto devemos instalar o Twig, e para isso iremos utilizar o [Composer](https://getcomposer.org/) e caso você não faça a menor ideia do que seja, por favor, pare e estude esta ferramenta, pois ela é a 8ª maravilha do mundo PHP, com o Composer podemos gerenciar as dependências do nosso projeto com uma facilidade descomunal!

Devemos executar o seguinte comando:

```bash
composer require twig/twig:~1.0
```

Todo o processo de instalação dos pacotes serão realizados de forma automática em nosso projeto.

Após a finalização da instalação nossa estrutura de projeto ficará assim:

* tutorial_twig 
  * vendor
  *  view 
    * layout.html
    * index.html
  * composer.json
  * composer.lock
  * bootstrap.php
  * index.php

Agora vamos acessar nosso arquivo bootstrap.php, ele será utilizado para podermos concentrar as estrutura básicas que será compartilhada com nossas páginas.

```php
<?php

// carregamos o autoloader
require_once __DIR__.'/vendor/autoload.php';

// Criamos nossa configuração, apontando o diretório onde ficarão nossos arquivos html
$loader = new Twig_Loader_Filesystem(__DIR__.'/view');

// Criamos nosso objeto e passamos nossas fonfigurações.
$twig = new Twig_Environment($loader);
```

Com nossa implementação básicas do Twig, agora podemos construir nossa view, vamos acessar nosso arquivo index.php.

```php
<?php
// Realizamos a importação do arquivo de configuração.
require_once __DIR__.'/bootstrap.php';

// Chamamos nosso objeto de view.
echo $twig->render('index.html', array( 'content' => 'Hello World!' ) );
```

Virão como é extremamente fácil, após criarmos nossa configuração básica podemos acessar nosso objeto e chamar o método render, responsável por realizar todo o processo de renderização, e tivemos apenas o trabalho de informa dois valores, sendo eles:


* index.html
  * Informamos qual arquivo HTML desejamos utilizar.
* Array
  * Criamos um array chave/valor, onde a chave usaremos em nosso arquivo HTML para indicar qual conteúdo estamos querendo utilizar e onde em nosso arquivo index.html e o valor do array é a informação que será inserida no HTML.l>


  Bom, tendo nossos arquivos php implementados daremos início agora a construção do nosso layout, abra o arquivo layout.html.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Tutorial de Twig</title>
  </head>
  <body>
    {% block content %}
    {% endblock %}
  </body>
</html>
```

Basicamente sua estrutura é HTML puro, sem muitos segredos e o que temos de novo e fora do habitual são as duas linhas de código &#8220;{% block content %}&#8221; e &#8220;{% endblock %}&#8221;. O Twig dispõe de um leque de ferramentas para manipular o conteúdo HTML fantásticos, e com essas duas instruções definimos um bloco, e tudo que for inserido dentro desse bloco nas outras páginas como, por exemplo, na index irá ser renderizado dentro deste bloco no layout, isso não é fantástico pois com um único arquivo podemos controlar todo nosso layout da nossa aplicação.

Podemos agora abrir nosso arquivo index.html e implementar o seguinte código:

```php
{% extends "layout.html" %} // importamos o template desejado

// Informamos que nosso conteúdo será inserido no bloco content.
{% block content %}
    {{ content }} // Exibimos o conteúdo inserido no array em nossa view
{% endblock %}
```

Como podemos visualizar, não utilizamos uma linha de HTML se quer, apenas instruções Twig. Pois definimos o template, o bloco de conteúdo e o conteúdo em si.

Agora podemos executar nosso teste, basta executar o comando abaixo e em um navegador inserir a URL localhost:8080

```bash
php -S localhost:8080 index.php
```

E como resultado temos nosso Hello World 🙂
![Resultado do código](/wp-content/uploads/2016/10/01_result.png)

Viram como é simples, com poucos códigos temos uma camada para tratar nossa view!

Bom vocês podem estar pensando &#8220;mas isso é muito básico&#8221;, bem vamos imaginar que agora queremos uma view de estoque para renderizar uma lista de produtos no grid.

Vamos criar nosso arquivo products.php

```php 
<?php 
// importamos nosso arquivo de configuração
require_once __DIR__.'/bootstrap.php';

// criamos uma lista de produtos.
$products = array(
  array(
    'code'          => 1,
    'name'          => 'Notebook',
    'description'   => 'Core i7 16GB ran',
    'value'         => 3200.00,
    'date_register' => '2016-10-03',
  ),
  array(
    'code'          => 2,
    'name'          => 'Mouse',
    'description'   => 'Razer',
    'value'         => 829.00,
    'date_register' => '2016-10-03',
  ),
  array(
    'code'          => 2,
    'name'          => 'Teclado Gamer',
    'description'   => 'Razer',
    'value'         => 1250.00,
    'date_register' => '2016-10-03',
  ),
);

// Informamos que iremos utilizar a view products.html e passamos para a view nossa lista de produtos
echo $twig->render('products.html', array( 'products' => $products ) );
```

Agora devemos criar nosso arquivo products.html

```php
{% extends "layout.html" %} // importamos nosso layout

// definimos que nosso conteúdo será inserido no bloco content
{% block content %}
    // agora criamos uma estrutura básica de tabela
    <table border="1" style="width: 80%;">
        <thead>
            <tr>
                <td>Código</td>
                <td>Produto</td>
                <td>Descrição</td>
                <td>Valor</td>
                <td>Data Cadastro</td>
            </tr>
        </thead>
        <tbody>
            // como podemos ver utilizamos a sintaxe Twig para determinar que iremos utilizar um laço de repetição e passamos como parâmetro nossa lista de produtos
            {% for product in products %}
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.value }}</td>
                    <td>{{ product.date_register|date("m/d/Y") }}</td> // como diferencial utilizamos o | e o filtro date() passando o pattern que desejamos que seja tratado nossa data
                </tr>
            {% endfor %} // fechamos o laço
        </tbody>
    </table>
{% endblock %} // encerramos o bloco content
```

Após executar o projeto, teremos o seguinte resultado.

![Resultado do código](/wp-content/uploads/2016/10/grid_produtos.png)

/wp-content/uploads/2016/10/grid_produtos.pngExtremamente simples, com poucas linhas de código podemos montar nossa lista de produtos. Da mesma maneira que passamos um array, podemos fazer uma consulta no banco de dados e exibir com paginador os registros em nosso grid, logicamente o exemplo acima é simples apenas para demonstrar o uso do Twig.

O Twig não dispõe apenas de filtros, mas também com tags, functions, operadores e testes, recomendo fortemente que leia a [documentação do Twig](http://twig.sensiolabs.org/documentation), pois ela é rica em exemplos deixando muito claro sua forma de uso.

Bom pessoal, espero que tenham gostado do post, o PHP dispõe de outras engines templates como por exemplo [dwoo](http://dwoo.org/), [Plates](http://platesphp.com/), [smarty](http://www.smarty.net/) e [Blade](https://laravel.com/docs/5.3/blade). Recomendo que caso você desconheça esses nomes de uma olhada, eu particularmente prefiro o Twig, porem é sempre excelente conhecermos outras ferramentas para podermos utilizar a melhor para cada problema encontrado.

Um grande abraço e até a próxima! 🙂

 [1]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/10/01_result.png