---
title: Defesa eficaz contra SQL Injection – Introdução
author: Diego Brocanelli
type: post
date: 2017-02-06T22:08:07+00:00
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
  - SQL
tags:
  - sql
  - SQL Injection

---
Fala galera, tudo tranquilo?!

Um tema muito bacana e recorrente no desenvolvimento web é SQL Injection e neste post irei abordar algumas boas práticas na defesa contra esses ataques.

Teremos 3 posts relacionados ao tema, sendo:

1. Introdução ao SQL Injection.
2. Filtragem e validação de dados.
3. Comunicação com o banco de dados.

## O que é SQL Injection?

É um tipo de ameaça relacionado a segurança, que se aproveita de falhas em sistemas que interagem com bases de dados para inserir trechos de código SQL para realizar ações não desejadas e  para manipular, roubar ou danificar a estrutura ou dados contidos no banco de dados.

## Quais são os tipos mais comuns de SQL Injection?

* Poorly Filtered Strings 
  * Relacionado a passagem de parâmetros (dados) não filtratos e passados de forma direta para a consulta SQL.
* Incorrect type handling 
  * Ocorre quando o tipo do parâmetro informado não é validado e passado de forma direta para a consulta SQL.
* Signature Evasion 
  * Quando ocorre o escape da assinatura de sistema para detecção de SQL Insection como por exemplo o &#8220;mod_security&#8221; do Apache.
* Filter Bypassing 
  * Em determinadas condições filtros como &#8220;addslashes&#8221; e &#8220;magic\_quotes\_gpc&#8221; podem ser ignorados quando o servidor SQL vulnerável está usando conjuntos de caracteres, como o conjunto de caracteres &#8220;GBK&#8221;.
* Blind SQL Injection 
  * São pequenas mudanças perceptíveis no sistema resultante da injeção SQL.

## Quais os problemas que isso pode me causar?

* Perda parcial ou total dos dados do sistema.
* Sequestro de dados sigilosos.
* Alteração e/ou manipulação direta dos dados.

Como vimos neste post por mais comum que seja o tema, devemos sempre estar atento no processo de desenvolvimento de sistemas para que boas práticas sejam empregadas e assim deixarmos cada vez mais seguras e confiáveis para o usuário.

No próximo post &#8220;[Defesa eficaz contra SQL Injection &#8211; Filtragem e validação dos dados][1]&#8221; vamos abordar técnicas básicas e avançadas para o tratamento de dados da nossa aplicação.

Espero que tenham apreciado 🙂

 [1]: http://www.diegobrocanelli.com.br/php/defesa-eficaz-contra-sql-injection-filtragem-e-validacao-dos-dados/