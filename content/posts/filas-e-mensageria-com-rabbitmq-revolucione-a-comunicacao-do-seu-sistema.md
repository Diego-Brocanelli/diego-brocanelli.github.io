---
title: "Filas e mensageria com RabbitMq revolucione a comunicação do seu sistema"
date: 2024-09-26T14:44:00Z
author: Diego Brocanelli
type: post
draft: true
videos:
    - /assets/images/rabbitmq-poc-fanout-queue.mp4
---

## Indice

- [O que é RabbitMQ?](#o-que-é-rabbitmq)
- [Como Exchanges e Filas Funcionam no RabbitMQ](#como-exchanges-e-filas-funcionam-no-rabbitmq)
- [Publicador e Consumidor: Como Funcionam no RabbitMQ](#publicador-e-consumidor-como-funcionam-no-rabbitmq)
- [Vantagens e Desvantagens das Filas Fanout](#vantagens-e-desvantagens-das-filas-fanout)
- [Mas por que usar mensageria?](#mas-por-que-usar-mensageria)
- [Conclusão](#conclusão)
- [Links e Referências](#referências)

## O que é RabbitMQ?

De acorodo com sua própria documentação, em uma tradução livre:

> "RabbitMQ é um broker de mensagens e streaming confiável e maduro, que é fácil de implementar em ambientes de nuvem, no local e na sua máquina local. Atualmente, é usado por milhões de pessoas no mundo todo."

Mas o que é um "broker" ou "message broker"?

É a camada responsável por intermediar o envio e recebimento de mensagens entre produtores (publisher) e consumidores (comsumers).

O broker gerencia as filas (queue) de mensagens, garantindo que sejão entregues de forma eficiente e segura.

Ao enviar uma mensagem, o broker fica responsável por alocar na(s) fila(s) de destino.

O protocolo padrão do RabbitMq é o AMQP (Advanced Message Queuing Protocol), porém é fornecido compatilidade com outros protocolos.

## Como Exchanges e Filas Funcionam no RabbitMQ

Para melhor compreender o RabbitMq temos que abordar dois pilares sendo elas "Exchanges" e "Queues";

### Exchanges

Uma exchange é responsável por recber as mensagens enviadas pelos produtores e encaminhar adequadamente para as queues, tendo como base as regras de roteamento. A exchange **não armazena mensagens**, apenas distribui.

Os tipos de roteamento são:

- **Direct**: Utiliza a chave de roteamento (routing key) para determinar quais filas destinar a mensagem;
- **Fanout**: Envia as mensagens para todas as filas ligadas a ela;
- **Topic**: Utiliza padrões de *routing key*, permitindo enviar mensagens para filas com chaves parcias, utilizando os caracteres `*` ou `#`.
- **Headers**: Faz uso do cabeçalho da mensagem em vez de *routing keys* para definir as regras de encaminhamento da mensagem.

### Queues

Local onde as mensagens são encaminhadas até serem coletadas pelos *comsumers*.

Uma vez que a mensagem for roteada, ela pode ser distribuida em diversas filas.

O RabbitMq utiliza o padrão **FIFO** (Forst-In-First-Out), podendo ser persistentes ou voláteis.

- **Persistentes**: São armazenadas em disco, e são mantidas memos com a reinicialização do broker;
- **Volateis**: São armazenadass em memória, caso o broker seja reinicializado as informações são apagas.

## Publicador e Consumidor: Como Funcionam no RabbitMQ

Este padrão é conhecido como Pub/Sub, e funciona da seguinte maneira.

O *Publicador* envia uma mensagem para o broker, este por sua vez encaminha a mensagem para as filas e os *Consumidores* coletam essa menagem e faz o devído uso dos dados coletados.

Abaixo podemos ver um exemplo simpes de uso do *fanout routing*.

![RabbitMq exemplo de ecommerce usando exchange do tipo fanout](/assets/images/rabbitmq-ecommerce-fanout.gif)

Como observado, o publisher *ECCOMERCE* envia para o *PURCHASE ORDER* (broker) a mensagem contendo as informações da compra.

O *broker* destina a mensagem para as 3 filas vincuiladas a ele, sendo: 

- *CREATED ORDER*: Fila utilizada pelo comsumer *SEND MAIL CLIENT*, responsável por enviar o e-mail de notificação de compra ao cliente;
- *PAYMENT ANNALISE*: Fila utilizada pelo comsumer *FINACIAL*, responsável por seguir com as regras de validação do pagamento da compra;
- *SEPARATION ORDER*: Fila utilizada pelo comsumer *DISTRIBUTION CENTER*, responsável por realizar a separação dos itens da ordem de compra.

Para por a mão na massa, produzi uma POC, onde são geradas uma quantidade *X* de ordens de compra pelo *Publisher* e o *Comsummer* recebe e processa cada ordem gerada.

<video width="320" height="240" controls>
  <source src="/assets/images/rabbitmq-poc-fanout-queue.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<iframe width="560" height="315" src="http://localhost:1313/assets/images/rabbitmq-poc-fanout-queue.mp4" frameborder="0" allowfullscreen></iframe>


[Assista ao vídeo aqui](http://localhost:1313/assets/images/rabbitmq-poc-fanout-queue.mp4)

No vídeo acima, eu propositalmente deixei um deleay de 1s para cada mesnagem, deixando assim mais didático o lado do Comsummer.

## Vantagens e Desvantagens das Filas Fanout

Como tudo temos o tradoff:

### Vantagens

- Distribui a mensagem para todas as filas assoficadas;
- Simple e eficiente, pois não demanda configurar regras complexas de *routing key*;
- Escalabilidade do sistema, permitindo adicionar novos consumidores a qualquer momento;
- Ideal para notificações globais, sendo eventos que devem ser propagados em diversos sistemas ao mesmo tempo.

### Desvantagesn

- Falta de controle no roteamento;
- Baixo controle sobre o destino das mensagens;
- Pode sobrecarregar consumidores de forma desnecessária;
- Uso ineficiente dos recursos, elevando o consumo dos recursos da rede, armazenamento e/ou memória.

## Mas por que usar mensageria?

Ao chegar aqui você pode estar se perguntando.

> Mas por que devo utilzar a estratégia de mensageria nos meus sistemas?

Uma dúvida válida, como toda ferramenta ela não deve ser "enfiada" de qualquer maneira em qualquer cenário ou lugar.

Ao buscar conhecer essa estratégia, foi para sanar as dores do desacoplamento entre sistemas e trazer maior performance para o sistema.

É muito comum esbarrarmos em sistemas que são lentos para processar o que desejamos, pois esse processamento é pesadou e/ou demorado. E para não impactar o cliente, o uso de mensageria se encaixa perfeitamente, sendo assim:

- Aumento na percepção de performance pelo usuário;
- Podemos ter uma comunicação eficiente entre sistemas legados;
- Aumentamos a confiabilidade no sistema;
- Possibilita a expecialização dos sistemas conforme seu *core domain*.

No gif acima, observamos um exemplo de ordem de compra realizada em um ecommerce, porém podemos utilizar em serviçoes de stream, fintechs, monitoramento, automação de marketing e etc.

## Conclusão

É uma excelente estratégia para melhorar a performance dos sistemas, deve-se ser utilizado com sabedoria e parcimonia, para que não vire um caos as comunicações.

Podemos somar estratgias de cache aumentando ainda mais a performance.

Não usaria em sistema muito simples ou que demandam baixo uso.

Focaria inicialmente em funcionalidades expecíficas do sistema, onde demandam maior performance.

Se o sistema depende de uma resposta em realtime, essa abordagem pode, e provavelmente, não irá atender.

## Referências

- [https://www.rabbitmq.com](https://www.rabbitmq.com)
- [https://www.rabbitmq.com/tutorials](https://www.rabbitmq.com/tutorials)
- [https://www.alura.com.br/curso-online-microsservicos-pratica-mensageria-rabbitmq](https://www.alura.com.br/curso-online-microsservicos-pratica-mensageria-rabbitmq)
