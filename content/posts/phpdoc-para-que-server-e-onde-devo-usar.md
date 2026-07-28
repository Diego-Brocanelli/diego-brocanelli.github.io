---
title: PHPDoc, para que server e onde devo usar?
author: Diego Brocanelli
type: post
date: 2017-05-02T18:15:43+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - documentacao
  - php
tags:
  - code
  - código
  - documentação
  - php
  - phpdoc

---

Olá pessoal, tudo bem?!

Com certa frequência menosprezamos o valor do PHPDoc, porém o que é isso?

&#8216;&#8221;PHPDoc&#8221; is a section of documentation which provides information on aspects of a &#8220;Structural Element&#8221;.&#8217;

[PHP Fig &#8211; PSr&#8217;5 &#8211; Definitions](https://github.com/phpDocumentor/fig-standards/blob/master/proposed/phpdoc.md#3-definitions)

&#8220;PHPDoc&#8221; é uma seção de documentação que fornece informações sobre aspectos de um &#8220;Elemento Estrutural&#8221;.

Sua falta se dá no pior momento, onde necessitamos consultar um recurso e não encontramos nada sobre o mesmo, apenas as várias linhas de sua implementação. Abaixo  pode-se observar um trecho de código sem o uso do PHPDoc.

```php
<?php 

namespace Package\Subpackage;

class Zip
{
  private fileName;

  public function compress(SplFileInfo $file)
  {
    // Implementação do método para compressão...
  }
}
```

Sem a inclusão dos PHPDocs não será possível usufruir do recurso de autocomplete das IDE&#8217;s e quando o desenvolvedor acessar diretamente o código não encontrará a documentação necessária para consumir os recursos desejados, aumentando a complexidade de uso do mesmo.

O PHP Fig (recomendação de leitura: &#8220;[PHP segue padrões SIM!!!](/php/php-segue-padroes-sim/)&#8220;) tem em andamento o desenvolvimento da [PSR-5](https://github.com/phpDocumentor/fig-standards/blob/master/proposed/phpdoc.md#psr-5-phpdoc), onde trazem as recomendações necessárias para implementar o PHPDoc,  vale salientar que o mesmo encontra-se em _DRAFT_ podendo sofrer alterações.

Vamos implementar o PHPDoc no exemplo demonstrado acima, para classes, métodos e atributos dispomos como padrão três tags que, podem ser herdadas de subclasses, métodos ou atributos com mesmo nome, sendo elas:

* **@version**
  * Utilizada para denotar alguma descrição de &#8220;versioning&#8221; para um elemento.
* **@author**
  * Utilizada para documentar o autor de qualquer &#8220;Elemento Estrutural&#8221;.
* **@copyright**
  * Utilizada para documentar as informações de copyright de qualquer &#8220;elemento estrutural&#8221;.

## Para classes dispomos:

* **@package**
  * Categoriza o elemento associado em um agrupamento ou subdivisão lógica.
* **@subpackage**
  * Categoriza o elemento associado em um agrupamento ou subdivisão lógica.

## Para atributos/constantes dispomos:

* **@var**
  * Define que tipo de dados é representado por um valor de uma constante, propriedade ou variável.

## Para métodos dispomos:

* **@param**
  * Documenta um único argumento de uma função ou método.
* **@return**
  * Documenta o valor de retorno de funções ou métodos.
* **@throws**
  * Indica se o elemento associado pode lançar um tipo específico de exceção.

Abaixo podemos observar nosso exemplo de código com o PHPDoc implementado.

```php
<?php 

namespace Package\Subpackage;

/**
 * Class Zip
 *
 * Responsável por realizar a criação de um arquivo .zip conforme arquivo ou diretório informado.
 * 
 * @package    Package
 * @subpackage Subpackage
 * @author     Diego Brocanelli <diegod2@msn.com>
 * @version    1.0
 * @copyright  GLP-3
 */
class Zip
{
  /**
   * Responsável por identificar o arquivo ou diretório desejado ao qual será utilizado como base para a
   * criação do arquivo .zip
   * 
   * @var \SplFileInfo
   */
  private fileName;

  /**
   * Responsável por realizar a compressão do arquivo ou diretório desejado.
   * 
   * @param  \SplFileInfo $file Arquivo ou diretório ao qual se deseja comprimir.
   * @throws \Exception         Caso o diretório ou arquivo não exista.
   * @return String             Retornar o nome do arquivo .zip criado
   */
  public function compress(SplFileInfo $file)
  {
    // Implementação do método para compressão...
  }
}
```

Foram utilizadas as tags recomendadas pela PSR e uma organização deixando cada bloco de informação legível e limpo para consulta. Essa abordagem é extremamente importante pois, imagine em projetos de grande porte como por exemplo o Zend Framework ou Symfony,  caso um do frameworks mencionados não dispor de um bom PHPDoc, isso implicará em uma maior dificuldade de compreensão dos seus recursos.

As três tags descritas como recomendadas foram inclusas na classe e são &#8216;herdadas&#8221; pelos métodos e atributos, porém a PSR deixa aberto para que possa ser inserido de forma individual, particularmente não aprecio, pois aumenta  a carda de informações duplicadas.

## Quais os benefícios de incluir um bom PHPDoc?

Podemos utilizar o recurso de autocomplete das IDE&#8217;s.

Deixar mais claro a que se propõe o recurso em questão.

Podemos utilizar ferramentas como Sami (Gerando documentação do seu sistema utilizando a API SAMI), para gerar uma documentação do sistema de forma automática, simples e eficaz.

## Quais tags dispõem a PSR-5?

Abaixo segue lista contendo todas as tags disponíveis seguido do seu nome, elemento e descrição.

| Tag | Elemento |  Descrição |
| -- | -- | -- |
| @api |    Methods | Declara que os elementos são adequados para o consumo por terceiros. |
| @author | Any | Documenta o autor do elemento associado. |
| @category |   File, Class | Uma série de pacotes juntos. |
| @copyright |  Any | Documenta as informações de direitos autorais do elemento associado. |
| @deprecated | Any | Indica que o elemento associado é obsoleto e pode ser removido em uma versão futura. |
| @example |    Any | Mostra o código de um arquivo de exemplo especificado ou, opcionalmente, apenas uma parte dele. |
| @filesource | File | Inclui a origem do arquivo atual para uso na saída. |
| @global | Variable | Informa phpDocumentor de uma variável global ou seu uso. |
| @ignore | Any | Diz ao phpDocumentor que o elemento associado não deve ser incluído na documentação. |
| @internal | Any | Indica que os elementos associados são internos a essa aplicação ou biblioteca e oculta por padrão. |
| @license | File, Class | Indica qual licença é aplicável para o elemento associado. |
| @link |   Any | Indica uma relação entre o elemento associado e uma página de um site. |
| @method | Class | Permite que uma classe saiba quais métodos “mágicos” podem ser chamados. |
| @package | File, Class | Categoriza o elemento associado em um agrupamento ou subdivisão lógica. |
| @param |  Method, Function | Documenta um único argumento de uma função ou método. |
| @property |   Class   | Permite que uma classe saiba quais propriedades “mágicas” estão presentes. |
| @property |-read  Class  |  Permite que uma classe saiba quais propriedades “mágicas” estão presentes que são somente leitura. |
| @property |-write Class |   Permite que uma classe saiba quais propriedades “mágicas” estão presentes que são somente de gravação. |
| @return | Method, Function  |   Documenta o valor de retorno de funções ou métodos. |
| @see |    Any | Indica uma referência do elemento associado a um site ou outros elementos. |
| @since |  Any | Indica em qual versão o elemento associado ficou disponível. |
| @source | Any, except File  |   Mostra o código-fonte do elemento associado. |
| @subpackage | File, Class | Categoriza o elemento associado em um agrupamento ou subdivisão lógica. |
| @throws | Method, Function  |   Indica se o elemento associado pode lançar um tipo específico de exceção. |
| @todo |   Any | Indica se alguma atividade de desenvolvimento ainda deve ser executada no elemento associado. |
| @uses |   Any | Indica uma referência para (e de) um único elemento associado. |
| @var |    Properties  |  Define que tipo de dados é representado por um valor de uma constante, propriedade ou variável. |
| @version |    Any | Indica a versão atual dos Elementos Estruturais. |

Espero ter conseguido demonstrar a importância do uso do PHPDoc, como tudo na vida devemos ter parcimônia, ou seja, devemos utilizar conforme necessário para enriquecer nosso código. Não tenha vergonha em consultar a documentação para ver qual tag melhor se enquadra para a situação em questão.

Caso tenham alguma dúvida, sugestão ou crítica convido a deixarem nos comentários, para que assim possamos aprender cada vez mais.

Até a próxima pessoal! 🙂
