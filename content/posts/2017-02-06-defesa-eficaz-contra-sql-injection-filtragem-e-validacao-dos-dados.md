---
title: Defesa eficaz contra SQL Injection – Filtragem e validação dos dados
author: Diego Brocanelli
type: post
date: 2017-02-06T22:08:16+00:00
url: /php/defesa-eficaz-contra-sql-injection-filtragem-e-validacao-dos-dados/
featured_image: /wp-content/uploads/2017/02/31_sql_injection_sanitizacao.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1385;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - sql
  - SQL Injection
  - validação

---

Fala galera, tudo tranquilo?!

Neste post daremos continuidade a nossa seŕie de posts para prevenção de SQL injection, caso você ainda não tenha lido nosso primeiro post &#8220;[Defesa eficaz contra SQL Injection – Introdução][1]&#8221; recomendo a leitura para que assim você possa usufruir com maior qualidade dos textos.

Todo sistema, sendo ele desktop, mobile ou web ele recebe dados transmitidos pelo usuário, podendo ser um simples formulário para coleta de e-mail até informações complexas como controle de fluxo orçamentário da empresa. E o ponto comum neste processo é o tráfego de informações entre o sistema e o banco de dados. Para mantermos este elo seguro devemos empregar SEMPRE uma boa prática sendo ela: validar e filtrar &#8220;input&#8221; e &#8220;output&#8221;. E o que seria isso? Pois bem vamos detalhar um pouco mais esse processo com nosso caso de uso.

Para nosso caso de uso usaremos uma ação de login, onde o usuário deve informar seu e-mail e senha para ter acesso ao sistema e seus dados, esse caso de uso é excelente pois estamos habituados com o ciclo de uma autenticação no sistema, ficando assim mais fácil focar nos conceitos do post.

Sempre que formos manipular os dados para enviar ao servidor e consecutivamente ao banco de dados, temos que garantir que os dados que estamos recebendo de fato correspondem com o desejado, evitando assim quaisquer informação indesejada vindo do cliente, sempre temos que partir do pressuposto que nada vindo do usuário é seguro e que sempre devemos nos prevenir da melhor maneira possível, fazendo isso teremos uma aplicação muito mais segura.

Primeiro ponto que gostaria de salientar, caso você vá transmitir dados para o servidor, sempre dê preferência em trafegar os dados pelo meio do método &#8220;POST&#8221; em detrimento do &#8220;GET&#8221;, fazendo isso os dados não ficam &#8220;visíveis&#8221; para o usuário na &#8220;URL&#8221;.

Após o envio dos dados vamos iniciar nosso processo de filtragem de dados e como exemplo utilizarei o PHP para demonstrar algumas maneiras eficazes de fazer esse processo, porem todo conceito apresentado aqui vale para qualquer outra linguagem de programação.

É muito comum encontrarmos códigos PHP deste tipo:

```php
<?php

$email = $_POST['email'];
$senha = $_POST['senha']

$querySQL = 'SELECT * FROM users WHERE email = '.$email.' AND senha = '. $senha. ' ;';
```

E aqui entra os pontos do porque isso é inseguro, pois é passado de forma direta os dados recebidos do formulário e inserido na consulta SQL. Está prática não garante em nada a integridade dos dados recebidos deixando nosso sistema vulnerável para receber instruções para manipulação do nosso banco de dados.

Então, como uma regra que gostaria de fazer com vocês é NUNCA DEVEMOS passar qualquer tipo de informação para nossa consulta SQL sem antes validar sua estrutura!

### filter_input

Para substituirmos nosso famigerado $_POST, podemos utilizar uma função nativa do PHP para fazer a coleta e validação da informação já no ato em que recebemos os dados, vejamos o exemplo abaixo:

```php
<?php

$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$senha = filter_input(INPUT_POST, 'senha');
```

Como podemos analisar, ao chamarmos a função &#8220;filter_input&#8221; no primeiro parâmetro informado determinamos o tipo de origem da informação, no segundo parâmetro informamos o nome do campo que desejamos receber e por último informamos que desejamos validar se o dado recebido é um e-mail.

