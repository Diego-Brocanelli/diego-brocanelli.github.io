---
title: "Código de barras para engenheiros de software: da etiqueta ao sistema"
date: 2026-07-28T02:47:37Z
draft: true
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - hard-skills
tags:
  - código barras
  - código
  - barras
---

## Introdução

Nós como engenheiros de software já nos deparamos com a necessidade de implementar a geração de código de barras, com isso instalamos uma biblioteca de terceiros sem nem parar para nos perguntar como que ela funciona, apenas instalamos e usamos.

Porém, aprofundar no entendimento é algo importante para que possamos saber o que estamos fazendo e como é feito, ajudando, por exemplo, a determinar qual o melhor tipo para o problema que estamos resolvendo.

Para melhor compreender, vamos entender os motivos que deram origem à invenção.

## O problema que precisava ser resolvido

Imagine que um operador precisava fazer manualmente:

- Identificar o produto;
- Digitar códigos;
- Registar preços;
- Atualizar estoques.

À medida que a demanda crescia o trabalho também acompanhava e os problemas também:

- Erros de digitação;
- Inventários demorados;
- Filas nos caixas;
- Baixa rastreabilidade;
- Custos operacionais elevados.

## A origem do código de barras

Os engenheiros Norman Joseph e Bernard Silver patentearam a primeira versão do código de barras em 1952, eles foram inspirados pelo Código Morse. A ideia surgiu em 1948, quando um executivo do varejo pediu aos pesquisadores que criassem uma solução para capturar dados automaticamente e evitar filas.

A patente original descrevia um código de barras circular. Posteriormente a equipe da IBM, liderada pelo engenheiro George Laurer, desenvolveram o formato retangular que conhecemos atualmente.

> 💡 **Curiosidade**
>
> O primeiro produto escaneado comercialmente foi um pacote de chicletes Wrigley's Juicy Fruit em 26 de junho de 1974. A embalagem original encontra-se preservada no Smithsonian Institution, nos Estados Unidos.

## O ecossistema atual

Quando imaginamos o código de barras normalmente focamos apenas nas etiquetas, mas ela é apenas uma parte da solução.

O fluxo real é:

Empresa → Identificador → Código de barras → Leitor → sistema

E nesse momento temos uma dúvida muito interessante.

> ❓ Quem define esses identificadores?

A resposta nos leva à GS1.

## GS1: a organizadora por trás dos código de barras

A GS1 é uma organização global responsável pelos padrões utilizados para identificar os produtos. Atualmente está presente em mais de 100 países e mantém padrões utilizados por varejistas, fabricantes, distribuidores e marketplaces.

Sem essa organização seria impossível garantir que o produto fosse identificado da mesma forma em diferentes países e sistemas.

## GS1 Brasil

Aqui no país ela fornece às empresas:

- Prefixos de identificação;
- Padrões de codificação;
- Normas de utilização;
- Suporte para integração com cadeias de suprimento.

Quando uma empresa deseja comercializar produtos utilizando código de barras padronizados, normalmente ela obtém sua identificação por meio da GS1.

## O que é um GTIN?

Muitas pessoas acreditam que o código de barras é o identificador do produto, porém não é.

O identificador é o GTIN (Global Trade Item Number). O código de barras é apenas uma representação visual desse identificador.

**Por exemplo:**

```bash
7894900011517
```

Os tipos atualmente disponíveis são:

- **GTIN-8:** destinados a produtos muito pequenos que não comportam um código EAN-13;
- **GTIN-12:** conhecido também como UPC (Universal Product Code), amplamente utilizado nos Estados Unidos e Canadá. Possui 12 dígitos e a mesma função do GTIN-13 para identificação internacional de produtos;
- **GTIN-13:** também conhecido como EAN, é composto por 13 dígitos e identifica produtos de forma única;
- **GTIN-14:** utilizado para identificar agrupamentos de produtos, como caixas de embarque, sendo mais comum em operações logísticas do que nos pontos de venda.

