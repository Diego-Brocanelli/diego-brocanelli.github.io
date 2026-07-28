---
title: Comandos básicos do MySQL no terminal
author: Diego Brocanelli
type: post
date: 2017-04-21T16:27:37+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - mysql
  - terminal
tags:
  - command line
  - mysql
  - prompt
  - terminal
---

## Introdução

Manipular bancos de dados via terminal é uma habilidade essencial para desenvolvedores. O terminal oferece rapidez e eficiência para tarefas cotidianas. A seguir, apresento uma lista de comandos básicos do MySQL, organizados por categoria, para auxiliar no seu dia a dia.

Todos os comandos apresentados neste post podem ser executados no terminal de sua preferência.

## 1. Conexão e Navegação

### Conectar ao MySQL

```bash
mysql -u [usuário] -p
```

| **Parâmetro** | **Propósito** |
| --- | --- |
| -u | Informar qual o nome de usuário deseja usar para se conectar ao MySQL |
| -p | Exige que a senha seja informada |

### Conectar diretamente a um banco de dados

```bash
mysql -u [usuário] -p [nome_do_banco]
```

### Listar todos os bancos de dados

```sql
SHOW DATABASE;
```

### Selecionar um banco de dados

```sql
USE [nome_do_banco];
```

### Listar tabelas do banco selecionado

```sql
SHOW TABLES;
```

### Ver estrutura de uma tabela

```sql
DESCRIBE [nome_da_tabela];
```

---

## 2. Gerenciamento de Bancos e Tabelas

### Criar um novo banco de dados

```sql
CREATE DATABASE [nome_do_banco];
```

### Apagar um banco de dados

```sql
DROP DATABASE [nome_do_banco];
```

> **Atenção!** Use com cautela, pois o banco de dados será APAGADO!
> 

### Criar uma nova tabela

```sql
CREATE TABLE [nome_da_tabela] (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  data_criacao DATE
);
```

**Exemplo:**

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255)  NOT NULL,
  created_at DATETIME
);
```

### Apagar uma tabela

```sql
DROP TABLE [nome_da_tabela];
```

> **Atenção!** Use com cautela, pois a tabela e seus dados serão APAGADOS!
> 

## 3. Manipulação de Dados

### Inserir dados em uma tabela

```sql
INSERT INTO [nome_da_tabela]
(coluna1, coluna2)
VALUES
('valor1', 'valor2');
```

**Exemplo:**

```sql
INSERT INTO users
(name, email, password)
VALUES
("José Couves", "couves.jose@couves.com", "$2y$10$uZs5/2rONn8vn1zSGMybDO2p0G9qz9jLddqbQNE2TNLQaRPb9PyNe
");
```

### Inserir de múltiplos dados em uma tabela

```sql
INSERT INTO [nome_da_tabela]
(coluna1, coluna2)
VALUES
('valor1', 'valor2'),
('valor1', 'valor2'),
('valor1', 'valor2'),
('valor1', 'valor2'),
('valor1', 'valor2');
```

**Exemplo:**

```sql
INSERT INTO users
(name, email, password)
VALUES
("José Couves", "couves.jose@couves.com", "$2y$10$uZs5/2rONn8vn1zSGMybDO2p0G9qz9jLddqbQNE2TNLQaRPb9PyNe"),
("Ana Couves", "couves.ana@couves.com", "$2y$10$GexKU3b3xD48gEB0upptSOKQKj9fGHyB9v5A5U/jNDcC6ElpL9zDi"),
("Carlos Couves", "couves.carlos@couves.com", "$2y$10$Jj8iD/6RgDCug6OgZqzRXOw5x0tx91/nx/2mQeRpbM65czYgJIoUy"),
("Beatriz Couves", "couves.beatriz@couves.com", "$2y$10$9cfZIl/BDpdaC4l4qV6JHOGcGCrVfUMN8G2Sg97Zq2oSeVqMnx6dW");
```

### Consultar dados de uma tabela

```sql
SELECT * FROM [nome_da_tabela];
```

**Exemplo:**

```sql
SELECT name, email
FROM users;
```

### Atualizar dados em uma tabela

```sql
UPDATE [nome_da_tabela]
SET [coluna] = 'novo_valor'
WHERE [condição];
```

**Exemplo:**

```sql
UPDATE users
SET name = 'Antônio Carlos Couves',
    email = "couves.antonio@couves.com"
WHERE id = 4;
```

### Deletar dados de uma tabela

```sql
DELETE FROM [nome_da_tabela] WHERE [condição];
```

**Exemplo:**

```sql
DELETE FROM users WHERE id = 4;
```

## 4. Backup e Restauração

### Exportar (dump) um banco de dados

```bash
mysqldump -u [usuário] -p [nome_do_banco] > backup.sql
```

### Exportar (dump) apenas a estrutura do banco de dados

```sql
mysqldump -u [usuário] -p [nome_do_banco] --no-data > backup.sql;
```

### Exportar todas as bases de dados

```bash
mysqldump -u [usuário] -p --all-databases > todos_bancos.sql
```

### Importar um banco de dados

```bash
mysql -u [usuário] -p [nome_do_banco] < backup.sql
```

> **Observação:** Esse comando importa qualquer conteúdo SQL presente no arquivo, não apenas a estrutura de um banco.
> 

## 5. Gerenciamento de Usuários e Permissões

### Criar um novo usuário

```sql
CREATE USER 'novo_usuario'@'localhost' IDENTIFIED BY 'senha';
```

| **Parâmetro** | **Ação** |
| --- | --- |
| “localhost” | O usuário apenas se conecta por meio da máquina local |
| “%” | O usuário pode se conectar de qualquer IP remoto |

> **Obs.:** Ambos os tipos de conexão são válidas, a “localhost” seria mais restritiva, porém, tudo dependerá das suas necessidades.
> 

### Conceder privilégios a um usuário

```sql
GRANT ALL PRIVILEGES ON [nome_do_banco].* TO 'novo_usuario'@'localhost';
```

> **Atenção!** Privilégios devem ser concedidos apenas a usuários que realmente necessitam. Caso contrário, não!
> 

### Visualizar privilégios de um usuário

```sql
SHOW GRANTS FOR 'novo_usuario'@'localhost';
```

### Revogar privilégios de um usuário

```sql
REVOKE ALL PRIVILEGES ON [nome_do_banco].* FROM 'novo_usuario'@'localhost';
```

## 6. Comandos Úteis

### Ver versão do MySQL

```bash
mysql -V
```

### Limpar a tela do terminal

- No terminal: `Ctrl + L`;
- No MySQL Shell: `\clear`.

### Sair do MySQL

```sql
EXIT;
```

## Tabela de Referência Rápida

| Ação | Comando |
| --- | --- |
| Listar bancos | `SHOW DATABASES;` |
| Selecionar banco | `USE nome_do_banco;` |
| Listar tabelas | `SHOW TABLES;` |
| Ver estrutura da tabela | `DESCRIBE nome_da_tabela;` |
| Inserir dados | `INSERT INTO ... VALUES (...);` |
| Exportar banco | `mysqldump -u user -p db > backup.sql` |
| Importar backup | `mysql -u user -p db < backup.sql` |
| Criar usuário | `CREATE USER 'user'@'host' IDENTIFIED BY 'senha';` |

## Considerações Finais

Compreender os comandos básicos do MySQL permite atuar com mais autonomia, entender melhor o funcionamento de ORMs e resolver problemas rapidamente, mesmo sem interface gráfica.

## Referências

- [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)
