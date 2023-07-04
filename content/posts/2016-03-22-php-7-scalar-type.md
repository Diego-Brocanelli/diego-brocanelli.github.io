---
title: PHP 7 – Scalar Type
author: Diego Brocanelli
type: post
date: 2016-03-22T04:03:26+00:00
url: /php/php-7-scalar-type/
featured_image: /wp-content/uploads/2016/03/04_php7_scalar_type.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1358;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - php
  - php7

---

Como bem sabemos o PHP tem uma tipagem fraca, e ele continua com esta característica. Porem na nova versão [PHP 7](http://php.net/archive/2015.php#id2015-12-03-1) lançada dia 03/12/2015, trazendo novos tipos para o [Scalar Type declarations](http://php.net/manual/pt_BR/migration70.new-features.php).

Os novos tipos implementados são:

* int;
* float;
* string;
* bool.

Temos dois tipos de declaração, a coercive ( sendo default) e a strict (rigorosa), para acessar a strict é necessário informar no incio do arquivo PHP. Para isso devemos utilizar a função declare() para definir diretivas de execução para um bloco de código.

### Exemplo:

```php
<?php

declare(strict_types=1);
```

Pois bem, tudo muito bonito porem show me the code!!!

```php
<?php

declare(strict_types=1);

class Calculator
{
  /**
   * Performs the sum between two values
   * 
   * @param  float  $value1 value sum
   * @param  float  $value2 value sum
   * 
   * @return float  resulting of sum
   */
  public function sumCurrency(float $value1, float $value2)
  {
    $result = $value1 + $value2;

    return $result;
  }
}

$calculator = new calculator();

echo $calculator->sumCurrency(15.5, 22.1);
```

O resultado será 37.6

[Acesse aqui o repositório do GitHub](https://github.com/Diego-Brocanelli/exemplos-estudos-php7/blob/master/scalar_type_basic.php).

O exemplo visto acima é uma implementação básica e didática, vamos realizar agora uma implementação um pouco mais elaborada.

```php
<?php

declare(strict_types=1);

class Pdf
{
  /**
   * paper orientation
   * 
   * @var string
   */
  protected $paper;

  /**
   * Font size
   * 
   * @var int
   */
  protected $fontSize;

  /**
   * Paragraph
   * 
   * @var string
   */
  protected $paragraph;

  /**
   * Configuration document PDF.
   * 
   * @param string $paper     paper orientation
   * @param int    $fontSize  document font size
   * @param string $paragraph text of document
   */
  public function __construct(string $paper, int $fontSize, string $paragraph)
  {
    $this->paper        = $paper;
    $this->fontSize   = $fontSize;
    $this->paragraph = $paragraph;
  }

  /**
   * Return document configuration.
   * 
   * @return array
   */
  public function getDocumentConfiguration()
  {
    return [
      'paper'     => $this->paper,
      'fontSize'  => $this->fontSize,
      'paragraph' => $this->paragraph,
    ];
  }

  //other implementations...
}

$documentData = 'Lorem ipsum dolor sit amet';

$pdf = new Pdf('a4', 12, $documentData);

var_dump($pdf->getDocumentConfiguration());

/**
 * Output:
 *  
 * array(3) {
 *   ["paper"]     => string(2) "a4"
 *   ["fontSize"]  => int(12)
 *   ["paragraph"] => string(26) "Lorem ipsum dolor sit amet"
 * }
 */
```

Como resultado, teremos um array contendo as configurações do documento.

Caso seja passado algum parâmetro que não corresponda ao desejado, como por exemplo $fontSize = &#8217;12&#8217;, o PHP retornará um erro fatal.


```php
// Output: PHP Fatal error: Uncaught TypeError: Argument 2 passed to Pdf::__construct() must be of the type integer, string given.
```

O que nos garante que sejam passados os tipos desejados para o método.

Ok, mas quais são as vantagens de usar este novo recurso?

Simples, dentre as vantagens temos:

1. Maior qualidade de código;
2. Melhor estrutura para implementação de testes;
3. Melhor legibilidade;
4. Melhor definição de atributos de métodos;
5. Eliminamos qualquer estrutura de validação e tipo de parâmetro recebido.

[Acesse aqui o repositório do GitHub](https://github.com/Diego-Brocanelli/exemplos-estudos-php7/blob/master/scalar_type.php)

Bom, é isso pessoal espero que vocês estejam tão empolgados quanto eu para utilizar os novos recursos do PHP 7. Dentre em breve vou lançar mais 3 posts para abordarmos mais novas features.

Um grande abraço e até a próxima!