As diferenças entre GTIN, EAN, UPC e SKU.

Embora muitas das vezes possam aparecer juntos, cada termo tem seu papel.

- **GTIN (Global Trade Item Number):** identificador global padronizado;
- **EAN (European Article Number):** versão europeia do GTIN-13, com 13 dígitos;
- **UPC (Universal Product Code):** versão americana do GTIN-12, usada em EUA e Canadá;
- **SKU (Stock Keeping Unit):** código interno criado pela própria empresa, sem validade global.

Os padrões GTIN, EAN e UPC são administrados pela GS1. As empresas recebem uma faixa exclusiva de numeração e geram seus próprios identificadores dentro desse espaço. Enquanto o SKU é gerado e mantido pela própria empresa, em outras palavras tem validade apenas para aquela empresa.

## Como emitir o código GTIN pela GS1 Brasil?

Sendo a entidade responsável pela administração dos padrões GS1 no Brasil, os passos a serem seguidos são:

1. **Cadastrar a empresa:** são informados os dados e escolhido o plano (R$) adequado para o porte do negócio;
2. **Associar-se à GS1:** é obrigatório ser sócio para emissão do GTIN e para isso deve-se pagar a adesão que varia de acordo com o perfil da empresa (etapa 01);
3. **Registrar os produtos no Cadastro Nacional de Produtos:** etapa onde é registrado o nome, descrição, dimensões e demais dados;
4. **Emissão do código GTIN:** a cada produto cadastrado, é gerado um número exclusivo;
5. **Uso do GTIN:** o código pode ser aplicado em embalagens, cadastros de marketplaces e documentos fiscais.

> ⚠️ **Observação**
>
> Deve-se pagar anuidade para se manter sócio, e esse valor também varia de acordo com o perfil da empresa!

## Exemplo prático de um lançamento de um novo produto

Vamos imaginar que uma pequena rede de supermercados está lançando um café de marca própria.

#### Passo 01: Obter um prefixo GS1

A empresa recebe uma faixa de identificação.

**Exemplo:**

```bash
7891234
```

#### Passo 02: criar um identificador único para o produto

O sistema interno define:

```bash
789123400000
```

#### Passo 03: calcular o dígito verificador

O último dígito será calculado matematicamente (como se fosse um CPF).

```bash
7891234000005
```

#### Passo 04: gerar o código de barras

É transformado o número em barras e espaços.

#### Passo 05: impressão na embalagem

O produto segue para distribuição.

#### Passo 06: chegar ao caixa

O operador realiza a leitura.

#### Passo 07: o sistema encontra o cadastro

```bash
7891234000005
       ↓
Café Torrado Premium 500g
       ↓
R$ 24,90
```

Com o GTIN em mãos, o sistema consulta sua base de dados e recupera informações como descrição, preço, estoque e tributação do produto.

## O que é o código de barras?

É a representação visual de dados, transformando números ou caracteres em padrões de:

- Barras;
- Espaços;
- Marcadores de início;
- Marcadores de fim;
- Marcadores de validação.

Seu objetivo é permitir que uma máquina interprete rapidamente uma informação.

## Anatomia de um código de barras

Todo código de barras possui 5 componentes básicos, sendo eles:

- **Quiet Zone:** área em branco antes e depois do código;
- **Start Pattern:** marca o início da leitura;
- **Dados:** informações codificadas;
- **Check Digit:** mecanismo de validação;
- **Stop Pattern:** marca o final da leitura.

![Anatomia de um código de barras](/assets/images/codigo-barras/anatomia-de-um-codigo-de-barras.webp)

## Como um leitor interpreta um código de barras

Sendo a parte que provavelmente seja a menos conhecida, e a resposta é simples. O leitor não lê barras, ele lê a luz.

Barras absorvem luz, ou seja, as barras escuras refletem pouca luz. Enquanto as partes claras refletem mais luz.

