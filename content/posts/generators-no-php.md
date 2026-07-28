---
title: Generators no PHP
author: Diego Brocanelli
type: post
date: 2016-06-02T23:24:19+00:00
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
  - Generators
  - php

---

Desde sua versão 5.5 encontra-se disponível o recurso de [generators no PHP](http://php.net/manual/pt_BR/language.generators.php)<, esse recurso nos permite realizar iterações tendo ganho de performance, pois realiza a entrega dos dados sobe demanda, diferentemente do iterador padrão do PHP, onde processa o conjunto de dados na memória.

Para criar um generator é muito simples, pois são somente funções PHP que fazem uso da palavra chave `yield`. Diferente do retorno convencional de uma função PHP, ao utilizar um generator ele apenas gera valores por demanda, como podemos analisar no exemplo abaixo.

```php
<?php 

function myGenerator()
{
  $i     = 0;
  $limit = 50;

  for( $i; $i <= $limit; $i++ ){
    yield $i;
  }
}

foreach (myGenerator() as $value) {
  echo $value .', ';
}
```

Após criarmos nosso generator, é realizado um foreach para percorrer os dados e imprimir os valores.

Como resultados obtivemos:

```txt
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
```

O exemplo acima é uma amostra básica do uso de generator, porem imagine o caso de uso que você tenha que processar um arquivo TXT de 5GB, com disponibilidade de apenas  1GB de memória disponível para o PHP.

```php
<?php 

function getRows($file)
{
  $fileHandle = fopen($file, 'rb');

  if($file === false){
    throw new Exception('Error Processing File');
  }

  // feof = Testa pelo fim-de-arquivo (eof) em um ponteiro de arquivo
  while( !feof($fileHandle) ){
    yield fgetcsv($fileHandle);
  }

  fclose($fileHandle);
}

foreach (getRows('myDataBase.csv') as $row) {
  echo $row;
}
```

Neste exemplo o PHP vai alocar memória apenas para cada linha processada, porem o processo realizado por um generator são sempre para frente, onde não podemos retroceder, avançar ou realizar buscas.

A SPL (Standard PHP Library) dispõem de diversos iterators padrões, vale a pena dar uma olhada na [documentação](http://php.net/manual/pt_BR/spl.iterators.php).

Bom pessoal espero que tenham gostado, e que este recurso seja útil em seu dia a dia.

Até a próxima! 🙂
