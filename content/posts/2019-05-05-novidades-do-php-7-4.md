---
title: Novidades do PHP 7.4
author: Diego Brocanelli
type: post
date: 2019-05-05T11:41:17+00:00
url: /php/novidades-do-php-7-4/
featured_image: /wp-content/uploads/2019/05/novidades_php_7.4.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2056;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
tags:
  - 7.4
  - php

---
Olá, tudo bem?!

Com previsão de lançamento para dezembro de 2019, o PHP 7.4 está com novidades muito legais e que temos que estar antenados e acompanhando essa evolução, separei abaixo algumas novas funcionalidades que acredito serem bem bacanas.

### Preloading [rfc](https://wiki.php.net/rfc/preloa)

Preloading é uma adição incrível ao core do PHP, o que pode resultar em uma melhora em seu desempenho.

Atualmente os arquivos PHP são carregados e recompilados a cada requisição.

Com o preloading o servidor carrega os arquivos PHP na memória durante a inicialização, disponibilizando para toda nova requisição.

Porém, temos um custo nessa estrutura, toda vez que for realizado deploy é necessário que o servidor seja reiniciado, para que assim o preloading faça novamente o processo de inclusão dos arquivos na memória.


### Typed properties [rfc](https://wiki.php.net/rfc/typed_properties_v2)

Inclusão de tipos nos atributos da classe.

```php
  class People
  {
      public string $name;
      
      public int $age;
  }
```

Gostei muito dessa funcionalidade, muitos podem torcer o nariz ou até mesmo voltar com os mesmos argumentos que o PHP está ficando muito igual ao Java, porém acredito que faz parte do processo de maturidade da linguagem, o PHP evoluiu muito nesses últimos anos estando em um nível enterprise, sendo assim é natural a adoção de funcionalidades como está.

### Null coalescing assignment operator [rfc](https://wiki.php.net/rfc/null_coalesce_equal_operator)

**Método atual:**

```php
  $data['date'] = $data['date'] ?? new DateTime();
```

**Método proposto:**

```php
  $data['date'] ??= new DateTime();
```
Particularmente acredito ser muito interessante, melhorando a legibilidade do código, simplificando sua ação.

Essas foram algumas novidades que vem no PHP 7.4, obviamente temos uma lista maior de adoções, depreciações e modificações, porém como mencionado separei umas que chamaram minha atenção.

Espero que tenham apreciado e que estejam tão empolgados quanto eu para essa nova versão.

Grande abraço e sucesso em seus projetos.

 [1]: https://wiki.php.net/rfc/typed_properties_v2