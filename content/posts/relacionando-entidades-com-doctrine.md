---
title: Relacionando entidades com Doctrine
author: Diego Brocanelli
type: post
date: 2017-06-08T23:05:35+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - doctrine
  - php
tags:
  - dbal
  - doctrine
  - orm
  - php

---

Relacionamento de entidade com _Doctrine_ é um recurso poderoso e que facilita e muito nosso trabalho com a manipulação de entidades.

Este post é uma continuação do [Aprenda a construir um CRUD simples, fácil e rápido com Doctrine](/doctrine/crud-simples-facil-e-rapido-com-doctrine/) onde sua leitura é fundamental, pois é a base para este post.

Em nosso projeto temos todo o _CRUD_ de produtos implementado, porem é natural que um produto seje ligado a  uma categoria.

Para que possamos construir esse vinculo &#8220;relacionamento&#8221; devemos criar a entidade _Category_ em &#8220;_src\Category.php_&#8220;.

```php
<?php 

namespace DiegoBrocanelli;

/**
 * @Entity @Table(name="categorys")
 */
class Category
{
    /**
     * @Id @Column(type="integer") @GeneratedValue
     */
    protected $id;
 
    /**
     * @Column(type="string")
     */
    protected $name;

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
}
```

Vamos descrever em detalhes a implementação utilizada na entidade.