Essa função suporta receber o seguintes valores da request HTTP:

* INPUT_GET
* INPUT_POST
* INPUT_COOKIE
* INPUT_SERVER
* INPUT_ENV

E caso desejamos validar com mais filtros nosso input basta inserir uma virgula e informar o próximo parâmetro. Caso não seja informado nenhum validador, como no caso do campo de senha, por default a função utiliza &#8220;FILTER_DEFAULT&#8221;.

Caso a informação recebida pelo &#8220;filter_input&#8221; não corresponda com o especificado seu retorno será &#8220;false&#8221;, caso a variável não seja definida retornará &#8220;null&#8221;.

### filter_var

Temos como alternativa a função filter_var, vejamos no exemplo abaixo:

```php
<?php

$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$senha = filter_var($_POST['senha']);
```

Executa uma ação similar ao &#8220;filter_input&#8221; porém suas diferenças são:

* Devemos inserir a informação que desejamos filtrar.
* Caso não seja informado um filtro específico o mesmo utiliza por &#8220;default&#8221; o &#8220;FILTER\_SANITIZE\_STRING&#8221;.
* Caso valor informado não corresponda com o filtro desejado seu retorno será &#8220;false&#8221;.

As duas funções apresentadas acima já insere uma camada de verificação nos dados recebidos, porém no universo PHP dispomos de bibliotecas que fazem a função de validar e filtrar os dados de forma excepcional, abaixo podemos ver algumas dessas ferramentas.

* Zend 
  * [Zend-Filter][2]
  * [Zend-Validator][3]
  * Duas ferramentas fantásticas disponíveis no Zend Framework que podem ser utilizadas de forma isolada porém, em conjunto são poderosíssimas.
* Symfony 
  * [Validation][4]
  * Ferramenta de iqual poder disponibilizada pela equipe do framework Symfony,  fornecendo uma gama de opções para configurar suas validações ,como por exemplo: &#8220;Annotations&#8221;, &#8220;Yaml&#8221;, &#8220;PHP&#8221; e &#8220;XML&#8221;.
* Respect 
  * [Validation][5] 
      * Ferramenta &#8220;Brazuca&#8221;, demonstrando a qualidade do código produzido no Brasil, muito simples de se utilizar pois usa arquitetura modular, permite que você possa trabalhar em qualquer projeto utilizando essa biblioteca.

Eu particularmente recomendo que se faça uso de alguma ferramenta de mercado, podendo ser uma das listadas acima ou outra de sua preferência, pois essas ferramentas tem uma equipe de programadores contribuindo para seu crescimento e aperfeiçoamento, nas correções de bugs e por mais que você se empenhe em construir sua própria biblioteca, esse processo será longo e custoso e na grande maioria dos projetos que participamos em nosso dia a dia eles não dispõem de tempo para tal abordagem.

Claro que se você gostaria de construir um conjunto de ferramenta para praticar e estudar é totalmente válido e recomendo.

Espero que neste post eu tenha transmitido a importância que se é o tratamento de dados, pois é uma prática inegociável independente de prazo ou tecnologia, sempre devemos ter como padrão esta boa prática.

No próximo post &#8220;[Defesa eficaz contra SQL Injection – Comunicação com o banco de dados][6]&#8221; irei abordar uma forma eficaz de comunicação com o banco de dados e como podemos realizar as ações no banco sem dores de cabeça.

Até o próximo post 🙂

 [1]: http://www.diegobrocanelli.com.br/php/defesa-eficaz-contra-sql-injection-filtragem-e-validacao-dos-dados/
 [2]: https://docs.zendframework.com/zend-filter/
 [3]: https://docs.zendframework.com/zend-validator/
 [4]: http://symfony.com/doc/current/validation.html
 [5]: http://respect.github.io/Validation/
 [6]: http://www.diegobrocanelli.com.br/php/defesa-eficaz-contra-sql-injection-comunicacao-com-o-banco-de-dados/