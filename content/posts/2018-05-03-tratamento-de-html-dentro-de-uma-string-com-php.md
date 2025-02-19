---
title: Tratamento de HTML dentro de uma string com PHP
author: Diego Brocanelli
type: post
date: 2018-05-03T20:10:54+00:00
url: /php/tratamento-de-html-dentro-de-uma-string-com-php/
featured_image: /wp-content/uploads/2018/04/64_php_funcao_htmlentities.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1799;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - básico
  - html
  - htmlentities
  - php
  - string
  - tratamento

---

Olá, tudo bem?!

Armazenar dados html ou até mesmo manipular é importante, pois devemos nos preocupar com a segurança e também com a integridade dos dados.

Há momentos que desejamos armazenar a string HTML, um exemplo é quando temos um textarea que contem a estrutura similar ao word.

Devemos tratar os dados para serem armazenados ou exibidos, para nossa felicidade o PHP traz um recurso nativo para nos auxiliar, a função [htmlentities](http://php.net/manual/pt_BR/function.htmlentities.php), onde irá converter os caracteres aplicáveis em entidades HTML, vamos para um exemplo prático:

```html
$html = '<a href="https://www.diegobrocanelli.com.br/">Link para acesso</a>';
```

Acima dispomos uma string simples, representando um link de acesso ao site, tendo posse da string devemos utilizar a função para o tratamento da string.

```php
// print da string sem tratamento
echo $html.PHP_EOL;

// tratamento da string.
$htmlEntities = htmlentities($html).PHP_EOL;

// print da string, já com tratamento.
echo $htmlEntities;
```

Para executar o código, basta acessar via terminal o local do arquivo e executar com o PHP, por exemplo:

```bash
php htmlentities.php
```

O resultado esperado é similar o demonstrado abaixo.

```html
// string pura sem tratamento.
<a href="#">Link access</a>
// string, após uso da função para tratamento.
<a href=&quot;#&quot;>Link access</a>
```

Como pudemos observar, foi extremamente simples realizarmos o tratamento da string, após isso podemos seguir nosso caminho da aplicação com a validação e sanitização dos dados para posterior armazenamento em um banco de dados por exemplo.

Espero que tenham apreciado e que o conteúdo agregue valor em seu dia a dia.

Grande abraço e sucesso em seus projetos.