Conhecendo essa dinâmica, o sensor mede essa diferença e converte a reflexão em sinais elétricos.

O fluxo é:

![Como um leitor funciona](/assets/images/codigo-barras/como-um-leitor-funciona.webp)

> 💡 **Curiosidade**
>
> Apesar de enxergarmos números abaixo do código de barras, o leitor não os utiliza. Ele trabalha exclusivamente com o padrão óptico formado por barras e espaços.

## Os tipos de leitores

- **Scanner laser:** muito comum em supermercado por ser barato, rápido e confiável. Não lê QR Codes;
- **CCD (Charge-Coupled Device):** utiliza uma matriz de sensores, não contém partes móveis, é muito utilizado em ambientes corporativos;
- **Imager:** funciona como uma câmera, sendo a tecnologia presente na maioria dos smartphones modernos. Consegue ler código de barras, QR code e Data Matrix.

![Os três tipos de leitores de códigos de barras](/assets/images/codigo-barras/tipos-de-leitores-de-codigo-de-barras.webp)

> ⚠️ **Observação**
>
> Atualmente leitores CCD e Linear Imager utilizam uma matriz de sensores ópticos para capturar toda a largura do código de barras simultaneamente.

## Os 3 principais tipos de código de barras

Existem dezenas de padrões, porém, três se destacam na maioria dos sistemas corporativos.

#### EAN-13

O padrão dominante do varejo, sendo utilizado em:

- Supermercados;
- Farmácias;
- Lojas de departamentos;
- Marketplaces.

Possui 13 dígitos, por exemplo, `7894900011517`. 

![Entendendo como os 101 do EAN-13 funcionam](/assets/images/codigo-barras/entendendo-os-101-do-ean-13.webp)

Como funciona o dígito verificador?

O último dígito é calculado matematicamente e seu objetivo é detectar erros de leitura.

O algoritmo utiliza multiplicações alternadas por 1 e 3, seguidas por uma soma e cálculo complementar para múltiplos de 10.

> 💡 **Curiosidade**
>
> O primeiro dígito do EAN-13 não possui barras próprias. Ele é representado indiretamente pelo padrão de codificação utilizado nos seis dígitos seguintes do lado esquerdo do código.

*Exemplo:*

Coca-Cola lata 350ml (Brasil)

**EAN-13:** `7894900011517`

Sua estrutura

```bash
7 8 9 4 9 0 0 0 1 1 5 1   7
|-----------------------|   |
      12 dígitos         DV
```

Os 12 primeiros dígitos são utilizados para calcular o último dígito, chamado dígito verificador:

```bash
789490001151
        ↓
       DV = 7
```

1. Multiplicamos os dígitos alternadamente por 1 e 3.

| Dígito | Peso | Resultado |
| --- | --- | --- |
| 7 | 1 | 7 |
| 8 | 3 | 24 |
| 9 | 1 | 9 |
| 4 | 3 | 12 |
| 9 | 1 | 9 |
| 0 | 3 | 0 |
| 0 | 1 | 0 |
| 0 | 3 | 0 |
| 1 | 1 | 1 |
| 1 | 3 | 3 |
| 5 | 1 | 5 |
| 1 | 3 | 3 |

Agora somamos todos os resultados:

```bash
7 + 24 + 9 + 12 + 9 + 0 + 0 + 0 + 1 + 3 + 5 + 3 = 73
```

1. Encontramos o próximo múltiplo de 10

O resultado foi `73`, sendo assim o próximo múltiplo de 10 é `80`.

1. Calculamos a diferença.

```bash
80 - 73 = 7
```

Portanto, o dígito verificador é 7 e o código completo fica:

```bash
7894900011517
            ↑
            DV
```

O dígito verificador funciona de forma semelhante ao CPF, para chegar se a sequência de código é válida. Caso, após o cálculo, o resultado não seja idêntico ao dígito apresentado no código de barras, faz com que o sistema rejeite o código, pois pode ter sido lido errado ou impresso errado.

