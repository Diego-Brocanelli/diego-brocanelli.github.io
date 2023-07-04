---
title: Modularizando Sua Aplicação Laravel
author: Diego Brocanelli
type: post
date: 2018-09-05T13:34:32+00:00
url: /php/laravel-module/
featured_image: /wp-content/uploads/2018/09/laravel_modules.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1971;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - laravel
  - php
tags:
  - back end
  - laravel
  - modules
  - módulo

---
  Olá, tudo bem?!


Criar aplicações reutilizáveis, manuteníveis, de fácil compreensão pelos membros do time é o desafio do dia a dia.

Sem sombra de dúvidas é o correto e devemos seguir esta linha de pensamento, pois assim temos uma aplicação saudável, facilitando novas implementações.

O Laravel é um grande framework, onde vem crescendo cada vez mais ao longo dos anos, em minhas pesquisas e estudos encontrei uma maneira de construir aplicações de forma modular no framework, e irei compartilhar com vocês os resultados dos estudos.

Para melhor aproveitamento do material a seguir recomenda-se o conhecimento básico sobre Laravel e composer.

### Dependências

Para construirmos nosso exemplo são necessários:

* [Laravel 5.6](https://laravel.com/docs/5.6#installation)
* [Laravel-Modules 3](https://nwidart.com/laravel-modules/v3/introduction)
* [Composer](https://getcomposer.org/)

### Instalação

Devemos iniciar instalando o Laravel, execute o seguinte comando pelo terminal:

```bash
composer create-project --prefer-dist laravel/laravel modulos-com-laravel
```

Devemos aguardar até que todo o processo seja finalizado, em seguida devemos acessar o projeto criado, execute o seguinte comando:

```bash
cd modulos-com-laravel
```

Após acessar o projeto devemos instalar o componente `laravel-modules`, para isso execute o seguinte comando:

```bash
composer require nwidart/laravel-modules
```


Aguarde o processo de instalação do pacote finalizar.

### Configurações

É necessário configurar o provider e alias  (apenas para versões inferiores ao Laravel 5.5) do pacote que instalamos para isso acesse o arquivo `config/app.php`.

Localize o array de configurações dos providers e inclua a seguinte informação no final do array:

```php
Nwidart\Modules\LaravelModulesServiceProvider::class,
```

Em seguida configure o alias, esse array é declarado logo após o provider, inclua a seguinte instrução.

```php
'Module' => Nwidart\Modules\Facades\Modules::class,
```

Com as devidas configurações realizadas, devemos publicar o provider do componente, para isso execute o seguinte comando na raiz do projeto por meio do terminal, sendo:

```bash
php artisan vendor:publish --provider="Nwidart\Modules\LaravelModulesServiceProvider"
```

Devemos agora registrar a namespace de origem ao nosso diretório modules que será criado, para isso acesse o arquivo `composer.json` na raiz do projeto e inclua o seguinte trecho no autoload:

```php
"autoload": {
    "classmap": [
        "database/seeds",
        "database/factories"
    ],
    "psr-4": {
        "App\\": "app/",
        "Modules\\": "Modules/" // Inclua está linha no arquivo, lembre-se da virgula na linha acima.
    }
},
```

Para finalizar devemos executar o dump do autoload do composer, para que o mesmo registre os módulos, para  isso execute o seguinte comando:

```bash
composer dumpautoload
```

Devemos configura o acesso ao banco de dados, para isso crie um banco de dados com o nome `laravel_modules`, em seguida acesse o arquivo `.env` localizado na raiz do nosso projeto e configure a seção para acesso ao MySQL, abaixo podemos ver um exemplo.

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_modules
DB_USERNAME=root
DB_PASSWORD=root
```

### Criando o modulo Products

Para criar o módulo, devemos executar o seguinte comando no terminal:

```bash
php artisan module:make Products
```

Após finalizar o processo, será criado o diretório `Modules` na raiz do nosso projeto, diretório ao qual é responsável por armazenar todos os módulos que forem criados na aplicação. Dentro dele encontraremos o diretório `Products` com a seguinte estrutura:

![Resultado da arvore de diretórios](/wp-content/uploads/2018/07/estrutura_modules_produts-102x300.png)

A estrutura não por acaso é similar a atual estrutura do Laravel, feito para melhor compreensão e correlação dos diretórios e suas funções.

### Criando Model

Devemos criar nossa model que irá representar a tabela products, execute o seguinte comando:

```bash
php artisan module:make-model Products Products
```

Após finalização, o arquivo encontra-se em `Modules\Products\Entities`.

No atributo fillable devemos inserir dois parâmetros, `title` e `description`.

```php
protected $fillable = ['title', 'description'];
```

Vamos inserir também  o atributo `table`.

```php
protected $table = 'products';
```

### Criando Migrations

Para criar a migration, referente a tabela products devemos executar o seguinte comando:

```bash
php artisan module:make-migration products Products
```

O comando acima se assemelha ao nativo do Laravel, porém é necessário informar o nome do módulo no final determinando o local de criação da migration.

Após execução podemos acessar o diretório `modules\Products\Database\Migrations` para visualizar o arquivo.

Demos agora criar a estrutura da tabela no método `up`, sendo:

```php
/**
* Run the migrations.
*
* @return void
*/
public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->;increments('id');
        $table->;string('title');
        $table->;string('description');
        $table->;timestamps();
    });
}
```

Com isso criamos uma estrutura simples para a tabela products, porém suficiente para nosso exemplo.

Para executar nossa migration, execute o seguinte comando:

```bash
php artisan module:migrate
```

  Após finalização nossa tabela products será criada.

### Criando Seed

Podemos também popular previamente nossa tabela de produtos, pois quando um novo integrante do projeto for configurar o projeto ele já terá tudo funcionando, sem ter que ficar criando registros para usar o sistema, para criar o seeder devemos executar o seguinte comando:

```bash
php artisan module:make-seed products Products
```

Nossa seed encontra-se no diretório <code>Modules\Database\Seeders\ProductsDatabaseSeeder</code>.

Com o arquivo criado basta seguir os mesmos processo de um a aplicação laravel para inserção dos dados no seeder.

### Considerações finais

Como podemos observar o recurso é robusto,  de fácil compreensão, sua curva de aprendizagem é baixa e facilita a modularização das aplicações Laravel.

Espero que tenham apreciado o conteúdo, convido a todos que deixem um comentário e que compartilhe o conteúdo com seus colegas.

Grande abraço e sucesso em seus projetos!
