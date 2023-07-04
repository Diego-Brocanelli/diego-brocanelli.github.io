---
title: Gerando QR Codes com PHP + MySQL + PHP QR Code
author: Diego Brocanelli
type: post
date: 2018-01-14T12:14:37+00:00
url: /php/gerando-qr-codes-com-php-mysql-php-qr-code/
featured_image: /wp-content/uploads/2018/01/59_php_mysql_php_qr_code.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1614;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - mysql
  - php
  - qr code

---

Olá, tudo bem!

Recentemente fui abordado com o seguinte questionamento, &#8220;é possível gerar QR Codes com PHP e MySQL&#8221;.

Minha resposta foi sim!

Bom, dito isso, a pessoa ao qual me fez essa pergunta relatou que estava tentando, porém sem sucesso.

A mesma está utilizando PHP + MySQL + [PHP QR Code](ttp://phpqrcode.sourceforge.net/) uma biblioteca que auxilia na construção das imagens.

Para poder auxiliar da melhor maneira, separei o problema em partes, sendo:

### O Problema

Realizar consulta SQL em uma tabela no banco de dados, retornar os registros encontrados e com posse dos dados realizar a criação dos QR Codes.

### Banco de dados

Para que possamos realizar este exemplo do post é necessário que [realize o download do banco de dados de exemplo](https://github.com/Diego-Brocanelli/gerando_qrcode_php_mysql/tree/master/docs/banco_de_dados).

Crie o banco de dados &#8216;post_qr_code&#8217;.

Para importação do script que acabou de fazer o download, execute por meio do terminal o comando abaixo no mesmo diretório onde realizou o download, sendo:

```bash
mysql -u root -p post_qr_code < post_qr_code.sql
```

O comando irá solicitar a senha de acesso ao banco de dados referente ao usuário &#8216;root&#8217;.

A estrutura é simples tendo apenas uma tabela chamada cadastro, onde a mesma contém duas colunas, sendo id e matrícula.

Não se preocupe com configuração nem nada disso, esse banco é o mais simples possível para podermos executar nossa tarefa.

Caso você deseje mais informações na tabela, basta fazer a modelagem e criação dos dados desejados, porém como mencionado esse não é o objetivo do post.

### Biblioteca PHP QR Code

Essa biblioteca tem como objetivo auxiliar na construção de QR Codes, particularmente não conhecia a mesma e não me agradou muito, pelo simples fato de ter que fazer o download da ferramenta para utilizar.

Hoje em dia uma biblioteca que não se encontra no [packagist](https://packagist.org/) eu não faço uso, pois com isso eu não poderia utilizar o [composer](https://getcomposer.org/) para gerenciar essa dependência e hoje projeto que não usa composer é inviável de se manter.

Caso você desconheça o composer, tenho um post que ensina [como inciar com composer](/hhbr/hhbr-14-iniciando-com-composer-video/).

E caso você tenha interesse, disponho de outro post que ensina a [gerar QR Code de utilizando um componente que é instalado via composer](/php/qr-code-php/).

### Códigos PHP de implementação

Para realizar a implementação do código, devemos construir a estrutura de diretórios necessária, seguindo os seguintes passos:

* Crie o diretório &#8220;post_qr_code&#8221;
* Importe para dentro do diretório recém criado o download da bliblioteca PHP QR Code descompacte a mesma e remova o zip que não se faz mais necessário.
* Crie o arquivo index.php.

Após realização dos passos acima, sua estrutura deve ficar igual a demonstrada abaixo:

* post_qr_code
  * phpqrcode
  * index.php

Nosso foco agora é no arquivo index.php, dito isso abra o mesmo no editor de sua preferencia, pois daremos inicio ao processo de codificação.

> **Nota:** Para usar o PHP QR Code, o mesmo faz uso da extensão gd do PHP!

Vamos importar a biblioteca PHP QR code, veja abaixo o resultado.

```php
<?php
// Realizamos a importação da biblioteca para gerar QR Code.
require_once('phpqrcode/qrlib.php');
```

Após importação, devemos realizar a conexão com o banco de dados, veja resultado abaixo:

```php
// Credenciais de acesso ao banco de dados.
$servidor = "localhost";
$usuario  = "SEU USUÁRIO DO BANCO DE DADOS";
$senha    = "SUA SENHA DO BANCO DE DADOS";
$dbname   = "post_qr_code";

// Realizamos a conexão com o banco de dados.
$conn = new PDO(
    'mysql:host='.$servidor.';dbname='.$dbname, $usuario, $senha);
```

> **Nota:** NUNCA devemos realizar conexão com banco de dados diretamente no arquivo de implementação, estou fazendo isso para agilizar e simplificar o post, por favor siga todas as boas práticas de código e segurança!

Após conexão realizada, podemos executar a consulta dos dados na tabela &#8216;cadastro&#8217;.

```php
// Construímos nossa query de consulta.
$queryString = 'SELECT * FROM cadastro';

// Executamos a pesquisa, retornando todos os registros da tabela cadastro.
$data = $conn->query($queryString);
```

Após consulta dos dados desejados, devemos realizar um laço de repetição para percorrer todos os dados encontrados e gerar nossos QR Codes.

```php
// Realizamos um laço de repetição para percorrer cada registro retornado do DB.
foreach ($data as $value) {
  // Configuramos um nome único para o QR Code com base no número da matrícula.
  $qrCodeName = "imagem_qrcode_{$value['matricula']}.png";

  /**
   * Realizamos a criação da imagem PNG, sendo passado as seguintes informações:
   * 1º - A string que desejamos inserir no QR Code.
   * 2º - O nome da imagem que criamos no passo anterior.
   */
  QRcode::png($value['matricula'], $qrCodeName);

  // Para finalizar realizamos a exibição da imagem no navegador.
  echo "<img src='{$qrCodeName}'>";
}
```

Para executarmos nosso projeto, faremos uso do servidor embutido do PHP. Acesse a raiz do projeto e execute o seguinte comando, sendo:

```bash
php -S localhost:8080
```

Abra o navegador de sua preferência e insira a seguinte URL:

```bash
localhost:8080
```

Após realizado o acesso, teremos o seguinte resultado.

![Resultado da geração das imagens](/wp-content/uploads/2018/01/resultado_post_qr_code_php_mysql.png)

Obtemos 10 imagens de QR Code referente a 10 registros contidos no banco de dados.

> **Nota:** As imagens estão sendo armazenadas na raiz do projeto, porém nada impede que possa ser armazenadas onde desejar.

Espero que tenham apreciado e que o post tenha agregado valor.

Convido que deixem sua opinião, dúvidas e elogios nos comentários.

Grande abraço e sucesso nos projetos.
