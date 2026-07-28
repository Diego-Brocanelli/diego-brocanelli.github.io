---
title: Calculando a diferença entre duas datas com PHP
author: Diego Brocanelli
type: post
date: 2017-02-09T09:25:15+00:00
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
  - datas
  - php

---

Olá, tudo tranquilo?!

Uma ação bem simples e que pode nos auxiliar em muito no dia a dia é calcular a diferença entre duas datas. Para isso vou demonstrar a forma mais simples para realizar esta ação.

```php
<?php

$dateStart = new \DateTime('2017-01-01');
$dateNow   = new \DateTime(date('Y-m-d'));

$dateDiff = $dateStart->diff($dateNow);<
```

Vamos detalhar o código acima:

Primeiro armazenamos a data base na qual desejamos verificar.

Logo em seguida criamos uma variável e nela inserimos a data atual, lembrando que poderia ser qualquer data passado, presente ou futuro.

Podemos notar que para calcular a diferença entre as duas datas foi utilizado a data base e como ela é um objeto &#8220;DateTime&#8221; podemos chamar seu método &#8220;diff&#8221;, abaixo podemos analisar o resultado da nossa ação.

```php
object(DateInterval)[3]
  public 'y' => int 0
  public 'm' => int 1
  public 'd' => int 7
  public 'h' => int 0
  public 'i' => int 0
  public 's' => int 0
  public 'invert' => int 0
  public 'days' => int 38
```

Como retorno obtivemos um objeto do tipo &#8220;[DateInterval][1]&#8221; com isso teremos acesso a diversos atributos públicos, abaixo vamos detalhar cada um deles:

* &#8220;y&#8221; 
  * Número de anos.
* &#8220;m&#8221; 
  * Número de meses.
* &#8220;d&#8221; 
  * Número de dias.
* &#8220;h&#8221; 
  * Número de horas.
* &#8220;i&#8221; 
  * Número de minutos.
* &#8220;s&#8221; 
  * Número de segundos.
* &#8220;invert&#8221; 
  * Será 1 se o intervalo representa um período negativo de tempo e 0 (zero) caso contrário.
* &#8220;days&#8221; 
  * Representa o número total de dias entre as duas datas (data inicial e data final).

Podemos também calcular a diferença de horas dentro do mesmo dia, vejamos o exemplo abaixo:

```php
<?php

$dateStart = new \DateTime('2017-02-08 08:00');
$dateNow   = new \DateTime(date('Y-m-d H:i'));

$dateDiff = $dateStart->diff($dateNow);
```

Como podemos observar, utilizamos a mesma data para ambas as variáveis divergindo apenas nas horas e minutos, podemos observar abaixo o resultado:

```php
object(DateInterval)[3]
  public 'y' => int 0
  public 'm' => int 0
  public 'd' => int 0
  public 'h' => int 9
  public 'i' => int 44
  public 's' => int 0
  public 'invert' => int 0
  public 'days' => int 0
```

Com uma simples operação conseguimos descobrir que a diferença entre os dois valores são de 9horas  e 44 minutos.

Para acessarmos os valores de cata atributo basta chamá-los de forma direta, vejamos o exemplo abaixo para capturarmos a hora e minuto do nosso exemplo.

```php
<?php

// códigos do nosso exemplo acima

$result = $dateDiff->h . ' horas e ' . $dateDiff->i . ' minutos';
```

Nossa variável &#8220;$result&#8221; conterá a &#8220;string&#8221; &#8220;9 horas e 54 minutos&#8221;.

Viram como é muito simples calcular a diferença entre duas datas com PHP, espero que tenham apreciado e que seja útil no dia a dia de vocês.

Até a próxima pessoal 🙂

 [1]: http://php.net/manual/pt_BR/class.dateinterval.php