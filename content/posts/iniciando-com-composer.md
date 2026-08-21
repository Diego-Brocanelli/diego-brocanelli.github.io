---
title: Iniciando com Composer
author: Diego Brocanelli
type: post
date: 2017-03-24T19:05:05+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - composer
  - php
tags:
  - composer
  - php
  - terminal

---

Olá, tudo bem?

Em diversos posts aqui no blog faço uso do <a href="https://getcomposer.org/">Composer</a>, e menciono sua importância no ecossistema PHP, porém neste post vamos entrar em mais detalhes sobre essa maravilhosa ferramenta.

## O que é o composer?

Uma ferramenta para gerenciamento de pacotes PHP. Caso você seja usuário Linux, podemos comparar (com as devidas resalvas) o composer com o apt-get.

Citando o amigo [Elton Minetto](http://eltonminetto.net/):


> &#8220;O composer é a melhor invensão depois do pão de forma&#8221; - Minetto, Elton.

## O que ele faz?

Gerencia todos os pacotes que sua aplicação tem como dependente, podendo instalar, atualizar ou remover facilmente qualquer pacote.

## Como ele funciona?

Todo projeto PHP deve conter um arquivo chamado composer.json, onde nele será definido todas as dependências e informações do seu projeto.

Podemos visualizar abaixo um exemplo do arquivo composer.json do projeto [image-gravatar-php](https://github.com/Diego-Brocanelli/image-gravatar-php/blob/master/composer.json).


```json 
{
  "name": "diego-brocanelli/image-gravatar-php",
  "description": "Library for get images Gravatar",
  "type": "Library",
  "license": "BSD-3",
  "version":"1.0",
  "authors": [
    {
      "name": "Diego Brocanelli",
      "email": "diegod2@msn.com"
    }
  ],
  "minimum-stability": "dev",
  "require": {
    "php": ">=5.3.8"
  },
  "autoload": {
    "psr-4":{
      "DiegoBrocanelli\\Gravatar\\":"src/Gravatar"
    }
  }
}
```

## Instalando o Composer

Existem duas maneiras para instalá-lo utilizando o composer.phar, sendo um único arquivo que contém o Composer e pode ser utilizado de forma isolada dos demais projetos ou de forma global na sua maquina, eu faço uso da segunda opção pois como uso com certa frequência fica mais fácil.



## Instalar no Windows

Acesse a URL [https://getcomposer.org/download/](https://getcomposer.org/download) e realize o download do arquivo [composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe), onde basta seguir o modelo next, next finish.


## Instalar no Linux

Basta executar os comandos abaixo:

```bash
php -r "readfile('https://getcomposer.org/installer');" | php
Com o comando abaixo, basta digitar composer no prompt para acessar
sudo mv composer.phar /usr/bin/composer
```

Após o processo de instalação finalizar abra o terminal e digite:

```bash
composer --version
```
E pronto será exibido a versão instalada.

> Nota: Obrigado ao colega [Andre Cardoso][1] por prestigiar o conteúdo e contribuir com uma dica para melhoria do post.


## O arquivo composer.json

Como mencionado acima, todas as configurações que o Composer necessita deve estar descrito em seu arquivo composer.json, sendo assim cada projeto deve ter o seu arquivo exclusivo.

A maneira mais simples de se obter o nosso arquivo é acessando o terminal (deu para notar que o terminal é uma ferramenta indispensável para nós 🙂 ) acesse o diretório onde deseja criar o arquivo e execute o seguinte comando:

```bash
composer init
```

Ele automaticamente iniciará o processo de criação fazendo as seguintes perguntas:

O nome do pacote, o composer utiliza o [Packagist](https://packagist.org/) como repositório defautl de projetos e também utiliza/respeita as [PSR-0 e PSR-4]http://www.php-fig.org/psr/(). Então devemos também seguir as recomendações para a criação do vendor do nosso pacote.


```bash
Package name (<vendor>/<name>) [root/exemplo-composer]:
```

Após a definição do nome, será requisitado a descrição do pacote, recomendado evitar caracteres especiais ou acentuação para evitar quebra de string.

```bash
Description []:
```

Autor do arquivo/pacote:

```bash
Author [SEU NOME <seur_email@email.com>, n to skip]:\
```

A instabilidade do pacote, devendo ser &#8216;stable, rc, beta, alpha ou dev&#8217;:

```bash
Minimum Stability []:
```

O tipo do projeto (library, project, metapackage ou composer-plugin):

```bash
Package Type (e.g. library, project, metapackage, composer-plugin) []:
```

O tipo de licença (muito importante! Caso tenha alguma dúvida, tenho um post sobre o assunto &#8220;[Software livre de código aberto e software gratuito, quais são suas diferenças?](http://www.diegobrocanelli.com.br/open-source/software-livre-de-codigo-aberto-e-software-gratuito-quais-sao-suas-diferencas/)&#8220;)

```bash
License []:
```

E caso você deseje, poderá definir os pacotes que você deseja instalar no projeto:

```bash
Would you like to define your dependencies (require) interactively [yes]?
```

Por ultimo, irá imprimir no terminal o arquivo demonstrativo e lhe questionar se as informações inseridas estão corretas, no final basta digitar yes e pressionar enter, caso não aceite o processo é interrompido.

Pode parecer longo, porem esse processo não leva mais do que alguns segundos, como o composer realiza o download dos componente que você irá utilizar em seu sistema a agilidade no processo de instalação fica atrelada a velocidade e qualidade da internet.

## O arquivo composer.lock

Após a execução do comando &#8216;composer install&#8217; será gerado nosso arquivo composer.lock, onde será armazenado as versões exatas de todos os pacotes que foi instalado em seu projeto. Isso é excelente pois com isso todos os integrantes do time terá a garantia de obtenção dos mesmos pacotes.

É recomendado que este arquivo entre em seu controle de versão justamente pelo motivo citado acima, garantindo a integridade do seu projeto para qualquer membro do time.

Se o seu projeto já venha com o arquivo de lock, basta executar o comando abaixo para atualizar/instalar as dependência em seu projeto.


```bash
composer update
```

Automaticamente o composer irá analisar os arquivos &#8216;composer.json&#8217; e &#8216;composer.lock&#8217; para gerenciar as dependências em seu projeto, muito simples.

## Autoloading

Não somente gerenciar pacotes, podemos também configurar e gera o &#8216;autoloader&#8217; do nosso projeto, lembrando sempre que o composer segue as PSR-0 e PSR-4.

Podemos utilizar como exemplo o composer.json gerado anteriormente:


```json
"autoload": {
  "psr-4":{
    "DiegoBrocanelli\\Gravatar\\":"src/Gravatar"
  }
}
```

Como podemos visualizar, é declarado a key &#8220;autoload&#8221; em seguida definimos o padrão que desejamos utilizar, que neste caso será &#8220;psr-4&#8221; e por último foi definido o nome do vendor seguido pelo caminho do diretório.

A utilização do autoload pelo composer é muito simples e poderosa, você pode construir um pacote

## Comandos básicos

* **composer init**
  * Basicamente cria seu arquivo composer.json para você de forma simples e rápida.
* **composer install**
  * Para podermos instalar todas as dependências descritas no arquivo composer.json, devemos utilizar este comando para executar a tarefa de forma automática.
* **composer update**
  * Caso deseje inserir ou remover pacotes ou alterar o autoload devemos sempre atualizar nosso projeto, e com esse comando tudo o que listei é feito de forma automática sem dores de cabeça :).
* **composer self-update**
  * Como todo sistema o composer recebe constantemente atualizações, e  para atualiza-lo utilizamos o self-update.  
* **composer  dump-autoload ou dumpautoload**
  * Toda vez que houver necessidade de atualizar o autoloader do nosso sistema, podemos utilizar uma dessas duas versões do comando para tal atividade, ambas no final das contas obtém o mesmo resultado.
* **composer &#8211;helper ou &#8211;h**
  * Ele também disponibiliza de um helper, listando os comandos disponíveis e sua forma de uso.

Hoje com os grandes avanços no ecossistema PHP (caso tenha interesse a galera do Hipsters.tech lanço um episódio fantástico &#8220;[PHP não é coisa de sobrinho!](http://hipsters.tech/php-nao-e-coisa-de-sobrinho-hipsters-36/)&#8221; recomendo ouvir 🙂 ), todos os grandes frameworks tem seus componentes modularizados, podendo ser utilizado de forma isolada e o composer facilitará sua vida caso deseja utiliza-los em seus projetos.

Por exemplo, caso desejamos utilizar a [engine de template Twig](http://twig.sensiolabs.org/) em nosso projeto basta acessarmos o diretório do nosso projeto e executar o seguinte comando;

```bash
composer require "twig/twig:^2.0"
```

Automaticamente será instalado no sistema todos os pacotes necessários para utilização do Twig.

Este post já ficou muito extenso e ainda nem arranhei a superfície das funcionalidades que o Composer dispõe então vou encerra-lo por aqui, porem caso deseje um post explorando mais recursos deixe nos comentários.

Espero ter conseguido demonstrar como é vantajoso a utilização desta ferramenta, na minha opinião é impossível ser um programador PHP nos dias de hoje sem saber o básico dessa ferramenta.

Caso tenha alguma dúvida, sugestão ou elogio por favor deixe nos comentários pois podemos gerar um conteúdo muito bacana.

Até a próxima pessoal!

 [1]: https://github.com/andrebian