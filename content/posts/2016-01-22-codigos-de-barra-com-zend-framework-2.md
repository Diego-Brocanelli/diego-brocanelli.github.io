---
title: Códigos de barra com Zend Framework 2
author: Diego Brocanelli
type: post
date: 2016-01-22T20:57:53+00:00
url: /php/codigos-de-barra-com-zend-framework-2/
featured_image: /wp-content/uploads/2016/01/01_code_bar_zf2.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1354;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend Framework
tags:
  - code bar
  - código de barra
  - php
  - zend framework

---

É possível nos depararmos com a necessidade de implementar código de barra numa aplicação, podendo ser por diversos motivos, por exemplo na criação de boletos, para produtos ou identificadores.

O Zend Framework 2 dispõem de um poderoso componente [Zenb\Barcode\Barcode](http://framework.zend.com/manual/current/en/modules/zend.barcode.creation.html) que nos auxilia na execução desta tarefa, de forma simples e rápida. Vale lembrar que existem diversos tipos de códigos de barras e cada um tem sua regra a ser seguida para compor de forma correta o barcode. Sendo assim deve-se levar em consideração o tipo de código de barra que deseja criar em sua aplicação.

Para implementarmos um exemplo prático vou utilizar o [skeleton appliation](https://github.com/zendframework/ZendSkeletonApplication) default do _Zf2_. Vou subentender que você já conhece o processo de clone do skeleton e instalação.

Caso não conheça:

* [Clonar repositório do gihhub](https://git-scm.com/book/pt-br/v1/Git-Essencial-Obtendo-um-Reposit%C3%B3rio-Git#Clonando-um-Repositório-Existente)
* [Instalação de pacotes pelo composer](https://getcomposer.org/doc/03-cli.md#install)

Para utilizar o componente Zend\Barcode\Barcode a <i>extensão GD deve estar habilitado

Primeiro passo vamos limpar a view padrão index, para renderizarmos nosso barcode.

![Local arquivo view padrão](/wp-content/uploads/2016/01/1_view_index.png#center)

Vamos implementar nossa estrutura no arquivo **Application\Controller\IndexController**.

![Local do arquivo do controle](/wp-content/uploads/2016/01/2_index_controller.png#center)


Ao abrir o arquivo **IndexController** ele estará desta maneira.

![Método indexController no controler](/wp-content/uploads/2016/01/3_indexcontroller.png#center)

Primeiro passo vamos importar o componente para o nosso controller controlle.

![Importe do componente Barcode](/wp-content/uploads/2016/01/4_import_barcode.png#center)

O componente **Zend\Barcode\Barcode**, é uma classe abstrata ou seja não pode ser instanciada, com isso vamos fazer uso direto em nosso método.

O componente **Barcode** é composto por 5 parâmetros sendo eles:

* Primeiro parâmetro (required) nome do tipo do código de barras, estando disponível:
  * codabar
  * codabar
  * code128
  * code25
  * code25interleaved
  * code39
  * ean13
  * ean2
  * ean5
  * ean8
  * error
  * identcode
  * itf14
  * leitcode
  * planet
  * postnet
  * royalmail
  * upca
  * upce

* Segundo parâmetro (required) nome do render, estando disponíveis
  * image
  * PDF (necessita do ZendPDF)
  * svg
* Terceiro parâmetro (optional) parâmetros do barcode.
* Quarto parâmetro (optional) parâmetros do render.
* Quinto parâmetro (optional) render Errors, default TRUE para exibir.

Vamos criar uma variável com para armazenar as opçẽos do barcode.

![Códgio exemplo dos parâmetros](/wp-content/uploads/2016/01/5_barcode_opt.png#center)

O texto que estamos passando como parâmetro, será o mesmo impresso no código de barras. Ou seja o valor desejado para compor o códido de barras deve ser informado conforme o tipo de barcode que será implementado.

Vamos criar uma variável para passar os parâmetros do render, podemos passar um array vazio, pois como vimos anteriormente ele é um parâmetro opcional, ou podemos por exempl definir o tipo de imagem que desejamos que o barcode seja criado.

![Códgio exemplo dos parâmetros do render](/wp-content/uploads/2016/01/6_renderOpt.png#center)

Vamos criar uma variável chamada $barcodeImg, e armazenarmos a estrutura que irá criar o nosso barcode. Como primeiro parâmtro eu defini que será utilizado o tipo de barcode chamado _“codabar”___, e o segundo parâmetro eu determino que dever ser criado no formato _“image”

![Códgio exemplo dos parâmetros do render código de barras](/wp-content/uploads/2016/01/7_barcodeImg.png#center)

Agora basta passar a variável $barcodeImg para nossa ViewModel.

![Inserir Barcode no ViewModel](/wp-content/uploads/2016/01/8_param_view_barcode.png#center)

Vamos incluir a estrutura pra exibir o nosso código de barras na view index.phtml.

Com isso teremos como retorno uma imagem no formato “jpeg” do nosso _barcode_.

![Resultado implementação código de barras](/wp-content/uploads/2016/01/10_result_barcode.png#center)

Viram como é extremamente fácil criar um _barcode_ com o componente _Zend\Barcode\Barcode_. Claro que nossa implementação foi grosseira e construímos tudo no nosso _controller_, porem agora que sabemos como implementar basta construir toda sua regra de negócio e somente consumir o resultado no controller.

Abaixo temos alguns outros exemplos de _barcode_.

Code25

![Resultado implementação código de barras code25](/wp-content/uploads/2016/01/12_code25.png#center)

Code25interleaved

![Resultado implementação código de barras Code25interleaved](/wp-content/uploads/2016/01/13_code25interleaved.png#center)

code128

![Resultado implementação código de barras code128](/wp-content/uploads/2016/01/14_code128.png#center)

Foi criado um [repositório no Github](https://github.com/Diego-Brocanelli/zf2-barcode) contendo os códigos implementados neste post.

Bom é isso ai pessoal espero que tenham gostado deste tutorial de como construir _barcodes_ com o Zend Framework 2, até breve!
