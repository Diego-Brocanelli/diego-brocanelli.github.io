---
title: Como usar Traits no PHP com namespace
author: Diego Brocanelli
type: post
date: 2017-08-08T23:10:42+00:00
url: /php/como-usar-traits-no-php-com-namespace/
featured_image: /wp-content/uploads/2017/08/51_traits_namespace_php.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1405;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - composer
  - php
tags:
  - autoload
  - composer
  - namespace
  - php
  - traits

---

Recentemente lancei um post [Como usar Traits no PHP](/php/como-usar-traits-no-php/), com isso surgiu uma duvida nos comentários realizado pelo Paulo Dias, onde questionou como poderia utilizar a mesma implementação porem fazendo uso de namespace.

Neste post vou implementar o mesmo conceito do post anterior demonstrando o uso de namespace.

Para nossa implementação devemos criar o diretório com o nome &#8216;traits_com_namespace&#8217;, após sua criação devemos acessar a raiz do diretório pelo terminal e executar o seguinte comando:


```bash
composer init
```

Como observado acima, iremos utilizar o composer para que o mesmo faça o autoload do nosso projeto. Caso não conheça o composer recomendo a leitura do meu post [Iniciando com composer](/php/iniciando-com-composer/).

Ao executar o comando, basta seguir o passo a passo solicitado pelo composer e gerar o arquivo composer.json.

Após  a finalização, abra o arquivo composer.json e vamos incluir nossa regra para autoload, veja o trecho de código abaixo.

```bash
"autoload": {
    "psr-4":{
        "DiegoBrocanelli\\":"src//"
    }
}
```

Devemos incluir o trecho de código no arquivo composer.json após a chave &#8216;minimum-stability&#8217;, como demonstrado abaixo.

```bash
{
    "name": "diego-brocanelli/traits-autoloader",
    "description": "Traits com autoloader",
    "license": "BSD-3-Clause",
    "authors": [
        {
            "name": "Diego Brocanelli",
            "email": "diegod2@msn.com"
        }
    ],
    "minimum-stability": "dev",
    "autoload": {
        "psr-4":{
            "DiegoBrocanelli\\":"src//"
        }
    }
}
```

Vamos detalhar o que configuramos de autoload:

* Estamos utilizando PSR-4 e definimos que nossa namespace iniciará com &#8216;DiegoBrocanelli&#8217;  e nosso código ficará dentro do diretório src.

Para que nosso autoload seja gerado devemos executar o seguinte comando pelo terminal:

```bash
composer dumpautoload
```

Ao finalizar a geranção do autoload será criado o diretório vnedor e teremos o seguinte retorno no terminal.

```php
Generating autoload files
```

Devemos agora criar nossa estrutura de código, uma boa pratica é separar nossos códigos com isso vamos criar um diretório App dentro de src.

Podemos agora criar a classe ShopCar.php dentro do diretório App e importar a implementação do post anterior, veja como ficou a implementação abaixo.

```php
<?php 
 
namespace DiegoBrocanelli\App;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
class ShopCar
{
    /**
     * Buy product
     */
    public function Buy()
    {
        return "Product purchase finish...";
    }
}
```

A implementação acima está 99.9% idêntica ao post anterior, porem, se repararmos na linha 3 foi definido a namespace, onde seguiu conforme configurações anteriores definindo a raiz DiegoBrocanelli seguido do diretório onde a classe encontra-se.

Vamos agora implementar nossa trait LogTrait.php dentro do diretório APP, veja abaixo a implementação.

```php
<?php 
 
namespace DiegoBrocanelli\App;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
trait LogTrait
{
    /**
     * Log info.
     * 
     * @return string
     */
    public function info()
    {
        return 'Included a new log...';
    }
}
```

Novamente o código acima está 99.9% idêntico ao do post original, porem, na linha 03 definimos a namespace da nossa trait. Que como encontra-se no mesmo diretório da classe ShopCar mantém-se o mesmo.


Por fim, devemos atualizar nossa classe ShopCar para consumir nossa trait, veja implementação abaixo:

```php
<?php 
 
namespace DiegoBrocanelli\App;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
class ShopCar
{
    use LogTrait;

    /**
     * Buy product
     */
    public function Buy()
    {
        return "Product purchase finish... {$this->info()}";
    }
}
```

Viram como foi simples! Como ambos os códigos encontram-se na mesma namespace, apenas utilizamos o comando &#8216;use&#8217; para chamar nossa trait e assim termos o  acesso ao método info().

Para validar nosso projeto vamos criar um arquivo index.php na raiz do projeto e implementar a chamada da classe ShopCar, veja resultado da implementação  abaixo:

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\App\ShopCar;
 
$shopCar = new ShopCar();
 
echo $shopCar->buy();
```

Podemos observar, logo no início do arquivo importamos o autoload do composer, para temos acesso as nossas classes.

Em seguida importamos a classe ShopCar, utilizando o comando &#8216;use&#8217;.

A partir deste momento podemos instanciar a classe ShopCar  e acessar o método buy().

Abra o terminal e acesse a raiz do projeto e execute o seguinte comando:

```bash
php -S localhost:8080 index.php
```

Abra seu navegador e acesse a url:

```bash
localhost:8080
```

Como resultado, devemos obter o mesmo resultado obtido no post anterior, veja abaixo o retorno esperado.

```bash
Product purchase finish... Included a new log...
```

Com isso finalizamos nossa implementação. De forma simples e prática implementamos o mesmo conceito utilizando namespaces.

Foi uma implementação sem uso de framework, porem, o conceito de namespace é aplicado em todos os frameworks do ecossistema PHP.

Espero que este conteúdo tenha sanado a dúvida do nosso amigo Paulo Dias e todos que possam vir a utilizar e estão com dúvidas.

Caso você tenha alguma dúvida faça como o Paulo, deixe nos comentários, com isso podemos ir gerando cada vez mais conteúdo com um debate saudável, ficarei muito feliz em poder ajudar na medida do possível.

Grande abraço e até a próxima! 🙂