* **class Category** 
  * @Entity 
    * Responsável por informar ao doctrine que a classe é uma entidade.
  *  @Table(name=&#8221;categorys&#8221;) 
    * Informamos que a entidade representa a tabela &#8216;_categorys&#8217;_ no banco de dados.

## Gerando o banco de dados

Após a criação da entidade, devemos executar o seguinte comando no terminal para a criação do banco de dados:

```bash
vendor\bin\doctrine orm:schema-tool:create
```

Como retorno, será exibido uma mensagem similar ao demonstrado abaixo:

```bash
ATTENTION: This operation should not be executed in a production environment.

Creating database schema...
Database schema created successfully!
```

## Cadastrando categorias

Para que seja possível vincular um produto a uma categoria, antes devemos cadastrar no banco de dados as categorias que desejamos.

Segue abaixo a estrutura que será utilizada para persistir as informações no banco de dados.

```php
<?php

// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';
 
// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($argv)) {
    // coletamos o nome passado pelo usuário no terminal
    $newCategoryName = $argv[1];
 
    // Instanciamos nossa entidade categorys
    $category = new DiegoBrocanelli\Category();
 
    // Passamos o novo nome para a entidade
    $category->setName($newCategoryName);
 
    // Persistimos seus dados
    $entityManager->persist($category);
 
    // Descarregamos a ação
    $entityManager->flush();
    
    // Para melhor visualização do resultado, retornamos uma mensagem 
    // com o id do registro salvo no DB. 
    echo 'Created category with ID '.$category->getId()."\n";
}
```

Como podemos observar, a forma como foi construído o processo é simples e bem descritiva.

Primeiro recebemos o nome desejado, para que em seguida seja instanciado nossa Entidade _Category_, informamos os dados e inserimos no banco de dados.

Para podemos validar o código, vamos cadastrar nossa primeira categoria. Para tal ação basta inserir o seguinte comando no terminal:

```bash
php src\CreateCategory.php livros
```

Como resultado teremos nossa primeira categoria cadastrada!

```bash
Created category with ID 1
```

## Alterando a entidade produtos para receber uma categoria

Criamos a entidade _Category_, cadastramos nossa primeira categoria, porem agora devemos criar o vinculo ao qual desejamos entre Produto e Categoria.

Abra a entidade _Products_ em &#8220;_src\Products.php_&#8221; e vamos implementar nossas alterações desejadas.

```php
<?php 
 
namespace DiegoBrocanelli;
 
/**
 * @Entity @Table(name="products")
 */
class Products
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
     * @ManyToOne(targetEntity="Category")
     */
    protected $category;
 
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

    public function setCategory($category)
    {
        $this->category = $category;
    }

    public function getCategory()
    {
        return $this->category;
    }
}
```

As novidades que encontramos em nossa entidade é o atributo _category_ e os métodos _setCategory()_ e _getCategory()_, vamos analisar suas implementações:

* **private $category;** 
  * @ManyToOne(targetEntity=&#8221;Category&#8221;) 
    * Com essa _annontation_, informamos ao _Doctrine_ que desejamos criar um relacionamento muitos para um, vinculando a entidade _Category_.
* **public function setCategory($category)** 
  * Método responsável por inserir a categoria na entidade _Products_.
* **public function getCategory()** 
  * Método responsável por retornar a categoria do produto.

Após as devidas implementações finalizadas, devemos implementar as novas estruturas no processo de cadastro de produto &#8220;_Insert_&#8220;, para isso abra o arquivo _CreateProduct.php_ em &#8220;_scr/CreateProduct.php_&#8221; e implemente as seguintes modificações.

```php
<?php
// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';
 
// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if(isset($argv)){
    // Coletamos o nome do produto
    $newProductName = $argv[1];
    // Coletamos o id da categoria
    $categoryId     = $argv[2];

    // Instanciamos nossa entidade Products
    $product = new DiegoBrocanelli\Products();
 
    // Passamos o novo nome para a entidade
    $product->setName($newProductName);
 
    // Passamos a data de criação para a aentidade
    $product->setCreated(new \DateTime(date('Y-m-d H:i:s')));

    // Realizamos a pesquisa da categoria desejada.
    $category = $entityManager->find('DiegoBrocanelli\Category', $categoryId);

    // Verificamos se a categoria desejada existe no banco de dados
    if(is_null($category)){
        echo 'Categoria desejada não encontrada!';
        die;
    }

    // Passamos o objeto Category para nosso produto.
    $product->setCategory($category);
 
    // Persistimos seus dados
    $entityManager->persist($product);
 
    // Descarregamos a ação
    $entityManager->flush();
    
    // Para melhor visualização do resultado, retornamos uma mensagem 
    // com o id do registro salvo no DB. 
    echo 'Created Product with ID '.$product->getId()."\n";
}
```

A base da estrutura de _insert_ de produtos continua a mesma, o diferencial encontra-se em receber o id da categoria desejada, pesquisar seus dados no banco de dados e caso seja encontrado inserimos no objeto _Products_ para seu devido cadastro no banco.

Vamos cadastrar nosso primeiro produto, para isso insira o seguinte comando no terminal:

```bash
 php src\CreateProduct.php PHP_OO 1
```

Como retorno teremos nosso primeiro produto cadastrado e vinculado a uma categoria 🙂

```bash
Created Product with ID 1
```

Caso seja realizado a tentativa de cadastro com um categoria inexistente, será retornado a mensagem:

```bash
Categoria desejada não encontrada!
```

Viram como foi simples as implementações para criarmos uma estrutura de entidades interligadas e realizar os cadastro de ambos 🙂

## Pesquisando produtos

Podemos realizar a pesquisa de produtos cadastrados, e para nossa felicidade não temos que mudar em nada a estrutura contida no arquivo _ListProduct.php_ encontrado em &#8220;_src/ListProduct.php_&#8221; pois a estrutura de pesquisa permanece a mesma, porem vamos apenas alterar a forma de exibição dos dados no terminal, para melhor exibição dos dados.

```php
<?php 
// Importamos o autoload do composer
require_once __DIR__.'/../config/bootstrap.php';
 
// Como vamos trabalhar com envio de dados passados pelo terminal
// apenas garanto que haja valor para que seja processado a ação.
if (isset($entityManager)) {
  //Importamos o repository que nos auxiliará com a pesquisa.
  $productRepository = $entityManager->getRepository('DiegoBrocanelli\Products');
  
  // Podemos acessar o método findAll() responsável por retornar todos os 
  // registros cadastrados em nossa tabela products
  $products = $productRepository->findAll();

  // Realizamos uma iteração de dados
  foreach ($products as $product) {
      var_dump(get_class($product->getCategory()));die;
      // Exibimos o resultado de cada registro encontrado
      echo 'Nome do Produto: ' . $product->getName()                . "\n";
      echo 'Categoria: '       . $product->getCategory()->getName() . "\n";
      echo "+-------------------------------------------------------------+ \n";
  }
}
```

Como podemos observar, o objeto _product_ acessa seu método _getCategory()_ que por sua vez tem acesso ao objeto que fornece acesso ao método _getName()_ implementado na classe Category.

O Doctrine retorna uma classe _Proxy_ que nos fornece acesso a classe _Category,  a partir disso o atributo fornece acesso a qualquer método implementado em category_, respeitando_ assim a estrutura OO de nossas classes._

O exemplo descrito no post é simples, pois tem o intuito de ser direto e produtivo, o _Dotrine_ tem um leque de opções para trabalhar com os diversos tipos de relacionamentos de entidade.

Espero que tenha apreciado o conteúdo e que também agregue valor aos seus projetos, lembrando que uma boa arquitetura da camada de modelo construída com _Doctrine_ tonar mais simples sua manutenção, e caso encontre necessário o porte para outros _frameworks_ ou estruturas, tudo será mais simples e com menos dores de cabeça e acredite quando eu lhe digo que você apreciará de ter esse fardo tirado da suas costas.

Dicas, sugestões, criticas ou elogios recomento que deixem nos comentários, para que assim possamos compartilhar ainda mais conhecimento.

Grande abraço e até a próxima! 🙂
