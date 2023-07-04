---
title: 'Descobrindo a quantidade de quebra de  linhas de um texto com PHP'
author: Diego Brocanelli
type: post
date: 2017-02-02T23:20:15+00:00
url: /php/descobrindo-quantidade-de-quebra-de-linhas-de-um-texto-com-php/
featured_image: /wp-content/uploads/2017/02/29_quebras_de_linha_php.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1383;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - php

---

Olá pessoal, como vocês estão?!

Em minhas navegações e pesquisas pela web, me deparei com uma dúvida postada no Stack Ovwerflow, sendo a seguinte:

> Como posso descobrir quantas linhas tem um texto?&#8221;


Na descrição da dúvida, foi explicado que o objetivo era contar quantas quebras de linhas tem em um texto.  Sabendo da dúvida, agora vamos em busca da resposta.

```php
<?php

$string = 'Bacon ipsum dolor amet fatback sausage ball tip ham hock bacon burgdoggen. Pancetta ham hock frankfurter swine sausage tenderloin, kevin short ribs. Sirloin filet mignon meatball ham, ham hock cow prosciutto rump ground round brisket. Jowl short loin frankfurter pork chop ball tip rump shank kevin shoulder short ribs andouille. Turducken beef ribs corned beef, meatball shankle hamburger andouille shank short ribs sausage leberkas. Porchetta hamburger shank, pork loin spare ribs tail cupim meatloaf. Strip steak ground round flank doner pork sirloin.

	Tri-tip spare ribs swine, ground round ribeye salami pancetta cupim pig beef. Pork chop chicken doner picanha. Strip steak ribeye short loin, pancetta tri-tip rump fatback corned beef meatloaf alcatra kevin drumstick. Bresaola shoulder shank, rump ham ground round strip steak t-bone.';

$lines = substr_count( nl2br($string), '<br />');
```

E como retorno teremos &#8220;2&#8221; bem simples, porém vamos detalhar um pouco o código.

Inicialmente, declaramos uma variável e atribuímos dois parágrafos de texto.

Em seguida fazemos uso de dois métodos nativos do PHP, sendo eles:

* substr_count(): responsável por contabilizar a quantidade de ocorrências de uma determinada string desejada, no nosso caso &#8216;<br />&#8217;.
* nl2br(): esta função recebe uma string e nativamente insere a tag &#8216;<br />&#8217; em todas as quebras de linhas encontradas no texto.

Por final armazenamos o retorno e obtemos a quantidade de parágrafos do texto.

Viram como foi simples e para ampliar nosso leque de opções vou demonstrar uma outra aplicabilidade, vamos descobrir a quantidade de linhas de um texto em um arquivo .txt 🙂

Para isso devemos criar um arquivo .txt e nele eu vou inserir 20 parágrafos do [Bacon Ipsum][1] .

```php
<?php

$path = __DIR__.'/example.txt';
$handle = fopen($path, 'r');
$contentFile = fread($handle, filesize($path));
fclose($handle);

$counter = nl2br($contentFile);
$lines = substr_count($counter, '<br />');
```

Em nosso código acima realizamos o procedimento para ler todo o conteúdo do arquivo &#8220;example.txt&#8221; em seguida utilizamos a mesma lógica aplicada para descobrir a quantidade de &#8216;\n&#8217; contidas no texto,  como retorno do nosso código teremos &#8217;38&#8217; no total.

Novamente com poucas linhas de código podemos contabilizar de forma rápida e automática a quantidade de quebras de linha no texto.

Espero que tenha ajudado e nos vemos no próximo post 🙂

&nbsp;

 [1]: https://baconipsum.com/