São utilizados três conjuntos de codificação para construir a representação visual do código de barras.

- **L (Left Odd):** lado esquerdo;
- **G (Left Even):** lado esquerdo;
- **R (Right):** lado direito.

**Tabela L (Left Odd)**

| Dígito | Binário |
| --- | --- |
| 0 | 0001101 |
| 1 | 0011001 |
| 2 | 0010011 |
| 3 | 0111101 |
| 4 | 0100011 |
| 5 | 0110001 |
| 6 | 0101111 |
| 7 | 0111011 |
| 8 | 0110111 |
| 9 | 0001011 |

Tabela G (Left Even)

| Dígito | Binário |
| --- | --- |
| 0 | 0100111 |
| 1 | 0110011 |
| 2 | 0011011 |
| 3 | 0100001 |
| 4 | 0011101 |
| 5 | 0111001 |
| 6 | 0000101 |
| 7 | 0010001 |
| 8 | 0001001 |
| 9 | 0010111 |

Tabela R (Right)

| Dígito | Binário |
| --- | --- |
| 0 | 1110010 |
| 1 | 1100110 |
| 2 | 1101100 |
| 3 | 1000010 |
| 4 | 1011100 |
| 5 | 1001110 |
| 6 | 1010000 |
| 7 | 1000100 |
| 8 | 1001000 |
| 9 | 1110100 |

O que significa cada bit?

Considere o número 7. Na tabela L, sua referência é `0111011`. Cada posição representa 1 módulo.

- 0 é módulo branco;
- 1 é módulo preto.

Sendo assim:

![Como o dígito 7 é representado no EAN-13](/assets/images/codigo-barras/representacao-digito-7-ean-13.webp)

#### Por que cada dígito tem 7 bits?

O EAN-13 foi projetado para que cada símbolo ocupe 7 módulos, por exemplo:

- 0 = 0001101;
- 7 = 0111011;
- 9 = 0001011.

Essa abordagem facilita a sincronização do leitor.

#### De onde surgiram essas sequências?

Essa é a parte muito interessante. Os engenheiros da IBM e, posteriormente, os comitês de padronização escolheram padrões que obedecem a várias propriedades.

1. Cada dígito possui exatamente 2 barras + 2 espaços;
2. Cada dígito ocupa exatamente 7 módulos;
3. Existe paridade em que o lado esquerdo pode usar L ou G, enquanto o lado direito usa R; isso permite detectar orientação;
4. Cada padrão é único.

*Exemplo prático:*

Coca-Cola lata 350 ml (Brasil) EAN 7894900011517.

Para simplificar o entendimento dos módulos, vamos utilizar a tabela L como exemplo de conversão. Em um EAN-13 real, os dígitos do lado esquerdo utilizam uma combinação das tabelas L e G definida pelo primeiro dígito.

| Número | Bit |
| --- | --- |
| 7 | 0111011 |
| 8 | 0110111 |
| 9 | 0001011 |
| 4 | 0100011 |
| 9 | 0001011 |
| 0 | 0001101 |
| 0 | 0001101 |
| 0 | 0001101 |
| 1 | 0011001 |
| 1 | 0011001 |
| 5 | 0110001 |
| 1 | 0011001 |
| 7 | 0110001 |

Os padrões START (101), CENTER (01010) e STOP (101) permitem que o leitor identifique onde o código começa, onde está o centro e onde termina a informação codificada.

#### Code 39

Um dos padrões mais populares para controle patrimonial, sendo utilizados:

- Equipamentos de TI;
- Inventário patrimonial;
- Almoxarifado;
- Indústria.

> ⚠️ **Observação**
>
> O nome “Code 39” vem do fato de suportar originalmente 26 letras, 10 números e 3 símbolos.Totalizando 39 caracteres.

**Exemplo:**

