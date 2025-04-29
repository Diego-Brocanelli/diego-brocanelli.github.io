---
title: "Como analisar um problema"
date: 2025-04-25T20:06:37Z
draft: false
categories:
  - soft-skills
tags:
  - análise
  - analisar
  - soft skills
  - problema
---

# Como analisar um problema?

# Sumário

- [O que motivou o post?](#o-que-motivou-o-post)
- [O que caracteriza uma análise ser ruim?](#o-que-caracteriza-uma-análise-ser-ruim)
- [Consequências de uma má análise](#consequências-de-uma-má-análise)
- [O que faz uma análise ser excelente?](#o-que-faz-uma-análise-ser-excelente)
- [Exemplo prático](#exemplo-prático)
- [Considerações finais](#considerações-finais)

## O que motivou o post?

Somos programadores e analisar faz parte do nosso dia a dia, seja para resolver problemas, criar novas funcionalidades ou implementar melhorias. Fazer uma excelente análise é essencial para garantir boas decisões e evitar retrabalho.

## Por que analisar bem é tão importante?

Analisar bem significa reunir fatos e evidências para embasar nossas escolhas. Uma análise mal feita pode ter um impacto devastador, levando o time a seguir por caminhos equivocados e desperdiçar tempo e recursos.

> **Nota:** Uma análise mal feita ou incompleta tem potencial devastador, levando a caminhos errados!

## O que caracteriza uma análise ser ruim?

São diversos os fatores que podem fazer com que a análise seja de péssima qualidade, falarei com mais detalhes a seguir.

### Achismo

Achar é algo que nós programadores nunca devemos fazer! Pois, achando não temos dados e fatos para ponderar e buscar a melhor alternativa possível. Fora que, na minha visão, transmite um viés de amadorismo.

Imagine o cenário de um médico, você está com dor no estômago, e o mesmo "acha" que você tem “gastrite” e receita diversos remédios. Porém, no final das contas foi apenas o lanche que caiu mal.

Do mesmo modo que nunca esperamos nos consultar com um médico medíocre, nós também não devemos agir como tal.

> **Nota:** Nunca devemos achar! Pois é adivinhar, e isso não faz parte do nosso papel como profissionais.

### Análise rasa

Fazer uma análise superficial, é tão perigoso quanto nenhuma análise, pois traz pouca ou nenhuma evidência, podendo estarem erradas!

Não poucas vezes, principalmente no início de carreira, iniciamos a análise e na primeira evidência que é achada tomamos como verdade, interrompemos a análise e partimos para a ação. Porém, não poucas vezes também, temos que parar o que está sendo feito, pois não está correto ou claro, devido à análise superficial, fazendo com que o planejamento seja superficial causando diversos retrabalhos.

> **Nota:** Com uma análise rasa teremos um mapa incompleto, que leva a qualquer lugar, e quase sempre não será o destino desejado.

### Ignorar evidências

Durante a análise, se desconsideramos informações como logs, capturas de tela, mensagens, etc., podemos estar deixando para trás a origem do problema. Cada evidência é parte essencial para a montagem do contexto real do problema.

> **Nota:** O quebra cabeça somente finaliza tendo todas as peças!

### Pular etapas

O mais comum é pularmos etapas de análise e irmos para o que “achamos” ser o mais complexo e por sua vez onde provavelmente está o problema.

### Não validar hipóteses

Ter hipóteses é saudável, mas elas precisam ser investigadas e testadas. Sem validação, a hipótese vira achismo camuflado de lógica.

## Consequências de uma má análise

- **Retrabalho:** soluções erradas geram retrabalho e atrasos. A equipe perde tempo refazendo tarefas que poderiam ter sido evitadas com uma boa análise;
- **Decisões erradas:** sem evidências confiáveis, as decisões técnicas ou de negócio se baseiam em suposições, desviando completamente do real problema, impactando diretamente o produto e a experiência do usuário;
- **Perda de confiança:** a recorrência de falhas mina a confiança de colegas, gestores e clientes. Uma análise fraca compromete a imagem do profissional e da equipe;
- **Desperdício de tempo e recurso:** trabalhar na direção errada é queimar energia e tempo (dinheiro) em algo que não gera valor;
- **Evoluções do sistema comprometidas:** problemas mal compreendidos são empurrados para frente, aumentando dívidas técnicas e atrasando melhorias;
- **Ruídos na comunicação:** sem uma análise clara e bem estruturada, o alinhamento com stakeholders e o time fica comprometido. Isso torna o processo mais demorado e sujeito a interpretações erradas.

## O que faz uma análise ser excelente?

- **Análise técnica:** devemos analisar sempre 100%, garantindo que todos os fatos e evidências necessárias foram mapeadas;
- **Coleta de evidências:** conforme analisamos, devemos coletar todas as evidências encontradas, imagens, logs, códigos, entrevista com as pessoas envolvidas, etc., imagine as evidências sendo como peças de um quebra cabeça, a diferença que podemos, às vezes, estar mexendo com peças de mais de um quebra-cabeça. Somente com todas as peças juntas poderemos entender o cenário completo;
- **Opiniões externas:** podemos até receber opiniões externas que nos ajudam, porém, não devemos negligenciar a análise completa. Não podemos ignorar nenhuma etapa, por mais óbvia que seja, pois o “é óbvio que já foi analisado” pode ser no final onde justamente o problema estava. Há momentos que o cliente pode abrir um chamado e descrever o que “acha”, porém, sempre repasse tudo, pode ser que em sua ótica o que foi desconsiderado por ele seja onde o problema se encontra;
- **Hipóteses:** podemos ter hipóteses de um problema ou ação, o que diferencia do “achismo” é o seu processo de análise e validação;
- **Separe os contextos:** nem tudo que parece bug é de fato. Pode ser uma regra de negócio mal compreendida ou uma nova necessidade;
- *Documentar:* sim! Tão importante quanto analisar é registrar o resultado da análise! Abordaremos melhor a seguir.

> **Lembre-se!** Uma ótima análise bem documentada monta todas as peças e deixa visível o resultado.

## Exemplo prático

Vamos pegar como exemplo um chamado aberto pelo cliente para a equipe de desenvolvimento.

<div class="jumbotrom">

**Chamado:** #42

**De:** Cliente

**Título:** "Sistema fora do ar"

**Descrição:** "O relatório não exporta."

</div>

Como podemos observar, não conseguimos chegar a nenhuma conclusão, nem iniciar o processo de análise, pois as informações fornecidas pelo cliente são superficiais. Sendo assim é necessário que solicitemos mais informações do ocorrido.

<div class="jumbotrom">

**De:** Programador

**Descrição:** Olá, Cliente!

Recebemos seu chamado, mas precisamos de mais algumas informações para entender melhor o que está acontecendo:

- Em qual parte do sistema o erro ocorreu?
- O que você estava tentando fazer?
- O que aconteceu de diferente do esperado?
- O erro acontece sempre ou foi pontual?
- Se possível, nos envie uma imagem ou mensagem de erro que tenha aparecido.

</div>

Como podemos observar acima, sinalizamos ao cliente que necessitamos de mais informações e listamos algumas informações.

<div class="jumbotrom">

**De:** Cliente

**Descrição:** Olá, Programador!

O problema está ocorrendo na tela de relatórios de atendimento.
Eu estava tentando gerar o relatório do mês de fevereiro entre as datas 15/02 até 01/02.

Ao clicar em "Gerar", nada aconteceu — o relatório não é gerado e nenhuma mensagem foi exibida.
Testei mais de uma vez e o problema se repete.
Segue print da tela com os dados preenchidos.

</div>

Agora, com base nas respostas, podemos iniciar com maior clareza toda a análise necessária para a eventualidade mencionada pelo cliente.

Para isso:

- Acessamos a tela do relatório;
- Replicamos o filtro mencionado pelo cliente.

Ao observarmos o que foi dito pelo cliente, ele está invertendo as datas, e isso está impactando na busca das informações, porém, o sistema não informou ao cliente que não é possível gerar o relatório com a data inicial maior que a data final

### Documentando o resultado da análise

Após a realização de toda a análise do problema, foi constatado o relatório não está sendo gerado pelo fato das datas estarem invertidas, com isso o programador respondeu ao chamado com a seguinte resposta.

<div class="jumbotrom">

**De:** Programador

**Descrição:** Olá, Cliente!

Conforme sua descrição e a imagem enviada, realizei a análise da eventualidade na geração do relatório.

**O que foi analisado:**

- Foi realizado acesso à tela do relatório;
- Replicado os filtros com as datas informadas.

**O que identificamos:**

Está sendo solicitado a geração do relatório com as datas invertidas, onde a data inicial é maior que a final.

Para que o relatório possa ser gerado, deve-se inverter as datas.

Estou anexando o relatório extraído.

**Próximas ações:**

O sistema deveria ter notificado da inversão das datas, iremos providenciar os ajustes e assim finalizado retornarei no chamado.

Atenciosamente,

</div>

Como podemos observar acima, a resposta traz de forma geral o problema, como a análise ocorreu sem trazer jargões técnicos e descreveu como e quando será solucionada a eventualidade trazida pelo cliente.

Fazendo assim, caso no futuro seja necessário retomar este chamado, ou mesmo outra pessoa tenha que compreender o que ocorreu, todas as mensagens trocadas entre cliente e programador descreve todo o caminho percorrido até a solução. Não deixando dúvidas no processo.

> **Atenção!** A resposta da análise deve ser clara, direta e conter todas as informações necessárias para esclarecer a decisão tomada.

</aside>

Para montar o texto de resposta sempre devemos ter em mente que tem que ser 100% compreensível pelo cliente ou quem ler o texto, nunca o foco é quem está escrevendo, pois ele está munido de todo o ocorrido na cabeça, devemos montar todas as peças para que todos possam ser capazes de ver o quebra-cabeça finalizado.

Particularmente gosto de dividir minha resposta nas três etapas:

- O problema que estou analisando;
- Todo o processo de análise e seus resultados detalhados;
- O que será feito com a decisão tomada.

Nem sempre o resultado será uma ação propriamente dita, no exemplo que trouxe, por se tratar de uma falha houve ação de correção. Porém, podemos chegar em conclusões de que o reportado não é, de fato, um problema e sim uma ação decorrente a regra de negócio, ou também, que seja uma necessidade de evoluir o sistema e atualizar as regras de negócio.

## Considerações finais

É compreensível que profissionais iniciantes tenham dificuldades em analisar, porém, somente a prática faz aumentar a experiência. Se desafie, aumente a dificuldade dos problemas, quebre a cabeça, troque experiências com seu time. Busque pessoas mais experientes e peça feedbacks!
