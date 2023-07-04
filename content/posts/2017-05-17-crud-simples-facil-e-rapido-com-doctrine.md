---
title: Aprenda a construir um CRUD simples, fácil e rápido com Doctrine
author: Diego Brocanelli
type: post
date: 2017-05-17T22:24:53+00:00
url: /php/crud-simples-facil-e-rapido-com-doctrine/
featured_image: /wp-content/uploads/2017/05/44_doctrine_crud.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1398;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - doctrine
  - php
tags:
  - crud
  - doctrine
  - php

---

Olá, tudo bem?!

No ecossistema PHP temos disponíveis diversos projetos super bacanas, e para trabalhar na camada de banco de dados temos a nossa disposição o [Doctrine](http://www.doctrine-project.org/), o mais popular projeto voltado para Database Storage e Object Mapping.

O que você pode estar pensando é &#8220;Meu Framework X já tem implementações para isso&#8221;, sim de fato todos os grandes frameworks de mercado tem disponível componentes para abstração de banco de dados, porem uma das grandes vantagens do Doctrine é justamente ele poder ser utilizado em praticamente qualquer framework ou estrutura de projeto.

A partir do momento que você estrutura sua aplicação para utilizar o Doctrine nada o impedirá que no futuro você migre toda a lógica para outro projeto, essa facilidade vai lhe poupar muitas dores de cabeça quando chegar o momento de refatorar sua aplicação.

Sem mais delongas, vamos analisar a estrutura que será utilizada neste post, abaixo segue estrutura de diretórios e arquivo.

* **exemplo-doctrine**
  * config
    * Será armazenado toda a lógica de configuração da aplicação.
  * db
    * Responsável por armazenar o banco de dados (SQLite) e o dump que será gerado.
  * src
    * Responsável por conter toda a lógica da nossa aplicação.
  * composer.json
    * Configurações do composer para o projeto.

Conforme apresentado acima, crie a estrutura de diretórios necessários para a execução deste post.

### Instalando as dependências necessárias

Abra o arquivo _composer.json_ e insira o seguinte código:

```json
{
  "require": {
    "doctrine/orm": "^2.5",
    "doctrine/dbal": "^2.5",
    "symfony/yaml": "^3.2"
  },
  "autoload":{
    "psr-4":{
      "DiegoBrocanelli\\":"src/"
    }
  }
}
```

Como podemos observar, estamos utilizando os componentes do Doctrine e uma dependência  do Symfony. Após a inserção das configurações, acesse a raiz do projeto e execute o seguinte comando pelo terminal:

```bash
composer install
```

Aguarde o processo de instalação que pode levar alguns minutos dependendo da sua conexão de internet.


### Configurando o projeto

Agora devemos criar nossas configurações necessárias para utilização do componente, acesse o diretório _&#8216;exemplo-doctrine/config&#8217;_ e crie o arquivo _&#8216;bootstrap.php&#8217;_ . Neste arquivo iremos centralizar as configurações necessárias para execução do Doctrine, segue código abaixo:

```php
<?php 

// Importação do autoload do composer
require_once __DIR__.'/../vendor/autoload.php';

// Importação dos pacotes necessários
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

// Criar uma configuração ORM do Doctrine simples "default" para utilizar Annotations
$isDevMode = true;
$configuration = Setup::createAnnotationMetadataConfiguration(
    [__DIR__.'/../src'], 
    $isDevMode
);

// Configurações do banco de dados
// Estamos utilizando o SQLite, para facilitar a reprodução do post
$connection = [
    'driver' => 'pdo_sqlite', // Vamos utilizar o drive pdo do sqlite
    'path'   => __DIR__.'/../db/db.sqlite' // caminho onde será armazenado o DB.
];

// Obtemos o Entity Manager
$entityManager = EntityManager::create($connection, $configuration);
```

> **Observação:** O Doctrine suporta configurações por _Annontation_, _XML_ ou _YAML_, porem na minha opinião as _annontations_ é a forma mais clara e fácil de definir sua entidade, gerando o menor número de arquivos possível.

Após a criação das configurações, devemos criar um arquivo que nos auxiliará nas execuções dos comandos pelo  terminal. Crie o arquivo _&#8216;cli-config.php_no diretório &#8216;exemplo-doctrine/config&#8217; , segue código abaixo:_

```php
<?php 
// Importação do autoloader do composer
require __DIR__.'/bootstrap.php';

// Retorna o componente que nos auxilia na utilização do Schema tool
// Necessário para gerar Tabelas para trabalhar com metadados
return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($entityManager);
```

### Criação da entidade Products

Com as devidas configurações realizadas, o próximo passo é criar a entidade que representara nossa tabela do banco de dados, para isso crie a classe _&#8216;Products.php&#8217;_ dentro do diretório _&#8216;exemplo-doctrine/src&#8217;_, segue código abaixo:

```php
<?php 

namespace DiegoBrocanelli;

/**
 * @Entity @Table(name="products")
 */
class Product 
{
    /**
     * @Id @Column(type="integer") @GeneratedValue
     */
    protected $id;

    /**
     * @Column(type="string")
     */
    protected $name;

    /**
     * @Column(type="datetime")
     */
    protected $created;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setCreated(\DateTime $created)
    {
        $this->created = $created;
    }

    public function getCreated()
    {
        return $this->created;
    }
}
```

Como podemos observar, o código acima é bem simples contendo apenas atributos e métodos _getters_ e _setters_, atentando ao fato de não termos criado _PHPDoc_, para que assim foquemos apenas nos conceitos das _annontations_ minimizando conflito de entendimento. É por meio dessas _annontations_ que iremos &#8216;informar&#8217; ao _doctrine_ nossa entidade e suas especificações, segue abaixo maiores detalhes sobre as _annontations_ utilizadas:

* **Class Products**
  * @Entity
    * Responsável por informar ao Doctrine que esta nossa classe é nossa entidade.
  * @Table(name=&#8221;products&#8221;)
    * Informamos que nossa entidade representa a tabela _&#8216;products&#8217;<_ contida no banco de dados.
* **Column id**
  * @Id
    * Informa que essa coluna é primary key.
  * @Column(type=&#8221;integer&#8221;)
    * efine o tipo &#8220;inteiro&#8221; para a coluna.
  * @GeneratedValue
    * Informa o desejo de _auto increment<_ para os valores dessa coluna.
* **Column name**
  * @Column(type=&#8221;string&#8221;)
    * Define o tipo &#8216;string&#8217; para a coluna.
* **Column created**
  * @Column(type=&#8221;datetime&#8221;)
    * Define o tipo _Datetime<_ para a coluna.
    * Observação: Assim que implementarmos a pesquisa ficará mais claro a estrutura do objeto gerado pelo _Doctrine_.

Após nossa entidade devidamente criada, podemos dar início a implementação dos nosso recursos.

### Criando nosso banco de dados

Após a criação da entidade devemos realizar a criação do banco de dados, acesse a raiz do projeto e execute o seguinte comando:

```bash 
vendor\bin\doctrine orm:schema-tool:create
```

* **vendor\bin\doctrine**
  * Esta parcela do comando referencia a utilização do _Doctrine_ que instalamos com o [Composer](/php/iniciando-com-composer/).
* **orm:schema-tool:creat**
  * Comando para criação do banco de dados, lembrando que o arquivo será armazenado em _&#8216;exemplo-doctrine/db/db.sqlite&#8217;<_.

Após execução do comando o retorno deve ser semelhante ao apresentado abaixo:

```bash
ATTENTION: This operation should not be executed in a production environment.

Creating database schema...
Database schema created successfully!
```

Como o próprio retorno nos informa, nunca devemos utilizar esta ação em produção, apenas em ambiente de desenvolvimento!

### Inserindo registros no banco de dados

Para a implementação do recurso de _insert_,  crie a classe _&#8216;CreateProduct.php&#8217; dentro do diretório _&#8216;exemplo-doctrine/src&#8217;, segue código abaixo:

```php
<?php 
// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';

// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($argv)) {
  // coletamos o nome passado pelo usuário no terminal
  $newProductName = $argv[1];

  // Instanciamos nossa entidade Products
  $product = new DiegoBrocanelli\Product();

  // Passamos o novo nome para a entidade
  $product->setName($newProductName);

  // Passamos a data de criação para a aentidade
  $product->setCreated(new \DateTime(date('Y-m-d H:i:s')));

  // Persistimos seus dados
  $entityManager->persist($product);

  // Descarregamos a ação
  $entityManager->flush();
  
  // Para melhor visualização do resultado, retornamos uma mensagem 
  // com o id do registro salvo no DB. 
  echo 'Created Product with ID '.$product->getId()."\n";
}
```

Para realizarmos a inserção de dados, execute o seguinte comando pelo terminal na raiz do projeto:

```bash
php src\CreateProduct.php produto_1
```

**Resultado:**

```bash
Created Product with ID 1
```

Como podemos observar, com poucas linhas de código criamos um recurso simples para inserção de registro no banco de dados. 🙂

### Pesquisando todos os registros cadastrados

Para a implementação do recurso de _select_,  crie a classe _&#8216;ListProduct.php&#8217; dentro do diretório _&#8216;exemplo-doctrine/src&#8217;, segue código abaixo:

```php
<?php 
// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';

// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($entityManager)) {
  //Importamos o repository que nos auxiliará com a pesquisa.
  $productRepository = $entityManager->getRepository('DiegoBrocanelli\Product');
  
  // Podemos acessar o método findAll() responsável por retornar todos os 
  // registros cadastrados em nossa tabela products
  $products = $productRepository->findAll();

  // Realizamos uma iteração de dados
  foreach ($products as $product) {
      // Exibimos o resultado de cada registro encontrado
      var_dump($product);
  }
}
```

Exemplo de retorno de pesquisa:

```php
class DiegoBrocanelli\Product#64 (3) {
  protected $id =>
  int(1)
  protected $name =>
  string(8) "'produto_1"
  protected $created =>
  class DateTime#61 (3) {
    public $date =>
    string(26) "2017-05-16 23:53:49.000000"
    public $timezone_type =>
    int(3)
    public $timezone =>
    string(17) "America/Sao_Paulo"
  }
}
```

Como podemos observar, com apenas a chamada do método _findAll()_ obtemos todos os registros inseridos em nossa tabela no banco de dados, o atributo _&#8216;created&#8217;_ é um objeto do tipo _DateTime_ conforme configurado na entidade.

### Pesquisando um produto em específico

Para a implementação do recurso que irá pesquisar um produto em especifico crie a classe _&#8216;ShowProduct.php&#8217; dentro do diretório_&#8216;exemplo-doctrine/src&#8217;, segue código abaixo:

```php
<?php 

// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';

// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($argv)) {
  // Recebemos o id informado
  $id = (int)$argv[1];
  
  // Nosso entity manager nos fornece acesso ao método find()
  // no qual nos permite informar nossa entidade e o id para pesquisa
  $product = $entityManager->find('DiegoBrocanelli\Product', $id);

  // Caso não seja encontrado nenhum produto com o id desejado
  // será retornado mensagem informando o usuário
  if($product === null){
    echo "No product found. \n";
    exit(1);
  }

  // Caso o produto seja encontrado exibimos seu nome e data de criação
  echo sprintf('-%s\n', $product->getName() . ' - ' . $product->getCreated());
}
```

Como podemos observar, com o método _find()_ podemos informar nossa entidade e o id do registro ao qual desejamos encontra na tabela.

### Atualizar produtos

Para a implementação do recurso de _update<_ crie a classe _&#8216;UpdateProduct.php&#8217; dentro do diretório <_&#8216;exemplo-doctrine/src&#8217;, segue código abaixo:

```php
<?php 

// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';

// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($argv)) {
  // Recebemos o id do registro a ser atualizado
  $id      = $argv[1];
  // Recebemos o novo nome do produto
  $newName = $argv[2];

  // Pesquisamos para valizar existência do produto no banco de dados
  $product = $entityManager->find('DiegoBrocanelli\Product', $id);

  // Caso produto não seja localizado, será retornado mensagem infromando o usuário
  if ($product === null) {
    echo "Product $id does not exist.\n";
    exit(1);
  }

  // Informamos o nome atual
  echo 'Old name: ' . $product->getName() ."\n";

  // Inserimos o novo nome desejado para o produto
  $product->setName($newName);

  // Executamos a ação de update
  $entityManager->flush();

  // Retornamos para o usuário o produto com seu novo nome
  echo 'New name: ' . $product->getName() ."\n";
}
```

Como podemos observar, o processo de update ocorre sem mistérios de forma clara e fácil apenas manipulando o objeto e passando para que o _Doctrine<_ faça todo o trabalho.

### Remover produtos

Para a implementação do recurso de _delete <_crie a classe _&#8216;DeleteProduct.php&#8217; dentro do diretório <_&#8216;exemplo-doctrine/src&#8217;, segue código abaixo:

```php
<?php 

// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';

// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($entityManager)) {
  // Recebemos o id do registro a ser atualizado
  $id = $argv[1];

  // Pesquisamos para valizar existência do produto no banco de dados
  $product = $entityManager->find('DiegoBrocanelli\Product', $id);

  // Caso produto não seja localizado, será retornado mensagem infromando o usuário
  if ($product === null) {
    echo "Product $id does not exist.\n";
    exit(1);
  }

  // Executamos a ação de remoção
  $entityManager->remove($product);

  // Efetiva a ação de remoção
  $entityManager->flush();

  // Retorna mensagem informativa de ação realizada com sucesso para o usuário
  echo 'Product remove successfully!';
}
```

Como podemos observar, o processo de remoção é similar a todos os demais processo, o Doctrine tem métodos descritivos que facilitam sua utilização 🙂

### Remover o banco de dados (Drop database)

No dia a dia temos a necessidade de apagar nosso banco de dados, para isso o _Doctrine<_ disponibiliza um recurso para nos auxiliar. Na raiz do nosso projeto execute o seguinte comando:

> **Execute este comando com parcimônia, após sua execução seu banco de dados será APAGADO!**

```bash
// Comando para APAGAR o banco de dados
vendor\bin\doctrine orm:schema:drop --force
```

Após execução do comando será exibido uma mensagem de retorno semelhante a descrita abaixo:

```bash
Dropping database schema...
Database schema dropped successfully!
```

### Gerar dump da nossa base de dados

Um dos inúmeros recursos bacanas que o D_octrine<_ dispõem é a criação de um arquivo _dump<_ da base de dados,  arquivo que conterá toda estrutura da tabela _products<_, para geramos nosso arquivo execute o seguinte comando na raiz do projeto:

```bash
// Comando para geração de arquivo de dump da base de dados
vendor\bin\doctrine orm:schema-tool:create --dump-sql > db/dump.sql
```

Após execução com sucesso do comando, será criado nosso arquivo no diretório _&#8216;exemplo-doctrine/db/dump.sql&#8217;<_, contendo a seguinte estrutura:

```sql
CREATE TABLE products (
  id INTEGER NOT NULL, 
  name VARCHAR(255) NOT NULL, 
  created DATETIME NOT NULL, PRIMARY KEY(id)
);
```

> **Observação:** O retorno se dá um uma única linha, porém para que fique melhor sua visualização no post foi quebrado em linhas.

No decorrer deste post podemos observar o quão fácil é a utilização do _Doctrine_, infelizmente apenas abordamos uma pequena fração de todo o potencial e recursos que ele nos fornece. Caso tenha interesse em seguir com seus estudos indico que adquira o livro escrito pelo [Elton Minneto](http://eltonminetto.net/) &#8220;[Doctrine na prática](https://leanpub.com/doctrine-na-pratica)&#8221; antes que alguém pense o contrário não estou ganhando nenhum centavo para indicar o livro, estou fazendo pois é o melhor livro de _Doctrine<_ em PT-BR escrito por um profissional que respeito e admiro.

Espero que tenham apreciado o post, ficou um pouco maior do que eu desejava, porem para abordar todo o ciclo de utilização tentei ser o mais descritivo possível para auxiliar a máximo a compreensão das etapas, como dito anteriormente este post é introdutório onde existem uma infinidade de recursos não explorados que valem muito a pena serem estudados.

Duvidas, sugestões, crítica ou elogios recomendo que deixe nos comentários para que assim possamos interagir e gerar mais conhecimento.

Até a próxima, abraços! 🙂
