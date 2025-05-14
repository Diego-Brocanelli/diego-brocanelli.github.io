---
title: Comandos básicos do MySQL no terminal
author: Diego Brocanelli
type: post
date: 2017-04-21T16:27:37+00:00
url: /mysql/comandos-basicos-mysql-no-terminal/
featured_image: /wp-content/uploads/2017/04/39_mysql_terminal.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1393;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - mysql
  - terminal
tags:
  - command line
  - mysql
  - prompt
  - terminal
---

## Sumário

## Objetivo

Olá pessoal, tudo bem?!

Não é nada fora do comum que nós desenvolvedores  tenhamos que manipular/modificar/criar bancos de dados, com certeza isso é o pesadelo de qualquer DBA. Particularmente gosto de trabalhar com front, back e banco de dados pois isso me permite a ter acesso a conteúdos fantásticos aprendendo coisas novas sempre.

Como podemos manipular o banco de dados? Bom, particularmente para atividades corriqueira utilizo o terminal, sim o terminal, é simples e rápido.

Caso você seja usuário Windows recomento que utilize o [cmder](http://cmder.net/) software portable que emula o terminal como se fosse no Linux, caso você seja usuário Linux ou Mac, bom, sua vida com o terminal já é tranquila. 🙂

### Conectar no MySQL

Abra o terminal e digite:

```bash
mysql -u root -p
```

* **Parâmetro:**

| Parâmetro | Valor        | Descrição                                                                                                                                                      |
|-----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-u`      | `root`       | Indica o usuário utilizado para conectar ao banco de dados. Neste caso, `root` é o nome do usuário, podendo ser qualquer um cadastrado no MySQL.              |
| `-p`      | (opcional)   | Indica a senha do usuário. Pode ser omitido se o usuário não usar senha, mas não é recomendado utilizar usuários sem senha. 🙂                                 |

### Conectar no MySQL acessando  direto o banco de dados desejado

Abra o terminal e digite:

```bash
mysql -u root -p nome_do_banco_de_dados
```

| Parâmetro                | Descrição                                                                |
|--------------------------|--------------------------------------------------------------------------|
| `nome_do_banco_de_dados` | Nome do banco de dados que desejamos acessar |

### Listar os banco de dados

Abra o terminal acesso o MySQL e digite:

```bash
show databases;
```

Abaixo segue um exemplo de retorno do comando, podemos observar que é listado todos os bancos de dados até mesmo os utilizados pelo MySQL.

```bash
+--------------------+
| Database           |
+--------------------+
| information_schema |
| banco_01           |
| livraria           |
| mysql              |
| performance_schema |
| post_sql           |
| sys                |
| banco_02           |
+--------------------+
```

### Listar as tabelas do banco de dados

Abra o terminal acesso o MySQL, em seguida acesse o banco de dados desejado e digite:

```bash
show tables;
```

**Exemplo de resultado**

```bash
+--------------------+
| Tables_in_livraria |
+--------------------+
| autores            |
| capitulos          |
| livros             |
| vendas             |
+--------------------+
```

### Visualizar estrutura da tabela

Abra o terminal acesso o MySQL, em seguida acesse o banco de dados desejado e digite:

```bash
describe nome_tabela;
```

| Parâmetro     | Descrição                                         |
|---------------|---------------------------------------------------|
| `nome_tabela` | Nome da tabela de deseja visualizar sua estrutura |

**Exemplo de resultado**

```bash
+--------------------+---------------+------+-----+---------+----------------+
| Field              | Type          | Null | Key | Default | Extra          |
+--------------------+---------------+------+-----+---------+----------------+
| id                 | int(11)       | NO   | PRI | NULL    | auto_increment |
| nome               | varchar(100)  | NO   |     | NULL    |                |
| data_de_lancamento | date          | NO   |     | NULL    |                |
| autor_id           | int(11)       | NO   |     | NULL    |                |
| preco              | decimal(10,2) | NO   |     | NULL    |                |
+--------------------+---------------+------+-----+---------+----------------+
5 rows in set (0,00 sec)
```

### Dump da base de dados

Para criar uma cópia da base de dados desejados abara o terminal, acesse o diretório no qual deseja criar o arquivo em seguida digite o comando:

```bash
mysqldump -u root -p nome_tabela > nome-tabela.sql;
```

| Parâmetro         | Descrição                                                      |
|-------------------|----------------------------------------------------------------|
| `nome_tabela`     | Nome da tabela de deseja visualizar sua estrutura              |
| `>`               | Operador que indica o repasse do resultado para o arquivo      |
| `nome-tabela.sql` | Nome do arquivo que receberá as informações contídas na tabela |

Após executar o comando, será criado um arquivo .sql no local de desetino desejado. Caso você tenha o costume de utilizar por exemplo o PHPMyAdmin para gear o dump, recomendo que passe a utilizar o terminal, pois a interface gráfica em alguns casos pode gerar um arquivo .sql que ao ser importado por outro membro da sua equipe pode conter erros. Já o arquivo gerado pelo terminal as chances são mínimas, pois se o comando executado não apresentar erro seu resultado será correto e o arquivo gerado poderá ser importado sem maiores eventualidades.

### Dump somente da estrutura da base de dados

Abra o terminal vá ao diretório onde deseja criar o arquivo de backup e digite:

```bash
mysqldump -u root -p database_name --no-data > database_name.sql;
```

* **Parâmetro**
  * no-data
    * Indica que desejamos criar uma cópia do bando de dados sem as informações contidas nas tabelas.

Este comando é bem similar ao mencionado anteriormente, porém com a diferença que ele criar uma cópia da estrutura do banco de dados não realizando a exportação dos dados contidos nas tabelas.

### Importar banco de dados

Abra o terminal vá ao diretório onde encontra-se o bando de dados que deseja importar e digite:

```bash
mysql -u root -p database_name < database_name.sql;
```

Após execução do comando e o arquivo a ser importado não conter erros, sua importação será realizada com sucesso. Em casos de importação onde as tabelas do banco de dados contenham 100, 200, 300 mil (esse volume é até pequeno em comparação com banco de milhões de registros) ou mais registros isso acarretará em um tempo maior de processamento, basta aguardar até a finalização e liberação do terminal pelo processo.

### Dump de todos os bancos de dados

Abra o terminal, entre no diretório desejado para armazenar o arquivo de backup e digite:

```bash
mysqldump -u user -p --all-databases > full_path_to\file.sql
```

* **Parâmetro**
  * all-databases
    * Indica que desejamos exportar todas as bases de dados disponíveis no MySQL.

Após término da execução, será gerado um arquivo conforme especificado contento todos os bancos de dados do MySQL.

### Apagar tabela

Abra o terminal acesse o MySQL em seguida o banco de dados desejado e digite:

```bash
drop table nome_da_tabela;
```

* **Parâmetro**
  * drop table
    * Responsável por apagar a tabela do banco de dados.
  * nome_da_tabela
    * Nome da tabela ao qual se deseja apagar.


> **Utilize com muita cautela, pois após executar o comando a tabela será apagada do seu banco de dados!**

### Apagar a base de dados

Abra o terminal acesse o MySQL e digite:

```bash
drop database nome_do_banco_de_dados;
```

* **Parâmetro**
  * drop database
    * Responsável por apagar o banco de dados.
  * nome_do_banco_de_dados
    * Nome do banco de dados ao qual se deseja apagar.

Utilize com muita cautela, pois após executar o comando o banco de dados será apagado!

### Limpar o terminal

Acesse o terminal e pressione o seguinte comando:

```bash
ctrl+l
```

Este é um comando do terminal, porém muito útil quando estamos trabalhando com o MySQL ou qualquer banco de dados ou atividade no terminal, pois o mesmo limpa a tela do terminal para que possamos utilizá-lo com mais clareza e sem poluição de informações na tela.

Todos os comandos listados acima são recomendados para uso em _ambiente local_, não recomendo seu uso em ambiente de produção, caso vá utilizar tenha **MUITA CAUTELA e PARCIMÔNIA** com os comandos utilizados. Siga as boas práticas e com isso você verá que o uso do terminal irá maximizar sua performance.

Não tenha medo do terminal, sabendo utilizá-lo é uma ferramenta poderosíssima, podendo abrir um leque de opções fantásticas.

Espero que tenham apreciado este post e caso tenham alguma duvidas, sugestões ou crítica por favor deixe nos comentários e com isso podemos debater e aprender cada vez mais.

Grande abraço e até a próxima! 🙂
