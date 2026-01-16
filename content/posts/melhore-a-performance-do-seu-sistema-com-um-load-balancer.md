---
title: "Melhore a performance do seu sistema com um load balancer"
date: 2025-03-26T11:48:22Z
draft: false
categories:
  - arquitetura
tags:
  - Load balancer
  - balanceador de caraga
---

# Sumário

1. [O que é load balancer?](#o-que-é-load-balancer)
2. [Para que serve?](#para-que-serve)
3. [Quando usar?](#quando-usar)
4. [Quais tipos existem?](#quais-tipos-existem)
5. [Exemplo do problema](#exemplo-do-problema)
6. [Considerações finais](#considerações-finais)
7. [Referências](#referências)

# O que é load balancer?

O load balancer (balanceamento de carga) é uma técnica utilizada para distribuir o tráfego de rede entre vários servidores, garantindo que nenhum deles fique sobrecarregado. Isso melhora o desempenho, a escalabilidade e a disponibilidade de sistemas web e aplicativos.

Imagine um restaurante movimentado com vários atendentes. Se todos os clientes fossem direcionados apenas a um atendente, haveria filas enormes e insatisfação. O load balancer funciona como um gerente organizando os clientes para diferentes atendentes, garantindo um fluxo equilibrado e um atendimento mais eficiente.

# Para que serve?

Essencial para sistemas que precisam lidar com grandes quantidades de acessos simultâneos. Seus principais benefícios incluem:

- **Melhor desempenho:** distribui as requisições para evitar lentidão;
- **Alta disponibilidade:** se um servidor falhar, outro assume sem interromper o serviço;
- **Escalabilidade:** Permite adicionar novos servidores facilmente conforme a demanda cresce;
- **Segurança:** Pode filtrar tráfego malicioso e proteger contra ataques DDoS.

Um exemplo prático: grandes sites como Google, Netflix e Amazon utilizam balanceadores de carga para atender milhões de usuários sem comprometer a experiência.

# Quando usar?

O uso de um load balancer se torna essencial em diversos cenários, como:

- **Aumento no tráfego:** quando o servidor começa a ter dificuldades para processar muitas requisições;
- **Alta disponibilidade:** garantia de que seu sistema continue funcionando, mesmo se um servidor falhar;
- **Distribuição geográfica:** para melhorar a latência e otimizar a experiência do usuário com servidores mais próximos;
- **Escalabilidade horizontal:** quando a adição de novos servidores melhora o desempenho do sistema.

Se o seu site ou aplicação enfrenta lentidão frequente, ou risco de downtime, é hora de considerar um balanceador de carga.

# Quais tipos existem?

### Load balancers na Nuvem (Cloud-based)

- AWS Elastic Load Balancing (ELB);
- Google Cloud Load Balancing;
- Azure Load Balancer;
- Cloudflare Load Balancing;
- Alibaba Cloud SLB (Server Load Balancer).

### Softwares Self-Hosted (On-Premise ou em Servidores Próprios)

- NGINX;
- HAProxy;
- Traefik;
- Envoy;
- F5 BIG-IP.

### **Qual escolher?**

- **Se você está na nuvem:** AWS ELB, Google Load Balancer, Azure Load Balancer ou Cloudflare;
- **Se precisa de um Load balancer self-hosted:** NGINX, HAProxy ou Traefik;
- **Se trabalha com Kubernetes e microsserviços:** Traefik e Envoy;
- **Se precisa de um balanceador corporativo com WAF e segurança avançada:** F5 BIG-IP.

# Exemplo do problema

> **Nota:** Este é um exemplo simplificado, apenas ilustrando a adoção do load balancer

A empresa MyTicket é uma plataforma de venda de ingressos online, e para o dia-a-dia a plataforma atende com tranquilidade a demanda de compra de ingressos.

![load-balancar-exemplo-exemplo-01.png](/assets/images/load-balancer/load-balancar-exemplo-exemplo-01.png)

Porém, em um belo dia iniciaram a venda de um mega evento, evento esse com fama global, onde a demanda de compra de ingresso aumentaria exponencialmente.

![load-balancar-exemplo-exemplo-02.png](/assets/images/load-balancer/load-balancar-exemplo-exemplo-02.png)

Sabendo que a demanda seriam inúmeras vezes maior do que a tradicional, como ilustrado na imagem acima, a equipe técnica alertou sobre os grandes riscos que correriam caso nada fosse feito, como ilustrado na imagem abaixo.

![load-balancar-exemplo-exemplo-03.png](/assets/images/load-balancer/load-balancar-exemplo-exemplo-03.png)

Para não terem problemas com a alta demanda, o time técnico elaborou e implementou um load balancer e replicou quatro servidores com o sistema de vendas. 

![load-balancar-exemplo-exemplo-04.png](/assets/images/load-balancer/load-balancar-exemplo-exemplo-04.png)

O load balancer gerencia todas as requisições dos clientes, distribuindo-as entre os servidores disponíveis, garantindo:

- Sistema operando;
- Maior confiabilidade;
- Resiliente a alta demanda.

No futuro, conforme novos eventos forem disponibilizados e o número de acessos aumentar, o time poderá reavaliar a estratégia e escalar a infraestrutura adicionando mais servidores.

# Considerações finais

O load balancer é uma solução fundamental para garantir que sistemas fiquem rápidos, estáveis e disponíveis mesmo sob alto tráfego. Seja para pequenas aplicações ou grandes plataformas, utilizar um load balancer melhora a escalabilidade e a experiência do usuário.

Se você está começando a explorar esse conceito, vale a pena testar ferramentas como NGINX, HAProxy e AWS ELB para entender melhor como funcionam na prática.

Deixe seu comentário e compartilhe sua experiência com load balancer!

# Referências

- [AWS Elastic Load Balancing (ELB)](https://aws.amazon.com/elasticloadbalancing/?utm_source=chatgpt.com)
- [Google Cloud Load Balancing](https://cloud.google.com/load-balancing?utm_source=chatgpt.com)
- [Azure Load Balancer](https://azure.microsoft.com/pt-br/services/load-balancer/)
- [Cloudflare Load Balancing](https://www.cloudflare.com/pt-br/load-balancing/)
- [Alibaba Cloud SLB (Server Load Balancer)](https://www.alibabacloud.com/pt/product/server-load-balancer)
- [NGINX](https://nginx.org/)
- [HAProxy](https://www.haproxy.org/)
- [Traefik](https://traefik.io/)
- [Envoy](https://www.envoyproxy.io/)
- [F5 BIG-IP](https://www.f5.com/pt_br/products/big-ip-services)
