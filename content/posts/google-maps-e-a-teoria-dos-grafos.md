---
title: "Google Maps e a teoria dos grafos"
date: 2026-08-31T20:46:44Z
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - grafos
tags:
  - grafos
  - dijkstra
  - floyd-warshall
  - prim
draft: true
---

# Google Maps e a teoria dos grafos

## Introdução

Abrimos o Google Maps, preenchemos nosso destino e, em pouco tempo, temos a melhor rota dentre as possíveis, pois foram analisadas e calculadas diversas informações para o melhor resultado.

Isso nos traz uma dúvida:

> Como um sistema consegue tomar essa decisão tão rápido e considerando ruas, cruzamentos, sentido do tráfego e até o trânsito em tempo real?

A resposta começa com uma estrutura de dados que parece simples, porém, é uma das mais poderosas da computação: **o grafo**.

## A história da teoria dos grafos

A teoria dos grafos não nasceu na computação, ela é bem mais antiga. Sua origem é atribuída ao matemático suíço Leonhard Euler, em 1736, quase 200 anos antes de existir o primeiro computador.

O problema que deu início a tudo ficou conhecido como as sete pontes de Königsberg. A cidade de Königsberg (hoje Kaliningrado, na Rússia) era cortada por um rio com duas ilhas, conectadas ao restante da cidade por sete pontes. Os moradores tinham um desafio: seria possível caminhar pela cidade atravessando cada uma das sete pontes exatamente uma vez, sem repetir nenhuma?

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/exemplo-01-as-sete-pontes.png">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 01:</span> Exemplo do problema "As sete pontes de Königsberg"
        </td>
    </tr>
</table>

Euler provou que não era possível — e o mais importante não foi a resposta em si, mas o método. Ele percebeu que os detalhes geográficos (formato das ilhas, distância entre as pontes) eram irrelevantes para o problema. O que importava era apenas: quais pontos estão conectados a quais outros pontos, e por quantas ligações.

Ao simplificar o mapa da cidade para pontos (as regiões de terra) e linhas (as pontes), Euler criou, sem nomear formalmente, o primeiro grafo da história. Esse raciocínio — abstrair um problema até restar apenas nós e conexões — é exatamente o que torna a teoria dos grafos tão versátil hoje: ela não descreve o que é conectado, apenas que existe conexão, o que permite aplicá-la a mapas, redes sociais, moléculas ou circuitos elétricos, usando a mesma estrutura matemática.

## O que de fato é um grafo?

Um grafo é uma estrutura formada por dois elementos:

- **Nós (ou vértices):** representam entidades: pessoas, cidades, cruzamentos, páginas web ou o que fizer sentido para o problema.
- **Arestas:** representam as conexões entre esses "nós".

Isso é mais intuitivo do que parece. Pense em:

Uma rede de amigos, onde cada pessoa é um nó e cada amizade é uma aresta.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/exemplo-02-redes-de-amigos.jpg">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 02:</span> Exemplo de Grafo em uma rede de amigos.
        </td>
    </tr>
</table>

Um mapa do metrô, onde cada estação é um nó e cada trecho de linha é uma aresta.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/exemplo-03-mapa-metro.jpg">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 03:</span> Exemplo de Grafo em estações de metrôs.
        </td>
    </tr>
</table>

Uma árvore genealógica, onde cada pessoa é um nó e cada relação de parentesco é uma aresta.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/exemplo-04-arvore-genealogica.jpg">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 04:</span> Exemplo de Grafo árvore genealógica.
        </td>
    </tr>
</table>

Alguns termos vão aparecer com frequência ao longo do post, então vale já deixá-los definidos:

- **Adjacência:** dois nós são adjacentes quando existe uma aresta direta entre eles.
- **Grau de um nó:** quantidade de arestas conectadas a ele.
- **Caminho:** sequência de nós conectados por arestas, do início ao destino.
- **Ciclo:** um caminho fechado que começa e termina no mesmo nó, sem repetir nós nem arestas ao longo do percurso (exceto, claro, o nó inicial que também é o final).
- **Conectividade:** um grafo é conectado quando existe pelo menos um caminho entre qualquer par de nós.

