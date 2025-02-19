---
title: Senhas mais seguras com Zend-Crypt
author: Diego Brocanelli
type: post
date: 2016-12-28T17:37:47+00:00
url: /php/senhas-mais-seguras-com-zend-crypt/
featured_image: /wp-content/uploads/2016/12/26_zend_crypt.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1380;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend Framework
tags:
  - password
  - php
  - senhas
  - zend crypt
  - zf2

---

Olá pessoal, tudo bem?!

Hoje em dia não consigo listar um sistema se quer que eu tenha trabalhado sem um mecanismo de login, pode ser com e-mail + senha, usuário + senha porem esse é um recurso que todos os sistema utilizam. E decorrente a isso aparece a grande pergunta, como tratar a senha?

Sim, devemos tratar a senha e não devemos nunca, vou repetir, NUNCA devemos armazenar a senha em texto puro no banco de dados ou em qualquer outro tipo de armazenamento. Isso é uma das regras básicas de segurança em aplicações tanto desktop quanto para web.

Porém, como vamos tratar esta informação que já sabemos ser bem valiosa?

Eu gosto muito do componente Zend-Crypt, uma poderosa ferramenta para gerar hash.

Este componente é modular, podendo ser utilizado dentro da estrutura do Zend Framework, ou de forma isolada, para facilitar sua compreensão, vamos utilizá-lo de forma isolada, porem como dito seu uso não difere no ZF.

Para iniciar, devemos criar nossa estrutura base do projeto, seguindo o modelo descrito abaixo.

* zend\_crypt\_post 
  * index.php

Sim, nossa estrutura inicial é basicamente um único arquivo 🙂

Vamos dar inicio ao desenvolvimento, agora devemos instalar o componente e será utilizado o composer para isso, acesse a raiz do projeto e execute o comando abaixo.

```bash
composer require zendframework/zend-crypt
```

Após o processo de instalação ser concluído, a estrutura do projeto deve ficar semelhante ao demonstrado abaixo.

* zend\_crypt\_post 
  * vendor
  * composer.json
  * composer.lock
  * index.php

Estrutura do projeto finalizado, vamos para a parte divertida, mão na massa!

Abra o arquivo index.php, e importe o autoload.php, conforme demonstrado abaixo.

```php
<?php

require_once __DIR__.'/vendor/autoload.php';
```

Agora devemos declarar o uso do recurso Bcrypt.

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Crypt\Password\Bcrypt;
```

Vamos utilizar o bcrypt, por ser considerado uma das formas mais seguras de tratamento de senhas, caso você tenha o hábito de utilizar md5 ou sha espero que no final deste post eu o tenha convencido de não mais utilizar estes dois métodos e passe a utilizar o bcrypt, para melhor segurança de suas senhas 🙂

Para gerar nosso hash de senha, basta utilizar o método create();

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Crypt\Password\Bcrypt;

$password = 'minha primeira senha';

$bcrypt = new Bcrypt();

$bcrypt->create($password);
```

Como resultado teremos uma string contendo 60 caracteres:

```txt
$2y$14$zbK.VtsYCUwDgyPF6snCmuQUzUlR5Wtw9P0d3qGS19EfiR9Otv1da
```

Viram como é simples, e não para por aí, podemos utilziar mais dois recursos bacanas para potencializar a segurança da nossa senha, sendo elas:

* salt 
  * Conceito utilizado não somente no bcrypt, porem para implementar uma maior segurança a seu hash, tendo em vista que o salt fica alocado internamente no sistema.
* cost 
  * O bcrypt usa o sistema de cost &#8220;custo&#8221;, para especificar o número de ciclos a serem utilizados pelo algoritmo no processo de criação do hash. É representado por um valor inteiro entre 4 à 31, tendo como valor padrão 10, salientando que quanto maior seu valor mais ciclos serão utilizados e consequentemente mais tempo levará para criar o hash!


Vamos implementar essas melhorias.

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Crypt\Password\Bcrypt;

$password = 'minha primeira senha';

$bcrypt = new Bcrypt();

$salt   = 'AVsr@341234$rxffssaasdf&';
$bcrypt->setSalt($salt);
$bcrypt->setCost(14);

$securePassword = $bcrypt->create($password);
```

Como resultado teremos a seguinte string:

```txt
$2y$14$QVZzckAzNDEyMzQkcnhmZeMkI8R2iGrStlP9EqX6GgXpxFm2KQ11i
```

Como observado, o hash gerado utilizando _salt_ e _cost_ é diferente da primeira, sendo que na segunda opção utilizamos um _cost_ maior de 14 ciclos ao invés do custo padrão 10.

Para finalizar o ciclo, vamos validar a senha em texto puro com o hash gerado, e para isso vamos utilizar o método vefify();

```php
<?php 

require_once __DIR__.'/vendor/autoload.php';

use Zend\Crypt\Password\Bcrypt;

$password = 'minha primeira senha';

$bcrypt = new Bcrypt();

$salt   = 'AVsr@341234$rxffssaasdf&';
$bcrypt->setSalt($salt);
$bcrypt->setCost(14);

$securePassword = $bcrypt->create($password);

$verify = $bcrypt->verify($password, $securePassword);
```

Nesta comparação o resultado será _true_, porem caso os valores não correspondam o mesmo retornará _false_.

Como observado, o uso do Bcrypt é simples e agiliza o processo de gerenciamento de hash para as senhas, normalmente gosto de trabalhar com e-mail e senha no formulário de login, pois como o e-mail deve ser único evita conflitos.

Os exemplos acima são bem básicos, porem muito úteis no dia a dia, podemos expandir o horizonte de uso como por exemplo, utilizar em API, onde o client realiza a request e o server (contendo o bcrypt) iria realizar todo o processo de verificação ou de criação de hash. Com isso podemos ter uma aplicação em nodejs que realiza o processo de login em uma API, com isso, independente do sistema, o processo de autenticação será centralizado em uma API e consumida por diversos clients.

Deixe sua imaginação correr e abuse do recurso, que como visto e muito poderoso.

Caso tenham interesse, segue o link para consulta da [documentação oficial do Zend-crypt][1].

Qualquer dúvida ou sugestão deixe nos comentários, vamos discutir sobre o tema e com isso aprender ainda mais!

Espero que tenham apreciado, até a próxima 🙂

 [1]: https://docs.zendframework.com/zend-crypt/