---
title: 'Manipulando  diretórios com PHP'
author: Diego Brocanelli
type: post
date: 2016-09-04T20:53:17+00:00
url: /php/manipulando-diretorios-com-php/
featured_image: /wp-content/uploads/2016/09/15_manipulando_diretorios_php.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1369;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - diretórios
  - php

---

Olá pessoal, tudo bem?!

Neste final de semana estive criando um pet project para praticar TDD, e foi direcionado a [manipulação de diretórios](https://github.com/Diego-Brocanelli/FileSystem).

E com isso resolvi criar este post para mostrar um recurso muito bom do PHP, sendo a [classe nativa RecursiveDirectoryIterator](http://php.net/manual/pt_BR/class.recursivedirectoryiterator.php), onde dispõem de um leque de ferramentas bacanas que podem facilitar sua vida.

Para realizarmos este post vamos criar um diretório &#8216;post_manipulando_diretorios_com_php&#8217; e dentro dele vamos criar o arquivo index.php (onde iremos implementar nossos códigos) e mais 04 arquivos teste_01.txt, teste_02.txt, teste_03.txt e teste_04.txt. Após a criação da nossa estrutura básica vamos explorar o recurso.

Show me the code!!!

Para iniciar devemos instanciar nosso objeto.

```php
$path = __DIR__ . '/';

$directory = new RecursiveDirectoryIterator( $path );
```

Como vimos é necessário passar o path onde iremos manipular. E temos como retorno um objeto do tipo RecursiveDirectoryIterator.

Após instanciarmos nosso objeto, podemos percorrê-lo em um laço de repetição para termos acesso aos arquivos e diretórios.

```php
foreach ($directory as $file) {
    var_dump($file);
}
```

Como retorno teremos:

```php
object(RecursiveDirectoryIterator)[1]
  private 'pathName' (SplFileInfo) => string '{FULL_PATH_PC}/teste_02.txt' (length=27)
  private 'fileName' (SplFileInfo) => string 'teste_02.txt' (length=12)
  private 'glob' (DirectoryIterator) => boolean false
  private 'subPathName' => string '' (length=0)
```

Dentro do laço temos acesso a uma grande quantidade de métodos que podemos fazer uso para coletar diversas informações, vamos ver algumas dessas opções:


### Get Base Name

```php
foreach ($directory as $file) {
    var_dump($file->getBaseName());
}
```

### Retorno

```php
'teste_02.txt' (length=12)
'index.php' (length=9)
'..' (length=2)
'.' (length=1)
'teste_01.txt' (length=12)
'teste_04.txt' (length=12)
'teste_03.txt' (length=12)
```

Com este recurso podemos obter o nome de todos os arquivos dentro do nosso diretório, podemos fazer isso em sub diretórios, para realizarmos acesso aos sub diretórios devemos realizar um laço recursivo 🙂


### Get C Time

```php
foreach ($directory as $file) {
    var_dump($file->getCTime());
}
```

### Retorno

```php
473002325

1473003048

1472078760

1473002338

1473002319

1473002338

1473002333
```

### Get File Name

```php
foreach ($directory as $file) {
    var_dump($file->getFileName());
}
```

### Retorno

```php
'teste_02.txt' (length=12)
'index.php' (length=9)
'..' (length=2)
'.' (length=1)
'teste_01.txt' (length=12)
'teste_04.txt' (length=12)
'teste_03.txt' (length=12)
```

### Get Group

```php
foreach ($directory as $file) {
    var_dump($file->getGroup());
}
```

### Retorno

```php
1001

1001

1001

1001

1001

1001

1001
```

Temos uma lista bem extensa de funções que podemos utilizar para manipular diretórios e seus arquivos, podemos utilizar o getPat() onde irá retornar o caminho onde se encontra os arquivos, getPathname retornando o caminho completo contendo o nome do arquivo. Podemos verificar se é legível com isReadable() onde retorna true ou false e o método isWritable onde retorna se o arquivo é possível de ser gravado ou não.

Como vimos nos exemplos acima, as possibilidades são enormes e podemos manipular com facilidade diretórios e arquivos. Recomendo que acessem a documentação e analisem os outros recursos, que podem lhe poupar muitas linhas e horas de código quando o desafio é manipular diretórios e arquivos.

Podemos utilizar este recurso para criar arquivos do tipo zip  por exemplo (no blog tenho um post que demonstra a [criação de zip com PHP](http://www.diegobrocanelli.com.br/php/criando-e-baixando-arquivos-zip-com-php/)), ou qualquer outro formato, ficando restrito a nossa imaginação para implementar os recursos.

Espero que tenham gostado do post, curto porêm demonstra um recurso muito bacana que o PHP nos traz de forma nativa.

Até a próxima pessoal! 🙂
