---
title: Atualizando seu fork no GitHub
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

---

Olá, tudo bem?!

É  comum atualizar o fork do projeto que contribuirmos no GitHub.

Pois conforme contribuímos outros contribuidores também fazem o mesmo, com isso o fork fica desatualizado.

Neste momento podemos ficar com receio de contribuir, por não dominar o Git e GitHub.

Para atualizar o fork o processo é muito simples e iremos aprender neste post. Para realizar a atualização será utilizado o [_upstream_][1].

> **Obs:** Todos os comandos abaixo devem ser executados via terminal na raiz do seu fork.

&nbsp;

### Adicionando um repositório remoto

Devemos adicionar um repositório remoto, no caso **devemos adicionar o repositório base original**!

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```

### Atualizando o upstream

Após adicionarmos o repositório devemos atualizar o _upstream_. Para isso execute o comando abaixo.

```bash
git fetch upstream
```

### Realizando o commit das informações 

Com o _upstream_ atualizado e supondo que estamos no _branch_ _master_, devemos realizar o _merge_ ou _rebase_ das informações obtidas na atualização.

```bash
git rebase upstream/master master
```

> Aqui cabe uma nota, fiz uso do _rebase_, porém poderia ser utilizado o _merge_. Obviamente há diferenças entre o _rebase_ e o _merge_, entretanto cabe em um post a parte para melhor detalhamento.

### Enviando para o GitHub

Para que possamos atualizar o GitHub basta executar o comando abaixo.

```bash
git push
```

### Considerações

Viram como é simples atualizar o fork, com poucos comandos foi realizado todo o processo.

Espero que tenham apreciado o conteúdo e que o mesmo agregue em seu dia a dia.

Caso tenha alguma dúvida, dica, sugestão deixe nos comentários, para que possamos aprender cada vez mais.

Grande abraço e sucesso nos projetos.

 [1]: https://help.github.com/articles/configuring-a-remote-for-a-fork/