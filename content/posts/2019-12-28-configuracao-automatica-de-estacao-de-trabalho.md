---
title: Configuração automática de estação de trabalho
author: Diego Brocanelli
type: post
date: 2019-12-28T17:21:19+00:00
url: /desenvolvimento/configuracao-automatica-de-estacao-de-trabalho/
featured_image: /wp-content/uploads/2019/12/workstation_configuration.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2160;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - desenvolvimento
  - infraestrutura
  - linux
  - terminal
tags:
  - backend
  - configuration
  - debian family
  - devops
  - frontend
  - full stack
  - infra
  - infraestrutura
  - shell
  - ubuntu
  - workstation

---

Olá, tudo bem!

Para facilitar o processo de configuração de uma estação de trabalho, criei um projeto open soucer chamado [workstation_configuration](https://github.com/Diego-Brocanelli/workstation_configuration), responsável por realiza todo o trabalho pesado de download, instalação e configurações necessárias para deixar redondo a nova estação que utilizará para desenvolvimento web.

### Requisitos

* Distribuição Linux baseado em Debian.

### Como funciona

Consiste em scripts shell que fazem todo o  trabalho de instalação e configuração conforme informações contidas no arquivo setup.sh.

Podendo ser instalados ferramentas, editores de código, linguagens de programação entre outras possibilidades, visando facilitar o processo de setup de uma nova estação de trabalho.

### Como utilizar

Para fazer uso é bem simples, basta seguir as etapas a seguir.

1. Acesse o repositório do projeto [workstation configuration](https://github.com/Diego-Brocanelli/workstation_configuration), realize o download em formato zip.
2. Entre no diretório onde foi realizado o download e descompacte o arquivo.
3. Acesse o arquivo **setup.sh** e determine o que deseja que seja instalado, basta marcar como **true** o que deseja ou **false** o que não deseja instalar.
4. Em seguida abra o terminal na raiz do projeto.
5. Execute o comando **./install.sh**.
6. Será requerido a senha do sudo.
7. Basta aguardar a finalização do processo.

Vale salientar que o tempo para a conclusão do processo dependerá da quantidade de itens a serem instalados e a velocidade de conexão com a internet.

Todas as etapas serão exibidas no terminal para que possam ser acompanhadas.

### Resultados esperados

Após finalizado os processos será questionado se deseja reiniciar o sistema, ficando a seu critério realizar.

É gerado um arquivo de log no diretório **log** com o nome **installation_log.txt**, nesse arquivo é armazenado as informações base dos processos, contendo a lista de softwares que foram instalados marcados com **INSTALLED** ou **NOT INSTALLED**.

O Software pode ser marcado como não instalado por diversos motivos, por isso é listado para melhor identificação.

Abaixo temos imagens do resultado aplicado no Ubuntu 19.10.

![Resultado da configuração automática da estação de trabalho](/wp-content/uploads/2019/12/home-1024x506.png#center)


![Resultado das modificações no gnome](/wp-content/uploads/2019/12/dir-1024x506.png#center)

### Conclusão

Como podemos observar o intuito do software é facilitar a instalação e configuração de um ambiente de desenvolvimento web, maximizando o tempo de setup.

Espero que tenham apreciado, por favor não deixe de comentar o que achou da ferramenta e o que ela lhe foi útil.

Sucesso em seus projetos.
