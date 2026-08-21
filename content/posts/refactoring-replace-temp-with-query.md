---
title: Refactoring – Replace temp with query
author: Diego Brocanelli
type: post
date: 2018-09-17T12:37:37+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - engenharia de software
  - php
  - refactoring
tags:
  - código
  - php
  - qualidade
  - query
  - refactoring
  - replace
  - template
  - with

---
Olá, tubo bem?!

Frequentemente vemos o uso de variáveis locais realizarem operações e/ou ações.

```php
  <?php

  $basePrice = $this->quantity * $this->itemPrice;

  if ($basePrice > 1000){
    return $basePrice * 0.95;
  }
  else{
    return $basePrice * 0.98;
  }
```

## Por que devemos refatorar?

* Abrirá portas para utilizarmos o [Extract Methods][1].
* Podemos reutilizar a mesma expressão em outras partes do sistema.
* Facilitamos as modificações/implementações de regras de negócio.

## Solução para o problema!

Devemos extrair a lógica responsável por realizar a operação e limpamos o processo de execução do código.

```php
  <?php 

  if ( $this->basePrice() > 1000 ){
    return $this->basePrice() * 0.95;
  }

  return $this->basePrice() * 0.98;

  ...

  public function basePrice() 
  {
    return $this->quantity * $this->itemPrice;
  }
```

## Benefícios!

* Códigos mais legíveis.
* Códigos mais enxutos.
* Manuteníveis.
* Reutilizáveis.

Espero que tenha apreciado o conteúdo, ele foi inspirado no documento [Refactogin Guru][2].

Convido a interagir nos comentários e a compartilhar com seus amigos.

Obrigado pela atenção e sucesso em seus projetos!

 [1]: http://www.diegobrocanelli.com.br/refactoring/refactoring-extract-method/
 [2]: https://refactoring.guru/replace-temp-with-query