![Padrão do código de barras Code 39](/assets/images/codigo-barras/padrao-code-39.webp)

Esse padrão é largamente utilizado, pois, permite o uso de letras e números. Permitindo criar identificadores amigáveis para humanos.

**Caso prático: controle de ativos.**

Imagine uma empresa com:

- 100 notebooks;
- 60 monitores;
- 20 impressoras;
- 40 celulares.

Cada equipamento recebe um identificador:

```bash
NB-00001
```

O sistema gera um Code 39 e o colaborador pode utilizar um aplicativo em seu smartphone para a leitura.

Diferente do EAN-13, no Code 39 cada caractere é composto por:

- 5 barras;
- 4 espaços;
- 3 elementos largos (wide);
- 6 elementos estreitos (narrow).

> 💡 **Curiosidade**
>
> Por isso, que o nome original da simbologia era 3 of 9.

Normalmente a documentação representa:

- n = narrow (estreito);
- w = wide (largo).

Por exemplo, para o caractere A “wnnnnwnnw”, podemos interpretar como:

```bash
Barra larga
Espaço estreito
Barra estreita
Espaço estreito
Barra estreita
Espaço largo
Barra estreita
Espaço estreito
Barra larga
```

Tabela dos números

| Caractere | Padrão |
| --- | --- |
| 0 | nnnwwnwnn |
| 1 | wnnwnnnnw |
| 2 | nnwwnnnnw |
| 3 | wnwwnnnnn |
| 4 | nnnwwnnnw |
| 5 | wnnwwnnnn |
| 6 | nnwwwnnnn |
| 7 | nnnwnnwnw |
| 8 | wnnwnnwnn |
| 9 | nnwwnnwnn |

Tabela das letras

| Letra | Padrão |
| --- | --- |
| A | wnnnnwnnw |
| B | nnwnnwnnw |
| C | wnwnnwnnn |
| D | nnnnwwnnw |
| E | wnnnwwnnn |
| F | nnwnwwnnn |
| G | nnnnnwwnw |
| H | wnnnnwwnn |
| I | nnwnnwwnn |
| J | nnnnwwwnn |
| K | wnnnnnnww |
| L | nnwnnnnww |
| M | wnwnnnnwn |
| N | nnnnwnnww |
| O | wnnnwnnwn |
| P | nnwnwnnwn |
| Q | nnnnnnwww |
| R | wnnnnnwwn |
| S | nnwnnnwwn |
| T | nnnnwnwwn |
| U | wwnnnnnnw |
| V | nwwnnnnnw |
| W | wwwnnnnnn |
| X | nwnnwnnnw |
| Y | wwnnwnnnn |
| Z | nwwnwnnnn |

Para identificar início e fim é utilizado o caractere especial `*` e seu padrão é `nwnnwnwnn`. Por isso, um código `NB-00001` na verdade é transmitido “**NB-00001*”.*

![Exemplo do padrão Code 39](/assets/images/codigo-barras/exemplo-code-39.webp)

> 💡 **Curiosidade**
> 
> | Característica | EAN-13 | Code 39 |
> | --- | --- | --- |
> | Representação | Bits (0 e 1) | Larguras (narrow/wide) |
> | Conteúdo | Apenas números | Letras e números |
> | Início/Fim | 101 | * |
> | Tamanho fixo | Sim | Variável |
> | Check digit | Obrigatório | Opcional |

#### Code 128

O padrão preferido da logística, sendo utilizado:

- Transportadoras;
- Centros de distribuições;
- Sistemas WMS (Warehouse Management System);
- Etiquetas de expedição.

> ⚠️ **Observação**
>
> O Code 128 consegue representar a mesma informação utilizando menos espaço físico que o Code 39, tornando-o ideal para etiquetas pequenas e operações logísticas de alta densidade.

Exemplo:

![O padrão code 128](/assets/images/codigo-barras/code-128.webp)

