---
title: Calculando intervalo entre datas excluindo os finais de semana – MySQL
author: Diego Brocanelli
type: post
date: 2018-06-14T22:44:07+00:00
url: /sql/calculando-intervalo-entre-datas-excluindo-os-finais-de-semana-mysql/
featured_image: /wp-content/uploads/2018/06/66_intervalo_entre_datas.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1888;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - mysql
  - SQL
tags:
  - date
  - datediff
  - diff
  - excluir
  - finais de semana
  - mysql
  - sql

---
Olá, tudo bem?!

### O problema

Calcular a diferença entre duas datas no MySQL é algo muito simples e fácil de se aplicar, recentemente tive a necessidade de realizar esta task, porém excluindo do total de dias os finais de semana. Após algumas horas de pesquisa e testes, cheguei ao resultado desejado e irei compartilhar com vocês.

### Resolução e demonstração prática

Para aplicação prática devemos inicialmente criar nosso banco de dados teste. Para a estrutura da tabela utilize o modelo abaixo.


```SQL
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_cadastro` datetime NOT NULL,
  `data_retirada` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

Devemos agora realizar a inserção de dados para testes.

```SQL
INSERT INTO `produtos` VALUES 
(1,'2018-06-05 00:00:00','2018-06-11 00:00:00'),
(2,'2018-06-01 00:00:00','2018-06-30 00:00:00'),
(3,'2018-04-01 00:00:00','2018-06-30 00:00:00');
```

Com o ambiente de testes configurado, podemos agora executar a query para busca de dados.  Inicialmente faremos a pesquisa da forma tradicional com o [datediff](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_datediff). Execute o seguinte comando MySQL.

```SQL
SELECT
  data_cadastro,
  data_retirada,
  DATEDIFF(data_retirada, data_cadastro) as total_dias
FROM produtos;
```

Como resultados devemos obter:

| data_cadastro | data_retirada | total_dias |
|--|--|--|
| 2018-06-05 00:00:00 | 2018-06-11 00:00:00 | 6 |
| 2018-06-01 00:00:00 | 2018-06-30 00:00:00 | 29 |
| 2018-04-01 00:00:00 | 2018-06-30 00:00:00 | 90 |

Como podemos observar, foi realizado a totalização do intervalo de datas como previmos.

Devemos agora realizar a criação de uma `function` para se encarregar do cálculo que desejamos, abaixo segue os códigos:

```SQL
CREATE FUNCTION GetDiasUteis(date2 DATETIME, date1 DATETIME)
RETURNS INTEGER DETERMINISTIC
BEGIN
DECLARE dt1 DATETIME;
DECLARE i INT;
DECLARE wd INT UNSIGNED;
SET i = 0;
SET wd = DAYOFWEEK(date1);
SET dt1 = date1;
IF DATEDIFF(date2, dt1) > 0 THEN
    WHILE DATEDIFF(date2, dt1) > 0 DO
        SET dt1:=DATE_ADD(dt1, INTERVAL 1 DAY);
        SET wd:=DAYOFWEEK(dt1);
        CASE WHEN wd in(2,3,4,5,6) THEN SET i:=i+1;
        ELSE SET i:=i;
        END CASE;
    END WHILE;
ELSEIF DATEDIFF(date2, dt1) < 0 THEN
    WHILE DATEDIFF(date2, dt1) < 0 DO
        SET dt1:=DATE_SUB(dt1, INTERVAL 1 DAY);
        SET wd:=DAYOFWEEK(dt1);
        CASE WHEN wd in(2,3,4,5,6) THEN SET i:=i-1;
        ELSE SET i:=i;
        END CASE;
    END WHILE;
END IF;
RETURN i;
END;
```

> **Observação:** O código da função não é de minha autoria, foi com base em pesquisa, porém decidi escrever o post algum tempo depois, com isso não localizei a fonte de origem. Caso encontre irei atualizar o post.

Podemos agora atualizar nossa query SQL, fazendo uso da função criada.

```SQL
SELECT
  data_cadastro,
  data_retirada,
  DATEDIFF(data_retirada, data_cadastro) as total_dias,
  GetDiasUteis(data_retirada, data_cadastro) `dias_uteis`
FROM produtos;
```

Como resultado devemos obter:

| data_cadastro | data_retirada | total_dias | dias_uteis |
| --- | --- | --- | --- |
| 2018-06-05 00:00:00 | 2018-06-11 00:00:00 | 6 | 4 |
| 2018-06-01 00:00:00 | 2018-06-30 00:00:00 | 29 | 20 |
| 2018-04-01 00:00:00 | 2018-06-30 00:00:00 | 90 | 64 |

Tendo a função como base, podemos futuramente criar uma tabela com as datas de feriados ou dias a serem excluídos e subtrair dos dias úteis, bastando apenas atualizar a função. Deixe um comentário caso tenha interesse que eu escreva um post sobre o assunto.

### Considerações finais

Fazendo uso de uma função pudemos obter o resultado desejado, facilitando seu uso e centralizando a ação.

### Agradecimentos

Espero que tenham apreciado esta dica, pois levei um bom tempinho para chegar nessa solução, além de tudo espero que seja útil em seu dia a dia.

Agradeço pela sua atenção e sucesso em seus projetos.
