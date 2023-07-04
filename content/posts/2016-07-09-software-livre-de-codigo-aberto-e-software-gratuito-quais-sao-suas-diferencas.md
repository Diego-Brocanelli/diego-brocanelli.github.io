---
title: Software livre de código aberto e software gratuito, quais são suas diferenças?
author: Diego Brocanelli
type: post
date: 2016-07-09T16:40:00+00:00
url: /open-source/software-livre-de-codigo-aberto-e-software-gratuito-quais-sao-suas-diferencas/
featured_image: /wp-content/uploads/2016/07/12_software_livre.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1366;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - open source
tags:
  - código aberto
  - open source
  - software livre

---

Olá pessoal tudo bem?! Eu sou um grande consumidor de Podcast e a um tempo ouvi o episódio do [Mateada Podcast sobre leis na internet](https://blog.mateada.com/podcast/internet-uma-terra-sem-lei/) e fiquei curioso até mesmo sobre licenças de softwares, e recentemente o pessoal da [Lambda3](http://www.lambda3.com.br/) [lançou um episódio do podcast excelente sobre open source](ttp://blog.lambda3.com.br/2016/07/podcast-5-open-source/), e reacendeu a chama da curiosidade sobre o mundo do software livre, suas vertentes, os tipos de licenças e tudo o mais.

Com isso resolvi pesquisar mais sobre o assunto e toda a pesquisa resumi neste post para compartilhar o conhecimento que adquiri ao longo das pesquisas realizadas.

Quero deixar claro que NÃO TENHO CONHECIMENTOS JURÍDICOS que me qualificam para lhe afirmar sobre licenças e nada sobre o âmbito legal, e apenas trago o resumo da pesquisa realizada, caso você tenha que decidir sobre uma licença para seu software, cabe a um advogado ou ao departamento jurídico da empresa atuar neste cenário. Porem é de extrema valia que o desenvolvedor conheça este ecossistema, até mesmo utilizar de forma mais clara o que cada conceito se aplica.

### Breve histórico do software livre

Em 1970 a gigante IBM começa a comercializar softwares separados do hardware o que abriria as portas para um novo mercado a ser explorado onde o software seria um produto de prateleira, onde poderia ser adquirido e consumido. Obviamente devo salientar que nos anos  70, o comercio era baseado em vendas de hardwares que traziam embutidos softwares para seu uso.

Em 1976 temos a tão famigerada “[Carta aberta aos hobistas](https://en.wikipedia.org/wiki/Open_Letter_to_Hobbyists)” escrita por ninguém menos que Bill Gates aos 21 anos onde ele prega fervorosamente que o softwares open source são danosos para o mercado. Neste mesmo período temos iniciativas de softwares livres que se encontram em atividade nos dias de hoje, como por exemplo [SPICE](https://pt.wikipedia.org/wiki/SPICE), [TeX](https://pt.wikipedia.org/wiki/TeX) e [Unix](https://pt.wikipedia.org/wiki/Unix).

Daremos um salto no tempo e em 1980 foram criados os primeiros projetos conscientes para serem software livre, sendo estabelecido os fundamentos éticos, legais e financeiros do movimento, e em 1984 [Richard Stallman](https://pt.wikipedia.org/wiki/Richard_Matthew_Stallman), deixa seu emprego na AI Lab no MIT e começa a trabalhar no [Projeto GNU](https://pt.wikipedia.org/wiki/Projeto_GNU), após seu ingresso no projeto ele contribuiu com a criação da [Licença GPL](https://pt.wikipedia.org/wiki/Licen%C3%A7a_GPL), publicou o [Manifesto GNU](https://pt.wikipedia.org/wiki/Manifesto_GN) e fundou a [Free Software Foundation](https://pt.wikipedia.org/wiki/Free_Software_Foundation). Sendo esses feitos que o tornam referencia no movimento do software livre.

Em março de 1994 foi lançado a primeira versão do Linux por ninguém menos que [Linus Torvalds](https://pt.wikipedia.org/wiki/Linus_Torvalds), onde o Linux seria integrado ao Projeto GNU, tornando-se o primeiro sistema operacional de software livre.

Em 1995 [Bob Young](https://pt.wikipedia.org/wiki/Bob_Young) funda a [Red Hat  Software](https://www.redhat.com/en) ao comprar a distribuição Red Hat Linux.

Em 1996 o projeto KDE é anunciado tendo como objetivo resolver os problemas de usabilidade para os usuários finais de ambientes similares ao Unix.

Em 1998 [Eric Raymond](https://pt.wikipedia.org/wiki/Eric_Raymond) em conjunto com Linus Torvalds apresentão o [Open Source Initiative (OSI)](https://pt.wikipedia.org/wiki/Open_Source_Initiative).

Em 1999 as empresas Dell, HP e SGI anunciam que darão suporte ao GNU/Linux em seus computadores.

Em 2001 a IBM anuncia o investimento de 1 bilhão de dólares no Linux.

Em 2004 foi lançado a primeira versão do Ubuntu, umas das distribuições linux mais utilizadas atualmente.

Em 2007 a Sun libera o JDK sob GLPv2.

Em 2009 a Oracle compra a Sun Microsystem por US$ 7,4 bilhões e entra definitivamente no mercado de software livre.

Em 2011 Linus Torvalds disponibiliza a versão 2.6.38 do kernel Linux.

No Brasil o movimento de software livre pode ser traçada a partir de 1990 com a chegada e implementação do GNU/Linux em departamentos de ciência da computação de universidades. Destaca-se a fundação da [Conectiva](https://pt.wikipedia.org/wiki/Conectiva), a fundação do Projeto de Software Livre do Rio Grande do Sul e a ONG [Associação Software Livre](http://softwarelivre.org/asl).  Em 2003 foi publicado o decreto público que institui comités técnicos para a adoção e uso de software livres em órgãos e instituições do governo Brasileiro.

Como pode ser observado, o trajeto do software livre é longo com diversos acontecimentos que foram marcantes para seu fortalecimento, infelizmente não abordei com maiores detalhes essa história pois com certeza é material para um livro, para que possa ser analisado e consumido com maior riqueza de detalhes.

Um dos pontos que mais chamou minha intenção nas pesquisas para a produção deste post foram as definições das 4 liberdades que todo software livre deve conter, sendo elas:

* **Liberdade 0:** A liberdade de executar o programa como você desejar, para qualquer propósito;
* **Liberdade 1:** A liberdade de estudar como o programa funciona, e adaptá-lo às suas necessidades. Para tanto, acesso ao código-fonte é um pré-requisito;
* **Liberdade 2:**  A liberdade de redistribuir cópias de modo que você possa ajudar ao próximo;
* **Liberdade 3:**  A liberdade de distribuir cópias de suas versões modificadas a outros. Desta forma, você pode dar a toda comunidade a chance de beneficiar de suas mudanças. Para tanto, acesso ao código-fonte é um pré-requisito.

Fonte ([https://www.gnu.org/philosophy/free-sw.pt-br.html](https://www.gnu.org/philosophy/free-sw.pt-br.html))

Bem agora que pudemos observar uma breve história do software livre, qual a diferença entre software livre, de código aberto e software gratuito, pois tudo isso não é a mesma coisa?

### Software livre, de código aberto e software gratuito, quais são suas diferenças?

Software livre (free software) é o conceito onde o software deve estar atrelado a liberdade, portanto sendo um movimento social e para que todo software seja denominado livre deve contemplar as 4 liberdades (descritas anteriormente) sendo esses os fundamentos base.

Software gratuito (freeware), são softwares que podemos fazer uso de forma gratuita. Podemos notar que nem todo software gratuito é livre! Pois nesta categoria o software não tem seu código fonte liberado para a comunidade sendo de posse da empresa ao qual disponibilizou no mercado, portanto não pode ser alterado seu código fonte ou até mesmo estudá-lo e sim somente fazer uso do mesmo, é uma prática muito comum no mercado de desenvolvimento de software onde há uma versão gratuita para uso, porem existe uma versão paga que contempla mais recursos para o seu usuário.

É permitido vender software livre? A resposta é SIM, por exemplo, o desenvolvedor criar um App mobile, disponibiliza o código fonte no GitHub e vende o App em seu site. Desde que as ações não quebrem nenhuma das 4 liberdades do movimento do software livre, o desenvolvedor ou empresa pode fazer uso comercial do App.

Código aberto (Open Source), é uma prática muito comum tratar software livre e código aberto (Open Source) sendo a mesma coisa, porem há diferenças entre as duas.

A Open Source traz outros pontos que são diferentes das 4 liberdades já mencionadas, tentando tornar mais flexível a iniciativa. A organização definiu 10 quesitos para que um software seja considerado Open Source, sendo eles:

1. Distribuição livre;
2. Acesso ao código-fonte;
3. Permissão para criação de trabalhos derivados;
4. Integridade do autor do código-fonte;
5. Não discriminação contra pessoas ou grupos;
6. Não discriminação contra áreas de atuação;
7. Distribuição da licença;
8. Licença não específica a um produto;
9. Licença não restritiva a outros programas;
10. Licença neutra em relação à tecnologia.

Fonte ([http://softwarelivre.org/open-source-codigo-aberto](http://softwarelivre.org/open-source-codigo-aberto))

### Licença no mundo do desenvolvimento de software

Uma licença nada mais é do que uma  definição de ações autorizadas ou proibidas no âmbito do direito de autor de um software, onde são concedidas ou impostas ao usuário deste software.

E devemos ter claramente definido que usuário é qualquer utilizador sendo empresas, entidades, usuários finais ou programadores.



### Quais são as licenças mais conhecidas?

Temos listados abaixo as principais tipos de licenças utilizadas no mundo de desenvolvimento de software, não conseguirei aprofundar em todas pois esse post (que já está bem extenso) ficaria ainda maior. Recomendo fortemente que leiam as definições de cada licença, para que assim possa ter a devida compreensão do que pode ou não ser feito quando o código que deseja utilizar esta regido por alguma das licenças citadas abaixo.

* [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
* [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)
* [MIT License](https://opensource.org/licenses/MIT)
* [Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)
* [BSD 2-clause &#8220;Simplified&#8221; License](https://spdx.org/licenses/BSD-2-Clause)
* [BSD 3-clause &#8220;New&#8221; or &#8220;Revised&#8221; License](https://tldrlegal.com/license/bsd-3-clause-license-(revised))
* [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
* [Eclipse Public License 1.0](https://www.eclipse.org/legal/epl-v10.html)
* [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html)
* [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
* [GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
* [GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)
* [ISC License](https://opensource.org/licenses/ISC)
* [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
* [The Unlicense](http://unlicense.org/)
* [Copyleft](https://www.gnu.org/licenses/copyleft.pt-br.html)

### O que isso afeta em nosso dia a dia?

Posso citar um caso de uso que passei, já presenciei um programador que incluiu em seu App mobile Java uma library coletado na internet (Ctrl+C Crtl+V) e não analisou os código e principalmente deixou de lado a licença no qual os códigos estavam sendo regidos, a primeira reação do programador ao ser questionado do processo de análise que ele deveria ter feito foi, “há mas eu peguei do GitHub” e vale salientar que mesmo que o códio esteja na internet principalmente no GitHub NÃO DÁ O DIREITO DE USO LIVRE, sendo assim o programador foi orientado a remover toda a biblioteca do projeto pois este ato poderia ter fortes implicações legais. Infelizmente não me recordo ao certo qual era a licença que estava sendo utilizada, porem lembro que um dos pontos era NÃO PODE TER USO COMERCIAL. Isso parece óbvio agora, porem um dos pontos que deixamos de lado ao consumir códigos de terceiros, é analisar a licença inclusa.

Não estou nem mencionando o quanto é perigoso utilizar código de terceiro sem o devido processo de análise, estou reforçando o problema que seria caso seja pego em um software empresarial, isso traria grandes problemas a empresa.

Imagino que possa haver pessoas pensando “há mas isso só se for pego, denunciado”, e aproveito o momento para reforçar que este tipo de pensamento é errado, pois ciente ou não a quebra de uma lei pequena ou não não deixa de ser algo errado, então por favor cumprir as leis nada mais é do que o dever de cada um. Eu sou desenvolvedor de software e sim crio softwares proprietários, porem também construo softwares e códigos livres. Apenas reforço que o mesmo grande esforço que você teve para construir o seu sistema, foi também grandioso para quem escreveu os códigos ou sistema que você possa estar consumindo de forma pirata.

### Como escolher a melhor licença para o meu software?

Infelizmente neste tópico não disponho de maior conhecimento, pois é muito inerente ao tipo de software que queira construir ou para quem você irá construir. Pois Cada empresa, grupo ou instituição tem suas próprias normas e isso vai implicar nos tipos de licenças que podem ser usados no softwares a serem construídos.

### Canais, blogs e a comunidade de software livre.

* **Youtube**
  * [Diolinux](https://www.youtube.com/user/Diolinux)
  * [Flávio Dicas](https://www.youtube.com/channel/UCRPBNcEICRhlKb1IdKfiCxw)
  * [LinuxTips](https://www.youtube.com/channel/UCJnKVGmXRXrH49Tvrx5X0Sw)
* **Blogs**
  * http://www.diolinux.com.br/
  * http://sejalivre.org/
* **Sites**
  * http://softwarelivre.org/
* **Eventos**
  * http://softwarelivre.org/fisl17
  * www.ftsl.org.br/2016
  * http://latinoware.org/

### Considerações finais

Este post não tem a menor intenção de ser extremista, tanto para o lado open source quanto para softwares proprietários. Minha intenção é deixar mais claro o que é essa sopa de letrinhas e o que cada uma delas representam. Mas um fato inegável é que o “mundo” open source trouxeram grandes avanços para a tecnologia, revolucionando o mercado de TI.

Deixo aqui registrado que devemos colaborar com projetos open sources, e todos os projetos necessitam de apoio, não deixando de lado apoio financeiro, então por favor não fique chamando empresas de mercenárias, somente pelo fato de que elas necessitam de doações para manter o projeto open source, pois como o velho ditado diz “ninguém almoça de graça” em outras palavras precisamos de dinheiro para se manter, seja o programador pagar suas contas, quanto a própria empresa que mantém o projeto open source tem de pagar programadores, servidores dentre diversas outras coisas.

Hoje grandes empresas como a Microsoft estão mudando fortemente seus conceitos e aderindo ao mundo open source, claro você não acredita que a Gooogle vai inserir no GitHub todo seu código responsável pelo seu algoritmo de busca, pois isso não irá acontecer, porem ela contribuiu com vários outros projetos que o mundo todo utiliza, como por exemplo [AngularJS](https://angularjs.org).

E por último caso você não concorde com o rumo que o projeto open source que você goste esteja tomando, ao invés de apenas criticar ou ficar hateando no twitter, procure ajudar, mande propostas de melhorias, colabore, essa atitude sim acrescenta e todos ganham no final.

Espero que tenham apreciado o post, caso tenha algum ponto que discordem vamos fazer um debate nos comentários, vamos fomentar mais conteúdo, deixe também suas criticas ou sugestões.

Um grande abraço a todos.
