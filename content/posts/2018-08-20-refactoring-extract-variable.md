---
title: Refactoring – Extract Variable
author: Diego Brocanelli
type: post
date: 2018-08-20T17:21:01+00:00
url: /engenharia-de-software/refactoring-extract-variable/
featured_image: /wp-content/uploads/2018/08/refactoring_extract_variable.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1938;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - engenharia de software
  - refactoring
tags:
  - engenharia
  - extract
  - refactoring
  - software
  - variable

---

Olá, tubo bem?!

Refatorar é um processo que faz parte do dia a dia do desenvolvedor, existem diversos motivos e técnicas para isso.

Um problema comum que deparamos são condicionais complexas, dificultando sua legibilidade e a manutenção, abaixo podemos observar um exemplo.


```php
<?php

if ( 
    ($platform->toUpperCase()->indexOf("MAC") > -1) &&
    ($browser->toUpperCase()->indexOf("IE") > -1)   &&
    $this->wasInitialized() && $this->resize > 0
  ) {
  // implementação da regra de negócio
}
```

### Por que devemos refatorar?

Eliminamos longas linhas com multipartes, fragmentando as partes e diminuindo a complexidade na leitura do processo como um todo. Trazendo como benefício um código mais legível!

Cuidado com o processo de extração, pois devemos manter limpo e simples os nomes das variáveis, deixando claro a finalidade da mesma, para que não gere mais dúvidas na cabeça do desenvolvedor.

### Solução para o problema!

Uma das soluções que podemos aplicar para melhorar a legibilidade é a extração para variáveis, como observado abaixo.


```php
<?php

$isMacOs        = $platform->toUpperCase()->indexOf("MAC") > -1;
$isIE           = $browser->toUpperCase()->indexOf("IE")  > -1;
$wasResized     = $this->resize > 0;
$wasInitialized = $this->wasInitialized()

if ( $isMacOs && $isIE && $wasInitialized && $wasResized) {
  // implementação da regra de negócio
}
```

### Benefícios!

* Maior legibilidade do código.
* Organização.

Espero que tenha apreciado o conteúdo, ele foi inspirado no documento [Refactogin Guru](https://refactoring.guru/extract-variable).

Convido a interagir nos comentários e a compartilhar com seus amigos.

Obrigado pela atenção e sucesso em seus projetos!
