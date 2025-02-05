---
title: Atualizando seu fork no GitHub - Um guia prático, fácil e rápido!
author: Diego Brocanelli
type: post
date: 2017-11-17T18:02:27+00:00
url: /git/atualizando-seu-fork-no-github/
featured_image: /wp-content/uploads/2017/11/57_atualizar_fork_github.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1442;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - git
  - GitHub
  - fork
  - atualizar fork
---

Olá, tudo bem?!

## Sumário

1. [Introdução](#introdução)
2. [Adicionando um repositório remoto](#adicionando-um-repositório-remoto)
3. [Atualizando o upstream](#atualizando-o-upstream)
4. [Realizando o commit das informações](#realizando-o-commit-das-informações)
5. [Enviando para o GitHub](#enviando-para-o-github)
6. [Considerações](#considerações)

## Introdução

É comum atualizarmos o fork do projeto ao qual contribuímos no _"GitHub"_.

Conforme contribuímos, outros desenvolvedores também fazem o mesmo. Com isso, o _"fork"_ pode ficar desatualizado.

Nesse momento, podemos ficar receosos em contribuir por não dominarmos o _"Git"_ e o _"GitHub"_.

Para realizar a atualização, utilizaremos o [_upstream_][1].

> **Obs.:** Todos os comandos abaixo devem ser executados no terminal, na raiz do seu _"fork"_.

## Adicionando um repositório remoto

Precisamos adicionar um repositório remoto, no caso _devemos adicionar o repositório base original_!

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```

## Atualizando o upstream

Após adicionar o repositório, devemos atualizar o _"upstream"_. Para isso, execute o comando abaixo.

```bash
git fetch upstream
```

## Realizando o commit das informações 

Com o _"upstream"_ atualizado e supondo que estamos na branch _"main"_, devemos fazer o _"merge"_ ou o _"rebase"_ das alterações.

```bash
git rebase upstream/main main
```

> IMPORTANTE: Vale ressaltar que utilizei o _"rebase"_, mas o _"merge"_ também poderia ser uma opção."

## Enviando para o GitHub

Para atualizar o _"fork"_ no _"GitHub"_, basta executar o comando abaixo.

```bash
git push
```

## Considerações

Viu como é simples atualizar um fork? Com poucos comandos, conseguimos realizar todo o processo.

Espero que tenha gostado do conteúdo e que ele seja útil no seu dia a dia.

Se tiver alguma dúvida, dica ou sugestão, deixe nos comentários para aprendermos juntos!

 [1]: https://help.github.com/articles/configuring-a-remote-for-a-fork/