---
title: Converter data para PT-BR com PHP
author: Diego Brocanelli
type: post
date: 2017-02-01T19:37:42+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - php
tags:
  - data
  - php

---

Fala galera, tudo bem?!

Uma dúvida recorrente é a conversão de data de EN para PT-BR, uma tarefa corriqueira em nosso dia a dia.

Comumente trabalhamos no formato EN para armazenar a informação no banco de dados, porém em determinados casos temos a necessidade de converter a data para PT_BR.

Pois bem, mas como podemos fazer isso?

Temos diversas maneiras, porem a que vou apresentar aqui julgo ser a mais simples.

```php
<?php

$dateEN = new \DateTime('2017-02-01');
$datePTBR = $dateEN->format('d/m/Y');
echo $datePTBR; //output: 01/02/2017
```

Como resultado teremos &#8220;01/02/2017&#8221;, simples assim, em apenas 2 linhas de código convertemos facilmente nossa data para PT-BR.

Tenho três pontos a salientar:

1. Como demonstrado no exemplo acima, podemos passar no construtor do DateTime o valor desejado.
2. Ao evocar o método format, podemos determinar qual o formato desejado, por exemplo nada impediria que informássemos o padrão &#8216;d/m&#8217; para retornar &#8217;01/02&#8242; ou o formato &#8216;d/m/y&#8217; para retornar o valor &#8217;01/02/17&#8242;.
3. Utilizei somente data neste exemplo, porem nada impede de trabalhar com data e tempo ao mesmo tempo 🙂

Para maiores esclarecimentos para com os formatos suportados pelo PHP, [recomendo a leitura da documentação][1] pois é extremamente rica.

Esse post foi curto, porém focado, espero ter lhe ajudado.

Até a próxima 🙂

 [1]: http://php.net/manual/pt_BR/function.date.php