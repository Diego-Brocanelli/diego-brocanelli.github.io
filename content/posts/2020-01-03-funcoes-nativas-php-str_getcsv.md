---
title: Funções nativas PHP – str_getcsv
author: Diego Brocanelli
type: post
date: 2020-01-03T10:55:13+00:00
url: /php/funcoes-nativas-php-str_getcsv/
featured_image: /wp-content/uploads/2020/01/str_getcsv.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2175;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - funções
  - nativas
  - php
  - str_getcsv

---
Olá!

PHP é uma linguagem fantástica com inúmeros recursos nativos que facilitam e entrega alta performance.

Uma dessas funções é a [str_getcsv](https://www.php.net/manual/pt_BR/function.str-getcsv.ph), responsável por ler um arquivo csv e converter seus valores em um array.

**Versões do PHP suportadas: PHP 5 >= 5.3.0 e PHP 7**

### Assinatura da função:

```php
  str_getcsv ( string $input [, string $delimiter = "," [, string $enclosure = '"' [, string $escape = "\\" ]]] )
```

### Retorno da função:

**array**

### Parâmetros da função:

* **input:** Srting a ser analisada.  
* **delimiter:** Define o delimitador (somente um caractere).  
* **enclosure:** Define o enclosure (somente um caractere).  
* **escape:** Define o caractere de escape (no máximo um caractere). O valor padrão é a barra invertida (&#41; Uma string vazia (&#8220;&#8221;) desabilita o mecanismo de escape.

### Exemplo de uso:

Para seguir com o exemplo, é necessário criar um arquivo chamado **example.csv** na raiz do projeto e inserir o conteúdo:

```php
  line 01 cell 01,line 01 cell 02,line 01 cell 03
  line 02 cell 01,line 02 cell 02,line 02 cell 03
  line 03 cell 01,line 03 cell 02,line 03 cell 03
  line 04 cell 01,line 04 cell 02,line 04 cell 03
```

Após criação do arquivo csv, deve-se criar o arquivo **index.php** com o seguinte conteúdo.

```php
  <?php

  // carregamos o arquivo csv
  $csv_file = file('example.csv');

  // mapeamos todo o conteúdo para nossa variável
  $array_csv = array_map('str_getcsv', $csv_file); 
  // exibimos o conteúdo da nossa variável
  var_dump($array_csv);
```

Para executar o scrtipt, será utilizar o servidor embutido para isso abra o terminal na raiz do projeto e digite o seguinte comando.

```bash
  php -S localhost:8080 index.php
```

Acesse o navegador de sua preferência e insira a url **localhost:8080** e como resultado teremos a seguinte exibição**.**

![Resultado da função](/assets/images/str_getcsv-1.png#center)

Como podemos observar, de forma simples obtivemos todo o conteúdo do arquivo csv em um array, porém devo salientar **cautela** pois deve-se tomar cuidado com a quantidade de informações a serem armazenadas no array, onde deve ser levado em consideração as configurações do PHP e o hardware da máquina ao qual o mesmo encontra-se, para que assim não acarrete em um erro de limite de memória ou informações no array.

Espero que tenham apreciado e que o conteúdo do post venha ser  útil em seus projetos.

Até a próxima e sucesso em seus projetos.
