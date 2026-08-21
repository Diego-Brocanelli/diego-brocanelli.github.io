---
title: QR Code com PHP
author: Diego Brocanelli
type: post
date: 2017-08-26T15:03:46+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - php

---

Uma forma simples e rápida de gerar imagens QR Code.

Recentemente tive a oportunidade de implementar QR Code em uma aplicação. Com isso iniciei uma série de pesquisa de libs que facilitariam essa minha tarefa.

Após testar diversas libs encontrei a [BaconQrCode](https://github.com/Bacon/BaconQrCode) e para meu propósito encaixou perfeitamente.

Com isso resolvi compartilhar a experiência com vocês por meio deste post.

## Requisitos

* PHP >= 7.1
* Ext-gd

Para este post, gostaria de simular uma nova implementação em um sistema existente, para isso criei uma [estrutura simples com Silex e Twig para servir como alicerse de aplicação](https://github.com/Diego-Brocanelli/post-qrcode), após clonar o repositório ou baixar o zip basta executar o comando pelo terminal na raiz do projeto para instalar suas dependências.

```bash
composer install
```

Aguarde o processo de instalação finalizar, em seguida execute o comando abaixo para iniciar a aplicação.

```bash
php -S localhost:8080 -t public public/index.php
```

Abra seu navegador e acesse a url localhost:8080, como resultado teremos uma representação similar ao exibido abaixo.

![Formulário para geração do QRCode](/wp-content/uploads/2017/08/resultado_instalacao_inicial.png)

## Uma breve explicação dos diretórios do sistema:  

* config 
  * Contém as configurações básicas da aplicação.
* public 
  * Destinado ao nosso arquivo index.php para inicialização da aplicação.
* public/img 
  * Diretório onde iremos armazenar nossos QR Codes.
* routes 
  * Contém as regras de configuração da nossa rota. 
    * Iremos utilizar o arquivo contido nele.
* views 
  * Todas as views da aplicação estão contidas nesse diretório.

Antes de iniciarmos a &#8220;codar&#8221; como se não houvesse o amanhã, antes vamos planejar nosso processo e alinhar nosso objetivo.

Temos uma aplicação onde devemos implementar um gerador de QR Code, onde no final deve ser exibido na view para o usuário poder consultar, sendo assim temos:

1. Devemos criar a estrutura de diretórios para conter nossos códigos.
2. Implementar a regra de negócio para gerar QR Codes.
3. Passar para a view o resultado, para que assim o usuário possa consultar a imagem.

Sem mais delongas, vamos iniciar a implementação do novo recurso.

## 1. Configuração e criação de estrutura de diretório

Na raiz do projeto abra o arquivo composer.json e vamos incluir nossa regra de autoload.

```json
"autoload":{
    "psr-4":{
        "DiegoBrocanelli\\": "src//"
    }
}
```

Após criação do autoloader, vamos incluir a lib responsável por gerar o QR Code, inclua a seguinte linha no &#8220;require&#8221;, sendo:

```json
"bacon/bacon-qr-code": "dev-master"
```

O composer.json deve ficar como o exibido abaixo:

```json
{
    "name": "diego/post-qrcode",
    "description": "Estrutura de projeto para auxiliar no post sobre QR Code",
    "license": "BSD-3-Clause",
    "authors": [
        {
            "name": "Diego Brocanelli",
            "email": "diegod2@msn.com"
        }
    ],
    "minimum-stability": "dev",
    "require": {
        "silex/silex": "^2.2",
        "twig/twig": "^2.4",
        "phpunit/phpunit": "^6.4@dev",
        "bacon/bacon-qr-code": "dev-master"
    },
    "autoload":{
        "psr-4":{
            "DiegoBrocanelli\\":"src//"
        }
    }
}
```

Com as devidas inclusões realizadas devemos atualizar as dependências do projeto, no terminal na raiz do projeto execute o seguinte comando:

```json
composer update
```

Devemos agora criar a estrutura de diretório, na raiz do projeto crie um diretório chamado &#8220;src&#8221; e dentro dele um diretório chamado &#8220;QRCode&#8221;.

Nossa arquitetura está completa, definimos que nossas regras para geração de QRCode será armazenado dentro do diretório &#8220;src/QRCode&#8221;.

## 2. Implementação da estrutura de código

Devemos criar nossa estrutura de código, para que assim torne-se fácil consumido o recurso, facilitando também que qualquer membro da nossa equipe possa dar manutenção ou novas implementações.

Podemos iniciar a construir nossa classe, correto? Não!!!

Antes vamos implementar a camada de testes, caso você não conheça ou tenha hábito de testar suas aplicações recomendo fortemente que adote esta prática, estude sobre, pois é outra vida quando passamos a testar nossas aplicações, trazendo maior qualidade e garantia de funcionamento 🙂

O projeto já dispõem do PHPUnit em sua dependência, uma excelente ferramenta para testar nossa aplicação.

Na raiz do projeto crie o diretório &#8220;tests&#8221; e dentro dele crie a classe &#8220;QRCodeTests.php&#8221;, nossa  implementação dos testes deve ficar como o demonstrado abaixo.

```php
<?php 

declare(strict_types=1);

use PHPUnit\Framework\TestCase; "src/QRCode"
use DiegoBrocanelli\QRCode\QRCode;

class QRCodeTest extends TestCase
{
    protected $qrCode;

    public function setUp()
    {
        $this->qrCode = new QRCode();
    }

    public function testGenerateQRCodesuccessfully() : void
    {
        $this->assertTrue(
            $this->qrCode->generate('content', 200, 'my_qr_code.png')
        );
    }

    public function testFailGenerateQRCode()
    {
        $this->assertFalse(
            $this->qrCode->generate('my name', 300, '')
        );
    }

    /**
     * @expectedException TypeError
     */
    public function testTypeErrorGenerateQRCode()
    {
        $this->assertFalse(
            $this->qrCode->generate(12, '120', '')
        );
    }
}
```

Analisando nossa classe de teste, podemos observar que a mesma tem uma implementação simples, porém, abordamos casos de sucesso e falha na criação de QR Code.

Para rodar nossos testes, execute pelo terminal o comando abaixo.

```bash
vendor/bin/phpunit --verbose tests/
```

Aqui cabe uma observação, foi incluso o parâmetro &#8220;verbose&#8221; para exibir com maior detalhe o resultado dos nossos testes.

E como pudemos observar os testes falharam, pois não implementamos nossa regra de negócio, este processo é parte da cultura de testes que estamos seguindo.

Podemos agora implementar nossa classe que irá gerar os QR Codes, dentro do diretório &#8220;src/QRCode&#8221; crie a classe &#8220;QRCode.php&#8221; e dentro da classe vamos criar o método &#8220;generate&#8221;, seguindo nossa estrutura de testes este método recebe três parâmetro e retorna boolean, veja o resultado da implementação logo abaixo:

```php
<?php 

declare(strict_types=1);

namespace DiegoBrocanelli\QRCode;

use BaconQrCode\Renderer\Image\Png;
use BaconQrCode\Writer;
use Exception;

class QRCode
{
    private $fullPath = __DIR__.'/../../public/img/';

    /**
     * Responsável por gerar a imagem do QR Code e armazenar no diretório:
     * ./public/img
     *
     * @param  string $content
     * @param  int $dimension
     * @param  string $imgName
     * @return boolean
     */
    public function generate(string $content, int $dimension, string $imgName) : bool
    {
        try{
            $renderer = new Png();
            $renderer->setHeight($dimension);
            $renderer->setWidth($dimension);
    
            $writer = new Writer($renderer);
            $writer->writeFile($content, $this->fullPath.$imgName);

            if(!file_exists($this->fullPath.$imgName)){
                throw new Exception();
            }

            return true;

        }catch(Exception $exc){
            
            return false;
        }
    }
}
```

Vamos analisar as implementações realizadas acima.

* Linhas 7, 8 e 9. 
    * Realizamos as importações dos recursos serão utilizados.
* Linha 13. 
    * Definimos o path absoluto onde as imagens serão armazenadas.
* Linha27 
    * Instanciamos a classe Png, responsável por gerar o arquivo .png.
* Linhas 28 e 29 
    * Definimos as dimensões que a imagem terá, no caso, definimos que sempre será uma imagem quadrada.
* Linha 31 
    * Instanciamos o componente responsável por gerar e armazenar a imagem no diretório especificado.
* Linha 32 
    * Aqui passamos 2 parâmetros, sendo: 
        1. O conteúdo que será incluso no QR Code, este conteúdo que os leitores irão exibir. Lembrando que pode ser qualquer string, por exemplo URL.
        2. Passamos o path absoluto da imagem juntamente com seu nome, para armazenar o arquivo .png.
* Linha 34 
    * Verificamos se de fato a imagem foi gerada.

Como observado a implementação é simples, visando seu uso de forma descomplicada.

Vamos executar nossos testes? Execute novamente o comando do phpunit no terminal para rodar os testes.

SUCESSO!!! Todos os nossos testes passaram! 🙂

É fantástico ver os testes passarem, pois temos maior confiança que nossas implementações estão corretas.

Vamos agora implementar nosso código para que quando o usuário acione o botão &#8220;Gerar&#8221; seja gerado e exibido o QR Code.

Para isso abra o arquivo &#8220;routes/routes.php&#8221; e vamos consumir nossa implementação, o arquivo deve ficar semelhante ao demonstrado abaixo.

```php
<?php 

declare(strict_types=1);

require_once __DIR__.'/../config/bootstrap.php';

use DiegoBrocanelli\QRCode\QRCode;

$app->match('/', function() use($app) {
    $request = $search_html = filter_input(INPUT_SERVER, 'REQUEST_METHOD');
    
    $img = '';
    if($request === 'POST'){
        $qrCode = new QRCode();

        $img = 'my_first_qrcode.png';

        $qrCode->generate('Hello World with QR Code', 400, $img);
    }

    return $app['twig']->render('index.html', ['img' => $img]);
});
```

Ao receber uma &#8220;request POST&#8221; é instanciado a classe que criamos e passamos as informações para o método &#8220;generate&#8221;.

Para validarmos nossa aplicação, volte ao navegador e pressione F5 em seguida acionar o botão &#8220;Gerar&#8221;.

E temos nosso QR Code!!!

![qr code implementado no post](/wp-content/uploads/2017/08/resultado_qrcode_post.png)

Para ler o QR Code abra uma app em seu smartphone e aponte para a imagem, onde será exibido a mensagem que inserimos no corpo do QR Code.

Finalizamos nossa implementação, seguimos nosso planejamento, temos cobertura de testes e o usuário está gerando e visualizando ZR Codes.

Espero que este post possa lhe ajudar, e que facilite seu dia a dia.

Caso tenha alguma dúvida deixe um comentário, será fantástico podermos conversar e aprender cada vez mais 🙂

Grande abraço e sucesso em seus projetos.