Com essa base de vocabulário, já conseguimos avançar para o problema que motivou este post: como um grafo vira, na prática, o mecanismo que escolhe a melhor rota no Google Maps.

## Maps: como definir a melhor rota

Pense em um cruzamento de ruas: ele é um ponto onde você pode tomar decisões: virar à esquerda, seguir em frente, virar à direita. Em termos de grafo, cada cruzamento é um nó, e cada trecho de rua que liga dois cruzamentos é uma aresta. A cidade inteira, com todos os seus cruzamentos e ruas, pode ser representada como um grafo gigante.

Mas ter o grafo pronto é só o começo. O problema real é: como percorrer esse grafo de forma inteligente até encontrar o destino? É aqui que entram as estratégias de busca, a base sobre a qual algoritmos mais sofisticados, como o Dijkstra, são construídos.

### Busca em profundidade

A busca em profundidade (DFS - depth-first search) explora um grafo seguindo um único caminho o mais longe possível, antes de voltar atrás (backtrack) e tentar outra alternativa.

É como percorrer um labirinto sempre andando reto e só voltando quando bate em uma parede sem saída. Aplicado a um mapa de ruas, seria como escolher sempre a primeira rua disponível, seguir até o fim, e só reconsiderar quando chegar a um beco sem saída.

O problema da DFS é que ela não garante o caminho mais curto: pode muito bem encontrar o destino depois de um longo desvio, antes de considerar uma rota mais direta.

### Busca em largura

A busca em largura (BFS - breadth-first search) segue uma lógica oposta: em vez de seguir um único caminho até o fim, ela explora todos os vizinhos do nó atual antes de avançar para o próximo nível.

Uma boa analogia é uma pedra jogada na água: as ondas se espalham em círculos, alcançando tudo que está a uma distância 1, depois tudo que está a uma distância 2 e assim por diante.

Aplicada a um mapa sem pesos nas arestas (ou seja, assumindo que toda rua tem o mesmo "custo"), a BFS garante encontrar o caminho com o menor número de trechos entre origem e destino, porque ela nunca avança para um nível mais distante antes de esgotar o nível mais próximo.

A limitação da BFS aparece quando as arestas têm custos diferentes, como no mundo real, em que uma rua pode ser muito mais rápida de percorrer do que outra, mesmo sendo mais longa em número de cruzamentos.

### Dando vida às buscas

DFS e BFS são estratégias de exploração, elas decidem em que ordem visitar os nós de um grafo, porém, sozinhas, não sabem nada sobre distância real, tempo de trajeto ou trânsito.

