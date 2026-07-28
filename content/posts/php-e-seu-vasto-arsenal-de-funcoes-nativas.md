---
title: PHP e seu vasto arsenal de funções nativas
author: Diego Brocanelli
type: post
date: 2016-02-11T00:59:12+00:00
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
  - funções
  - php
---

Fala pessoal tudo certinho.

Todos sabemos da grande capacidade  e poder que o PHP dispõem para o desenvolvimento web, porem o que muitos deixam escapar é sua vasta lista de funções nativas que ele fornece.

Com isso segue abaixo uma pequena demonstração de funções que podem auxiliar e muito no dia a dia.

## [filter_input](http://php.net/manual/pt_BR/function.filter-input.php)

Esta função irá lhe ajudar pra abolir da sua vida as chamadas diretas as variáveis $_POST e $_GET e seus derivados, pois  com esta função podemos obter uma variável específica e realizar um tratamento automaticamente.

**Exemplo:**

```php
$dataGet =filter_input(INPUT_GET, 'data');

echo $dataGet;

//output: 123456789
```

Obtemos o retorno passado por GET.

Desta maneira eliminamos os &#8220;issets&#8221; da vida utilizados para verificar a existência da variável, auxiliando e agilizando no desenvolvimento 🙂 .

## Funções para string

### [addslashes](http://php.net/manual/pt_BR/function.addslashes.php)

Esta função insere de forma automática o caractere de contra barra &#8220;\&#8221; antes dos seguintes caracteres contidos em uma string:

* ‘ (aspas simples)
* ” (aspas duplas)
* \ (contra barra)
* NULL (o byte NULL)

**Exemplo:**

```php
$string = "Editora O'reilly";

echo addslashes($string);

//output: Editora O\'reilly
```

### [nl12br](http://php.net/manual/pt_BR/function.nl2br.php)

Sua função é inserir quebra de linha HTML antes de cada nova linha &#8220;\n&#8221;.

**Exemplo:**

```PHP
$string = 'Texto demonstrativo para \n quebra de linha.';

echo nl2br($string);

//output

// Texto demonstrativo para

// quebra de linha.
```

#### [wordwrap](http://php.net/manual/pt_BR/function.wordwrap.php)

Realiza a quebra de linha a partir de um determinado número de caractere.

**Exemplo:**

```PHP
$string = "Hello world";

$break = wordwrap( $string, 6, "");

echo $break;

//output

//Hello

//World
```

O PHP dispões de uma lista de [98 funções nativas para string](http://php.net/manual/pt_BR/ref.strings.php), por isso antes de sair reinventando a roda de uma olhada nesta lista, as chances do PHP já dispor de uma função para a sua necessidade são consideráveis.

## Funções para array

### [array_flip](http://php.net/manual/pt_BR/function.array-flip.php)

Inverte a relação entre chave e valor de um array.

**Exemplo:**

```PHP
$array = array("foo" => 0, "bar" => 1);

$flip = array_flip($array);

var_dump($flip);

//output

//array(2) { [0] => string(3) "foo" [1] => string(3) "bar" }
```

### [array_push](http://php.net/manual/pt_BR/function.array-push.php)

Com esta função podemos adicionar 1 ou mais elementos no final de um array.

**Exemplo:**

```PHP
$array = array("foo");

print_r($array);

//output: Array ( [0] => foo )

array_push($array, "bar");

print_r($array);

//output: Array ( [0] => foo [1] => bar )
```

Como para string o PHP também dispõem de uma lista de 79 [funções para array](http://php.net/manual/pt_BR/ref.array.ph).

Não somente isso, pois esta é uma pequena amostra do vasto e poderosos recursos que dispomos ao nosso favor, e que por muitas vezes por falta de conhecimento não fazemos uso de funções que pouparia um bom tempo e dor de cabeça em nosso dia a dia.

Com isso finalizo o post reforçando o conceito de &#8220;não reinventar a roda&#8221;. Pois como podemos ver, há grandes chances do PHP dispor de uma função nativa para algo que você acaba implementando de forma manual para solucionar um problema.

Por isso faça uma pesquisa na [documentação do php](http://php.net/manual/en/) antes de sair implementando soluções básicas,  esta abordagem vai agilizar o seu desenvolvimento aumentando também em alguns casos a performance do seu código, pois estamos falando de funções nativas, onde já foram testadas e validadas pela comunidade.

Espero ter colaborado trazendo um post relevante ao seu dia, até a próxima!
