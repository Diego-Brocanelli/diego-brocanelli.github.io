---
title: Melhore a qualidade do código da sua equipe com Code Review
author: Diego Brocanelli
type: post
date: 2017-05-10T22:20:12+00:00
url: /php/melhore-qualidade-codigo-da-sua-equipe-com-code-review/
featured_image: /wp-content/uploads/2017/05/42_code_review.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1396;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - code review
  - desenvolvimento
  - php
tags:
  - code quality
  - Code Review
  - qualidade de código
  - time

---
Olá, tudo bem?!

Um dos métodos que podemos utilizar para melhorar nosso source code é adotar a pratica de code review.

Ao realizar este processo, teremos a oportunidade de compartilhar conhecimento, melhorar o código e diminuir a quantidade de bugs que possivelmente existem no sistema.

### Mas o que é code review?

Alguém (técnico) que não seja você, que irá analisar o seu código.

#### Regras para um bom code review

* De 200 à 400 linhas de código no máximo.
* Sem pressa.
* Limite de até 1hora.
* Use: 
  * Checklist.
  * Ferramentas para automatizar o processo.
* Não faça o processo de code review em seu próprio código.

#### O que avaliar?

* A implementação atende os requisitos da task?
* Análise de bug.
* Segue code standarts? 
  * Exemplo: 
    * [PSR-1][1].
    * [PSR-2][2].
* Contém código duplicado?
* O código é legível?
* Deixou o código melhor do que quando você o pegou?
* Buscar por erros.
* Indentação de código.
* Nomes de variáveis/métodos/classes.
* Testes: 
  * Cobrem as partes que deveriam cobrir?
  * São legíveis?
* Segue boas práticas de desenvolvimento? 
  * [Object Calisthenics][3].
  * S.O.L.I.D.
* Otimização de rotinas.
* Execução das ferramentas: 
  * Por exemplo: 
    * [PHP-CS-Fixer][4].
    * [PHPMD][5].
    * [CodeSniffer][6].
* Remover código comentado.
* Sugerir melhorias.

#### O que não  executar ou avaliar?

* Emitir opinião sobre a forma que o indivíduo trabalha.
* Forçar que o desenvolvedor siga o seu processo de desenvolvimento.
* Seja imparcial, avalie o código não a pessoa.

#### Quais as vantagens de se ter um code review?

* Aumento de produtividade.
* Auto aperfeiçoamento.
* Compartilhar conhecimento: 
  * Técnico.
  * Do produto.
* Economia para a empresa.
* Melhor base code.
* Redução de bugs nos sistemas.

#### Como realizar um code review?

Pode ser realizado de duas maneiras, sendo:

* Presencial
* Remota

Escolha alguém com quem você se sinta confortável.

Aceite as sugestões de melhorias.

Compartilhe conhecimento.

Explique as tomadas de decisões inseridas no código.

#### Ferramentas para automatizar o Code Review

* Code Climate (https://codeclimate.com/) Free para opensource
* Codacy (https://www.codacy.com/) Free para opensource
* CodeBeat (https://codebeat.co/) Free para opensource

### Modelo de checklist  
  * **Código** 
    * [  ] O recurso funciona?
    * [  ] Desempenha o papel esperado, a lógica está correta, cumpre o requerido na task?
    * [  ] É facilmente entendido?
    * [  ] Respeita as convenções de codificação definidas para o projeto?
    * [  ] Existe algum código redundante ou duplicado?
    * [  ] É o mais modular possível?
    * [  ] Algum código de log ou debug pode ser removido?
    * [  ] Se a tarefa exigir a inclusão de uma nova biblioteca/componente no composer.json toda a equipe deve ser informada para evitar problemas de compatibilidade. O mesmo caso seja necessária uma atualização de versão de uma biblioteca/componente já existente
    * [  ] Foi removido todo código comentado?
  * **Segurança** 
    * [   ] Todos os inputs foram validados
    * [   ] Tipo
    * [   ] Maxlenght
    * [   ] Formato
    * [   ] Valores válidos
    * [   ] Os parâmetros inválidos foram tratados?
    * Documentação
      * [   ] É necessário executar algum comando extra (composer/npm/&#8230;) para que o código funcione?
      * [   ] O código possui documentação? Nos principais métodos e lógicas complexas?
      * [   ] Todas as variáveis foram definidas com:
      * [   ] Nomes significativos
      * [   ] Consistentes
      * [   ] Legíveis
      * [   ] Claro
  * **Performance** 
    * [   ] As consultas do Doctrine (ou do banco de dados, ou Zend\Sql, etc) foram otimizadas pensando-se em melhoria de performance?
    * [   ] Informações que podem ser armazenadas em cache estão sendo cacheadas?
    * [   ] Processamentos redundantes ou lentos foram otimizados?
    * [   ] Foi evitado o uso de construções IF-ELSE para diminuir a complexidade da execução?
  * **Banco de dados** 
    * [   ] Nome da tabela está correto.
    * [   ] Estrutura da tabela está correta:
    * [   ] Descrição dos campos.
    * [   ] Tipo.
    * [   ] Restrições e valores default.
    * [   ] Charset.
    * [   ] Charset do banco de dados.
    * [   ] Backup da base de dados?
    * [   ] As migrations foram bem criadas?
    * [   ] Arquivo de update.
  * **Testes de navegadores** 
    * Testar a interface seguindo os requisitos mínimos de navegadores: 
      * [   ] Microsoft Internet Explorer 9.0
      * [   ] Chrome 35.0
      * [   ] Firefox version 35

Não tenha medo nem vergonha de utilizar um checklist, pois confiar que lembraremos de todos os pontos para realizar um code review é insano e muito perigoso. Lembres-se uma task bem feita e entregue vale mais do que um ego inflado 🙂

### Links de referência

* [Compartilhando Qualidade e Conhecimento com Code Review &#8211; Antonio Spinelli](https://www.youtube.com/watch?v=yiXWMwgHsvU);
* [Modelo PDF de Checklist](https://www.liberty.edu/media/1414/%5B6401%5Dcode_review_checklist.pd);
* [Coderockr &#8211; Code Review](https://github.com/Coderockr/CodeReview).

Aderir ao processo de code review traz inúmeras vantagens e melhorias ao time e produto. Os pontos listados acima não são leis, pois cada time deve moldar o processo como melhor se adequá a suas necessidades.

Caso o seu time faça algo que não foi mencionado deixe nos comentários, assim podemos debater mais sobre o assunto e consequentemente aprender mais 🙂

Espero que tenham apreciado o conteúdo e até a próxima.

Abraços!

 [1]: http://www.php-fig.org/psr/psr-1/
 [2]: http://www.php-fig.org/psr/psr-2/
 [3]: http://eltonminetto.net/2016/06/24/como-melhorar-seus-codigos-usando-object-calisthenics/
 [4]: https://github.com/FriendsOfPHP/PHP-CS-Fixer
 [5]: https://phpmd.org/
 [6]: https://github.com/squizlabs/PHP_CodeSniffer