O próximo passo natural é dar "peso" a essa exploração. Em vez de visitar vizinhos em ordem arbitrária (DFS) ou por proximidade em número de trechos (BFS), passamos a visitar sempre o nó que está mais barato de alcançar até aquele momento. Essa mudança de critério, de "ordem de descoberta" para "custo acumulado", é exatamente o que transforma a busca em largura no algoritmo de Dijkstra, que veremos na seção ["O algoritmo de Dijkstra"](#o-algoritmo-de-dijkstra).

É esse tipo de evolução, aliás, que caracteriza boa parte da história dos algoritmos em grafos: ideias simples de exploração (DFS, BFS) servindo de base para versões mais refinadas, adaptadas a problemas específicos como encontrar o caminho mais rápido, e não apenas o mais curto.

### Árvores

Toda vez que uma busca (DFS ou BFS) percorre um grafo, ela implicitamente constrói uma árvore: uma estrutura em que cada nó, exceto o de origem, tem exatamente um "pai", que é o nó a partir do qual ele foi descoberto.

Formalmente, uma árvore é um grafo com duas propriedades:

1. **É conectado** (existe caminho entre quaisquer dois nós);
2. **É acíclico** (não possui ciclos, ou seja, não forma um anel fechado ou uma volta repetitiva).

Isso significa que, entre dois nós quaisquer de uma árvore, existe exatamente um caminho possível e não há atalhos nem voltas.

Essa estrutura aparece o tempo todo em computação:

- Sistemas de arquivos (pastas dentro de pastas);
- Estruturas de decisão;
- Hierarquias organizacionais.

No contexto de rotas, a árvore de busca gerada por um algoritmo é justamente o que permite reconstruir o caminho percorrido até o destino, voltando nó por nó até a origem.

### Árvores geradoras

Uma árvore geradora (spanning tree) de um grafo é uma árvore que conecta todos os nós do grafo original, usando apenas um subconjunto das arestas, sem formar ciclos.

Pense em uma cidade com dezenas de cruzamentos e ruas redundantes (várias formas de ir de um ponto a outro). Uma árvore geradora seria o conjunto mínimo de ruas necessário para que ainda seja possível chegar a qualquer cruzamento a partir de qualquer outro, sem sobrar nenhuma rua "extra".

Quando cada aresta tem um peso (como distância ou trânsito), o problema natural é encontrar a árvore geradora mínima, aquela cuja soma dos pesos das arestas usadas é a menor possível.

Isso não é exatamente o problema do Google Maps (que busca o menor caminho entre dois pontos específicos, não conectar a cidade inteira), mas é a base teórica por trás de problemas de infraestrutura, como decidir o traçado mais barato para conectar todos os bairros de uma cidade com fibra óptica, ou todas as casas de uma região com a rede elétrica. Guarde essa ideia, vamos usá-la diretamente na seção ["O algoritmo de Prim"](#o-algoritmo-de-prim).

### Direções e valores

Faltam dois ingredientes para o grafo de ruas ficar completo: **direção** e **peso**.

Uma rua de mão única vira uma aresta direcionada e só pode ser percorrida em um sentido. Uma avenida de mão dupla vira duas arestas direcionadas, uma para cada sentido, ou uma única aresta não-direcionada, dependendo da modelagem.

O peso de cada aresta não é simplesmente a distância em metros, é, principalmente, o tempo estimado para percorrer aquele trecho, que muda de acordo com limite de velocidade, sinais de trânsito, condições da via e, claro, trânsito em tempo real.

Ou seja, a cidade inteira pode ser representada como um grafo ponderado e direcionado. É sobre essa estrutura, já enriquecida com as noções de busca, árvore e árvore geradora das seções anteriores, que os algoritmos de navegação de fato trabalham.

> Um **grafo ponderado** é um grafo em que cada aresta possui um valor (peso), como distância, custo ou tempo.

## O algoritmo de Dijkstra

Com o mapa transformado em grafo ponderado, o problema do Google Maps se resume a uma pergunta clássica:

> Dado um grafo com pesos nas arestas, qual é o caminho de menor custo total entre dois "nós"?

O algoritmo de Dijkstra, concebido por Edsger Dijkstra em 1956 e publicado por ele em 1959, é a referência histórica para resolver exatamente esse problema. Ele é, na prática, a evolução da busca em largura descrita na seção ["Busca em largura"](#busca-em-largura), onde, ao invés de visitar nós na ordem em que são descobertos, ele sempre visita o nó com o menor custo acumulado até aquele momento.

De forma resumida, o algoritmo:

1. Parte do nó de origem, com custo acumulado zero;
2. A cada passo, escolhe, entre os nós ainda não "fechados", aquele com o menor custo acumulado conhecido;
3. Atualiza o custo dos vizinhos desse nó, caso passar por ele resulte em um caminho mais barato do que o conhecido até então;
4. Repete até alcançar o destino e, nesse ponto, o custo acumulado é garantidamente o menor possível.

Em termos de complexidade, com uma fila de prioridades (heap) implementada de forma eficiente, o Dijkstra roda em **O((V + E) log V)**, onde V é o número de nós e E o número de arestas — bem tratável até para grafos grandes, mas ainda assim custoso quando esse grafo é o mapa viário de um país inteiro.

A limitação do Dijkstra é que ele explora o grafo em todas as direções, mesmo as que claramente se afastam do destino. Em um grafo do tamanho de uma cidade inteira, isso custa tempo e processamento desnecessários e, por isso, sistemas de navegação reais costumam usar variações mais espertas, como o **algoritmo A***. A ideia do A* é simples: em vez de tratar todos os nós "não fechados" da mesma forma, ele soma ao custo acumulado uma estimativa (heurística) da distância que ainda falta até o destino — por exemplo, a distância em linha reta. Isso faz o algoritmo priorizar nós que parecem estar "na direção certa", evitando explorar regiões do mapa que se afastam do objetivo. O Dijkstra, porém, continua sendo a base conceitual de todos eles: o A* nada mais é do que um Dijkstra guiado por uma bússola.

Abaixo temos um exemplo do funcionamento do algoritmo.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/imagem-05-exemplo-dijkstra.png">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 05:</span> Exemplo do algoritmo de Dijkstra.
        </td>
    </tr>
</table>

## O algoritmo de Floyd-Warshall

O Dijkstra resolve o problema do caminho mais curto a partir de uma única origem. Mas existe uma pergunta diferente, igualmente importante:

> Qual é o caminho mais curto entre todos os pares possíveis de nós de um grafo?

É esse problema que o algoritmo de Floyd-Warshall resolve. Publicado em 1962 por Robert Floyd (com base em uma formulação de Stephen Warshall), ele usa uma abordagem de programação dinâmica, onde, ao invés de explorar o grafo nó por nó, ele testa, sistematicamente, se passar por um nó intermediário deixa o caminho entre dois outros nós mais barato.

A ideia central pode ser resumida em uma pergunta repetida para cada trio de nós (A, B, K): "ir de A até B diretamente é mais barato, ou passar por K no meio do caminho reduz o custo?" Repetindo essa pergunta para todos os nós intermediários possíveis, o algoritmo converge para a menor distância entre cada par de nós do grafo.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/imagem-06-exemplo-floyd-warshall.jpg">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 06:</span> Exemplo do algoritmo de Floyd-Warshall.
        </td>
    </tr>
</table>

O custo dessa abordagem é a complexidade: enquanto o Dijkstra escala relativamente bem para encontrar uma única rota, o Floyd-Warshall recalcula distâncias entre todos os pares de nós, o que custa **O(V³)** — computacionalmente caro em grafos muito grandes, como o mapa de um país inteiro. Para efeito de comparação, um grafo com apenas mil nós já gera um bilhão de operações.

Por isso, ele não é o algoritmo usado diretamente para calcular sua rota individual no Google Maps. Porém, é esse princípio que possibilita pré-calcular rotas em grafos de bilhões de nós ao invés de recalcular tudo do zero a cada busca. Sistemas de navegação mantêm tabelas de distâncias pré-processadas entre regiões, algo conceitualmente próximo do que o Floyd-Warshall calcula.

## O algoritmo de Prim

Voltando ao problema das árvores geradoras mínimas, apresentado na seção de árvores geradoras, dado um grafo conectado e ponderado temos a pergunta:

> Como encontrar o subconjunto de arestas que conecta todos os nós com o menor custo total possível, sem formar ciclos?

O algoritmo de Prim, desenvolvido por Robert Prim em 1957 (e descrito de forma independente por Vojtěch Jarník já em 1930, por isso também é chamado de algoritmo de Jarník-Prim), resolve esse problema de forma gulosa (greedy).

Começa escolhendo um nó qualquer como ponto de partida da árvore e, a cada passo, analisa as arestas que conectam a árvore já construída aos nós que ainda não fazem parte dela, escolhendo a de menor peso, adicionando essa aresta e o novo nó à árvore, e repete até que todos os nós do grafo estejam incluídos. Com uma fila de prioridades, isso roda em **O(E log V)**, próximo da complexidade do próprio Dijkstra.

Esse algoritmo não serve diretamente para encontrar a rota entre dois pontos, esse é o papel do Dijkstra. O valor do Prim aparece em problemas de projeto de infraestrutura sobre um grafo já existente, por exemplo, dado o grafo de ruas de uma cidade, qual seria o traçado mais barato de cabos de fibra óptica que garante conectividade a todos os bairros, sem duplicar trechos desnecessários? Ou seja, o algoritmo se aplica toda vez que o objetivo é "conectar tudo pelo menor custo total", em vez de "chegar de A até B pelo menor custo".

Abaixo temos um exemplo, onde precisa ser identificado qual o melhor caminho para conectar todos os pontos.

<table class="table-img">
    <tr>
        <td>
            <img src="/assets/images/google-maps-e-a-teoria-dos-grafos/imagem-07-exemplo-prim.png">
        </td>
    </tr>
    <tr>
        <td class="table-img-footer">
            <span>Imagem 07:</span> Exemplo do algoritmo de Prim.
        </td>
    </tr>
</table>

## Onde mais grafos são utilizados?

O Google Maps é só um exemplo, provavelmente o mais visual, de um padrão que se repete em boa parte da computação: sempre que um problema envolve entidades conectadas por relações, um grafo é candidato natural para modelá-lo.

- **Redes sociais:** pessoas são nós, enquanto amizades e seguidores são arestas que conectam esses nós e ajudam a encontrar novas conexões e medir influência.
- **Sistemas de recomendação:** usuários, filmes e músicas formam conexões que ajudam plataformas como Netflix e Spotify a sugerir conteúdos com base nos interesses de pessoas com gostos semelhantes.
- **Roteamento de internet:** a rede funciona como um enorme grafo, em que os dados percorrem diferentes caminhos entre roteadores e servidores até chegar ao destino.
- **Compiladores e gerenciadores de pacotes:** dependências entre bibliotecas formam um grafo que ajuda a definir a ordem de instalação e identificar ciclos.
- **Biologia e química:** moléculas e interações biológicas podem ser representadas como grafos, conectando átomos e proteínas por meio de suas relações.
- **Motores de busca:** mecanismos como o PageRank tratam a web como um grafo, usando as conexões entre páginas para estimar sua relevância.

O ponto em comum é o mesmo raciocínio de Euler: transformar problemas complexos em pontos e conexões, deixando o grafo revelar padrões que antes passavam despercebidos.

### Resumo comparativo

Para fechar a parte técnica, um resumo rápido do que cada algoritmo resolve:

| Algoritmo | Problema que resolve | Complexidade | Usado no Maps? |
|---|---|---|---|
| Busca em largura (BFS) | Menor caminho sem pesos | O(V + E) | Base conceitual |
| Dijkstra | Menor caminho de uma origem a todos os destinos | O((V + E) log V) | Base conceitual |
| A* | Menor caminho de uma origem a um destino específico, com heurística | Próxima do Dijkstra, na prática mais rápido | Provavelmente sim, em alguma variação |
| Floyd-Warshall | Menor caminho entre todos os pares de nós | O(V³) | Não diretamente; inspira pré-processamento |
| Prim | Árvore geradora mínima (conectar tudo pelo menor custo) | O(E log V) | Não é usado para rotas, mas sim para infraestrutura |

Vale reforçar: sistemas de navegação reais, como o próprio Google Maps, provavelmente não usam nenhum desses algoritmos "puros" como aparecem nos livros-texto. Eles combinam pré-processamento offline (estruturas como *contraction hierarchies*, que simplificam o grafo antecipadamente, "pulando" cruzamentos pouco relevantes) com buscas guiadas online, do tipo A*. O que vimos aqui é a base conceitual sobre a qual essas técnicas mais sofisticadas são construídas.

## Considerações finais

Obviamente o que abordei neste post está a anos-luz de distância da complexidade real por trás do Google Maps, porém, o meu objetivo foi explorar as possibilidades de usar grafos e os algoritmos que, somados, potencializam os resultados.

Imaginar essa solução aplicada em um produto que auxilia milhões de pessoas na locomoção diária é, no mínimo, fascinante — e é um bom lembrete de que, por trás de uma interface simples como "digite seu destino", existe décadas de teoria matemática trabalhando silenciosamente.

## Referências

- [Algoritmo de Floyd-Warshall](https://pt.wikipedia.org/wiki/Algoritmo_de_Floyd-Warshall)
- [Conceitos Básicos Sobre a Teoria dos Grafos](https://sites.icmc.usp.br/sandra/14/CapIII.html)
- [Grafos, teoria e aplicações](https://medium.com/xp-inc/grafos-teoria-e-aplica%C3%A7%C3%B5es-2a87444df855)
- [Introdução à Teoria dos Grafos](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=84)
- [Leonhard Euler](https://pt.wikipedia.org/wiki/Leonhard_Euler)
- [Robert C. Prim](https://en.wikipedia.org/wiki/Robert_C._Prim)
- [Teoria dos Grafos para Computação](https://www.researchgate.net/publication/359175613_Teoria_dos_Grafos_para_Computacao)

