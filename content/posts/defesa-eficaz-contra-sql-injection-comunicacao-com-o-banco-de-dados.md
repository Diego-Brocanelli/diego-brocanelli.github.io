---
title: Defesa eficaz contra SQL Injection – Comunicação com o banco de dados
author: Diego Brocanelli
type: post
date: 2017-02-06T22:08:22+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - php
tags:
  - sql
  - SQL Injection

---

Fala galera, tudo tranquilo?!

Chegamos na última parte de nossa trajetória de defesa eficaz contra SQL Injection, caso você esteja lendo este conteúdo e não tem conhecimento dos outros dois posts ([Defesa eficaz contra SQL Injection &#8211; Introdução][1] e [Defesa eficaz contra SQL Injection – Filtragem e validação dos dados][2])  recomendo a leitura para maior compreensão do tema.

Nós demos uma introdução do SQL Injection, abordamos o quão importante é validar e filtrar os dados recebidos antes de realizar a consulta no banco de dados e agora vamos completar nosso ciclo de login realizando uma consulta no banco para confirmar a existência ou não do usuário no banco de dados.

Lembrando que um processo de login é mais complexo e elaborado, porem estou simplificando para que os tópicos de SQL Injection seja mais destacado.

O PHP disponibiliza diversas maneiras para se conectar no banco de dados, como por exemplo as funções &#8220;mysql\_\*&#8221;, mysqli\_\* e PDO. Vale salientar que caso você utilize as funções &#8220;mysql_*&#8221; recomendo que pare agora pois elas foram depreciadas e não fazem mais parte do PHP desde o lançamento do PHP 7.

Eu particularmente não sou adepto de utilizar a função &#8220;mysqli_&#8221;, prefiro o uso do PDO, pois é mais robusto e disponibiliza uma gama de opções que atendem todas as necessidades.

Para nosso caso de estudo vamos analisar o código abaixo:

```php
<?php

$querySQL = 'SELECT email FROM users WHERE email = :email AND senha = :senha';

try{
    $email  = 'meu_email@teste.com.br';
    $senha  = 'm1nh@ s3nh@ sup3r s3gur@ 1234';

    $pdo = new \PDO("mysql:host=DB_LOCAL;dbname=DB_NAME", 'DB_USER', 'DB_PASSWORD');
    $statement = $pdo->prepare($querySQL);

    $statement->bindParam(':email' , $email);
    $statement->bindParam(':senha' , $senha);
    
    $statement->execute();

    $result = $statement->fetchAll();

}catch(\Exception $exc){
    // tratamento da exceção
}
```

Primeiro temos nossa variável contendo nossa string sql e nela informamos os valores que serão substituímos por meio do símbolo &#8220;:&#8221;.

As variáveis &#8220;$email&#8221; e &#8220;$senha&#8221; são meramente didáticas, apenas simbolizando a passagem de parâmetro posteriormente para a consulta SQL.

Inicialmente instanciamos nossa Classe PDO e passamos os parâmetros de conexão, cabe salientar que todas e qualquer informação de credencial de acesso ao banco de dados nunca devem ser armazenadas em arquivos de acesso pelo usuário, sempre devemos zelar pela sua integridade onde somente o sistema deve ter acesso a estas informações.

Logo em seguida realizamos o &#8220;prepare&#8221; dos dados da consulta e armazenamos o prepare em nossa variável &#8220;$statement&#8221;.

Em seguida realizamos o &#8220;bind&#8221; das informações recebidas com as declaradas na strgin SQL.

Executamos nossa query SQL e podemos retornar a consulta com o método &#8220;fetchAll&#8221;;

Como podemos notar, em poucas linhas de código fomos capazes de realizar uma consulta no banco de dados e receber seu resultado sem muito esforço.

E se nós empregarmos as boas práticas que discutimos nesses últimos post, onde todo input e output de dados será validado e tratado e ao realizar uma ação no banco de dados podendo ser um SELECT, INSERT ou qualquer outra ação por meio do PDO, nossas consultas no banco de dados serão muito mais seguras e nossas aplicações terão uma cama ainda maior de proteção dos dados.

Infelizmente, não é possível abordar todo o tema em apenas 3 post, pois é um tema vasto e que sempre devemos pesquisar cada vez mais como melhorar nossa segurança e proteger ainda mais nossas aplicações.

Não recomendo que você crie seu framrwork do zero para manipulação de banco de dados, pois existem hoje no mercado diversas ferramentas que fazem isso com maestria como por exemplo:

* [Doctrine][3]
* [Zend-DB][4]
* [Eloquent][5]

As ferramentas citadas acima são poderosas e contem um vasto arsenal de recursos que irão facilitar e auxiliar no processo para trabalhar com banco de dados, pois dispõem de uma grande comunidade que trabalha para melhorar, corrigir bugs e implementar novas features.

Caso você tenha interesse em construir um componente com propósitos acadêmicos, eu acho perfeitamente normal e aconselho, pois assim você ampliará seus conhecimentos na área.

Lembrando também que nada o impede de contribuir com os projetos, pois todos os três são open sources 🙂

E assim chegamos ao fim da nossa saga para melhorar nossas aplicações e proteger ainda mais contra SQL Injection, nada que mencionei aqui é escrito em pedra e será fantástico discutirmos mais sobre o assunto, por favor deixe suas perguntas e sugestões nos comentários.

Lembre sempre que segurança de aplicações não é negociável, pois o usuário deposita sua confiança nos sistemas que construímos e devemos contribuir protegendo os dados que eles fornecem.

Caso você conheça alguém que discorde e acha desnecessário validar e filtrar os dados recebidos pela aplicação e que para fazer uma consulta no banco não é nada de mais, basta executar e ter o retorno, mostre para ele essa série de posts e vamos juntos melhorar a qualidade das aplicações desenvolvidas, pois com isso  podemos demonstrar que os tópicos que abordamos aqui são de extrema importância e todos nós devemos utilizar no desenvolvimento de sistemas.

E caso você se depare com uma aplicação que não siga essas regras de boas práticas ou até mesmo tenha desenvolvido o sistema, isso não é ruim, o ruim é saber que está errado e não fazer nada para concertar ou melhorar, sempre teremos algo para implementar que trará maior segurança para nossas aplicações.

Espero que tenham apreciado e até a próxima 🙂

 [1]: http://www.diegobrocanelli.com.br/php/defesa-eficaz-co…ction-introducao/
 [2]: http://www.diegobrocanelli.com.br/php/defesa-eficaz-co…idacao-dos-dados/
 [3]: http://www.doctrine-project.org/
 [4]: https://docs.zendframework.com/zend-db/
 [5]: https://laravel.com/docs/5.0/eloquent