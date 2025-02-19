---
title: Guia prático de comandos Git
author: Diego Brocanelli
type: post
date: -001-11-30T00:00:00+00:00
draft: true
url: /?p=1672
categories:
  - git
  - php
tags:
  - git
  - versionamento

---
Olá, tudo bem!


  Atualmente desenvolver software sem utilizar controle de versão é impensável para muitos desenvolvedores, porém não é e está longe de ser a realidade de muitos outros devs.



  Neste post tenho como objetivo listar os principais comandos para que qualquer pessoa possa iniciar seu controle de verão com Git.


<span style="font-size: 24pt;"><strong>Problemática


  Iniciar um projeto sem o controle de versão é a garantia de má organização e conteúdo duplicado ou até mesmo perdido. Quem nunca se deparou com o zip do projeto &#8216;projeto_final.zip&#8217; ou &#8216;projeto_final_2.zip&#8217;, isso infelizmente ainda é comum e muito danoso ao projeto e ao processo de desenvolvimento.



  Estou utilizando o desenvolvimento de software como exemplo base pois é meu dia a dia, entretanto pode o controle de versão pode ser utilizado para escritores de livros, artigos, TCC, design etc.



  Pois quando temos uma estrutura definida, temos muitas garantias e segurança na atividade desenvolvida.


Meu objetivo com este post não é lhe fazer decorar comandos, porém que conheça e lembre quando desejar utilizar e com isso saber onde pesquisar.

<span style="font-size: 24pt;"><strong>Instalação

Windows

Linux

Mac

<span style="font-size: 24pt;"><strong>Comandos &#8211; Help (Ajuda)<br /> 

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git help add</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git help commit</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git help <comando_git></pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Configurações

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git config --global user.name "SEU NOME COMPLETO"</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git config --global user.email seu.email@provedor.com</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git config --list</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Obtendo ou Criando Projetos<br /> 

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git init</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git clone CAMINHO/DO/REPOSITORIO.git</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Basic Snapshotting<br /> 

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git add</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git status</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git diff</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git commit</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git reset</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git rm</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git mv</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Branching and Merging

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git branch</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git checkout</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git merge</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git mergetool</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git log</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true">git stash</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git tag</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Compartilhando e atualizando projetos

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git fetch</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git pull</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git push</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git remote</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git submodule</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Comandos &#8211; Inspeção e Comparação

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git show</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git log</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git diff</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git shortlog</pre>

&nbsp;

<pre class="theme:monokai font-size:18 line-height:30 top-margin:17 bottom-margin:17 lang:php decode:true ">git describe</pre>

&nbsp;

<span style="font-size: 24pt;"><strong>Considerações finais