---
title: PHP Coding Standards Fixer
author: Diego Brocanelli
type: post
date: 2016-06-07T01:54:02+00:00
url: /php/php-coding-standards-fixer/
featured_image: /wp-content/uploads/2016/06/10_php_csfixer.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1364;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - Coding
  - php
  - Standards Fixer

---

Olá pessoal tudo bem?

Anteriormente fiz um post para demonstrar o uso do [PHPCodeSniffer](https://www.diegobrocanelli.com.br/php/php-codesniffer/), uma ferramenta muito útil para verificar possíveis erros em nossos códigos, e com isso nos auxiliar a melhora-los. Pois bem hoje vou lhes mostrar outra ferramenta [PHP Coding Standards Fixer](http://cs.sensiolabs.org/) ou mais conhecido como PHP-CS-Fixer ([repositório Github](https://github.com/FriendsOfPHP/PHP-CS-Fixer)). 

Com esta ferramenta poderemos realizar o processo de correção automática para as violações por exemplo da PSR-2, isso mesmo de forma automática!!!

E como isso funciona? Pois bem, Show Me The Code!!!

### Instalação

Dispomos de diversas formas para realizar sua instalação, e para este post irei utilizar seu arquivo .phar.

Para obtermos, podemos [baixar diretamente do link](http://get.sensiolabs.org/php-cs-fixer.phar).

Ou podemos instalar de forma Global:

#### Manual &#8211; wget

```bash
$ wget http://get.sensiolabs.org/php-cs-fixer.phar -O php-cs-fixer
```

#### Manual &#8211; CURL

```bash
$ curl http://get.sensiolabs.org/php-cs-fixer.phar -o php-cs-fixer
```

Depois devemos conceder as seguintes permissões:

```bash
$ sudo chmod a+x php-cs-fixer
$ sudo mv php-cs-fixer /usr/local/bin/php-cs-fixer
```

Para executar basta realizar o seguinte comando:

```bash
php-cs-fixer
```

#### Global &#8211; composer

```bash
$ ./composer.phar global require fabpot/php-cs-fixer
```

Em seguida, verifique se você executar `~/.composer/fornecedor/bin` no seu PATH, e você está pronto para ir:

```bash
exportação PATH = " $ PATH : $ HOME /.composer/vendor/bin "
```

#### Global &#8211; homebrew

```bash
brew install homebrew/php/php-cs-fixer
```

### Execução do php-cs.fixer.phar

Tomemos como base o seguinte código:

```php
<?php

namespace Diego\Generator;

class PDF {

  /**
   * Title for document PDF.
   * @var string
   */
  protected $title;

  /**
   * Paper Orientation
   * @example  portrait
   * @var string
   */
  protected $paperOrientation;

  /**
   * Content text of document PDF
   * @var string
   */
  protected $text;

  /**
   * Set data document
   * @param array $data array for data of document PDF
   */
  public function setData($data)
  {
    foreach ($data as $key => $value) 
    {
      $this->$key = $value;
    }
  }

  /**
   * Get data document
   * @param  string $key Referentes the properties of document.
   * @return mixed
   */
  public function getData($key)
  {
      return $this->$key;
  }

  /**
   * The document PDF
   * @return Diego\Generator\PDF\PDF;
   */
  public function createPDF()
  {
    // code for generate pdf...
  }
}
```

Não preciso nem descrever as graves agreções que o código acima inflige nas recomendações das PSR’s, métodos descritos sem formatação, excesso de espaços e total negligencia a endentação de código.

Agora devemos acessar o diretório raiz do projeto, que em nosso caso é onde encontra-se nossa classe que gostaríamos de corrigi-la.

Devemos executar o seguinte comando no terminal:

```bash 
php php-cs-fixer fix pdf.php
```

Vamos agora acessar novamente nossa classe para podemor avaliar as mudanças ocorridas.

```php
<?php
namespace Diego\Generator;

class PDF
{
  /**
   * Title for document PDF.
   * @var string
   */
  protected $title;

  /**
   * Paper Orientation
   * @example  portrait
   * @var string
   */
  protected $paperOrientation;

  /**
   * Content text of document PDF
   * @var string
   */
  protected $text;

  /**
   * Set data document
   * @param array $data array for data of document PDF
   */
  public function setData($data)
  {
    foreach ($data as $key => $value) {
      $this->$key = $value;
    }
  }

  /**
   * Get data document
   * @param  string $key Referentes the properties of document.
   * @return mixed
   */
  public function getData($key)
  {
    return $this->$key;
  }

  /**
   * The document PDF
   * @return Diego\Generator\PDF\PDF;
   */
  public function createPDF()
  {
    // code for generate pdf...
  }
}
```

E pronto, temos nossa classe corrigida conforme desejamos, fácil não?!

O que gostaria de reforçar aqui é o seguinte, para quem estiver começando a usar o PHP recomento que use o PHPCodeSnifer, para que assim possa analisar o que está em desacordo em seu código e posteriormente utilizar o PHP-CS-Fixer. E reforço a importância de que esta ferramenta nos auxilia no processo e nunca deve ser usada para corrigir de forma descontrolada o código, em outras palavras, não é desculpa para escrever código de má qualidade!!!

O [PHP-CS-FIXER](http://cs.sensiolabs.org/) tem uma gama de opções bem extensa, onde vale muito a pena que deem uma olhada para poder desfrutar de maior capacidade da ferramenta.

Alguns Editores e IDE&#8217;s dispõem de ferramentas para auxiliar o uso do PPHCS.

* [Atom](https://atom.io/packages/php-cs-fixer)
* [NetBeans](http://plugins.netbeans.org/plugin/49042/php-cs-fixer)
* [PHP Storm](http://tzfrs.de/2015/01/automatically-format-code-to-match-psr-standards-with-phpstorm)
* [Sublime Text](https://github.com/benmatselby/sublime-phpcs)
* [Vim](https://github.com/stephpy/vim-php-cs-fixer)

Bom por hoje é só pessoal, espero que tenham gostado e que o post tenha acrescentado algo em seu dia, até a próxima!

 [1]: http://get.sensiolabs.org/php-cs-fixer.phar