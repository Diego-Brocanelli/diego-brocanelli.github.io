---
title: "Como transformar sistemas legados em oportunidades de crescimento"
date: 2025-02-18T21:03:48Z
draft: false
categories:
  - programação
tags:
  - software
  - programação
  - legado
  - legados
  - oportunidade
  - crescimento
---

## Sumário

1. [O que define um sistema como legado?](#o-que-define-um-sistema-como-legado)
2. [Por que há tanto medo de sistemas legados?](#por-que-há-tanto-medo-de-sistemas-legados)
3. [Não julgue quem nem o porquê](#não-julgue-quem-nem-o-porquê)
4. [Dívidas técnicas](#dívidas-técnicas)
5. [Para quem é essa melhoria?](#para-quem-é-essa-melhoria)
6. [Regras de negócio no banco de dados](#regras-de-negócio-no-banco-de-dados)
7. [Mapear as mudanças](#mapear-as-mudanças)
8. [Planejando o quê e como será feito](#planejando-o-quê-e-como-será-feito)
9. [Qual o melhor momento para refatorar?](/#qual-o-melhor-momento-para-refatorar)
10. [Quando não devo aplicar melhorias?](#quando-não-devo-aplicar-melhorias)
11. [E a documentação?](#e-a-documentação)
12. [Opiniões da comunidade](#opiniões-da-comunidade)
13. [Encerramento](#encerramento)
14. [Referências](#referências)

## O que define um sistema como legado?

Um sistema é considerado legado não apenas pela sua idade, mas por uma combinação de fatores. Geralmente, um sistema é classificado como legado quando apresenta dificuldades em atender às demandas atuais da empresa ou tecnologia. Isso pode incluir:

- Tecnologias ultrapassadas ou descontinuadas;
- Falta de documentação clara e atualizada;
- Alto custo de manutenção;
- Dependência de especialistas que conhecem detalhes do sistema;
- Problemas de integração com sistemas modernos.

É importante destacar que, em muitos casos, o termo "legado" não é necessariamente pejorativo. Sistemas legados muitas vezes são responsáveis por sustentar operações críticas de negócio.

Um ponto importante a se destacar é que o novo software escrito hoje será o legado de amanhã, caso não se tenha cautela, planejamento, padrões e documentação.

## Por que há tanto medo de sistemas legados?

O medo de lidar com sistemas legados geralmente está associado a fatores como:
- Complexidade: A falta de padrões, sobreposição de soluções temporárias e dividas técnicas tornam o sistema difícil de entender;
- Riscos: Alterar um sistema legado pode introduzir novos bugs ou até comprometer funcionalidades críticas;
- Falta de testes: normalmente um sistema legado não tem testes ou está desatualizado;
- Conhecimento limitado: Muitas vezes, quem desenvolveu o sistema não está mais na empresa, e o conhecimento acumulado foi perdido, somado a possível falta de documentação;
- Custo: manutenção ou substituição de sistemas legados geralmente exige tempo e recursos significativos.

Esses medos são compreensíveis, mas podem ser mitigados com planejamento adequado e uma abordagem colaborativa.

## Não julgue quem nem o porquê

Antes de criticar um sistema legado, é essencial lembrar que ele foi provavelmente a melhor solução em determinado momento, podendo ter sido desenvolvido sob algumas condições como:
- Pressão de tempo;
- Recursos limitados;
- Restrições técnicas;
- Requisitos mal definidos ou quase inexistentes.

Ter empatia pelo passado permite um entendimento mais justo e cria uma base para um trabalho de melhorias mais eficaz e respeitoso.

Os itens descritos acima podem ocorrer tanto em um time interno, terceirizado ou freelancer. Uma maneira de mitigar ou atenuar é dispor de um profissional mais experiente, responsável por conduzir e manter a casa em ordem.

## Dívidas técnicas

É o resultado das decisões tomadas durante o desenvolvimento, visando soluções rápidas em detrimento da qualidade ou manutenção futura, podendo ser intencional ou não, e acarretará retrabalho no futuro.

Embora, em alguns casos, seja inevitável adquirir uma dívida técnica, é fundamental estar ciente do impacto e ter um planejament de como e quando essa dívida será paga.

> **OBSERVAÇÃO!** Sempre trabalhe em equipe, pois a dívida que seu colega faz hoje, pode e será sua no futuro!

O custo a longo prazo pode e irá aumentar os custos de manutenção e dificultar a inovação, criando riscos que podem levar a falhas críticas e pode comprometer a produtividade da equipe na totalidade.

Sendo assim, somente devemos aceitar quando houver prazos críticos, com benefícios claros, porém, com um plano de pagamento. Dívidas técnicas devem sempre estar no topo da lista de melhorias.

Idealmente os sêniores da equipe podem tomar essa decisão, pois analisaram os prós e contras, codificando da melhor maneira para que no processo de melhoria, ou seja, desfeito ou feito da maneira correta. Ou seja, saber exatamente o que está fazendo para no futuro refazer.

Com o passar do tempo, o acúmulo de dívidas técnicas gerará "juros" que podem ser exponenciais! Onde facilmente perdemos o controle.

> **OBSERVAÇÃO:** Não há nada pior do que algo provisório que se torna definitivo!

Recomento a leitura do post escrito pelo amigo Willian Oliveira, que aborda o tema de [dívidas técnicas](https://woliveiras.com.br/posts/o-que-e-e-quando-pagar-uma-divida-tecnica).

## Para quem é essa melhoria?

Antes de refatorar um sistema legado, é fundamental entender quem são os beneficiários dessa mudança:
- Os usuários finais, que poderão aproveitar uma melhor experiência.
- A equipe de desenvolvimento, que terá mais facilidade em manter o sistema.
- A empresa, que reduzirá custos e melhorará a escalabilidade do software.

Perguntar "por que refatorar?" é tão importante quanto "Para quem refatorar?". O foco deve ser atender às necessidades reais, não apenas seguir modismos tecnológicos, pois modismos normalmente são passageiros e quem adota essas tecnologias nem sempre permanecem no projeto ou empresa, deixando um problema para quem ficou.

Para toda nova tecnologia que será utilizada devemos nos perguntar:
- Quais são os prós e contras?
- O porquê da adoção?
- Quais benefícios ou problemas resolverá no projeto?
- Qual o impacto no time?
- Há no time conhecimento para adotar?
- Teremos que elaborar treinamento?
- A tecnologia é madura o suficiente para ser utilizada?
É fundamental que todos os membros do projeto tomem as decisões, para que assim busque a melhor possível.

Sempre será mais fácil melhorar o sistema onde trará melhorias para o usuário e reduzirá custos para a empresa. Qualquer melhoria deve focar em trazer valor ao negócio ou produto, deve-se fazer sentido a sugestão proposta, para que assim seja viável e eficiente aplicá-la. Mudanças técnicas apenas por ego, achismo, opiniões sem embasamento ou modinha. Pois, são temporárias e irão adicionar mais complexidade ao dia a dia do time e produto.

Um sistema legado, onde a mão de obra é escassa, pode ser uma excelente alternativa pensar em uma nova tecnologia, para que assim reduza o custo financeiro para contratação, auxilie na diminuição do turnover, tempo para correções e implementação de novas funcionalidades.

> **IMPORTANTE!** Todos do time devem estar empenhados e engajados em sempre melhorar o software.

## Regras de negócio no banco de dados

Uma das características mais comuns de sistemas legados é a presença de regras de negócio diretamente implementadas no banco de dados, como “triggers” e “procedures”.
Defendo que toda regra de negócio permaneça no sistema, onde o banco de dados fique “apenas” responsável por armazenar os dados.

Uma vez que a regra de negócio está no banco, é difícil (se não impossível) de debugar e localizar a origem de um bug. Podemos perder tempo vasculhando o bug no código, quando o mesmo encontra-se no banco de dados.

Da mesma maneira que os códigos são evoluídos e melhorados, devemos sempre ponderar se o banco de dados não pode ser melhorado.
Abaixo temos alguns pontos de atenção.
- Integridade dos Dados;
- Faça backups regulares;
- Impacto nas aplicações;
- Verifique se as mudanças não impactarão algum sistema;
- Atualize consultas;
- Índices;
- Compatibilidade com novas versões;
- Controle de acesso e segurança;
- Tamanho e crescimento;
- Documentação;
- Teste de regressão.

Abaixo temos algumas melhorias que podem ser realizadas.

- Normalização;
- Desnormalização (se necessário);
- Otimização de Índices;
- Revisão de tipos de dados;
- Padronização de nomes;
- Uso de “constraints”;
- Particionamento;
- Implementação de logs e auditoria;
- Estratégias de backup e recuperação.

## Mapear as mudanças

Nunca se deve melhorar qualquer parcela de código sem antes mapear o que será alterado, pois sem essas informações não saberemos a extensão das mudanças.

A princípio, a melhoria pode parecer simples, mas, após o mapeamento, temos a real dimensão do impacto.

Sendo assim, mapear o que será alterado é um passo crucial no processo de refatoramento. Isso inclui:

- Identificar os pontos críticos do sistema;
- Entender dependências internas e externas;
- Priorizar mudanças baseadas no impacto, custo e tempo;
- Planejar o roadmap, detalhando tarefas, responsabilidades e prazos.

Todos do time são responsáveis por manter a saúde do projeto, independente se é júnior, pleno ou sênior, entretanto para cada nível se tem visões, ações, e expectativas distintas.

### Júnior

- **Esperado:** aprender, executa tarefas simples e atualiza documentações.
- **Pontos de atenção:** curva de aprendizado, dependência de orientação e falta de experiência.
- **O que se espera:** Proatividade, sede por conhecimento e capaz de seguir orientações.

### Pleno

- **Esperado:** maior autonomia, propõe melhorias moderadas e orienta os juniores.
- **Pontos de atenção:** gestão de complexidade, tomada de decisão e lidar com dívida técnica.
- **O que se espera:** maior autonomia em tarefas mais complexas, auxiliar em decisões mais complexas e contribuir com melhorias e mantenham a estabilidade do sistema.

### Sênior

- **Esperado:** liderança, planeja mudanças estratégicas e toma decisões assertivas.
- **Pontos de atenção:** equilíbrio entre qualidade e prazos, gestão de riscos e visão de longo prazo
- **O que se espera:** tomada de decisões assertivas, contribuições estratégicas para o design e arquitetura do sistema, liderar o time em momentos críticos e garantir que o sistema melhorado seja escalável, manutenível e alinhado aos objetivos do negócio.

## Planejando o quê e como será feito

> **IMPORTANTE!** Você não é o Rambo! Então não faça tudo sozinho nem por impulso!

Refatorar um sistema legado é um trabalho colaborativo. Não tente fazer tudo sozinho. Uma equipe diversificada pode trazer novas perspectivas, identificar soluções mais eficazes e ajudar a compartilhar responsabilidades.

Foi-se a época em que programadores não interagiam com outras pessoas, departamentos ou cliente, hoje essa comunicação é vital e fundamental!

> **IMPORTANTE!** Sistemas mal projetados ou mal refatorados, trazem sempre pegadinhas, onde uma modificação simples em um módulo “X” pode quebrar o módulo “Y”.

Foque na comunicação clara, no alinhamento de expectativas e no acompanhamento contínuo.

Alguns pontos a serem seguidos para um bom planejamento:

- Entenda o contexto, reúna informações sobre o sistema, converse com membros veteranos e partes interessadas;
- Mapeie e defina claramente os resultados esperados, priorizando áreas críticas, levando em consideração segurança, desempenho e escalabilidade;
- Faça as mudanças em ciclos curtos;
- Monte um diagnóstico detalhado;
- Defina a melhoria, quem será responsável, estabeleça metas e tenha checkpoints para revisões e possíveis ajustes;
- Automatize os testes e execute com frequência, garantindo que tudo está correto;
- Mantenha sempre comunicação com o time, líderes e partes interessadas;
- Crie uma documentação confiável e mantenha atualizada;
- Revise e aprenda com o processo.

É plenamente aceitável que para que uma grande mudança ocorrer serão necessárias diversas melhorias ao longo de anos.

> **DICA!** É preferível um pequeno passo diariamente do que passo algum.

O tamanho do projeto impacta diretamente no tempo das melhorias, pois é mais rápido convergir com uma lancha do que com o Titanic.

## Qual o melhor momento para refatorar?

O melhor momento para refatorar é quando:
- O sistema está impedindo a evolução do negócio;
- O custo de manutenção está excessivamente alto;
- A equipe está gastando mais tempo corrigindo bugs do que implementando novas funcionalidades;
- O conhecimento ou mão de obra está escassa;
- Existe um momento favorável, como uma reestruturação do produto ou a adoção de novas tecnologias.

> **DICA!** Aja como um escoteiro, sempre deixe o código melhor do que você o encontrou, por menor que seja a melhoria com o passar do tempo trará grandes benefícios.

## Quando não devo aplicar melhorias?

Sempre devemos estar atentos para quando não se deve aplicar melhorarias, por exemplo:

- O sistema está prestes a ser descontinuado;
- O custo de melhoria supera os benefícios esperados;
- A equipe não tem o conhecimento ou os recursos necessários;
- Existem outras prioridades estratégicas mais urgentes.

Toda ideia de melhoria deve ser apresentada ao líder, gerente e cliente, para poderem analisar com cautela tanto a parte técnica quando a de negócio. Muitas vezes o viés técnico pode se ressaltar e justificar a melhorias, porém ao nível de negócio não faz sentido, por exemplo:

No sistema “XPTO corp” o relatório “XYZ” leva 15 segundos para ser gerado, e o programador quer melhorar o código para que esse tempo reduza pela metade o menos, para isso ele estima que levará 16 horas para a melhoria ficar pronta, porém, é um relatório extraído 1 vez por mês por poucos ou apenas um usuário.

Como visto no exemplo acima, por mais que o resultado da melhoria pudesse trazer um salto em melhoria no tempo da extração do relatório, o mesmo não se justifica, pois não trará valor ao cliente e o tempo que será investido pode ser aproveitado em uma funcionalidade mais crítica e importante.

## E a documentação?

Documentar não deve ser uma etapa esquecida. A documentação atualizada:
- Facilita a compreensão do sistema;
- Reduz a curva de aprendizado para novos desenvolvedores;
- Garante que as decisões tomadas durante o processo de melhoria sejam registradas.

Crie documentações técnicas, manuais de usuário e diagramas de arquitetura para apoiar a equipe.

> **IMPORTANTE!** Tão prejudicial quanto uma documentação inexistente é uma desatualizada.

## Opiniões da comunidade

Abaixo, apresento as opiniões de grandes profissionais sobre sistemas legados.

### [Elton Mineto](https://eltonminetto.dev/)

#### Para você, o que caracteriza um sistema legado?

Qualquer sistema que está em produção automaticamente torna-se um sistema legado. Acho que temos uma conotação ruim quando usamos o termo “legado”, como se fosse algo que temos que carregar, um fardo. Se olharmos o dicionário, uma das definições é “o que é transmitido às gerações que se seguem”. E isso não é necessariamente ruim, é algo que foi desenvolvido, está gerando lucros e precisa ser mantido para continuar crescendo e gerando valor. 

#### Quais são os maiores desafios?

Os desafios envolvem crescimento e evolução, para que o valor continue a ser gerado conforme a empresa cresce em usuários, funcionalidades, times. 

#### Quais vantagens você vê em trabalhar com sistemas legados?

O aprendizado é muito grande pois é fácil colocar algo novo em produção, desafio é ver esse projeto evoluir, ganhar mais funcionalidades, novos usuários, novas abordagens. 

#### No seu cargo, como você lida com sistemas legados?

O segredo é manter a regra do escoteiro: “deixar o código um pouco melhor do que estava quando você o encontrou”. Se todo mundo mantiver essa mentalidade, de sempre melhorar o projeto aos poucos ele não vai perdendo sua qualidade com o tempo.

#### Espaço livre:

Trabalhar em código legado é um grande aprendizado pois você pode observar o resultado de decisões passadas, suas ou de outras pessoas. Com isso você aprende muito sobre como um software evolui e envelhece, entende como uma decisão que as vezes parece simples pode se tornar um grande problema (ou vantagem) no futuro. Este tipo de experiência torna a pessoa uma melhor desenvolvedora e arquiteta.

### [Ricardo Pereira Dias](https://www.ricardopedias.com.br/)

#### Para você, o que caracteriza um sistema legado?

Em sistema legado possui código sem testes automatizados. A ausência dos testes inviabiliza a medição sobre a eficiência da manutenção. Sem os testes, podemos estar inserindo um bug ao invés de uma evolução e o sistema será sempre uma caixa preta. Mexe aqui estraga ali: isso é um sistema legado. Em um sistema “não-legado”, podemos alterar as coisas com confiança, sabendo o que está acontecendo.

#### Quais são os maiores desafios?

É preciso treinar um excelente espírito analítico. Conseguir interpretar os requisitos e a regra de negócio inerente ao código a ser alterado. Devotar muita atenção enquanto move-se o código antigo para novas estruturas. Certificar-se de implementar blocos de código organizados, reaproveitáveis e, principalmente, testáveis. 

#### Quais vantagens você vê em trabalhar com sistemas legados?

O trabalho correto com código legado (criando reaproveitamento e testes) vai incrementar enormemente a experiência do programador. Aumentará também o campo de visão e a cognição para encontrar problemas com maior velocidade. A percepção de “como não fazer um código” irá aumentar bastante, e ajudará diretamente no momento de elaborar novos projetos. 

#### No seu cargo, como você lida com sistemas legados?

Como Líder Técnico, faço periodicamente a revisão do código legado gerado pelos desenvolvedores. Todo o código que nasce sem testes, já nasce legado! Isso exige, muita vezes, uma atenção maior para assuntos que os testes já estariam cobrindo.

## Encerramento

Trabalhar com sistema legado sempre é um desafio, porém é muito gratificante e enriquecedor, sendo uma oportunidade de aprendizado e crescimento, pois requer técnica, paciência e empatia.
Mais do que um código melhor, o objetivo é criar um sistema que atenda às necessidades presentes e futuras, com uma base sólida para evoluir.

## Referências

- Refatoração: padrões para um código mais limpo e de fácil manutenção;
- Código limpo: habilidades práticas do Agile Software;
- Refatoração: Aperfeiçoando o design de códigos existentes.
- https://pca.st/episode/dab220f9-4054-412a-acae-a9b604e3cde5; 
- https://woliveiras.com.br/posts/o-que-e-e-quando-pagar-uma-divida-tecnica.