Sua principal vantagem é a alta densidade de informações, ocupando menos espaços físicos.

**Conjunto A, B e C**

O Code 128 possui diferentes modos de codificação, permitindo otimizar a representação dos dados. Sendo essa uma das razões pelas quais se tornou tão popular.

Diferente do EAN-13, o Code 128 utiliza um caractere de verificação calculado sobre toda a sequência codificada. Esse mecanismo faz parte da própria especificação.

- **Conjunto A:** caracteres de controle, números e letras maiúsculas;
- **Conjunto B:** números, letras maiúsculas e minúsculas;
- **Conjunto C:** codifica pares de dígitos numéricos, aumentando significativamente a densidade.

> 💡 **Curiosidade**
>
> Essa capacidade de alernar entre conjuntos durante a codificação que permite ao Code 128 representar grandes volumes de informação ocupando menos espaços que outros padrões.

![Code 128 explicado](/assets/images/codigo-barras/code-128-explicado.webp)

## Comparando os principais padrões

| Característica | EAN-13 | Code 39 | Code 128 |
| --- | --- | --- | --- |
| Numérico | Sim | Sim | Sim |
| Alfanumérico | Não | Sim | Sim |
| Densidade | Média | Baixa | Alta |
| Varejo | Excelente | Ruim | Bom |
| Patrimônio | Ruim | Excelente | Excelente |
| Logística | Boa | Boa | Excelente |

## Limitações dos Código de Barras

Apesar da enorme popularidade, eles possuem limitações.

- Necessitam de linha de visão;
- Sofrem desgaste físico;
- Armazenam pouca informação;
- Dependem da qualidade de impressão.

## QR Code e RFID são substitutos?

Nem sempre, pois, na prática, eles costumam ser complementares.

- **Código de barras:** ideal para identificação simples e barata;
- **QR Code:** ideal quando é necessário armazenar mais informações;
- **RFID:** ideal para leitura sem contato visual direto.

## Como as bibliotecas geram código de barras

Agora sabemos que as bibliotecas não “geram” código de barras, geram representações visuais do código de barras.

Para botarmos a mão na massa, vamos implementar o código para validar e gerar a imagem de um código EAN-13 em Dart.

> ⚠️ **Atenção**
>
> O objetivo deste exemplo é demonstrar a lógica de construção do EAN-13. Ele não implementa todos os requisitos de impressão definidos pela GS1, como zonas de silêncio (quiet zones), dimensões mínimas, proporções de barras e texto legível ao ser humano (HRI).

Para a representação visual utilizaremos a biblioteca `image`.

```bash
flutter pub add image
```

#### Código Dart

