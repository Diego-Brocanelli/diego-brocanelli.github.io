---
title: Composer – Automatizando tarefas com Scripts
author: Diego Brocanelli
type: post
date: 2018-01-21T15:36:22+00:00
url: /php/composer-automatizando-tarefas-com-scripts/
featured_image: /wp-content/uploads/2018/01/60_composer_scripts.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1668;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - automatização
  - composer
  - php
  - scripts

---

Olá, tudo bem!

Que o Composer é uma ferramenta sensacional isso nós já sabemos, porém o que poucos sabem é que ele dispõem de recursos de execução de scripts para nos auxiliar na automatização de tarefas.

Acredite, após conhecer esse recurso você vai adotá-lo em seu dia a dia, pois irá lhe economizar um bom tempo em seu dia a dia.

### O que é um script?

Em uma tradução livre podemos encontrar a seguinte definição na documentação do composer.

> Um script, nos termos do Compositor, pode ser um retorno de chamada do PHP (definido como um método estático) ou qualquer comando executável de linha de comando. Os scripts são úteis para executar o código personalizado do pacote ou comandos específicos do pacote durante o processo de execução do Composer.

E para definir os scripts eles devem ser declarados no arquivo `composer.json`.


### Definindo nosso primeiro script.

Para demonstrar como definir os scripts dentro do arquivo composer.json irei utilizar como base o projeto [Calculadora de IMC](https://github.com/Diego-Brocanelli/projeto-calculadora-de-imc) este é o projeto de nível iniciante do [grupo de estudos que lidero de PHP/POO](https://github.com/training-center/php-study-group) do [Training Center](https://github.com/training-center), aqui vai um jaba, caso você tenha interesse em aprender/aperfeiçoar ou transmitir seu conhecimento, seja ele em PHP, Java, Cloujure, React, Ruby, Frontend e muito muitas, venha participar dos nosso projetos e grupos de estudos que são excelentes e dispõem de uma comunidade gigante com muita vontade de colaborar e ajudar a crescermos juntos.

Caso você não conheça nada sobre o composer, recomendo os seguintes materiais que disponho no meu blog, sendo:

* Post sobre [Iniciando com Composer](http://www.diegobrocanelli.com.br/php/iniciando-com-composer/).
* Vídeo da 14º edição do projeto hhbr que foi sobre [Iniciando com Composer](/hhbr/hhbr-14-iniciando-com-composer-video/).

Após criação do clone do projeto[Calculadora de IMC](https://github.com/Diego-Brocanelli/projeto-calculadora-de-imc), abra o mesmo em um editor de código de sua preferência. No meu caso será o [VSCode](https://code.visualstudio.com/).

Em seguida abra o arquivo _composer.json_ que se encontra na raiz do diretório, onde podemos visualizar toda sua estrutura, veja o conteúdo abaixo.

```json
{
  "name": "DiegoBrocanelli/CalculadoraIMC",
  "description": "Projeto para realização de cálculo do IMC",
  "license": "MIT",
  "authors": [
      {
          "name": "Diego Brocanelli",
          "email": "diegod2@msn.com"
      }
  ],
  "minimum-stability": "dev",
  "autoload": {
      "psr-4": {
          "DiegoBrocanelli\\": "src/"
      }
  },
  "require": {
      "PHP":">=7.0.0",
      "phpunit/phpunit": "^6.5"
  },
  "scripts":{
      "server":"php -S localhost:8080 public/index.php",
      "tests":"vendor/bin/phpunit test/"
  }
}
```

As informações que iremos focar são os descritos na sessão scripts, sendo:

```json
"scripts":{
  "server":"php -S localhost:8080 public/index.php",
  "tests":"vendor/bin/phpunit test/"
}
```

Como podemos observar, para que possamos definir scripts para execução do composer devemos declarar no arquivo composer.json uma sessão denominada &#8216;scripts&#8217; sendo dentro desta onde devemos descrever todos os scripts que desejamos executar.

Cada script é definido e executado de forma individual, entretanto mais a frente veremos como referenciar scripts.

### Executando nossos scripts

#### Script para executar o servidor embutido do PHP

Como primeiro exemplo de script, temos:

```json
"server":"php -S localhost:8080 public/index.php",
```

A estrutura do script é simples tendo chave  como nome do script e valor o script em si.

O script acima é responsável por executar o servidor embutido do PHP, e para executá-lo devemos executar o seguinte comando no terminal, sendo:


```bash
composer server
```

Com isso sabemos que o servidor embutido do PHP está em execução.

### Script para executar os testes unitários

```json
"tests":"vendor/bin/phpunit test/"
```

O script acima é responsável por executar os testes unitários criados com o PHPUnit.

Para executá-lo, devemos rodar o seguinte comando no terminal, sendo:


```bash
composer tests
```

Podemos observar que a criação de scripts para o composer é simples e nos auxilia muito na execução de tarefas repetitivas poupando muito tempo.

Esses dois exemplos são simples, porém muito úteis. Você pode criar o script que desejar e com isso dispor de um leque de recursos para o seu dia a dia.

Nos próximos passos irei detalhar um pouco mais dos recursos disponíveis para a criação de scripts mais avançados.

### Eventos

Eventos são recursos poderosos que podem nos auxiliar a deixar nossos scripts muito mais robustos e completos, eles são disparados conforme processo executado.


> Nota: Os textos dos eventos são traduções livres realizados com base na [documentação oficial do composer][1].

### Eventos de comando

* **pre-install-cmd**: ocorre antes do comando  _install_ ser executado com um arquivo de bloqueio presente.
* **post-install-cmd**: ocorre após o comando  _install_ ter sido executado com um arquivo de bloqueio presente.
* **pre-update-cmd**: ocorre antes do comando _update_ ser executado ou antes do comando _install_ ser executado sem um arquivo de bloqueio presente.
* **post-update-cmd**: ocorre após o comando  _update_ ter sido executado ou após o comando _install_ ter sido executado sem um arquivo de bloqueio presente.
* **post-status-cmd**: ocorre após o comando _status_ ser sido executado.
* **pre-archive-cmd**: ocorre antes do comando _archive_ ser executado.
* **post-archive-cmd**: ocorre após o comando _archive_ ter sido executado.
* **pre-autoload-dump**: ocorre antes que o carregador automático seja despejado, durante _install_/ _update_, ou através do comando _>dump-autoload_.
* **post-autoload-dump**: ocorre após o carregador automático ter sido despejado, durante _install_/_update_, ou através do comando _dump-autoload_.
* **post-root-package-install**: ocorre após o pacote raiz foi instalado, durante o comando _create-project_.
* **post-create-project-cmd**: ocorre após o comando _create-project_ ter sido executado.


### Eventos de instalação

* **pre-dependencies-solving**: ocorre antes que as dependências sejam resolvidas.
* **post-dependencies-solving**: ocorre após as dependências terem sido resolvidas.

### Eventos de pacotes

* **pre-package-install**: ocorre antes que um pacote esteja instalado.
* **post-package-install**: ocorre após o pacote ter sido instalado.
* **pre-package-update**: ocorre antes que um pacote seja atualizado.
* **post-package-update**: ocorre depois que um pacote foi atualizado.
* **pre-package-uninstall**: ocorre antes que um pacote seja desinstalado.
* **post-package-uninstall**: ocorre depois que um pacote foi desinstalado.

### Plugins

* **init**: ocorre depois que uma instância do Composer é feita inicializando.
* **comando**: ocorre antes que qualquer comando Composer seja executado na CLI. Ele fornece acesso aos objetos de entrada e saída do programa.
* **pre-file-download**: ocorre antes que os arquivos sejam baixados e permite que você manipule o _RemoteFileSystemobjeto_ antes de baixar os arquivos com base no URL a ser baixado.

### Referenciando scripts

Um recurso muito poderoso e que nos auxilia a não duplicar scripts é poder referenciar um script em outro.

Para referenciar um script basta chamá-lo inserindo um `@` antes do seu nome, por exemplo:


```json
"scripts": {
  "test": [
    "@clearCache",
    "phpunit"
  ],
  "clearCache": "rm -rf cache/*"
}
```

No exemplo acima podemos visualizar dois scripts, sendo que no script de `test` temos a referência o script `clearCache`, como podemos observar foi declarado utilizando o `@clearCache`.

Quando o comando `composer test` for executado ele irá executar o `clearCache` em seguida o `phpunit`.

Com este recurso fica livre a criação de múltiplos scripts, onde somente sua imaginação e criatividade será limite.

### Considerações finais

Como podemos observar neste post o composer é uma ferramenta que dispõem de recursos incríveis, convido que você leia a [documentação](https://getcomposer.org/doc/articles/scripts.md) pois neste post sintetizei os pontos que acredito serem os principais para iniciar no uso de scripts.

Toda ferramenta deve ser utilizada com parcimônia, obviamente incentivo que faça seus testes crie seus scripts, pois somente assim você encontrará os recursos que lhe auxiliam mais em seu dia a dia.

Espero que este post tenha agregado valor e conhecimento em seu dia.

Grande abraço e sucesso em seus projetos.

 [1]: https://getcomposer.org/doc/articles/scripts.md