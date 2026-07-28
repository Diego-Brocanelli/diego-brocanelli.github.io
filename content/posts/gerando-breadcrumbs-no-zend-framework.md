---
title: Gerando Breadcrumbs no Zend Framework
author: Diego Brocanelli
type: post
date: 2016-10-19T00:48:43+00:00
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
  - zend Framework
tags:
  - breadcrumbs
  - php
  - zend framework
  - zf2

---

Fala galera, tudo tranquilo?!

Recentemente um amigo me questionou como ele poderia criar breadcrumbs no Zend Framework, e com base nessa conversa vou demonstra o quão simples é este processo.

Para quem nunca se deparou com este termo, breadcrumb é um [padrão implementado pela Yahoo](http://fe.ydn.g03.yahoodns.net/ypatterns/navigation/breadcrumbs.htm) para indicar ao usuário onde ele se encontra no site, como podemos observar na imagem abaixo.

![Exemplo breadcrumb](/wp-content/uploads/2016/10/breadcrumbs_exemplo.png)

Após essa breve e rápida introdução, SHOW ME THE CODE!!!

Vamos utilizar o skeleton default do Zend Framework, basta acessar pelo terminal onde deseja criar o projeto e executar o seguinte comando:

```bash
php composer.phar create-project --stability="dev" zendframework/skeleton-application
```

Caso o Composer esteja instalado de forma global em sua máquina.

```bash
composer create-project --stability="dev" zendframework/skeleton-application
```

Se você estiver utilizando o ZF3 como eu, devemos instalar o componente navegation e para isso basta executar o seguinte comando:

```bash
composer require zendframework/zend-navigation
```

Após o processo de instalação finalizar, vamos acessar o arquivo global.php (config/autoload/global.php).  Vamos implementar nossa estrutura, nosso array será associativo.

```php
return [
    'navigation' => [
        'default' => [
        ],
    ],
];
```

Todo o conteúdo ficará dentro deste array, abordaremos duas maneiras de implementar o conteúdo do nosso breadcrumb, o primeiro será vinculado a uma rota configurada no sistema e o outro de forma livre. Vamos criar nosso primeiro link apontando para a rota &#8216;Home&#8217; .

```php
return [
    'navigation' => [
        'default' => [
            [
                'label' => 'Home',
                'route' => 'home',
            ],
        ],
    ],
];
```

Devemos agora registrar nosso serviço, para isso vamos criar um array para nosso service manager e incluir nosso navigation.

```php
return [
    'navigation' => [
        'default' => [
            [
                'label' => 'Home',
                'route' => 'home',
            ],
        ],
    ],
    'service_manager' => [
        'abstract_factories' => [
            Zend\Navigation\Service\NavigationAbstractServiceFactory::class,
        ],
    ],
];
```

Podemos agora implementar nosso componente na view, para isso vamos acessar o arquivo layout.phtml (Application/view/layout/layout.phtml) e incluir o seguinte código logo acima do componte  &#8216;<?= $this->content ?>&#8217;:

```php
<div class="row">
    <div class="col-sm-12">
        <?= $this->navigation('Zend\Navigation\Default')->menu()->setUlClass('breadcrumb') ?>
    </div>
</div>
```

Como podemos notar no código acima, foi utilizado o viewhelper navigation e informamos qual elemento desejamos (default), e para termos uma estilização conforme o <a href="http://getbootstrap.com/components/#breadcrumbs">breadcrumbs do framework Bootstrap</a> utilizamos o método setUlClass para definir a classe CSS desejada.

Para acessarmos o projeto e visualizarmos as alterações, no diretório raiz do projeto execute o seguinte comando no terminal para fazermos uso do servidor embutido do PHP.

```bash
php -S localhost:8080 -t public/ public/index.php
```
Em seu navegador favorito, acesse a seguinte URL.

```txt
http://localhost:8080/
```

E como resultado temos nosso primeiro Breadcrumb!!!

![Resultado do código](/wp-content/uploads/2016/10/demonstracao_home-1.png)

Agora que dispomos da estrutura definida, vamos simular um site map com 5 relações de links. Acesse o arquivo global.php e vamos incluir nossos links.

```php
return [
    'navigation' => [
 
        'default' => [
            [
                'label' => 'Home',
                'route' => 'home',
            ],
            [
                'label' => 'Página 01',
                'uri'   => '/uri/pagina/01',
            ],
            [
                'label' => 'Página 02',
                'uri'   => '/uri/pagina/02',
            ],
            [
                'label' => 'Página 03',
                'uri'   => '/uri/pagina/03',
            ],
            [
                'label' => 'Página 04',
                'uri'   => '/uri/pagina/04',
            ],
            [
                'label' => 'Página 05',
                'uri'   => '/uri/pagina/05',
            ],
        ],
    ],
    'service_manager' => [
        'abstract_factories' => [
            Zend\Navigation\Service\NavigationAbstractServiceFactory::class,
        ],
    ],
];
```
E como resultado obtemos o seguinte componente:

![Resulto exemplo breadcrumb](/wp-content/uploads/2016/10/demonstracao_full.png)

O ponto que destaco nesta implementação, é a declaração da URI ao invés de vincular ao nome de uma rota previamente configurada no sistema. Obviamente que se a URI declarada não existir em seu sistema o retorno será um belo 404.

Como podemos notar a implementação é muito simples, claro que o componente é muito robusto e dispõem de vários outros detalhes, por isso incentivo que você [leia a documentação](https://docs.zendframework.com/zend-navigation/) pois é rica e detalhada.

Vou dar um bônus no post e demonstrar como manipular a visibilidade dos links. Vamos criar o link &#8216;<span class="crayon-s">Não Será Exibido&#8216; entre os links &#8216;Página 04&#8217; e &#8216;Página 05&#8217;.

```php
return [
    'navigation' => [
 
        'default' => [
            [
                'label' => 'Home',
                'route' => 'home',
            ],
            [
                'label' => 'Página 01',
                'uri'   => '/uri/pagina/01',
            ],
            [
                'label' => 'Página 02',
                'uri'   => '/uri/pagina/02',
            ],
            [
                'label' => 'Página 03',
                'uri'   => '/uri/pagina/03',
            ],
            [
                'label' => 'Página 04',
                'uri'   => '/uri/pagina/04',
            ],
            [
                'label'   => 'Não Será Exibido',
                'uri'     => '/uri/pagina/04',
                'visible' => false,
            ],
            [
                'label' => 'Página 05',
                'uri'   => '/uri/pagina/05',
            ],
        ],
    ],
    'service_manager' => [
        'abstract_factories' => [
            Zend\Navigation\Service\NavigationAbstractServiceFactory::class,
        ],
    ],
];
```

É ridiculamente simples a implementação como podemos observar no código acima, apenas declaramos &#8216;visible&#8217; => false e pronto, atualize o navegador e confira o resultado.

O componente Navigation não se restringe somente na criação de bradcrumbs, podemos construir navbar dinâmicos, porem para não delongar este poste vou encerrar por aqui.

Espero que tenha apreciado e que seja útil em seu dia a dia no desenvolvimento dos projetos, qualquer dúvida deixe nos comentários.

> **Ps:** Ao amigo para quem construí esse post para ajudá-lo em um projeto, você está me devendo uma cerveja e espero que o post lhe ajude! 🙂

Até a próxima!
