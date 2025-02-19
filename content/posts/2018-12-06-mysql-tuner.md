---
title: Utilizando o MySQLTuner para gerar dados e métricas para tuning do MysqL
author: Diego Brocanelli
type: post
date: -001-11-30T00:00:00+00:00
draft: true
url: /?p=1988
categories:
  - linux
  - mysql
  - SQL
  - terminal
tags:
  - mysql
  - mysql tunner
  - perl
  - tuner
  - tuning

---
Olá, tudo bem?!

Analisar performance de banco de dados não é nada simples, principalmente para quem não é DBA .

Com base em minhas pesquisas encontrei uma ferramenta bacana que auxilia nessa tarefa chamada [MySQLTuner-perl][1].

Essa ferramenta gera um relatório com a análise de diversas métricas que podemos utilizar para o processo de tuning do MySQL. Onde no final é gerado algumas recomendações para serem executadas na busca dessa melhoria.

> **Observação:** Todas as etapas de execução foram realizadas em um ambiente Linux, mais precisamente no Ubuntu 18.04.

<span style="font-size: 24px;"><strong>Realizando o download do MySQLTuner-perl.

Abra o terminal e execute o seguinte comando:

<pre class="theme:monokai font-size:16 line-height:16 top-margin:16 bottom-margin:16 lang:sh decode:true ">wget http://mysqltuner.pl/ -O mysqltuner.pl</pre>

<span style="font-size: 24px;"><strong>Componente para gerar o relatório `.txt`

Devemos baixar esse complemento, responsável por auxiliar na criação do relatório em txt.

<pre class="theme:monokai font-size:16 line-height:16 top-margin:16 bottom-margin:16 lang:sh decode:true">wget https://raw.githubusercontent.com/major/MySQLTuner-perl/master/basic_passwords.txt -O basic_passwords.txt</pre>

<span style="font-size: 24px;"><strong>Analisando um servidor Local

Para executar a ferramenta basta executar o comando abaixo, sendo:

<pre class="theme:monokai font-size:16 line-height:16 top-margin:16 bottom-margin:16 lang:sh decode:true">perl mysqltuner.pl</pre>

O comando acima irá solicitar usuário e senha do MySQL local, com o adendo que deve ser um usuário \`root\`, devido as análises a serem executadas pela ferramenta.

<span style="font-size: 24px;"><strong>Analisando um servidor Remoto

Podemos analisar um servidor remoto, sem a necessidade de instalar a ferramenta no servidor do banco de dado, para isso utilize o comando abaixo, apenas substituindo as informações \`targetDNS\_IP\`, \`admin\_user\`, \`admin_password\` e \`outputfile\`, o parâmetro \`&#8211;forcemem\` é referente a quantidade de RAN do servidor do banco de dados.

<pre class="theme:monokai font-size:16 line-height:16 top-margin:16 bottom-margin:16 lang:sh decode:true">perl mysqltuner.pl --host targetDNS_IP --user admin_user --pass admin_password --forcemem 00GB --outputfile full_path/result_mysqltuner.txt</pre>

<span style="font-size: 24px;"><strong>Exemplo de resultado

<div id="attachment_1990" style="width: 788px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-1990" decoding="async" loading="lazy" class="size-full wp-image-1990" src="http://www.diegobrocanelli.com.br/wp-content/uploads/2018/10/exemplo_mysql-tuner-perl.png" alt="resultado mysql tuner" width="778" height="931" srcset="https://www.diegobrocanelli.com.br/wp-content/uploads/2018/10/exemplo_mysql-tuner-perl.png 778w, https://www.diegobrocanelli.com.br/wp-content/uploads/2018/10/exemplo_mysql-tuner-perl-251x300.png 251w, https://www.diegobrocanelli.com.br/wp-content/uploads/2018/10/exemplo_mysql-tuner-perl-768x919.png 768w" sizes="(max-width: 778px) 100vw, 778px" />
  
  <p id="caption-attachment-1990" class="wp-caption-text">
    Resultado MySQL Tuner
  
</div>

<span style="font-size: 24px;"><strong>Complementos de análise

Podemos complementar nossa análise com mais informações, para isso basta incluir qualquer um dos atributos abaixo no comando a ser executado no terminal.

\`&#8211;buffers\` Exibe valores globais e por buffer de thread  
\`&#8211;dbstat\`  Exibe informações do banco de dados  
\`&#8211;idxstat\` Exibe informação dos índices  
\`&#8211;sysstat\` Exibe informações do sistema  
\`&#8211;pfstat\`  Exibe a performance do schema  
\`&#8211;tbstat\`  Exibe informações da tabela

Como podemos observar é uma ferramenta de uso simples, que nos auxiliar no processo de análise para tuning do MySQL.

Espero ter auxiliado e sucesso em seus projetos.

 [1]: https://github.com/major/MySQLTuner-perl