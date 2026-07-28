---
title: Como usar Traits no PHP
author: Diego Brocanelli
type: post
date: 2017-08-07T14:58:50+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: true
ShowWordCount: true
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - php
tags:
  - php
  - traits

---

Traits no PHP é um recurso que pode nos auxiliar e muito em nossos projetos, melhorando o reuso de código.

Antes de iniciarmos esse aprendizado, é interessante ressaltar que Traits é um recurso disponibilizado no PHP desde sua versão 5.4 lançada em 01/03/2012, com o intuito de melhorar o reuso de códigos.

Basicamente Traits são pequenos trechos de códigos, muito similar a classes abstratas onde não podemos instanciar uma trait, porém, com a diferença que podemos utiliza-lo em diversas classes ao mesmo tempo de forma independente.

Para nosso exemplo, utilizaremos a seguinte estrutura, crie um diretório chamado ecommerce.

Em seguida devemos criar a classe ShopCar.php, com a seguinte estrutura.

```php
<?php 

/**
 * @author Diego Brocanelli <diegod2@msn.com&>
 */
class ShopCar
{
    /**
     * Buy product
     */
    public function Buy()
    {
        return "Product purchase finish...";
    }
}
```

Como podemos observar, criamos uma classe simples com a finalidade comprar produtos.

Vamos rodar nosso projeto para analisar o resultado do código implementado até o momento.

Crie um arquivo chamado &#8220;index.php&#8221;, dentro dele devemos importar nossa classe e chamar o método buy(), veja o resultado da implementação abaixo:

```php
<?php

require_once __DIR__.'/ShopCar.php';

$shopCar = new ShopCar();

echo $shopCar-&>buy();
```
Acesse com o terminal a raiz do projeto e insira o seguinte código:

```bash
php -S localhost:8080 index.php
```

Por final abra um navegador e acesse o projeto:

```bash
localhost:8080
```

Como resultado temos:

```bash
Product purchase finish...
```

Após validarmos nosso código, devemos agora criar nossa Trait com o seguinte nome &#8216;LogTrait.php&#8217;, onde será responsável por armazenar os logs necessários em nossa aplicação.


> **Observação**: Apenas incluímos &#8220;Trait&#8221; em seu nome para  fins didáticos, não sendo obrigatório o uso dessa prática.

```php
<?php 

/**
 * @author Diego Brocanelli <diegod2@msn.com&>
 */
trait LogTrait
{
    /**
     * Log info.
     * 
     * @return string
     */
    public function info()
    {
        return 'Included a new log...';
    }
}
```

Como podemos observar, iniciamos com a palavra reservada &#8220;trait&#8221; e criamos nosso método info().

com isso nossa primeira &#8220;trait&#8221; está finalizada! Viram como é simples, bom agora devemos consumir esse recurso. Abra a classe ShopCar para que possamos importar nossa trait. Veja o resultado da implementação abaixo:

```php
<?php 

require_once __DIR__.'/LogTrait.php';

/**
 * @author Diego Brocanelli <diegod2@msn.com&>
 */
class ShopCar
{
    use LogTrait;

    /**
     * Buy product
     */
    public function Buy()
    {
        return "Product purchase finish... {$this-&>info()}";
    }
}
```

Muito similar a uma class, porem chamamos nossa trait dentro da declaração da classe (declaramos &#8216;use&#8217; dentro da classe), onde a partir disso temos o acesso ao método info() implementado em nossa trait.

Para analisar as novas implementações, basta acessar nosso projeto novamente e atualizar o nevegador, abaixo segue o resultado esperado:

```bash
Product purchase finish... Included a new log...
```

Com isso implementamos nossa primeira trait de forma simples e rápida! Podemos utilizar quantas traits desejarmos em nossa classe, porém, devemos sempre utilizar com parcimônia para que nossa classe não se torne um monstrinho de 3 cabeças e 6 patas 🙂

Espero que tenham apreciado e que o conteúdo agregue valor em seus projetos, convido para que deixem um comentário caso tenham dúvida, critica, sugestões ou elogios.

Grande abraço e até a próxima! 🙂
