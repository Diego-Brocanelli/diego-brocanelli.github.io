---
title: Criando cache com o Zend-Cache
author: Diego Brocanelli
type: post
date: 2017-05-19T22:50:12+00:00
url: /php/criando-cache-com-zend-cache/
featured_image: /wp-content/uploads/2017/05/45_zend_cache.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1399;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend Framework
tags:
  - cache
  - php
  - zend cache
  - zend framework
  - zf2

---

Olá, tudo bem?!

Em nossas aplicações com frequência trabalhamos com informações/dados que não sofrem alteração com muita frequência, porem ela é carregada e processada o tempo todo em que o recurso é requisitado, acarretando em perda de performance e processamento desnecessário (maior custo para manter o sistema $$$) e uma experiência não muito agradável para o usuário.

Umas das possíveis formas de resolver esse nosso problema é armazenando essa informações em cache, para isso vamos utilizar o componente [Zend-Cache](https://docs.zendframework.com/zend-cache/), componente robusto e que nos fornece um leque de possibilidades muito bacana para nossa caixa de ferramenta.

Para demonstrar seu potencial vamos implementar um cache simples para que possamos vê-lo em prática.

Crie a seguinte estrutura de diretórios e arquivo:


* exemplo-cache-zend 
  * cache
  * index.php

### Instalação do componente

Para instalar o **Zend-Cache**, basta acessar a raiz do projeto que criamos anteriormente e executar o seguinte comando:

```bash
composer require zendframework/zend-cache
```

Após a instalação do pacote, podemos dar início a implementação do recurso.

### Implementação do recurso de cache com Filesystem

Abra o arquivo _index.php_ e importe o _autoloader_ do [_composer_](/php/iniciando-com-composer/), para que ele nos auxilie no consumo do componente _Zend-Cache_.

```php
<?php
// Importação do autoloader do composer
require_once __DIR__.'/vendor/autoload.php';
```

Devemos agora importar o componente _Zend-Cache\StorageFactory_.

```php
<?php
// Importação do autoloader do composer
require_once __DIR__.'/vendor/autoload.php';

use Zend\Cache\StorageFactory;
```

Com as devidas configurações implementadas, devemos agora criar nosso objeto que será responsável pelo gerenciamento do cache.

```php
// Criaçao via factory:
$cache = StorageFactory::factory([
    'adapter' => [
        'name'      => 'filesystem',// tipo de cache.
        'options'   => [
            'ttl'       => 15, // tempo que a informação ficará mantida no cache
            'cache_dir' => './cache' // diretório onde será armazenado o arquivo de cache
        ],
    ],
]);
```

Vamos detalhar um pouco nosso código:

* **Adapter** 
  * _name_
    * Aqui especificamos qual tipo de cache desejamos utilizar, em nosso exemplo estamos utilizando o filesystem, onde irá ser criado um arquivo que irá armazenar nossa informação.
    * Existem também as opções: 
      * Apc.
      * Dba.
      * Memcached.
      * Redis.
* **Options** 
  * _ttl_
    * Opção é definido em segundos o tempo que a informação será mantida em cache.
  * _cache_dir_
    * Opção que informa o local onde será criado os arquivos de cache.

O componente de _Zend-Cache_ dispõem de muitas outras configurações, com isso recomendo que caso queira explorar mais a fundo o componente acesse sua [documentação](https://docs.zendframework.com/zend-cache/).

Vamos agora inserir nossa informação no cache, para isso devemos implementar a seguinte estrutura:

```php
$dadosNoCache = $cache->getItem('dados');// solicita o cache
var_dump($cache->getItem('dados'));// exibe o que foi coletado
// caso não tenha informação no cache
if(is_null($dadosNoCache)){
    $cache->addItems([
        'dados' => 'meus dados: '.date('Y-m-d H:i:s'),// dados que desejamos inserir no cache
    ]);
}

// Exibe os dados mantidos no cache.
var_dump($cache->getItem('dados'));
```

No código acima, basicamente requisitamos ao componente de cache para que o mesmo busque os dados armazenados, caso não tenha nenhuma informação armazenada será incluso os dados e exibido seu retorno para que possamos acompanhar o momento da inclusão das informações. A partir da inclusão dos dados no cache o componente irá criar um diretório e um arquivo &#8220;_exemplo-cache-zend/cache/**zfcache-c5/zfcache-dados.data**_&#8220;.

Para que possamos analisar o resultado abra o terminal na raiz do projeto e execute o seguinte comando:

```bash
php index.php
```

Após executar o código, será retornado uma mensagem similar ao exibido abaixo:

```bash
NULL
string(31) "meus dados: 2017-05-19 19:15:49"
```

O _NULL_ é referente a não termos nada ainda armazenado em cache e a _string_ representa os dados recém armazenados, para validar nosso código basta executar o código novamente e analisar seu retorno, lembrando que as informações ficarão armazenadas por 15 segundos.

```bash
string(31) "meus dados: 2017-05-19 19:15:49"
string(31) "meus dados: 2017-05-19 19:15:49"
```

Como podemos observar as duas strings são idênticas, pois foram coletadas do nosso cache que acabamos de implementar, para que seja exibido novas informações devemos aguardar os 15 segundos que configuramospara que todo o processo de inserção seja executado novamente.

A implementação foi simples e rápida,  o cache com filesystem permite apenas armazenarmos string, porem deixo uma dica, caso queira armazenar um array basta convertê-lo para json armazená-lo em cache e assim que você retornar os dados converta-o novamente para array. 😉

Espero que tenham apreciado e que seja útil para você em seu dia a dia.

Caso tenham alguma dica, sugestão, crítica ou elogios recomendo que deixem nos comentários para que assim possamos gerar mais conteúdo e aprender cada vez mais.

Um grande abraço e até mais! 🙂
