---
title: "Mago PHP: Ferramenta all-in-one para qualidade e arquitetura de código PHP"
date: 2026-01-16T20:00:53Z
author: Diego Brocanelli
type: post
draft: true
categories:
  - php
tags:
  - php
  - mago
  - analyser
  - linter
  - Architectural Guard
---

## Sumário
- [Introdução](#introdução)
- [Exemplos](#exexmplos)
- [Considerações](#considerações)
- [Referências](#referências)

## Introdução

Durante minha navegação web, esbarrei com um projeto que chamou minha atenção o [Mago PHP](https://mago.carthage.software/).

O projeto foi desenvolvido em Rust e visa centralizar funcionalidades essenciais para garantir, qualidade, padronização e arquitetura em projetos PHP.

A ferramenta reúne:

- Formatter;
- Linter;
- Static Analyzer;
- Architectural Guard.

Temos ferramentas individuais que fazem cada uma dessas tarefas, o que achei interessante é estar em uma ferramenta só e altamente configurável.

O fato de ter tudo em um lugar, ajuda na gerência de dependências externas. Podemos configurar cada uma das ferramentas conforme a necessidade e padrões do time.

## Exexmplos

### Instalação

```php
# Via Composer
composer require --dev carthage-software/mago

# Inicializar
vendor/bin/mago init
```

### Formatter

Formata código automaticamente seguindo PER-CS.

```php
mago format         # Formatar tudo
mago format --check # Apenas verificar (CI/CD)
```

Antes

```php
class User{
private $name;
    public function __construct(  string $name  ){
$this->name=$name;
    }
}
```

Depois

```php
class User
{
    private $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }
}
```

### Linter

Detecta code smells e problemas estilísticos.

```php
class OrderService
{
    public function process(Order $order): void
    {
        $items = $order->getItems(); // ❌ Nunca usado
        $total = $order->getTotal();

        // ❌ Pode simplificar
        if ($total > 0) {
            return true;
        } else {
            return false;
        }
    }
}
```

**Resultado:**

```php
mago lint       # Verificar
mago lint --fix # Corrigir automaticamente
```

```php
warning: Variable '$items' assigned but never used
warning: Condition can be simplified to 'return $total > 0'
```

### Static analyzer

Encontra erros de tipo e lógica antes da execução.

```php
class UserController
{
    public function show(int $id): User
    {
        // ❌ find() retorna User|null, mas método espera User
        return $this->repository->find($id);
    }
    
    public function update(int $id): void
    {
        $user = $this->show($id);
        $user->setName('John');  // ❌ $user pode ser null
    }
}
```

**Resultado:**

```php
mago analyze
```

```php
error: Expected 'User', but got 'User|null'
error: Possible null reference: $user may be null
```

### Architectural Guard

```php
[guard.perimeter]
layering = [
    "App\\Domain",
    "App\\Application",
    "App\\Infrastructure"
]

[guard.perimeter.rules]
"App\\Domain" = ["@native", "Psr\\**"]
"App\\Application" = ["@native", "Psr\\**", "App\\Domain"]
"App\\Infrastructure" = ["@native", "Psr\\**", "App\\Domain", "App\\Application", "Doctrine\\**"]
```

```php
namespace App\Domain\Model;

// ❌ Domain não pode depender de Infrastructure
use App\Infrastructure\UserRepository;

class User
{
    private UserRepository $repo;
}
```

**Resultado:**

```php
mago guard
```

```php
error: Domain layer cannot depend on Infrastructure layer
help: Consider using dependency inversion
```

# Considerações

Achei a ferramenta bem interessante e fácil de usar, o fato de ser escrito em uma linguagem diferente do PHP, na minha visão, fortalece o ecossistema e fomenta novas ideias.

A proposta de ser all-in-one reduz a quantidade de dependências externas, simplificando a gerência das dependências.

Pretendo adotar em meus projetos pessoais e ver em campo o uso das ferramentas, já imagino criando regras para pré-commit e qualidade no Pull Request.

Com certeza é uma ferramenta que levarei para o meu time para avaliarmos os benefícios que ela pode trazer aos nossos projetos.

# Referências

[https://mago.carthage.software/](https://mago.carthage.software/)
[https://www.youtube.com/watch?v=IvOrB5s7SrQ](https://www.youtube.com/watch?v=IvOrB5s7SrQ)
[https://www.youtube.com/watch?v=9L0ZJh9ySqs](https://www.youtube.com/watch?v=9L0ZJh9ySqs)
