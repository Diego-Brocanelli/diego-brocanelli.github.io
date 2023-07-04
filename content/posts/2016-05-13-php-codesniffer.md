---
title: PHP CodeSniffer
author: Diego Brocanelli
type: post
date: 2016-05-14T00:29:49+00:00
url: /php/php-codesniffer/
featured_image: /wp-content/uploads/2016/05/07_php_codesniffer.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1361;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - CodeSniffer
  - php

---

Olá pessoal tudo bem?

Hoje temos diversas ferramentas que nos auxiliam em nosso dia a dia, para que tarefas repetitivas sejam realizadas de formas mais práticas e eficientes. Dito isso trago uma ferramenta (que não é nova) porem que irá ajudar com certeza, poupando muito tempo no seu dia.

O nome desta ferramenta é PHP CodeSniffer, e sua finalidade é analisar os padrões em seu código, auxiliando na qualidade do código produzido. 

Podemos acessar a ferramenta [em seu site](http://pear.php.net/package/PHP_CodeSniffer), ou seu [repositório no GitHub](https://github.com/squizlabs/PHP_CodeSniffer).

### Instalação

Requerido PHP 5.1.2 ou superior (Pelo amor de Deus, se você usa uma versão inferior, corra e [atualize o seu PHP](http://php.net/) AGORA!!!).

Podemos obter o PHP CodeSniffer de diversas maneiras, sendo:


#### URL

```bash 
curl -OL https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar
```

#### PEAR

```bash
pear install PHP_CodeSniffer
```

#### Composer

```bash
composer global require "squizlabs/php_codesniffer=*"
```

Para essa demonstração irei utilizar o CURL para obter o arquivo .phar. A estrutura de diretório e arquivo será a seguinte:


* App
  * MyClass.php
  * phpcs.phar

Abaixo vemos a estrutura de nossa classe:


```php
<?php

class MyClass
{
  /**
  * Username.
  * 
  * @var [type]
  */
  private $name;

  /**
   * Set username
   * 
   * @param string $name username
   */
  public function setName($name) 
  {
    if ($name) {
        $name = trim($name);
        $name = strip_tags($name);
    }

    $this->name = $name;
  }

  /**
   * Get username.
   * 
   * @return string
   */
  public function getName() {
    return $this->name;
  }
}
```

Como podemos notar, estamos infringindo diversas regras da PSR nesta pequena classe, agora imagine analisar 5, 9 ou 20 classes para verificar se algum programador não deixou escapar nada.

Para realizar o processo de scan, devemos acessar o diretório onde está contido as classes que deseja analisar.

Após acessar o diretório devemos executar o seguinte comando.

```php
php phpcs.phar --standard=PSR2 MyClass.php
```

Após a execução do comando será exibido o resultado da análise:


![Resultado](/wp-content/uploads/2016/05/segund_scan.png)

No resultado podemos analisar:

* Quantidade de erros Encontrados.
  * Primeira coluna:
    * A linha onde o erro se encontra.
* Segunda coluna:
  * Mensagem de ERRO.
* Terceira coluna:
  * A descrição do erro encontrado.
* E no final, o tempo decorrido da análise e o total de memória utilizada.

Ok, descobri o erro e agora? Você deve corrigir os erros!

Sim isso é óbvio de se ler, porem na prática é muito comum desenvolvedores jogarem para debaixo do tapete toda a sujeira encontrada (ou produzida). E esta atitude só gera mais trabalho, siga a lei do escoteiro “Deixe o local melhor do que você o encontrou”, sim isso dá trabalho, porem a recompensa é certa, pois na próxima vez o esforço e as dores de cabeça serão menores.


```php
<?php

namespace App\Test;

class MyClass
{
  /**
   * Username.
   * @var [type]
   */
  private $name;

  /**
   * Set username
   * @param string $name username
   */
  public function setName($name)
  {
    if ($name) {
      $name = trim($name);
      $name = strip_tags($name);
    }

    $this->name = $name;
  }

  /**
   * Get username.
   * @return string
   */
  public function getName()
  {
    return $this->name;
  }
}
```

Após corrigirmos o que nos foi sugerido, vamos novamente executar a análise para garantir total correção de erros.

Viram como o processo facilita nossa vida, claro que o que demonstrei para vocês é apenas uma pequena parte do potencial desta ferramenta, caso queiram se aprofundar acessem a [documentação](https://github.com/squizlabs/PHP_CodeSniffer/wiki).

Vou descrever algumas opções de configuração bem interessantes para utilizar no processo de análise.

#### Gerar um relatório sintético

Devemos utilizar o complemento &#8211;report=summary

```bash
php phpcs.phar --report=summary --standard=PSR2 MyClass.php
```

![Resultado](/wp-content/uploads/2016/05/relatorio_sintetico_codesniffer.png)

#### Acompanhamento do processo

Devemos utilizar o comando -p e assim para cada arquivo com erro será exibido o caractere “E” no terminal.

```bash
php phpcs.phar -p --standard=PSR2 MyClass.php
```

![Resultado](/wp-content/uploads/2016/05/erros_codesniffer.png)


### Especificar o code standard desejado

Sim podemos especificar qual o padrão o scan deve analisar, com isso dispomos das seguintes opções:

* PEAR (default);
* PHPCS;
* PSR1;
* PSR2;
* Squiz;
* Zend.

Recomendo a análise utilizando as opções PSR1 e PSR2, pois naturalmente seguem os padrões do PHP-FIG.

Apesar de sua fácil utilização, e aparentemente quase nenhum requerimento, analise e valide o ganho de produtividade que a ferramenta irá lhe proporcionar. Pois podemos realizar analises rápidas que nos orientam no processo de codificação, melhorando a qualidade do nosso código.

Convido a todos que testem e deixem nos comentários o que acharam da ferramenta.

Um grande abraço a todos e até a próxima.

 [1]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/segund_scan.png
 [2]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/relatorio_sintetico_codesniffer.png
 [3]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/erros_codesniffer.png