```dart
import 'dart:io';
import 'package:image/image.dart' as img;

class Ean13Generator {
  /// Gera um EAN-13 completo a partir de 12 ou 13 dígitos.
  /// Se receber 13 dígitos, valida o dígito verificador.
  String generate(String input) {
    final number = input.replaceAll(RegExp(r'\D'), '');

    if (number.length != 12 && number.length != 13) {
      throw Exception(
        'EAN-13 deve possuir 12 dígitos (sem verificador) ou 13 dígitos completos',
      );
    }

    if (number.length == 13) {
      final data = number.substring(0, 12);
      final checkDigit = number.substring(12);
      final calculated = calculateCheckDigit(data);

      if (calculated != checkDigit) {
        throw Exception('Dígito verificador inválido. Esperado: $calculated');
      }
      return number;
    }

    return number + calculateCheckDigit(number);
  }

  /// Calcula o dígito verificador EAN-13 conforme padrão oficial GS1.
  ///
  /// IMPORTANTE: Para um GTIN-13, como sempre existem 12 dígitos antes do DV,
  /// aplicar os pesos alternados da esquerda produz exatamente o mesmo resultado
  /// da definição oficial da GS1, que descreve os pesos a partir da direita.
  String calculateCheckDigit(String data) {
    if (data.length != 12) {
      throw Exception(
        'Para cálculo do DV são necessários exatamente 12 dígitos',
      );
    }

    int sum = 0;

    // Percorremos da esquerda para direita, mas calculamos o peso com base na posição da direita
    for (int i = 0; i < data.length; i++) {
      final digit = int.parse(data[i]);

      final weight = i % 2 == 0 ? 1 : 3;
      sum += digit * weight;
    }

    final remainder = sum % 10;
    final checkDigit = remainder == 0 ? 0 : 10 - remainder;

    return checkDigit.toString();
  }

  /// Converte o EAN-13 em sequência binária (padrão de barras e espaços).
  /// Retorna uma String com '1' = barra preta e '0' = espaço branco.
  String encode(String ean) {
    final firstDigit = int.parse(ean[0]);
    final leftPart = ean.substring(1, 7);
    final rightPart = ean.substring(7, 13);

    // Padrões de paridade para o lado esquerdo (definido pelo primeiro dígito)
    final parityPatterns = [
      "LLLLLL",
      "LLGLGG",
      "LLGGLG",
      "LLGGGL",
      "LGLLGG",
      "LGGLLG",
      "LGGGLL",
      "LGLGLG",
      "LGLGGL",
      "LGGLGL",
    ];

    final parity = parityPatterns[firstDigit];
    final leftEncoding = <String>[];

    for (int i = 0; i < leftPart.length; i++) {
      final digit = int.parse(leftPart[i]);
      leftEncoding.add(parity[i] == "L" ? leftOdd[digit]! : leftEven[digit]!);
    }

    final rightEncoding = rightPart
        .split('')
        .map((e) => right[int.parse(e)]!)
        .join();

    // Estrutura completa do EAN-13:
    return "101" + // Start Pattern
        leftEncoding.join() +
        "01010" + // Center Pattern (separador)
        rightEncoding +
        "101"; // Stop Pattern
  }

  /// Gera imagem PNG do código de barras com melhorias para produção.
  File createImage(String ean, String filename) {
    final bits = encode(ean);

    const int barWidth = 3; // Largura de cada módulo (ajustável)
    const int quietZoneModules = 10; // Quiet Zone obrigatória (GS1)
    const int height = 120;
    const int textHeight = 25; // Espaço para os números abaixo

    final imageWidth =
        (quietZoneModules * 2 * barWidth) + (bits.length * barWidth);

    final image = img.Image(width: imageWidth, height: height + textHeight);

    // Fundo branco
    img.fill(image, color: img.ColorRgb8(255, 255, 255));

    // Desenha Quiet Zone esquerda
    int currentX = quietZoneModules * barWidth;

    // Desenha as barras do código
    for (int i = 0; i < bits.length; i++) {
      if (bits[i] == '1') {
        img.fillRect(
          image,
          x1: currentX,
          y1: 0,
          x2: currentX + barWidth,
          y2: height - textHeight, // deixa espaço para o texto
          color: img.ColorRgb8(0, 0, 0),
        );
      }
      currentX += barWidth;
    }

    // Adiciona o texto legível (HRI - Human Readable Interpretation)
    // Isso é obrigatório pela GS1 para leitura humana
    _drawText(image, ean, imageWidth ~/ 2, height - 8);

    final file = File(filename);
    file.writeAsBytesSync(img.encodePng(image));
    return file;
  }

  /// Função auxiliar para desenhar o texto abaixo do código de barras
  void _drawText(img.Image image, String text, int x, int y) {
    // Você pode usar img.drawString se quiser uma fonte melhor
    // Por simplicidade, aqui usamos uma implementação básica
    img.drawString(
      image,
      text,
      font: img.arial14,
      x: x - (text.length * 5), // centraliza aproximadamente
      y: y,
      color: img.ColorRgb8(0, 0, 0),
    );
  }

  // ==================== Tabelas de Codificação ====================

  final Map<int, String> leftOdd = {
    0: '0001101',
    1: '0011001',
    2: '0010011',
    3: '0111101',
    4: '0100011',
    5: '0110001',
    6: '0101111',
    7: '0111011',
    8: '0110111',
    9: '0001011',
  };

  final Map<int, String> leftEven = {
    0: '0100111',
    1: '0110011',
    2: '0011011',
    3: '0100001',
    4: '0011101',
    5: '0111001',
    6: '0000101',
    7: '0010001',
    8: '0001001',
    9: '0010111',
  };

  final Map<int, String> right = {
    0: '1110010',
    1: '1100110',
    2: '1101100',
    3: '1000010',
    4: '1011100',
    5: '1001110',
    6: '1010000',
    7: '1000100',
    8: '1001000',
    9: '1110100',
  };
}
```

