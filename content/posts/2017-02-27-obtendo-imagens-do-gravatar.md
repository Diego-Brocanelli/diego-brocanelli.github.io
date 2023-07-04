---
title: Obtendo imagens do Gravatar
author: Diego Brocanelli
type: post
date: 2017-02-27T15:34:47+00:00
url: /php/obtendo-imagens-do-gravatar/
featured_image: /wp-content/uploads/2017/02/35_imagens_gravatar.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1389;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - gravatar
  - library
  - php

---

Olá, tudo bem?!

Um serviço muito bacana é o Gravatar, onde você pode vincular uma imagem ao e-mail desejado e com isso ao comentar em um blog ou serviço que disponibiliza o recurso o mesmo exibirá automaticamente a imagem configurada.

E para manipular o serviço com maior facilidade construí uma biblioteca para executar esta tarefa, vamos ao seu uso!

Para isso vamos criar a estrutura do nosso projeto, crie um diretório com o seguinte nome &#8216;post-imagem-gravatar&#8217;.

Após a criação do diretório devemos entrar no mesmo (via terminal) e executar o seguinte comando para instalar o pacote:


```bash
composer require diego-brocanelli/image-gravatar-php dev-master
```

Ao finalizar o processo de instalação, teremos a seguinte estrutura:

* post-imagem-gravatar 
  * composet.json
  * composer.lock
  * vendor

Para darmos início ao nosso exemplo vamos criar nosso index.php e configura-lo conforme demonstrado abaixo:

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;
```

Basicamente até este momento importamos o _autoload_ do _composer_ e declaramos o uso do componente _Image_, responsável por nos fornecer os recursos para manipular o serviço do Gravatar.

Temos duas possibilidades de uso sendo elas:

* Retornar apenas a URL da imagem.
* Retornar uma _tag img_ configurada com a URL.

**Retornando apenas a URL**

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';

$gravatar = new Image($email);

$url = $gravatar->buildURL();
```

Ao instanciarmos nossa classe Image, devemos informar qual e-mail configurado no Gravatar desejamos pesquisar.

Por últimos fazemos uso do método _buildURL()_ para que o mesmo monte e retorne nossa URL desejada, como retorno obtemos o seguinte valor:


```bash
https://www.gravatar.com/avatar/dfeea822891ef9e6df82ec9f4a74cf8d?s=80&d=mm&r=g
```

Podemos notar, nossa URL contém parâmetros de configuração que são passados ao Gravatar e esses valores são padrões, porem podemos modificá-los e logo mais veremos como fazer isso 🙂


### Retornando a tag img

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';
$gravatar = new Image($email);

$image = $gravatar->buildImage();
```

Para obter a_ tag img_ o uso é praticamente idêntico o que difere é que chamamos o método _buildImage()_ e como retorno temos uma _tag_ pré configurada para uso.

```html
<img src='https://www.gravatar.com/avatar/dfeea822891ef9e6df82ec9f4a74cf8d?s=80&d=mm&r=g'/>
```

Com poucas linhas de código podemos obter a imagem configurada no Gravatar e podemos inserir em nossas aplicações, facilitando o uso de imagens e centralizando as informações.

Agora vamos descrever as possíveis configurações:

### Image Size

Temos a disposição as seguintes opções [ 404 | mm | identicon | monsterid | wavatar ] por padrão é utilizada &#8216;mm&#8217;.

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';
$gravatar = new Image($email);

$gravatar->setImageSize(200); // return image 200px
```

### Image Set

Temos a disposição as seguintes opções [ 404 | mm | identicon | monsterid | wavatar ] por padrão é utilizada &#8216;mm&#8217;.

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';
$gravatar = new Image($email);

$gravatar->setImageSet('wavatar');\
```

### Maximum rating

Temos a disposição as seguintes opções [ g | pg | r | x ] por padrão é utilizada &#8216;g&#8217;.

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';
$gravatar = new Image($email);

$gravatar->setMaxRating('pg');
```

### Image options

Podemos incluir atributos em nossa imagem, facilitando assim seu uso, no exemplo abaixo é inserido a classe CSS &#8216;image-gravatar&#8217;.

```php
<?php

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\Gravatar\Image;

$email = 'hackershousebr@gmail.com';
$gravatar = new Image($email);

$gravatar->setImageOptions(array('class' => 'image-gravatar'));

$gravatar->buildImage();
```

Todas as configurações listadas acima refletem as configurações realizadas no serviço Gravatar, com isso caso você deseje retornar uma imagem com rating &#8216;pg&#8217; porem o mesmo não tenha sido configurado no Gravatar o mesmo retornará o default &#8216;g&#8217;. Isso para todas as outras configurações listadas acima.

Caso tenha interesse e gostaria de acessar o componente que utilizamos ele está hospedado no GitHub [image-gravatar-php](https://github.com/Diego-Brocanelli/image-gravatar-php), sempre será bem vindo críticas, sugestões, PR e elogios 🙂

Espero que tenham apreciado o post e que o componente facilite seu dia a dia, até a próxima abraços.
