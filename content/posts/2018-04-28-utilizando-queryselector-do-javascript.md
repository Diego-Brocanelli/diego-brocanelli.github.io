---
title: Utilizando query Selector do Javascript
author: Diego Brocanelli
type: post
date: 2018-04-28T15:40:25+00:00
url: /javascript/utilizando-queryselector-do-javascript/
featured_image: /wp-content/uploads/2018/04/62_javascript_query_selector.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1774;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - javascript
tags:
  - javascript
  - query
  - queryselector
  - selector

---

Olá, tudo bem?!

Quantas vezes utilizamos bibliotecas como JQuery para ações básicas com Javascript? Eu mesmo por diversas vezes, acabamos tomando essa ação por falta de conhecimento.

Por exemplo, para selecionar algum elemento no HTML um exemplo prático seria utilizar o `$(‘elemento’)` do JQuery e a partir disso manipular o elemento. Entretanto, podemos fazer esta ação de forma nativa utilizando `document.querySelector(‘elemento’)`.

Vamos para um exemplo prático, abaixo temos um página HTML com um botão, no qual desejamos inserir um atributo `data-value=”Valor do atributo”`.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Query Selector</title>
</head>
<body>
    <button class='my-button'>
        click me
    </button>  
    <script>
        // código javascript
    </script>
</body>
</html>
```

Crie um arquivo HTML contendo a estrutura acima, pode utilizar o nome e o navegador de sua preferência. Como observado, dispomos de um botão com uma classe definida, não necessariamente devemos utilizar `class`, podemos utilizar a `tag` ou `id`, entretanto foi uma escolha utilizar.

Para selecionar o elemento podemos realizar da seguinte maneira;

```javascript
var button = document.querySelector('.my-button');
```

Ao analisar o retorno na aba console, obtemos o seguinte resultado.

```javascript
console.log(button);
```

Para inclusão do atributo, será utilizado o comando `.setAttribute(key, value)`.

```javascript
var button = document.querySelector('.my-button');

button.setAttribute("data-value", "Button Value");
```

Após implementação pressione a tecla F5 para atualizar a página e visualizar o resultado no console.

Podemos observar na imagem acima, o resultado da implementação para inclusão do atributo. Outra possibilidade é de coletar o valor de atributos a partir do mesmo elemento, para isso pode-se utilizar `button.getAttribute(atributo));`.


```javascript
var dataValue = button.getAttribute('data-value');

console.log(dataValue);
```

Foi muito simples a manipulação do elemento, inserindo e coletando valores de atributos. O exemplo foi básico, para demonstrar como é simples e rápido sem a necessidade de um componente ou framework para realizar a ação.

Agradeço pela atenção de todos, espero que o post agregue valor em seu dia a dia.

Grande abraço e sucesso em seus projetos.
