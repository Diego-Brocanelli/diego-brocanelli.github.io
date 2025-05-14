---
title: "Introdução ao MCP (Model Context Protocol)"
date: 2025-05-14T12:08:32Z
draft: false
categories:
  - IA
  - MCP
tags:
  - IA
  - MCP
  - Model
  - Context
  - Protocol
---

## Sumário

- [O quê é](#o-quê-é)
- [Para que serve?](#para-que-serve)
- [Como funciona?](#como-funciona)
- [Componentes do MCP Server](#componentes-do-mcp-server)
- [Formatos de Comunicação](#formatos-de-comunicação)
- [Exemplos de aplicação](#exemplos-de-aplicação)
- [Exemplo: Análise de Texto](#exemplo-análise-de-texto)
- [Considerações](#considerações)
- [Referências](#referências)

## O quê é

O Model Context Protocol (MCP) é um protocolo proposto pela Anthropic visando padronizar como sistemas podem prover contexto para modelos de linguagem (LLMs). Ele facilita a conexão desses modelos com diferentes fontes de dados e ferramentas externas, ampliando significativamente sua utilidade em aplicações reais.

## Para que serve?

Ajuda a criar agentes e fluxos de trabalho complexos com base em LLMs. Os LLMs frequentemente precisam se integrar a dados e ferramentas.

O MCP permite a criação de agentes inteligentes e fluxos de trabalho complexos baseados em LLMs. Como os modelos muitas vezes precisam se integrar a dados empresariais ou executar ações específicas, o MCP define uma forma clara e padronizada de fazer essa integração.

Com ele, conseguimos:

- Fornecer contexto relevante ao modelo (como dados de sistemas internos);
- Integrar ferramentas controladas pelo modelo;
- Orquestrar fluxos entre cliente, servidor, ferramentas e modelos.

## Como funciona?

![Exemplo da arquitetura MCP](/assets/images/introducao-mcp/exemplo-arquitetura-mcp.png)

A arquitetura básica envolve três componentes principais:

1. **Client (Hospedeiro do MCP)**

    Responsável por intermediar a comunicação entre o usuário e o servidor MCP.

2. **Servidor MCP**

    Recebe solicitações do client, interage com os recursos e envia prompts para a LLM.

3. **Resources e Tools**
    - **Resources**: fontes de dados (arquivos, banco de dados, APIs, imagens, etc.) controladas pelo client.
    - **Tools**: ferramentas que realizam ações específicas e são invocadas diretamente pela LLM quando necessário.

## Componentes do MCP Server

### Tools

- Executam ações sob comando da LLM (por exemplo: disparar notificações, fazer cálculos, chamar APIs);
- O modelo decide **quando e como usar**;
- Suporte a autodiscovery (descoberta automática de ferramentas disponíveis).

### Resources

- Servidores de dados acessados pelo client, que decide o que fornecer como contexto;
- Exemplos:
    - screen://host/image01
    - file://caminho/file.pdf
    - postgres://database/customer/schema

### Prompts

- Templates de prompt que o servidor disponibiliza para o client;
- São controlados pelo usuário, que escolhe qual prompt utilizar;
- Podem ser dinâmicos, com parâmetros e dados de recursos externos.

## Formatos de Comunicação

### Stdio

- Comunicação local por `stdin`/`stdout`;
- O servidor MCP é executado como subprocesso do client;
- Utiliza mensagens no formato JSON-RPC;
- Simples e comum em ambientes de desenvolvimento.

> **Atenção:** é essencial garantir a segurança e validade dos servidores MCP com os quais nos comunicamos.

### SSE (Server-Sent Events)

- Comunicação remota baseada em eventos via HTTP;
- O servidor envia atualizações contínuas ao client;
- Comum em experiências interativas, como o **Copilot Studio**;
- Mais complexa de implementar (exige atenção à segurança, autenticação, rate limiting, etc.).

## Exemplos de aplicação

As possibilidades são inúmeras. Veja alguns cenários:

### Financeiro

- Coleta de relatórios e balanços;
- Faturamento automatizado;
- Notificações com base em regras.

### Desenvolvimento

- Integração com repositórios Git;
- Verificação de pull requests e issues;
- Abertura automática de PRs.

### E-commerce

- Detecção de produtos sem estoque;
- Listagem de mais vendidos;
- Notificações de faturamento ou entrega.

> **Nota:** A aplicabilidade dependerá do propósito desejado e da criatividade na integração com os recursos existentes.
> 

## Exemplo: Análise de Texto

![Exemplo de uso do MCP](/assets/images/introducao-mcp/exemplo-de-uso.png)

1. O usuário digita um texto em uma interface (ex: e-mail);
2. Ao parar de digitar por 2 segundos, o client coleta o texto;
3. O client envia a solicitação ao servidor MCP;
4. O servidor MCP envia o prompt com o texto para a LLM;
5. A resposta com sugestões e correções é retornada ao servidor;
6. O client exibe o resultado ao usuário.

Esse tipo de fluxo é simples, mas demonstra o poder da estrutura.

## Considerações

Este post teve como objetivo apresentar os conceitos iniciais do MCP de forma mais ampla, sem entrar no código. Para quem deseja se aprofundar, recomendo o excelente artigo do Elton Minetto [Criando um MCP Server usando Go](https://eltonminetto.dev/post/2025-05-01-mcp-server-golang/).

O MCP ainda é algo novo e está em maturação, mas acredito fortemente que se tornará um componente essencial na construção de agentes mais inteligentes, conectando usuários e produtos de forma fluida e estratégica.

Se você está pesquisando ou testando o MCP em algum projeto pessoal, ou corporativo, compartilhe sua experiência nos comentários. Vamos trocar figurinhas!

## Referências

- [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
- [https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)
- [https://www.youtube.com/watch?v=gc9MEMdOZxM&](https://www.youtube.com/watch?v=gc9MEMdOZxM)
- [https://www.youtube.com/watch?v=NUOzYPSNaNk](https://www.youtube.com/watch?v=NUOzYPSNaNk)
- [https://www.youtube.com/watch?v=6g2jAFhZekw](https://www.youtube.com/watch?v=6g2jAFhZekw)
