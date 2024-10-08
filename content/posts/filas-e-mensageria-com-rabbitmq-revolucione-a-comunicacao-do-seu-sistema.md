---
title: "Filas e mensageria com RabbitMQ revolucione a comunicação do seu sistema"
date: 2024-09-26T14:44:00Z
author: Diego Brocanelli
type: post
draft: true
categories:
  - programação
tags:
  - rabbitmq
  - programação
  - pub/sub
  - mensageria
  - arquitetura
---

## Indice

- [O que é RabbitMQ?](#o-que-é-rabbitmq)
- [Como Exchanges e Filas funcionam no RabbitMQ](#como-exchanges-e-filas-funcionam-no-rabbitmq)
- [Publicador e Consumidor: como funcionam no RabbitMQ](#publicador-e-consumidor-como-funcionam-no-rabbitmq)
- [Vantagens e desvantagens das filas fanout](#vantagens-e-desvantagens-das-filas-fanout)
- [Mas por que usar mensageria?](#mas-por-que-usar-mensageria)
- [Conclusão](#conclusão)
- [Links e referências](#referências)

## O que é RabbitMQ?

De acordo com sua própria documentação, em uma tradução livre:

> "RabbitMQ é um broker de mensagens e streaming confiável e maduro, que é fácil de implementar em ambientes de nuvem, no local e na máquina local."

Mas o que é um "broker" ou "message broker"?

É a camada responsável por intermediar o envio e recebimento de mensagens entre produtores (publisher) e consumidores (subscriber).

O broker gerencia as *queues* (filas) de mensagens, garantindo que sejam entregues de forma eficiente e segura.

Ao enviar uma mensagem, o broker fica responsável por alocar na(s) fila(s) de destino.

O protocolo padrão do RabbitMQ é o **AMQP** (Advanced Message Queuing Protocol), porém é fornecido compatibilidade com outros protocolos.

## Como exchanges e filas funcionam no RabbitMQ

Para melhor compreender o RabbitMQ temos que abordar dois pilares sendo elas **Exchanges** e **Queues**;

### Exchanges

Uma exchange é responsável por receber as mensagens enviadas pelos *publishers*, encaminhando adequadamente para as *queues*, tendo como base as regras de roteamentos.

A exchange **não armazena mensagens**, apenas distribui.

Os tipos de roteamento são:

- **Direct**: Utiliza *routing keys* (chave de roteamento) para determinar quais *queues* destinar a mensagem;
- **Fanout**: Envia as mensagens para todas as *queues* ligadas a ela;
- **Topic**: Utiliza padrões de *routing key*, permitindo enviar mensagens para queues com chaves parcias, utilizando os caracteres `*` ou `#`.
- **Headers**: Faz uso do cabeçalho da mensagem em vez de *routing keys* para definir as regras de encaminhamento da mensagem.

### Queues

Local onde as mensagens são encaminhadas até serem coletadas pelos *subscribers*.

Uma vez que a mensagem for roteada, ela pode ser distribuida em diversas filas.

O RabbitMQ utiliza o padrão **FIFO** (First-In-First-Out), podendo ser persistentes ou voláteis.

- **Persistentes**: São armazenadas em disco, sendo mantidas mesmo com a reinicialização do *broker*;
- **Voláteis**: São armazenadas em memória, caso o *broker* seja reinicializado, as informações são apagadas.

## Publicador e Consumidor: como funcionam no RabbitMQ

Este padrão é conhecido como *Pub/Sub* (*publisher* e *subscriber*) e funciona da seguinte maneira.

O *publisher* envia uma mensagem para o *broker*, este por sua vez encaminha a mensagem para as filas e os *subscribers* coletam essa menagem e faz o devido uso dos dados coletados.

Abaixo podemos ver um exemplo simples de uso do *fanout routing*.

{{< figure src="/assets/images/rabbitmq-ecommerce-fanout.gif" title="RabbitMQ exemplo de ecommerce usando exchange do tipo fanout" >}}

Como observado, o *ECCOMERCE* (publisher) envia para o *PURCHASE ORDER* (broker) a mensagem contendo as informações da compra.

O *broker* destina a mensagem   para as três filas vinculadas a ele, sendo:

- *CREATED ORDER*: Fila utilizada pelo subscriber *SEND MAIL CLIENT*, responsável por enviar o e-mail de notificação de compra ao cliente;
- *PAYMENT ANALYSIS*: Fila utilizada pelo subscriber *FINANCIAL*, responsável por seguir com as regras de validação do pagamento da compra;
- *SEPARATION ORDER*: Fila utilizada pelo subscriber *DISTRIBUTION CENTER*, responsável por realizar a separação dos itens da ordem de compra.

Para pôr a mão na massa, produzi uma POC, onde são geradas uma quantidade *X* de ordens de compra pelo *publisher* e o *subscriber* recebe e processa cada ordem gerada.

{{< youtube RuaBZfTVUX0 >}}

No vídeo acima, foi propositalmente deixado um delay de 1 segundo para cada mensagem, deixando assim o lado do *subscriber* mais didático.

## Vantagens e desvantagens das filas fanout

### Vantagens

- Distribui a mensagem para todas as filas associadas;
- Simples e eficiente, pois não demanda configurar regras complexas de *routing key*;
- Escalabilidade do sistema, permitindo adicionar novos consumidores a qualquer momento;
- Ideal para notificações globais, sendo eventos que devem ser propagados em diversos sistemas ao mesmo tempo.

### Desvantagens

- Falta de controle no roteamento;
- Baixo controle sobre o destino das mensagens;
- Pode sobrecarregar consumidores de forma desnecessária;
- Uso ineficiente dos recursos, elevando o consumo dos recursos da rede, armazenamento e/ou memória.

## Mas por que usar a mensageria?

Ao chegar aqui você pode estar se perguntando.

> Mas por que devo utilizar a estratégia de mensageria nos sistemas?

Uma dúvida válida, como toda ferramenta ela não deve ser "enfiada" de qualquer maneira em qualquer cenário ou lugar.

Essa estratégia possibilita maior desacoplamento entre sistemas e trazendo mais performance.

É muito comum esbarrarmos em sistemas que são lentos para processar o que lhe foi solicitado, pois esse processamento é pesado e/ou demorado. 

Para não impactar o cliente, o uso de mensageria se encaixa perfeitamente!

- Aumento na percepção de performance pelo usuário;
- Possibilita ter uma comunicação eficiente entre sistemas legados;
- Aumenta a confiabilidade no sistema;
- Possibilita a especialização dos sistemas conforme seu *core domain*.

Nos exemplos demonstrados anteriormente, foi observado um exemplo de ordem de compra realizada em um e-commerce, porém podemos utilizar em serviços de **stream**, **fintechs**, **monitoramento**, **automação de marketing** e dentro muitos outros.

## Conclusão

É uma excelente estratégia para melhorar a performance dos sistemas, deve-se ser utilizado com sabedoria e parcimônia, para que não se transforme em um caos de comunicações.

Podemos somar estratégias de *cache* aumentando ainda mais a performance.

Não usaria em sistema muito simples ou que demandam baixo uso.

Focaria inicialmente em funcionalidades específicas do sistema, onde demandam maior performance.

Se o sistema depende de uma resposta em *tempo real*, essa abordagem pode não atender.

## Referências

- [https://www.rabbitmq.com/docs](https://www.rabbitmq.com/docs);
- [https://www.rabbitmq.com/tutorials](https://www.rabbitmq.com/tutorials);
- [https://www.alura.com.br/curso-online-microsservicos-pratica-mensageria-rabbitmq](https://www.alura.com.br/curso-online-microsservicos-pratica-mensageria-rabbitmq).
