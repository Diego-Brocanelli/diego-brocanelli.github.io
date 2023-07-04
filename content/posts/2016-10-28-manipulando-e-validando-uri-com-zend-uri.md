---
title: Manipulando e validando URI com Zend-URI
author: Diego Brocanelli
type: post
date: 2016-10-29T01:08:43+00:00
url: /php/manipulando-e-validando-uri-com-zend-uri/
featured_image: /wp-content/uploads/2016/10/22_zend_uri.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1376;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend Framework
tags:
  - php
  - uri
  - zend framework
  - zf2

---

Olá pessoal, tudo bem?!

Para um programador é uma tarefa muito corriqueira manipular ou validar URI. E para facilitar essa tarefa iremos aprender a utilizar o componente Zend-URI,  ferramenta fantástica e simples, que irá agilizar nosso dia a dia.

Uma breve descrição do que é URI (Uniform Resource Identifier), sendo uma cadeia de caracteres utilizada para identificar ou denominar um recurso na internet.

Não vamos utilizar um ZF Skeleton, vamos aprender utilizando somente o componente, porem a implementação é a mesma para quem está em um projeto construído com Zend Framework, e também mostra o quão modular é o framework.

Nosso projeto seguirá a seguinte estrutura:

* post_uri
  * index.php

Após a criação do diretório &#8216;post_uri&#8217; e o arquivo index.php devemos importar nosso componente, para isso vamos utilizar o Composer. Acesse a raiz do projeto pelo terminar e execute o seguinte comando:

```bash
composer require zendframework/zend-uri
```

O comando acima, parte do pressuposto que o Composer está instalado de forma global em seu computador, caso não tenha instalado recomendo que [leia a documentação do Composer](https://getcomposer.org/download).

Após o processo de instalação ser concluído, nosso projeto ficará com a seguinte estrutura:

* post_uri
  * vendor
  * composer.json
  * composer.lock
  * index.php

Agora podemos partir para a diversão, SHOW ME THE CODE!

Vamos preparar nosso index.php para explorar as funcionalidades do componente.

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
    
} catch (\Exception $e) {
    echo ucfirst($e->getMessage());
}
```

Em nosso código acima, importamos nosso arquivo de autoload, declaramos que vamos utilizar &#8216;UriFactory&#8217; e criamos uma estrutura de try cath, essa estrutura é necessária para a utilização do recurso de validação de URI e será descrito mais a frente.

Vamos utilizar como base a seguinte URI de exemplo.

```php
url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';
```
Como a classe UriFactory é uma classe abstrata ela não pode ser instanciada, dito isso vamos criar nossa variável base.


```php
$url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';
$uri = UriFactory::factory($url);
// Retorno
/*
object(Zend\Uri\Http)[3]
  protected 'validHostTypes' => int 19
  protected 'user' => null
  protected 'password' => null
  protected 'scheme' => string 'http' (length=4)
  protected 'userInfo' => null
  protected 'host' => string 'www.example.com' (length=15)
  protected 'port' => int 8080
  protected 'path' => string '/mall/products' (length=14)
  protected 'query' => string 'item1=product 01&item2=product 02' (length=33)
  protected 'fragment' => string 'token' (length=5)
*/
```

### Obtendo o host

Para que possamos capturar o host contido em nossa URI de exemplo, vamos utilizar o método getHost().

```php 
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
    $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

    $uri = UriFactory::factory($url);

    $host = $uri->getHost(); // Retorna: 'www.example.com'
    
} catch (\Exception $e) {
    echo ucfirst($e->getMessage());
}
```

### Obtendo a porta utilizada

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
    $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

    $uri = UriFactory::factory($url);

    $port = $uri->getPort();  // Retornar: "8080"
    
} catch (\Exception $e) {
    echo ucfirst($e->getMessage());
}
```

### Obtendo o path

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
  $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

  $uri = UriFactory::factory($url);

  $path = $uri->getPath();  // Retorno: '/mall/products'
} catch (\Exception $e) {
  echo ucfirst($e->getMessage());
}
```

### Obtendo a query string

```php 
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
  $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

  $uri = UriFactory::factory($url);

  $query = $uri->getQuery();  // Retorno: 'item1=product 01&item2=product 02'
} catch (\Exception $e) {
  echo ucfirst($e->getMessage());
}
```

### Obtendo a query string formatada em array

```php 
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
    $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

    $uri = UriFactory::factory($url);

    $query = $uri->getQueryAsArray();  
    // Retorno: 
    /*
        [
            'item1' => string 'product 01'
            'item2' => string 'product 02'
        ]
    */
    
} catch (\Exception $e) {
    echo ucfirst($e->getMessage());
}
```

### Obtendo o fragment

```php 
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
  $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

  $uri = UriFactory::factory($url);

  $query = $uri->getFragment();  // Retorno: 'token'
} catch (\Exception $e) {
  echo ucfirst($e->getMessage());
}
```

<h3 style="text-align: justify;">
  Validando a URI
</h3>

Aqui cabe nosso adendo, caso a URI informada o componente irá retornar uma exception &#8216;Zend\Uri\Exception\InvalidArgumentException&#8217;, por isso nossa estrutura está dentro de um try catch.

```php 
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Uri\UriFactory;

try {
  $url = 'http://www.example.com:8080/mall/products?item1=product 01&item2=product 02#token';

  $uri = UriFactory::factory($url);

  $query = $uri->isValid();  // Retorno: true
} catch (\Exception $e) {
  echo ucfirst($e->getMessage());
}
```

Como podemos observar, é extremamente simples a utilização do componente, mesmo ele sento utilizado isoladamente não estando com o skeleton do ZF instalado.

Espero que esse post possa ajuda-lo em seu dia a dia, fazendo o processo de manipulação de URI uma tarefa mais amena e tranquila.

Espero que tenha apreciado, até a próxima!