#### Utilização

```dart
void main() {
  final generator = Ean13Generator();

  try {
    // Exemplo com 12 dígitos (sem DV)
    const input = "789123456789";
    final ean = generator.generate(input);

    print("✅ EAN gerado a partir de '$input': $ean");

    final file = generator.createImage(ean, "produto.png");

    print("✅ Código de barras salvo em: ${file.absolute.path}");
    print("   Dica: Abra a imagem para conferir o resultado!");

  } catch (e, stack) {
    print("❌ Erro durante a execução:");
    print(e);
    // print(stack); // descomente para debug
  }
}
```

**Saída:** EAN gerado: 7891234567895

**Arquivo:** produto.png

![Código de barras do exemplo programado](/assets/images/codigo-barras/resultado-exemplo-pratico.webp)

O fluxo fica:

![Fluxo que demonstra desde o GTIN à imagem do código de barras no [adrão EAN-13]](/assets/images/codigo-barras/do-gtin-ao-codigo-de-barras.webp)

Para a leitura

![Imagem demonstra o fluxo desde a leitura com o leitor de código de barras a optenção dos dados do produto no banco de dados](/assets/images/codigo-barras/do-feixe-de-luz-ao-produto-no-sistema.webp)

## Mitos e verdade

> ❌ MITO
>
> O preço do produto está armazenado no código de barras.

Não. O código de barras normalmente contém apenas um identificador. O preço é recuperado pelo sistema.

> ❌ MITO
>
> O leitor lê números.

Não. O leitor interpreta padrões de luz refletida.

> ❌ MITO
>
> QR Code substitui código de barras.

Não necessariamente. Cada tecnologia foi criada para resolver problemas diferentes.

> ✅ VERDADE
>
> O mesmo GTIN pode ser utilizado em diferentes sistemas.

Sim. Essa é justamente a função da padronização promovida pela GS1.

## Considerações finais

É impressionante que algo tão simples do nosso dia a dia tenha um contexto técnico impressionante. Hoje é fácil afirmar que o código de barras é "simples", porém sua invenção é brilhante.

Gosto de temas como este, que despertam a curiosidade para enxergar além do código. É essa coceirinha no cérebro que nos move como engenheiros a buscar compreender e não apenas usar ferramentas. Pois entender como funciona é fundamental para tomadas de decisões melhores.

## Referências

#### Institucionais

- [GS1 Brasil](https://www.gs1br.org)
- [GS1 General Specifications](https://www.gs1.org/standards/barcodes-epcrfid-id-keys/gs1-general-specifications)
- [GTIN (Global Trade Item Number)](https://www.gs1.org/standards/id-keys/gtin)

#### Normas técnicas

- [ISO/IEC 15420 (EAN/UPC)](https://www.iso.org/standard/62021.html)
- [ISO/IEC 16388 (Code 39)](https://www.iso.org/standard/43897.html)
- [ISO/IEC 15417 (Code 128)](https://www.iso.org/standard/43896.html)

#### Leitura complementar

- [História do Código de Barras - Smithsonian Institution](https://www.smithsonianmag.com/innovation/history-bar-code-180956704)
