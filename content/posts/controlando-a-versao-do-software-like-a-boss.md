---
title: Como controlar a versão do software like a boss com Semantic Version
author: Diego Brocanelli
type: post
date: 2017-10-31T13:17:36+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - controle de versão
  - gerenciar pacotes
  - semantic version

---

Olá, Tudo bem?!

Quem nunca dedicou tempo para analisar como seria o controle da versão do seu sistema, ou teve problemas com &#8220;aquela solução infalível&#8221;, tem também quem nunca se preocupou com isso, porém, já deve ter sofrido pois aquela lib favorita que utiliza no projeto quebrou a compatibilidade após um simples update?!

Ao desenvolvermos algum sistema/componente/lib/framework seja lá o que for, um ponto importante é, como será controlada a sua versão?

Um bom controle de versão deixará o sistema mais confiável, devidamente documentado para a comunidade e também para quem está desenvolvendo, seja um time ou individual.

É legal quando você cria algo em sua casa somente para estudos, porém, se o objetivo é maior, durável e de confiança devemos desde o inicio adotar um sistema de versão.

Neste post iremos abordar os seguintes tópicos:

* A solução
* Pontos Positivos;
* Os três pilares;
* Exemplo de uso real;
* Considerações.

## A Solução

Tenho gostado muito do [Semantic Version](http://semver.org/lang/pt-BR), um padrão para controlar a versão dos  softwares, simples e eficaz.

## Pontos positivos

* Fácil compreensão;
* Leitura simples;
* Evita “dependency hell” (Inferno de dependência);
* Permite que o pacote seja distribuído corretamente pelos gerenciadores de pacotes;
* Mantém um histórico semântico do componente.

Ok, porém, como uso isso?

## Os três pilares

Basicamente composto por três grupos numéricos, sendo:

**MAJOR (Maior)**

Neste nível de controle é permitido quebra de compatibilidade, onde são implementados mudanças ou features que irão quebrar em relação a verão anterior. Cabe salientar que não necessariamente deve haver quebra de compatibilidade, pois se possível a melhor abordagem é evitar quebras.

* Ex: 
  * v.**1**.0.0

**MINOR (Menor)**

Quando é adicionado novos recursos ao componente, porém, não havendo quebra de compatibilidade. Não se é permitido quebrar compatibilidade neste nível.

* Ex: 
  * v.0.**0**.0

**PATCH (Correções)**

Neste nível são implementados apenas correções no componente, não deve ocorrer quebra de compatibilidade.

* Ex: 
  * v.0.0.**1**

Para melhor compreensão, a [Semantic Version dispõem de 12 tópicos](http://semver.org/lang/pt-BR/#especifica%C3%A7%C3%A3o-de-versionamento-sem%C3%A2ntico-semve) que auxilia no processo de controle, tentarei sintetizar em alguns pontos principais, sendo:

* Nunca quebrar versão que não seja  na _MAJOR_;
* Cada incremento deve ser de 1 em 1;
* Toda correção de bug, não deve quebrar de compatibilidade;
* Cada nova feature deve incrementar a _MINOR_ version.

## Exemplo de uso real

Suponhamos que estamos criando uma lib para converter string em CSV e lançamos nossa API na versão v.1.0.0.

Em seguida, implementamos uma feture onde permite converter os dados tabelados em um documento PDF. Com isso agora temos a versão v.1.1.0.

Após a comunidade fazer uso da lib, foram reportados bugs a serem corrigidos, totalizando 6 bugs. Após correção e  lançamento do patch de correções temos a versão v.1.1.6.

Como observado, o controle da versão tornou o uso do componente simples e a comunidade não teve dores de cabeça para atualizar a versão. 🙂

## Considerações

O uso de componente de terceiros é praticamente inevitável no desenvolvimento de softwares hoje em dia. Podemos também lançar componentes que outros desenvolvedores irão consumir. Seguindo as definições do Semantic Version evitamos o “dependency hell” e deixamos nosso componente confiável e devidamente versionado para a comunidade/cliente.

Neste post abordei o tema tomando como base o mundo Open Source, porém, as boas práticas e definições que foram listados no post podem e devem ser introduzidos nos softwares distribuídos comercialmente. No meu ponto de vista é impossível manter um projeto durável sem ter bem definido vários pilares e um deles com certeza é o controle da sua versão.

Espero que tenham apreciado e que o conteúdo tenha agregado conhecimento, convido que deixe suas dúvidas, elogios ou sugestões nos comentários, pois assim podemos aprender cada vez mais.

Um grande abraço e sucesso em seus projetos 🙂
