---
title: Gerando documentação do seu sistema utilizando a API SAMI
author: Diego Brocanelli
type: post
date: 2016-05-12T01:57:27+00:00
url: /php/gerando-documentacao-do-seu-sistema-utilizando-a-api-sami/
featured_image: /wp-content/uploads/2016/05/06_documentacao_api_sami.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1360;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - documentacao
  - php
tags:
  - documentação
  - php
  - sami

---

Fala pessoal tudo tranquilo?

Quem nunca se deparou com a necessidade de documentar o sistema que está desenvolvendo, para que outros programadores consigam realizar novas implementações, correções ou até mesmo consumir a API.

Sabemos que a documentação é algo essencial e indispensável no desenvolvimento de softwares para garantir a longevidade de nossos sistemas. O PHP não fica para trás neste quesito, atualmente no [PHP-FIG](http://www.php-fig.org) está em processo de &#8220;Draft&#8221; a [PSR-5](http://www.php-fig.org/psr/) visando um padrão para PHPDoc para comunidade PHP. Este post não visa analisar nem menos discutir sobre a PSR, e sim demostrar a criação de forma simples a documentação do nosso sistema.

Mencionado isso, Show me the code!!!

Para darmos início com o exemplo, vamos construir a estrutura da nossa aplicação, tendo a seguinte estrutura:


*  **docs**
  * config.php
  * sami.phar
* **src**
  * _App_
    * Controller 
      * ProductController.php
    * Model 
      * Product.php
    * Service 
      * ProductList.php

Lembrando que tanto a estrutura, classes e códigos são meramente ilustrativo, para servir de base para nossa documentação. Com isso peço que não se apegue a nomes e ações, pois não é este o foco do post.

Continuando com nosso exemplo, devemos acessar o repositório do projeto [Sami no GitHub](https://github.com/FriendsOfPHP/Sami).

### Instalação

Devemos adquirir o arquivo .phar, e para isso temos duas possibilidades, sendo:

Pela linha de comando, utilizando CURL.

```bash
curl -O http://get.sensiolabs.org/sami.phar
```
Baixando diretamente pelo link o arquivo [sami.phar](http://get.sensiolabs.org/sami.phar).

Após a realização do download, vamos implementar o conteúdo do nosso arquivo de configuração _config.php_, localizado dentro do diretório docs.

```php
<?php

use Sami\Sami;
// Componente desenvolvido pela Sensiolabs, para encontrar arquivos e diretórios http://symfony.com/doc/current/components/finder.html
use Symfony\Component\Finder\Finder; 

$iterator = Finder::create()
  ->files()
  ->name('*.php')// todos os arquivos .php
  ->in(__DIR__.'/../src'); // local onde deverá realizar a verificação.

$configuration = [
  'theme'     => 'default',
  'title'     => 'Test Sami API', // Título que será exibido na view HTML
  'build_dir' => __DIR__.'/build', 
  'cache_dir' => __DIR__.'/cache',
];

return new Sami($iterator, $configuration); // O arquivo DEVE retornar uma instancia de Sami.
```

Após as configurações serem realizadas, devemos acessar o diretório do nosso projeto pelo terminal.

![terminal_para_rodar_comando_sami](/wp-content/uploads/2016/05/terminal_para_rodar_comando_sami.png)


Agora basta utilizar o seguinte comando para gerar a documentação.

```bash
php docs/sami.phar update docs/config.php
```

Após executar o comando será exibido o seguinte resultado.

![geracao_da_documentacao](/wp-content/uploads/2016/05/geracao_da_documentacao.png)

Vamos acessar o diretório _dosc/build_ e abrir o arquivo _index.html_.

![documentacao_gerada](/wp-content/uploads/2016/05/documentacao_gerada.png)

Pronto, foi gerado a documentação do nosso sistema, de forma muito simples.

Agora cabe alguns apontamentos

Nós utilizamos o comando _update_ e com isso ele gera automaticamente o parse e o render da nossa documentação, porem podemos fazer estes dois processo de forma isolada.

Para gerar somente o parser, devemos executar o comando _parser_.

```bash
php docs/sami.phar parser docs/config.php
```

E para gerar o render, devemos utilizar o comando _render_.

```bash
php docs/sami.phar render docs/config.php
```

Muito simples e óbvio hehehe.

O que você pode estar se perguntando é, &#8220;Mas Diego, nós geramos a documentação de uma pequenina aplicação, será que aquenta gerar a documentação de uma aplicação de grande porte?&#8221;.

Minha resposta é, SIM!!! E para lhe provar basta você acessar a documentação da [_API_ do _Symfony_](http://api.symfony.com/3.0/index.html).

Esta demonstração apenas arranhou as possibilidades de uso da ferramenta, podendo  por exemplo criar layaut.

Caso tenham alguma dúvida no código podem acessar o [repositório no GitHub deste post](https://github.com/Diego-Brocanelli/testSamiDo).

Espero que tenham gostado, até a próxima! 🙂

 [1]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/terminal_para_rodar_comando_sami.png
 [2]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/geracao_da_documentacao.png
 [3]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/05/documentacao_gerada.png