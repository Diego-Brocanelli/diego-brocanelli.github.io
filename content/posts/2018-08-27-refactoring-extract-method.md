---
title: Refactoring – Extract Method
author: Diego Brocanelli
type: post
date: 2018-08-27T16:17:28+00:00
url: /php/refactoring-extract-method/
featured_image: /wp-content/uploads/2018/08/refactoring_extract_method.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1939;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - engenharia de software
  - php
  - refactoring
tags:
  - clean code
  - engenharia
  - extract
  - method
  - qualidade
  - refactoring
  - software

---
Olá, tudo bem?!

Você já deve ter esbarrado ou feito manutenção em códigos que o método tem muitas ações, como bem sabemos isso é muito ruim, pois aumenta a complexidade da leitura, manutenção, acoplamento e dificulta seu reuso. Abaixo podemos observar um exemplo:

```php
<?php

public function printOwing() 
{
    $this->printBanner();

    //print details
    print("name:  " . $this->name);
    print("amount " . $this->getOutstanding());
```

### Por que refatorar?

Quanto mais linhas um método tiver, mais difícil será localizar bugs, prestar manutenção, implementar novas funcionalidades e reutilizar a solução.

Extrair métodos é um pontapé inicial em muitas outras abordagens de refatoração.

### Solução para o problema!

Podemos extrair essa complexidade para métodos isolados, para isso devemos analisar as ações do método e decompor em pequenos métodos auxiliares, como podemos observar abaixo:

```php
  <?php 

  public function printOwing() 
  {
      $this->printBanner();
      $this->printDetails();
  }

  public function printDetails() 
  {
      print("name:  " . $this->name);
      print("amount " . $this->getOutstanding());
  }
```

### Benefícios!

* Código mais legível!
* Menos duplicação de código.
* Código manutenivel.
* Facilita novas implementações.
* Possibilita o reuso dos recursos.

Espero que tenha apreciado o conteúdo, ele foi inspirado no documento do [Refactogin Guru][1].

Convido a interagir nos comentários e a compartilhar com seus amigos.

Obrigado pela atenção e sucesso em seus projetos!

 [1]: https://refactoring.guru/extract-method