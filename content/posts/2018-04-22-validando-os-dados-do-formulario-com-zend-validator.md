---
title: Validando os dados do formulário com Zend-Validator
author: Diego Brocanelli
type: post
date: 2018-04-22T12:45:21+00:00
url: /php/validando-os-dados-do-formulario-com-zend-validator/
featured_image: /wp-content/uploads/2018/04/61_validando_dados_com_zend_validator.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1755;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend
tags:
  - Inputfilter
  - php
  - Validar
  - Validator
  - Zend
  - Zend-inputfilter

---

Olá, tudo bem?!

Todas aplicações que desenvolvemos necessita de entradas e saídas de dados, isso é muito comum, porém cada desenvolvedor acaba implementando a &#8220;sua solução&#8221; para esse problema. Definitivamente essa não é uma boa prática por diversos motivos.

O mais recomendado é a utilização de componentes criados pela comunidade, porque devo usar um componente? Simples, irei listar algumas das principais vantagens, sendo:

1. Grande volume de contribuidores.
2. Maior correção de bugs.
3. Implementações de melhorias contantes.
4. Solução robusta.
5. Testada por diversos usuários (programadores).

### O componente zend-validator

Neste post irei apresentar um poderoso componente criado pela Zend e mantido pela comunidade, seu nome é [zend-validator](https://docs.zendframework.com/zend-validator/).

Ele suporta uma lista de validadores, que cobre grande parte das nossas necessidades do dia a dia, a seguir podemos observar a lista de validadores.


* **Validadores** 
  * Barcode
  * Between
  * Callback
  * CreditCard
  * Date
  * Db\RecordExists and Db\NoRecordExists
  * Digits
  * EmailAddress
  * Explode
  * GreaterThan
  * Hex
  * Hostname
  * Iban
  * Identical
  * InArray
  * Ip
  * Isbn
  * IsCountable
  * IsInstanceOf
  * LessThan
  * NotEmpty
  * Regex
  * Sitemap
  * Step
  * StringLength
  * Timezone
  * Uri
  * Uuid
* **File Validators** 
  * Intro
  * Count
  * Crc32
  * ExcludeExtension
  * ExcludeMimeType
  * Exists
  * Extension
  * FilesSize
  * Hash
  * ImageSize
  * IsCompressed
  * IsImage
  * Md5
  * MimeType
  * NotExists
  * Sha1
  * Size
  * Upload
  * UploadFile
  * WordCount

Como podemos observar, o componente dispõem de uma vasta lista a nossa disposição. Caso ocorra de não conter  um validador que você necessite, pode ser criado validadores, eu mesmo criei um pacote [validators_zf](https://github.com/Diego-Brocanelli/validators_zf), responsável por validar CPF, CNPJ e Data (pt-BR).

### Demonstração prática

Será implementado uma estrutura simples, para que possamos realizar a validação dos dados submetidos por meio de um formulário.

Lembrando que neste exemplo utilizaremos um formulário, porém os princípios são os mesmos para validar qualquer entrada de dados.

Vamos emular o seguinte cenário, sendo:

1. Teremos um formulário com nome, e-mail, e idade.
2. Ao realizar o submit (POST) devemos capturar e validar cada input.
3. Após validação devemos analisar o resultado.

* **Regras de validação para cada input.** 
  * _nome_
    * Máximo de caracteres 150.
    * Mínimo de caracteres 05.
    * Campo obrigatório.
  * _email_
    * Máximo de caracteres 200.
    * Mínimo de caracteres 10.
    * Campo obrigatório.
    * Deve ser um e-mail válido.
  * _idade_
    * Entre 0 e 120 anos.
    * Campo obrigatório.
    * Deve aceitar somente números.

Para agilizar a realização do projeto, faça o download da estrutura base que preparei [diegobrocanelli-post-zend-validator][1].

* **diegobrocanelli-post-zend-validator** 
  * _src_
    * Validator 
      * User.php
  * _view_
    * form.html
  * composer.json
  * index.php

Após download realizado, descompacte o projeto no diretório desejado, acesse sua raiz pelo terminal e execute o comando abaixo para validação do projeto:

```bash
php -S localhost:8080 index.php
```

Após execução do servidor embutido do PHP, acesse um navegador de sua preferência inserindo a seguinte URL, sendo:

```bash
localhost:8080
```

Estou utilizando a versão 7.2 do PHP, porém a adaptação para projetos inferiores é simples. Neste pacote que foi realizado o download já consta os componentes devidamente instalados, onde pode ser observado no arquivo `composer.json`.

No arquivo `composer.json` foi definido a namespace base `DiegoBrocanelli`, utilizaremos ela para criar nossa classe de validação mais a frente.

Abra o projeto no seu editor de preferencia e acesse a classe `src/Validator/User.php`.

Devemos definir a `namespace` da classe, para isso insira o seguinte código.


```php
<?php

namespace DiegoBrocanelli\Validator;
```

Agora deve ser importado os pacotes que serão utilizados, sendo:

```php
// Componente base.
use Zend\InputFilter\InputFilter;
// Responsável por filtrar os dados para inteiro.
use Zend\Filter\ToInt; 
// Responsável por filtrar tags HTML.
use Zend\Filter\StripTags; 
// Responsável por remover espaços no início e fim da string.
use Zend\Filter\StringTrim; 
// Responsável por validar intervalo entre valores.
use Zend\Validator\Between;
// Responsável por validar o e-mail.
use Zend\Validator\EmailAddress;
// Responsável por validar o comprimento da string.
use Zend\Validator\StringLength;
```

Deve-se ser declarado a estrutura da classe, sendo:

```php
/**
 * Responsável por validar os dados de usuário
 * 
 * @author Diego Brocanelli <contato@diegobrocanelli.com.br>
 */
class User extends Inputfilter
{
    // Será por meio do construtor que iremos consumir os validadores.
    public function __construct()
    {
        // Será implementado aqui a estrutura de validação.
    }
}
```

Após a criação do método construtor, será implementado o primeiro validador referente ao para o campo nome, para isso como a classe `User` herda a classe `InputFilter` a mesma dispões do método `add()` onde será definido o validador .

```php
// Validador do campo nome.
$this->add([
    'name'     => 'nome', // Defini o nome do campo esperado (deve ser igual ao do input do form).
    'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
    'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
        [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
        [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
    ],
    'validators' => [ // dentro desse array é inserido todos os validadores desejado.
        [
            'name'    => StringLength::class,
            'options' => [
                'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                'min'      => 5,   // aqui é definido o mínimo de caracteres desejado.
                'max'      => 150, // aqui é definido o máximo de caracteres permitido
            ],
        ],
    ],
]);
```

Devemos agora implementar o validador para campo de e-mail.

```php
// Validador do campo email.
$this->add([
    'name'     => 'email', // Defini o nome do campo esperado (deve ser igual ao do input do form).
    'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
    'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
        [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
        [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
    ],
    'validators' => [ // dentro desse array é inserido todos os validadores desejado.
        [
            'name'    => StringLength::class,
            'options' => [
                'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                'min'      => 5,   // aqui é definido o mínimo de caracteres desejado.
                'max'      => 150, // aqui é definido o máximo de caracteres permitido
            ],
        ],
        [
            'name' => EmailAddress::class, // Aqui é difinido o validador de e-mail
        ],
    ],
]);
```

Por último, implementar o validador para o campo idade.

```php
<?php
// Validador do campo idade.
$this->add([
    'name'     => 'idade', // Defini o nome do campo esperado (deve ser igual ao do input do form).
    'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
    'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
        [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
        [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
    ],
    'validators' => [ // dentro desse array é inserido todos os validadores desejado.
        [
            'name'    => Between::class,
            'options' => [
                
                'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                'min'      => 0,   // aqui é definido o valor mínimo.
                'max'      => 120, // aqui é definido o valor máximo.
            ],
        ],
    ],
]);
```

Como resultado a implementação deve ficar semelhante ao apresentado abaixo, sendo:

```php
<?php

namespace DiegoBrocanelli\Validator;

// Componente base.
use Zend\InputFilter\InputFilter;
// Responsável por filtrar os dados para inteiro.
use Zend\Filter\ToInt; 
// Responsável por filtrar tags HTML.
use Zend\Filter\StripTags; 
// Responsável por remover espaços no início e fim da string.
use Zend\Filter\StringTrim; 
// Responsável por validar intervalo entre valores.
use Zend\Validator\Between;
// Responsável por validar o e-mail.
use Zend\Validator\EmailAddress;
// Responsável por validar o comprimento da string.
use Zend\Validator\StringLength;

/**
 * Responsável por validar os dados de usuário
 * 
 * @author Diego Brocanelli <contato@diegobrocanelli.com.br>
 */
class User extends Inputfilter
{
    // Será por meio do construtor que iremos consumir os validadores.
    public function __construct()
    {
        // Validador do campo nome.
        $this->add([
            'name'     => 'nome', // Defini o nome do campo esperado (deve ser igual ao do input do form).
            'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
            'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
                [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
                [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
            ],
            'validators' => [ // dentro desse array é inserido todos os validadores desejado.
                [
                    'name'    => StringLength::class,
                    'options' => [
                        'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                        'min'      => 5,   // aqui é definido o mínimo de caracteres desejado.
                        'max'      => 150, // aqui é definido o máximo de caracteres permitido
                    ],
                ],
            ],
        ]);

        // Validador do campo email.
        $this->add([
            'name'     => 'email', // Defini o nome do campo esperado (deve ser igual ao do input do form).
            'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
            'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
                [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
                [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
            ],
            'validators' => [ // dentro desse array é inserido todos os validadores desejado.
                [
                    'name'    => StringLength::class,
                    'options' => [
                        'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                        'min'      => 5,   // aqui é definido o mínimo de caracteres desejado.
                        'max'      => 150, // aqui é definido o máximo de caracteres permitido
                    ],
                ],
                [
                    'name' => EmailAddress::class, // Aqui é difinido o validador de e-mail
                ],
            ],
        ]);

        // Validador do campo idade.
        $this->add([
            'name'     => 'idade', // Defini o nome do campo esperado (deve ser igual ao do input do form).
            'required' => true, // defini se o campo é obrigatório TRUE ou não FALSE.
            'filters'  => [ // Dentro desse array é onde definimos todos os filtros desejados
                [ 'name' => StringTrim::class ], // Filtro para remoção de espaços em branco.
                [ 'name' => StripTags::class ],  // Filtro para remoção de tags HTML. 
            ],
            'validators' => [ // dentro desse array é inserido todos os validadores desejado.
                [
                    'name'    => Between::class,
                    'options' => [
                        
                        'encoding' => 'UTF-8', // Aqui é definido o encoding da string
                        'min'      => 0,   // aqui é definido o valor mínimo.
                        'max'      => 120, // aqui é definido o valor máximo.
                    ],
                ],
            ],
        ]);
    }
}
```

Apos implementação da camada de validação, será implementado as regras no arquivo `index.php` para consumo da classe de validação.

```php
<?php 
// importação do autoload.
require_once __DIR__.'/vendor/autoload.php';

// inport do componente de validação.
use DiegoBrocanelli\Validator\User;

// capturo o conteúdo do form.html
$view = file_get_contents(__DIR__.'/view/form.html');

// recuperar o mehod da rquest
$request = filter_input(INPUT_SERVER, 'REQUEST_METHOD');

// somente requisição POST
if($request === 'POST'){
    $nome  = filter_input(INPUT_POST, 'nome');
    $email = filter_input(INPUT_POST, 'email');
    $idade = filter_input(INPUT_POST, 'idade');
    
    // realizado a criação do objeto User
    $validator = new User();
    
    // Por meio do método setData, é passado um array com os valores a serem validados.
    // as keys devem ser as mesmas configuradas no validator.
    $validator->setData([
        'nome'  => $nome,
        'email' => $email,
        'idade' => $idade,
    ]);

    // Por meio do método isValid(), é validado os dados informados.
    if(!$validator->isValid()){
        // O método getMessages() é o responsável por retornar as mensagens de erro do input.
        var_dump($validator->getMessages());
    }
}

// responsável por renderizar o formulário.
echo $view;
```

Basicamente é se a request é POST, em seguida capturamos os valores do formulário.

Em seguida é instanciado o validador `User` e por meio do método `setData()` passado os valores obtidos do formulário.

Para validar os dados basta chamar o método `isValid()` do validador.

Para recuperar as mensagens de erro deve ser utilizado o método `getMessages()`.

O projeto encontra-se finalizado e pronto para seu uso.


```bash
php -S localhost:8080 index.php
```

### Considerações finais

Pudemos observar na prática como foi simples criar a camada de validação e consumi-lo.

As mensagens por padrão são em inglês, é possível traduzi-las de forma automática, caso tenham interesse deixem nos comentários.

Podemos também somar o uso do validator com o zend-form e zend-view, onde por exemplo as mensagens de erro já são inseridos abaixo do seu respectivo input.

Validar dados é fundamental e toda aplicação necessita de ser feita, com o zend validator essa tarefa fica muito mas simples e descomplicada.

Agradeço pela atenção, espero que o conteúdo do post agregue valor em seu dia a dia.

Até a próxima e sucesso nos projetos.

 [1]: http://www.diegobrocanelli.com.br/wp-content/uploads/2018/04/diegobrocanelli-post-zend-validator-1.zip