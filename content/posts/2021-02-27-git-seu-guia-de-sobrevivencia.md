---
title: GIT – Seu guia de sobrevivência
author: Diego Brocanelli
type: post
date: 2021-02-27T13:09:10+00:00
url: /git/git-seu-guia-de-sobrevivencia/
featured_image: /wp-content/uploads/2021/02/seu_guia_de_sobrevivencia_git.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2325;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - git
tags:
  - controle de versão
  - git
---

Olá, tudo bem!

## Sumário

1. Introdução
2. Comandos
    - [git config](#git-config)
    - [git init](#git-init)
    - [git clone](#git-clone)
    - [git status](#git-status)
    - [git branch](#git-branch)
    - [git checkout](#git-checkout)
    - [git add](#git-add)
    - [git commit](#git-commit)
    - [git diff](#git-diff)
    - [git log](#git-log)
    - [git merge](#git-merge)
    - [git pull](#git-pull)
    - [git push](#git-push)
    - [git reset](#git-reset)
    - [git tag](#git-tag)
    - [git mv](#git-mv)
    - [git rebase](#git-rebase)
    - [git grep](#git-grep)
3. [Atualizar fork](#atualizar-fork)
4. [Git por meio de interface gráfica](#git-por-meio-de-interface-gráfica)
5. [Materiais complementares](#materiais-complementares)
5. [Considerações](#considerações)

## Introdução

[Git](https://git-scm.com/) é um sistema de controle de versão descentralizado, criado por [Linus Torvalds](https://github.com/torvalds). Ele permite gerenciar versões de código e outros arquivos, sendo a ferramenta mais popular para essa finalidade.
Entretanto, por que sempre é frisado que para desenvolver software é fundamental usar uma ferramenta para controle de versão?

Os projetos estão cada vez mais complexos com equipes mais numerosas e entregas cada vez maiores, onde dezenas ou centenas de pessoas estão interagindo com o mesmo repositório de código mandando correções ou novas funcionalidades. 

Mesmo em pequenas equipes, seguir uma metodologia de controle de versão evita problemas e torna as entregas mais eficientes.

O [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) e [Bitbucket](https://bitbucket.org/product/) são algumas das principais plataformas para hospedagem de repositórios _"Git"_, cada uma com suas particularidades.

Será apresentado os principais comandos utilizados, em uma ordem natural dos seus usos. Porém use conforme sua necessidade.

Estou tomando a premissa que todos os comandos serão executados no terminal, no final do post tem uma lista de ferramentas de interface gráfica, porém convido que realize inicialmente pelo terminal para melhor compreensão de cada comando.

## git config

Duas principais configurações que devem ser realizadas são, definir seu nome e e-mail, pois serão os identificadores utilizados pelo _"Git"_.

Caso deseje verificar o que está configurado, basta executar o comando;

```bash
  // Exibe o nome do usuário
  git config --global user.name
```

```bash
  // Exibe o e-mail do usuário
  git config --global user.email
```

Para definir globalmente as informações.

```bash
  // Define o nome de usuário desejado
  git config --global user.name "Diego Brocanelli"

  // Define o e-mail do usuário
  git config --global user.email "couves.jose@couvescorp.com"
```

Para definir especificamente em um repositório, acesse a raiz do projeto e execute os seguintes comandos.

```bash
  // Define o nome de usuário desejado
  git config user.name "Diego Brocanelli"

  // Define o e-mail do usuário
  git config user.email "couves.jose@globalcorp.com"
```

Podemos alterar o editor padrão do _"Git"_, particularmente gosto de usar o vim. Entretanto, é possível utilizar o que preferir.

Caso deseje aprofundar seus conhecimentos nas configurações, recomente acessar a [documentação oficial](https://git-scm.com/docs/git-config).

```bash
  git config --global core.editor "vim"
```

## git init

Para criar um repositório, acesse por meio do terminal o diretório desejado e execute o comando abaixo. Após execução será criado um diretório chamado `.git`.

```bash
  // Inicializa um repositório git vazio.
  git init
```

## git clone

Podemos ao invés de iniciar um repositório em nossa máquina clonar um repositório existente, como por exemplo um repositório do GitHub. 

```bash
  // Clona o repositório money-to-words
  git clone git@github.com:Diego-Brocanelli/money-to-words.git
```

## git status

Caso deseje verificar a diferença entre a versão atual do repositório e o último `commit` da `HEAD` atual.

```bash
  // Exibe o status atual do repositório.
  git status
```

## git branch

Responsável por gerenciar os _"branches"_ do _"repositório"_, sendo possível visualizar, criar, editar ou apagar _"branches"_.

Utilizar este recurso é fundamental para manter uma organização e fluidez no desenvolvimento do projeto, possibilitando que múltiplas funcionalidades possam ser desenvolvidas paralelamente.

```bash
  // Lista todas as branches locais do repositório.
  git branch

  // Lista todas as branches remotas do repositório.
  git branch -a

  // Cria uma nova branch.
  git branch feature/register-user

  // Apaga uma branch local
  git branch -d feature/register-user

  // Apagaa uma branch remoto
  git push <nome da origem> <nome do branch> --delete

  // Altera o nome da branch
  git branch -m <nome antigo> <novo nome do branch>

  // Edita a descrição do branch
  git branch meu-branch --edit-description "nova descrição do branch"
```

## git checkout

Para atualizar todos os arquivos no diretório do projeto ou navegar entre as `branches`.

```bash
  // Realiza o checkout de um repositório, por padrão para o branch main no caso do GitHub.
  git checkout

  // Alterna de banch indo para o desejado.
  git checkout feat_send_mail

  // Cria uma nova branch e já realiza o checkout para ele.
  git checkout -b novo_branch
```

## git add

Para adicionar o(s) arquivo(s) ao repositório, no caso dos arquivos ainda não terem sido adicionados.

```bash
  // Adiciona apenas o arquivo desejado
  git add HomeController.php

  // Adiciona apenas o arquivo desejado, dentro de um sub-diretório
  git add /path/to/file/HomeController.php

  // Adiciona apenas arquivos que corresponda a expressão regular informada.
  git add ./*.php

  // Adiciona todos os arquivos de uma única vez.
  git add .
```

## git commit

Este é o comando responsável por guardar todos os arquivos modificados e adicionados com o comando `add`, onde será  gerado um novo `commit` com seu `hash` de identificação único. Sendo possível navegar entre os `commits` desejados, utilizando o comando `checkout` e o `hash`  desejado

```bash
  // Realiza o commit com sua mensagem de identificação.
  git commit -m "Realizado a implementação do método save() na class HomeController.php"
```

Caso não seja informado o parâmetro `-m` será aberto o editor de texto configurado, para que seja inserido a mensagem desejada. 

## git diff

Responsável por apresentar as diferenças entre as modificações realizadas versus o último `commit`.

```bash
  // Exibe as diferenças realizadas em cada arquivo. 
  git diff 

  // Apresenta as diferenças entre o diretório atual e o commit mais recente 
  git diff HEAD
```

## git log

Responsável por exibir todo o log dos `commits` do repositório.

```bash
  // Exibe todos os commits realizados no repositório
  git log 

  // Exibe uma quantidade pré-definida de commits, no exemplo abaixo serão 10
  git log -n 10

  // Exibe as mensagens de commits dos merges
  git log --merges
```

## git merge

Responsável por realizar a junção das alterações de um determinado `branch` externo com a `branch` atual.

```bash
  // Mescla a branch especificado com o atual
  git merge nome_do_branch

  // Realizaa a mescla e sempre gera um commit
  git merge --no-ff nome_do_branch
```

## git pull

Responsável por puxar as alterações de um repositório realizando o `merge` com o `branch` desejado.

```bash
  // Atualiza o repositório local, mesclando as novas alterações da branch remoto main.
  // git pull <remote> <branch>
  git pull origin main

  // Mescla as alterações da branch remota e faz o rebase dos commits da branch
  git pull origin main --rebase
```
  
## git push

Responsável por enviar os `commits` de um `branch` local para seu correspondente no repositório remoto.

```bash
  // Enviar as modificações realizada localmente para o repositório remoto.
  git push origin main
```

## git reset

Responsável por desfazer as alterações realizadas nos  arquivos. Permitindo que seja desfeitos `merges`, `pulls`, `commits`, `adds` e outros. Este comando demanda muita cautela, para que não sejam perdidos os trabalhos realizados.

```bash
  // Restabelece as modificações para o último commit realizado.
  git reset

  // Eestabelece as modificações e<span class="c1"> sobrescreve o projeto atual
  // CUIDADO! O comando apagará todas as mudanças feitas após o último commit! Use com cautela para evitar perda de trabalho.
  git reset --hard

  // Move a head da branch atual para o commit especificado.
  git reset 31f2bb1

  // Restabelece a head da branch atual para o commit especificado
  // Remove todos os commits e alterações realizadas posterior ao commit especificado.
  git reset --hard 56a4cr2
```

## git tag

Responsável por gerenciar as tags, que são pontos de identificação de modificações.

Este recurso é normalmente utilizado para definir pontos de mudanças em softwares (versões), como por exemplo a tag v1.0.0 que indica a primeira versão do software.

```bash
  // Lista todas as tags
  git tag

  // Cria uma tag anotada.
  // O parâmetro -m define a mensagem que desejamos atribuir a tag.
  // Caso seja informado o parâmetro -m porém, sem mensagem, o git abrirá o editor padrão definido nele para que seja inserido uma mensagem.
  git tag -a v1.0.0 -m "Primeira versão do software de controle financeiro"

  // Exibe as informações sobre a tag
  git show v2.0

  // Envia a tag para o repositório remoto.
  git push origin v1.0.0

  // Envia múltiplas tags para o repositório remoto.
  git push origin --tags
```

## git mv

Responsável por modificar o nome ou mover um arquivo.

```bash
  // Altera o nome de um arquivo
  git mv Home.php HomeController.php

  // Move apenas um arquivo.
  git mv HomeController.php ./new/path/Controller.php

  // CUIDADO! Força a alteração de nome ou mudança local.
  git mv -f HomeController.php BaseController.php
```

## git rebase

Responsável por coletar todas as alterações realizadas e volta a aplicá-las em outro branch. 

```bash
  // Realiza o rebase do branch feat_send_mail para o branch main
  git rebase main feat_send_mail
```

## git grep

Este comando nos permite procurar facilmente informações em um repositório.

Podemos realizar configurações opcionais:

```bash
  // Exibe as linhas no resultado da pesquisa.
  git config --global grep.lineNumber true

  // Agrupa os resultados da pesquisa, facilitando a leitura.
  git config --global alias.g "grep --break --heading --line-number"
```

```bash
  // Realiza a pesquisa pela palavra "create" em todos os arquivos php
  git grep 'create' -- '*.php'
```

## Atualizar fork

Como dica bônus, escrevi um post explicando o processo de como [atualizar o seu fork do GitHub](https://www.diegobrocanelli.com.br/git/atualizando-seu-fork-no-github/).

## Git por meio de interface gráfica

Todos os comandos listados no post tomou como premissa o uso do terminal para sua execução. Particularmente uso o terminal em meu dia a dia, por questões de costume e praticidade, pois o terminal é uma das principais ferramentas que uso, entretanto há ferramentas de interface gráfica que possibilita fazer as mesmas ações de forma interativa e visual.

> **Obs.:** Caso você seja iniciante e esteja aprendendo, recomendo que use o terminal para compreender melhor o que cada comando faz e seu resultado. Iniciar com uma interface gráfica pode ocultar o funcionamento interno do _"Git"_, limitando o aprendizado.

Acredito que a decisão de usar _"A"_ ou _"B"_ vai de cada pessoa, usando o que lhe deixa mais confortável e produtivo. Você não será melhor ou pior por causa disso. Use a ferramenta que melhor agrega para sua produtividade.

[Git Kraken](https://www.gitkraken.com/)

Interface moderna e intuitiva, com suporte a múltiplos repositórios, histórico visual e integração com plataformas como GitHub e GitLab.

[Sourcetree](https://www.sourcetreeapp.com/)

Ferramenta gratuita da Atlassian, excelente para visualizar commits, branches e resolver conflitos de forma gráfica.

[GitHub Desktop](https://github.com/apps/desktop)

Focado na integração com o GitHub, é uma opção simples e prática para quem utiliza essa plataforma.

Caso queira ver mais opções acesse a página de [Git GUI][https://git-scm.com/downloads/guis/].

## Materiais complementares

Felizmente é fácil encontrar materiais sobre _"Git"_, recomento os seguintes:

* [Rodrigo Branas](https://www.youtube.com/watch?v=C18qzn7j4SM&list=PLQCmSnNFVYnRdgxOC_ufH58NxlmM6VYd)
* [Git e GitHub para iniciantes &#8211; Loiane Groner](ttps://www.youtube.com/watch?v=UMhskLXJuq4)
* [Entendendo GIT (não é um tutorial!) &#8211; Fabio Akita](https://www.youtube.com/watch?v=6Czd1Yetaac)

## Considerações

Meu foco com post é auxiliar todos as pessoas que estão iniciando suas carreiras em tecnologia, pois independente da área escolhida o Git é fundamental.

Espero que o conteúdo auxilie em sua jornada de aprendizado, caso tenha alguma dúvida convido que deixe nos comentários e com isso podemos fomentar ainda mais conhecimento.

Sucesso em seus projetos!
