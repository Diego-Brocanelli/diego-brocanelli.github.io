---
title: Testes de forma simples, fácil e robusto em sistemas PHP com PHPUnit!
author: Diego Brocanelli
type: post
date: 2016-12-06T02:09:40+00:00
url: /php/testes-de-forma-simples-facil-e-robusta-em-sistemas-php-com-phpunit/
featured_image: /wp-content/uploads/2016/12/24_testes_phpunit.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1378;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - phpUnit
tags:
  - php
  - PHPUnit
  - tdd
  - testes

---

Olá pessoal, tudo bem?!

Construir sistemas robustos, seguros e livres bugs (ou pelo menos o menor número possível 🙂 ) está presente em nosso dia a dia, e com isso temos diversas metodologias, ferramentas e recursos para que nossos códigos tenham qualidade e garantia de sua eficácia.

Para o ecossistema PHP não é diferente, temos disponível uma ferramenta fantástica para executarmos testes unitários, e hoje vamos aprender um pouco sobre ela, seu nome é [PHPUnit](https://phpunit.de/).

Esse framework fantástico foi desenvolvido por [Sebastian Bergmann](https://sebastian-bergmann.de), e vamos seguir os princípios de construirmos nosso sistema iniciando pelos testes.

Nosso projeto terá a seguinte estrutura:

* phpunit_tutorial
  * src
    * Filters
      * Strings.php
  * tests
    * FilterStringsTests.php
  * vendor
  * composer.json
  * phpunit.phar


Vamos detalhar um pouco nosso projeto:

Iremos criar uma estrutura básica para tratamento de strings, e será armazenado dento dos diretórios &#8220;_src/Filters/Strings.php&#8221;._

Para nossa camada de testes iremos utilizar a estrutura &#8220;tests/FilterStringsTests.php&#8221;.

O arquivo composer.json será utilizado para gerarmos o autoload da nossa aplicação.

Por último, porem não menos importante, teremos o &#8220;phpunit.phar&#8221;, responsável pela execução dos nossos testes.

Como nós separamos nossa regra de negócio dos testes, nada impede que nossa aplicação continue crescendo e com isso os testes também, e isso é muito importante, pois não queremos dores de cabeça para cada nova feature a ser implementada em nosso sistema 😉

Definições de projeto detalhadas, agora podemos partir para a diversão, SHOW ME THE CODE!

Após a criação do diretório base do nosso projeto, devemos criar nosso arquivo composer.json com a seguinte estrutura.

```json
{
  "autoload": {
    "psr-4":{
      "DiegoBrocanelli\\":"src\\"
    }
  }
}
```

Devemos agora adquirir o phpuni.phar, para isso vamos executar os seguintes comandos no terminal, no diretório raiz do nosso projeto pelo terminal.

```bash
wget https://phar.phpunit.de/phpunit.phar

php phpunit.phar --version
```

Basta aguardar o download, e o arquivo estará disponível na estrutura do projeto.

Com isso temos a base do nosso sistema, e agora daremos início a sua construção, porem iremos iniciar pelos TESTES! Sim, iremos implementar nossos testes e o que julgamos essencial para garantir o funcionamento do nosso filtro para string.


Dentro do diretório tests, vamos criar nossa classe de teste &#8220;FilterStringsTests.php&#8221;.

Agora devemos implementar a estrutura básica, ficando como no exemplo abaixo.


```php
<?php

require_once __DIR__.'/../vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use DiegoBrocanelli\Filters\Strings;

class FilterStringTests extends TestCase
{
}
```

Logo no início da nossa classe, importamos nosso arquivo de autoload gerado pelo composer.

Em seguida, importamos nosso componente do PHPUnit para gerarmos nossos testes.

E por fim,  importamos nosso filtro, lembrando que ele ainda não foi criado.

Quando temos que implementar qualquer recurso em nossos sistemas, e temos o hábito de utilizar como base testes unitários, esse ciclo de pensamento nos força a arquitetar de forma clara e concisa nossos códigos, para que assim sejam testáveis e que gerem os resultados esperados.

Claro, que ao iniciarmos nossos estudos e uso desta pratica, surgirão diversas dúvidas isso é perfeitamente natural, porem com o tempo, estudo e prática, esta pratica se tornará parte do seu ciclo de desenvolvimento e trará uma gama de vantagens fenomenais.

Vamos implementar nosso primeiro método, chamado setUp.

```php
class FilterStringTests extends TestCase
{
    const STRING = ' <title>Post PHPUnit</title> ';

    public $filterString;

    public function setUp()
    {
        $this->filterString = new Strings(self::STRING);
    }
// demais código da classe
```

Foi definido uma contante, para que assim possamos reutilizar nossa string base para os testes, criamos um atributo publico para armazenar nosso filtro e assim também reutilizar a mesma instancia nos testes que iremos implementar a seguir.

E por último vemos o método setUP. ele é um método do PHPUnit e nos possibilita executar processos no início dos teste, bem a grosso modo podemos fazer a analogia ao método __construct.

A classe deverá ficar semelhando ao exemplo abaixo.

```php
<?php

require_once __DIR__.'/../vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use DiegoBrocanelli\Filters\Strings;

class FilterStringTests extends TestCase
{
  const STRING = ' <title>Post PHPUnit</title> ';

  public $filterString;

  public function setUp()
  {
    $this->filterString = new Strings(self::STRING);
  }
}
```

Devemos implementar nossos testes, porem o que vamos testar?

Vamos definir o que nosso filtro de strings irá executar, e com seu escopo definido vamos implementar seus respectivos testes. Após pensarmos nas funcionalidades, chegamos a conclusão que o escopo do nosso filtro será:

* Contar o número de caracteres;
* Remover tags HTML;
* Remover espaços em branco no início e final da string;
* Fazer com que todos os caracteres da string fiquem minusculas;
* Fazer com que todos os caracteres da string fiquem maiúsculas.

Sendo assim temos 5 funcionalidades, e agora podemos implementar nossos testes.

Para a primeira funcionalidade, podemos planejar que iremos implementar um método que retorne sempre uma número inteiro, correspondente a quantidade de caracteres da string.

Por definição todos os métodos da classe de teste deve ter o prefixo &#8220;test&#8221; e a descrição do teste em questão, seguindo o padrão de nomenclatura de método do PHP, vamos analisar o exemplo abaixo.

```php
public function testStringLength()
{
  $this->assertEquals(29, $this->filterString->stringLength());
}
```

Como podemos observar, nosso método se chama &#8220;testStringLength&#8221;, um nome simples porem que defini claramente o objetivo do teste.

E fazemos uso do método &#8220;assertEquals&#8221; do PHPUnit, em resumo este método analisa o resultado esperado (primeiro parâmetro) com o valor a ser analisado (segundo parâmetro) onde em nosso caso, se refere ao método stringLength() do filtro de strings, sendo que ambos devem corresponder para que o teste tenha acerto, caso contrário apresentará erro.

Veremos os resultados após implementar todos os demais testes.

O próximo teste será correspondente ao recurso para remover tags HTML. Veja o código abaixo.

```php
public function testStripTags()
{
  $this->assertEquals(' Post PHPUnit ', $this->filterString->stripTags());
}
```

Novamente fazemos uso do método &#8220;assertEquals&#8221; e configuramos nossos valores para serem testados.

Vamos continuar e implementar os demais métodos, veja o resultado do código abaixo.

```php
public function testStringTrim()
{
  $this->assertEquals('<title>Post PHPUnit</title>', $this->filterString->stringTrim());
}

public function testStringToLower()
{
  $stringBase = strtolower(self::STRING);
  $filter = $this->filterString->stringToLower();

  $this->assertEquals(true, ( $stringBase === $filter) );
}

public function testStringToUpper()
{
  $stringBase = strtoupper(self::STRING);
  $filter = $this->filterString->stringToUpper();

  $this->assertEquals(true, ( $stringBase === $filter) );
}
```

Nossos testes &#8220;testStringTrim&#8221; correspondente ao recurso de remoção de espaços em branco no inicio e final da string, segue a estrutura dos métodos já apresentado.

Nos métodos &#8220;testStringToLower&#8221; e &#8220;testStringToUpper&#8221; correspondente respectivamente por filtrar a string para todas as suas letras minusculas ou maiúsculas, tem um escopo de implementação um pouco mais elaborada, porem continuando simples sua leitura e compreensão.

Após finalizarmos a implementação dos testes, vamos executa-los para analisarmos os resultados. Devemos executar o seguinte comando pelo terminal na raiz do nosso projeto.

```bash
php phpunit.phar tests/FilterStringTests.php
```

E como resultado temos a imagem abaixo.

![Resultado da execução dos testes de unidade](/wp-content/uploads/2016/12/primeiro_teste_phpunit.png)

E volá, temos 5 testes executados e 5 erros obtidos! Sim, cada &#8220;E&#8221; no início corresponde a um teste executado e suas respectivas falhas logo abaixo, isso não é fantástico! Parece loucura iniciarmos pelos testes, porem com essa abordagem, nós planejamos cada recurso que iremos implementar, facilitando sua implementação, pois temos uma visão clara e objetiva de cada recurso a ser implementado.

Agora vamos implementar nossa classe de filtro &#8220;src/Filters/Strings.php&#8221;. Como nosso intuito não é focar nos filtros e sim nos testes e todo o raciocínio que empregamos para criá-los e executá-los, basta seguir o modelo abaixo de código para implementar nossa classe de filtros para string.

```php
<?php

namespace DiegoBrocanelli\Filters;

class Strings
{
    private $string;

    public function __construct($string)
    {
        $this->string = $string;
    }
    public function stringLength()
    {
        return strlen($this->string);
    }

    public function stripTags()
    {
        return strip_tags($this->string);
    }

    public function stringTrim()
    {
        return trim($this->string);
    }

    public function stringToLower()
    {
        return strtolower($this->string);
    }

    public function stringToUpper()
    {
        return strtoupper($this->string);
    }
}
```

Por mais simples que seja nossas implementação acima, ela corresponde ao nosso planejamento, como nossa namespace &#8220;DiegoBrocanelli\Filters&#8221; local onde configuramos nosso testes. E cada método está retornando o formato desejado como por exemplo o método &#8220;stringLength&#8221;, que irá sempre retornar um número inteiro.

Após implementarmos nossa classe de filtros, vamos executar novamente nossos teste e assim avaliarmos os resultados.

![Resultado da segunda execução dos testes de unidade](/wp-content/uploads/2016/12/segundo_teste_acertivo_phpunit.png)

Como podemos notar, após a execução dos teste temos os seguintes dados:

* Foram executados 5 testes e obtivemos 5 sucessos, 100% de sucesso;
* O tempo de execução foi de 57ms!;
* Foi consumido 8.00MB de memória do nosso computador.

Claro que neste post, foi apresentado uma problemática simplista com uma implementação ainda mais simples e direta, para que possa ficar claro os passos executados e os conceitos apresentados, em nenhum momento devemos utilizar nosso filtro em produção, pois demanda mais testes e validações. Porem executamos o ciclo completo desde o estudo do problema, sua tradução em testes, execução e falhas do teste, a implementação dos recursos (filtros), execução de novos tetes e o sucesso de todos eles!

Podemos tirar de aprendizagem:

* Os testes nos darão maior garantia dos recursos que iremos implementar;
* Nosso código terá de forma indireta uma melhora, pois iremos pensar e arquitetar com mais cautela e qualidade nossas features, para que os testes sejam implementados e executados;
* Futuras implementações serão feitas com menos &#8220;dores&#8221; de cabeça, pois os testes devem ser executados sempre para avaliaram o fluxo de desenvolvimento.

Como observação, tanto quanto o código quanto os testes devem ser revalidados de tempos em tempos, e se necessário realizar os devidos refactorings,  para manter o ecossistema saudável.

Infelizmente em apenas um post é impossível demonstrar todo o poder do PHPUnit, pois é um framework fantástico e incrivelmente robusto, recomento fortemente que leiam sua documentação.

Todos os códigos produzidos neste post, tem o foco de um primeiro contato com testes.

Deixo como dica alguns materiais que acredito serem bons para continuar os estudos.

* [Test-Driven Development Teste e Design no Mundo Real com PHP](https://www.casadocodigo.com.br/products/livro-tdd-ph) Livro muito bom e focado em PHP;
* [TDD Desenvolvimento Guiado por Testes](https://www.amazon.com.br/TDD-Desenvolvimento-Guiado-por-Testes-ebook/dp/B016V88JFW/ref=sr_1_1?ie=UTF8&qid=1480988253&sr=8-1&keywords=td);
* [TDD na prática](https://www.amazon.com.br/TDD-na-Pr%C3%A1tica-Camilo-Lopes/dp/853990327X/ref=sr_1_2?ie=UTF8&qid=1480988253&sr=8-2&keywords=tdd).

Espero que tenham apreciado este post, qualquer duvida deixem nos comentários.

Até a próxima, forte abraço 🙂


&nbsp;