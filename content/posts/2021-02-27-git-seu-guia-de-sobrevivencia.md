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

O que é [GIT](https://git-scm.com/)? É uma ferramente para controle de versão descentralizada criada por [Linus Torvalds](https://github.com/torvalds), que possibilita a gestão do versionamento de códigos, alias, não necessariamente apenas códigos, sendo a ferramente mais utilizada para a finalidade a que se propõem.

Entretanto, por que sempre é frisado que para desenvolver software é fundamental usar uma ferramenta para controle de versão?

Os projetos estão cada vez mais complexos com equipes mais numerosas e entregas cada vez maiores, onde dezenas ou centenas de pessoas estão interagindo com o mesmo repositório de código mandando correções ou novas funcionalidades. 

Mesmo para pequenas equipes, ter uma metodologia definida para controle de código irá poupar muitas dores de cabeça, fazendo com que as  entregas sejam realizadas com eficiência e o mínimo de dor de cabeça. 

O [GitHub](https://github.com/) é uma das principais plataformas para armazenar repositórios git, porém temos o [GitLab](https://about.gitlab.com/) e [Bitbucket](https://bitbucket.org/product/).

Será apresentando os principais comandos utilizados, em uma ordem natural dos seus usos. Porém use conforme sua necessidade.

Estou tomando a premissa que todos os comandos serão executados no terminal, no final do post tem uma lista de ferramentas de interface gráfica, porém convido que realize inicialmente pelo terminal para melhor compreensão de cada comando.

### git config

Duas principais configurações que devem ser realizadas são, definir seu nome e e-mail, pois serão os identificadores utilizados pelo git.

Caso deseje verificar o que está configurado, basta executar o comando;

```bash
  //responsável por exibir o nome do usuário
  git config --global user.name
```

```bash
  //responsável por exibir o e-mail do usuário
  git config --global user.email 
```

Para definir globalmente as informações

```bash
  //Responsável por definir o nome de usuário desejado
  git config --global user.name "Diego Brocanelli"

  //Responsável por definir o e-mail do usuário
  git config --global user.email "meu_email@Zteste.com.br"
```

Para definir especificamente em um repositório, acesse a raiz do projeto e execute os seguintes comandos.

```bash
  //Responsável por definir o nome de usuário desejado 
  git config user.name "Diego Brocanelli" 

  //Responsável por definir o e-mail do usuário 
  git config user.email "meu_email@Zteste.com.br"
```

Podemos alterar o editor padrão do git, particularmente gosto de usar o vim. Entretanto, é possível utilizar o que preferir.

Caso deseje aprofundar seus conhecimentos nas configurações, recomente acessar a [documentação oficial](https://git-scm.com/docs/git-config).

```bash
  git config --global core.editor "vim"
```

### git init

Para criar um repositório, acesse por meio do terminal o diretório desejado e execute o comando abaixo. Após execução será criado um diretório chamado `.git`.

```bash
  //Responsável por criar um repositório git vazio.
  git init
```

### git clone

Podemos ao invés de iniciar um repositório em nossa máquina realizar o clone (cópia)  de um repositório existente, como por exemplo um repositório do GitHub. 

```bash
  //Responsável por clonar o repositório money-to-words que encontra-se no GitHub 
  git clone git@github.com:Diego-Brocanelli/money-to-words.git
```

### git status

Caso deseje verificar a diferença entre a versão atual do repositório e o último `commit` da `HEAD` atual.

```bash
  //Responsável por exibir o status atual do repositório.
  git status
```

### git branch

Responsável por gerenciar os `branches do repositório, sendo `possível visualizar, criar, editar ou apagar `branches`.

Utilizar este recurso é fundamental para manter uma organização e fluidez no desenvolvimento do projeto, possibilitando que múltiplas funcionalidades possam ser desenvolvidas paralelamente.

```bash
  //Responsável por listar todos os branches locais do repositório.
  git branch

  //Responsável por listar todos os branches remotos do repositório.
  git branch -a

  //Responsável por criar uma novo branch.
  git branch myNewBranch

  //Responsável por apagar uma branch local
  git branch -d myBranch

  //Responsável por apagar uma branch remoto
  git push <nome da origem> <nome do branch> --delete

  //Responsável por alterar o nome da branch
  git branch -m <nome antigo> <novo nome do branch>

  //Responsável por editar a descrição do branch
  git branch meu-branch --edit-description "nova descrição do branch"
```

### git checkout

Para atualizar todos os arquivos no diretório do projeto ou navegar entre as `branches`.

```bash
  //Responsável por realizar o checkout de um repositório, por padrão para o branch main no cado do GitHub.
  git checkout

  //Responsável por alternar de banch indo para o desejado.
  git checkout feat_send_mail

  //Responsável por criar um novo branch e já realizar o checkout para ele.
  //este comando é o equivalente a executar "git branch <name>; git checkout <name>"
  git checkout -b novo_branch
```

### git add

Para adicionar o(s) arquivo(s) ao repositório, no caso dos arquivos ainda não terem sido adicionados.

```bash
  //Responsável por adicionar apenas o arquivo desejado
  git add HomeController.php

  //Responsável por adicionar apenas o arquivo desejado, dentro de um sub-diretório
  git add /path/to/file/HomeController.php

  //Responsável por adicionar apenas arquivos que corresponda a expressão regular informada.
  git add ./*.php

  //Responsável por adicionar todos os arquivos de uma única vez.
  git add .
```

### git commit

Este é o comando responsável por guardar todos os arquivos modificados e adicionados com o comando `add`, onde será  gerado um novo `commit` com seu `hash` de identificação único. Sendo possível navegar entre os `commits` desejados, utilizando o comando `checkout` e o `hash`  desejado

```bash
  //Responsável por realizar o commit com sua mensagem de identificação. 
  git commit -m "Realizado a implementação do método save() na class HomeController.php"
```

Caso não seja informado o parâmetro `-m` será aberto o editor de texto configurado, para que seja inserido a mensagem desejada. 

### git diff

Responsável por apresentar as diferenças entre as modificações realizadas versus o último `commit`.

```bash
  //Responsável por exibir as diferenças realizadas em cada arquivo. 
  git diff 

  //Responsável por apresentar as diferenças entre o diretório atual e o commit mais recente 
  git diff HEAD
```

### git log

Responsável por exibir todo o log dos `commits` do repositório.

```bash
  //Responsável por exibir todos os commits realizados no repositório
  git log 

  //Responsável por exibir uma quantidade pré-definida de commits, no exemplo abaixo serão 10
  git log -n 10 

  //Responsável por exibir as mensagens de commits dos merges
  git log --merges
```

### git merge

Responsável por realizar a junção das alterações de um determinado `branch` externo com o `branch` atual.

```bash
  //Responsável por juntar o branch especificado com o atual 
  git merge nome_do_branch

  //Responsável por realizar a junção e sempre gerar um commit ao juntar os branches
  git merge --no-ff nome_do_branch
```

### git pull

Responsável por puxar as alterações de um repositório realizando o `merge` com o `branch` desejado.

```bash
  //Responsável por atualizar o repositório local, juntando as novas alterações do branch remoto main.
  //git pull <remote> <branch>
  git pull origin main

  //Responsável por juntar as alterações do branch remote e fazer rebase dos commits do branch
  git pull origin main --rebase
```
  
### git push

Responsável por enviar os `commits` de um `branch` local para seu correspondente no repositório remoto.

```bash
  //Responsável por enviar as modificações realizada localmente para o repositório remoto.
  git push origin main
```

### git reset

Responsável por desfazer as alterações realizadas nos  arquivos. Permitindo que seja desfeitos `merges`, `pulls`, `commits`, `adds` e outros. Este comando demanda muita cautela, para que não sejam perdidos os trabalhos realizados.

```bash
  //Responsável por restabelecer as modificações para o último commit realizado.
  git reset

  //Responsável por restabelecer as modificações e<span class="c1"> sobrescreve o projeto atual
  git reset --hard

  //Responsável por mover a head do branch atual para o commit especificado.
  git reset 31f2bb1

  //Responsável por restabelecer a head do branch atual para o commit especificado
  //Removendo todos os commits e alterações realizadas posterior ao commit especificado.
  git reset --hard 56a4cr2
```

### git tag

Responsável por gerenciar as tags, que são pontos de identificação de modificações.

Este recurso é normalmente utilizado para definir pontos de mudanças em softwares (versões), como por exemplo a tag v1.0.0 que indica a primeira versão do software.


```bash
  //Responsável por listar todas as tags
  git tag

  //Responsável por criar uma tag anotada.
  //Onde o parâmetro -m define a mensagem que desejamos atribuir a tag.
  //Cado seja informado o parâmetro -m porém, sem mensagem, o git abrirá o editor padrão definido nele para que seja inserido uma mensagem.
  git tag -a v1.0.0 -m "Primeira versão do software de controle financeiro"

  //Responsável por exibir as informações sobre a tag
  git show v2.0

  //Responsável por enviar a tag para o repositório remoto.
  git push origin v1.0.0

  //Responsável por enviar múltiplas tags para o repositório remoto.
  git push origin --tags
```

### git mv

Responsável por modificar o nome ou mover um arquivo.

```bash
  //Responsável por alterar o nome de um arquivo
  git mv Home.php HomeController.php

  //Responsável por mover apenas um arquivo.
  git mv HomeController.php ./new/path/Controller.php

  //Responsável por forçar a alteração de nome ou mudança local. CUIDADO!
  git mv -f HomeController.php BaseController.php
```

### git rebase

Responsável por coletar todas as alterações realizadas e volta a aplicá-las em outro branch. 

```bash
  //Responsável por realizar o rebase do branch feat_send_mail para o branch main
  git rebase main feat_send_mail
```

### git grep

Este comando nos permite procurar facilmente informações em um repositório.

Podemos realizar configurações opcionais:

```bash
  //Responsável por exibir as linhas no resultado da pesquisa.
  git config --global grep.lineNumber true

  //Responsável por agrupa os resultados da pesquisa, facilitando a leitura.
  git config --global alias.g "grep --break --heading --line-number"
```

```bash
  //Responsável por realizar a pesquisa pela palavra "create" em todos os arquivos php
  git grep 'create' -- '*.php'
```

### Atualizar fork

Como dica bônus, escrevi um post explicando o processo de como [atualizar o seu fork do GitHub](https://www.diegobrocanelli.com.br/git/atualizando-seu-fork-no-github/).

### Git por meio de interface gráfica

Todos os comandos listados no post tomou como premissa o uso do terminal para sua execução. Particularmente uso o terminal em meu dia a dia, por questões de costume e praticidade, pois o terminal é uma das principais ferramentas que uso. Entretanto há ferramentas de interface gráfica que possibilita fazer as mesmas ações de forma interativa e visual. 

Acredito que a decisão de usar &#8220;A&#8221; ou &#8220;B&#8221; vai de cada pessoa, usando o que lhe deixa mais confortável e produtivo. Você não será melhor ou pior por causa disso. Use a ferramenta que melhor agrega para sua produtividade.

[Git Kraken](https://www.gitkraken.com/)

Uma excelente ferramente multi plataforma, com uma interface elegante e fácil de se usar. É uma ferramenta paga, porém com uma opção gratuita. 

[Sourcetree](https://www.sourcetreeapp.com/)

Ferramente proprietária, fornecida pela Atlassian compatível com Windows e Mac. Sinceramente meu uso dessa ferramente foi breve e a muito tempo, porém com boas recordações.

Caso queira ver mais opções acesse a página de [Git GUI][https://git-scm.com/downloads/guis/].

### Materiais complementares

Felizmente é fácil encontrar materiais sobre `git`, recomento os seguintes:

* [Rodrigo Branas](https://www.youtube.com/watch?v=C18qzn7j4SM&list=PLQCmSnNFVYnRdgxOC_ufH58NxlmM6VYd)
* [Git e GitHub para iniciantes &#8211; Loiane Groner](ttps://www.youtube.com/watch?v=UMhskLXJuq4)
* [Entendendo GIT (não é um tutorial!) &#8211; Fabio Akita](https://www.youtube.com/watch?v=6Czd1Yetaac)

Meu foco com post é auxiliar todos as pessoas que estão iniciando suas carreiras em tecnologia, pois independente da área escolhida o Git é fundamental.

Espero que o conteúdo auxilie em sua jornada de aprendizado, caso tenha alguma dúvida convido que deixe nos comentários e com isso podemos fomentar ainda mais conhecimento.

Sucesso em seus projetos!
