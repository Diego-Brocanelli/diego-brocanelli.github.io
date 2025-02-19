---
title: Como realizar parse da query string de forma simples com PHP
author: Diego Brocanelli
type: post
date: 2018-01-05T21:05:12+00:00
url: /php/realizar-parse-da-query-string-de-forma-simples/
featured_image: /wp-content/uploads/2018/01/58_parse_query_string_php.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1574;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - iniciante
  - php
tags:
  - iniciante
  - parse
  - php
  - query
  - string

---

Olá, tudo bem!

Pode parecer simples, porém quem nunca teve a necessidade de realizar parse da query string para obter seus valores?

Principalmente quando não estamos utilizando um framework, micro framework ou componente para isso.

Vou lhe demostrar que não precisamos de nada disso para realizar essa tarefa!

### O que é query String?

É parte da URL, onde contém dados sendo transmitidos.

#### Exemplo:


```bash
http://meusite.com.br/produto?chave=valor&outraChave=outroValor
```

Como podemos analisar no exemplo acima, para que possamos informar os valores desejados na URL iniciamos com o caractere ‘? ‘ seguido de chave e seu valor.

Caso desejamos informar mais valores, basta inserir o caractere ‘&‘ e repetir o processo.

Podemos informas quantos valores forem necessários, normalmente essa passagem de parâmetros é comumente utilizada em requisições do tipo ‘GET ‘, porém nada impede de ser utilizado em outros tipos de requisições (request).

### Principal erro ao ler query string

Como observado no exemplo acima, podemos informar quantos valores desejarmos, em decorrência normalmente nos deparamos com implementações similares ao demonstrado abaixo.

```php
$page   = $_GET['page'];
$column = $_GET['column'];
$order  = $_GET['order'];
```

Essa abordagem **NÃO** é recomendada, pois não se deve fazer uso de super globais.

Temos também o acréscimo exponencial de variáveis, pois para cada parâmetro da URL é criado sua variável referência, com isso o código fica mais complexo e verboso, dificultando sua leitura e manutenção.

### Solução para o problema

Crie um diretório chamado "parse_query_string", em seguida dentro do mesmo crie o arquivo _index.php_.

Para que possamos recuperar os valores da query string, podemos utilizar o seguinte processo:

```php
<?php 

// Capturamos toda a query string
$queryString = filter_input(INPUT_SERVER, 'QUERY_STRING');

// Responsável por exibir os dados na tela.
var_dump($queryString);
```

Para realizar o primeiro teste, acesse o diretório do projeto por meio do terminal e execute o servidor embutido do PHP, conforme demonstrado abaixo:

```bash
php -S localhost:8080 -t . index,php
```

Após execução do servidor, acesse o navegador de sua preferência e insira a seguinte URL, sendo:

```php
localhost:8080/products?page=2&column=title&order=ASC
```

Como resultado obtemos a seguinte string.


```php 
string(29) "page=2&column=title&order=ASC"
```

Ok, conseguimos obter todos os dados, porém não é nada prático seu consumo ou utilização da maneira em que se encontra.

Para isso devemos realizar o parser da string, vamos realizar a seguinte implementação.

```php
<?php 

// Capturamos toda a query string
$queryString = filter_input(INPUT_SERVER, 'QUERY_STRING');

/**
 * Realizamos o parse da string
 * 
 * Passamos a query string como primeiro parâmetro. 
 * Como segundo parâmetro informamos a variável 
 * que desejamos armazenar os valores.
 */
parse_str($queryString, $parseQueryString);

// Resultado do parse da query string
echo '<pre>';
var_dump($parseQueryString);
echo '</pre>';
```

Após a implementação do código acima, podemos atualizar o navegador e observar o resultado.

```php
array(3) {
  ["page"]=>
  string(1) "2"
  ["column"]=>
  string(5) "title"
  ["order"]=>
  string(3) "ASC"
}
```

De forma simples e prática obtemos um _array_ contendo todos os valores informados em nossa _query_ string!

Com praticamente 2 linhas de código implementamos nossa estrutura para _parse_.

Aqui cabe um lembrete, **SEMPRE** filtre e valide input e output!

Nunca devemos manipular, utilizar ou armazenar dados sem o devido tratamento, pois não sabemos as intenções do usuário, podendo causar sérios danos!

Como resultado final, o código deve ficar semelhante ao descrito abaixo.

```php
<?php 

// Capturamos toda a query string
$queryString = filter_input(INPUT_SERVER, 'QUERY_STRING');

/**
 * Realizamos o parse da string
 * 
 * Passamos a query string como primeiro parâmetro. 
 * Como segundo parâmetro informamos a variável que desejamos
 * inserir o resultado.
 */
parse_str($queryString, $parseQueryString);

// Resultado da query string
var_dump($queryString);

// Resultado do parse da query string
echo '<pre>';
var_dump($parseQueryString);
echo '</pre>';
```

### Considerações finais

De forma simples foi implementado uma estrutura para captura e _parse_ dos dados informados na _query string_.

Espero que o post tenha sido útil e que tenha agregado valor, por favor deixe um comentário dizendo o que achou ou caso tenha alguma dúvida, pois assim podemos aprender muito mais.

Grande abraço e sucesso nos projetos.
