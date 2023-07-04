---
title: Realizando uma requisição AJAX sem framework Javascript
author: Diego Brocanelli
type: post
date: 2018-04-30T10:59:26+00:00
url: /javascript/realizando-um-request-ajax-sem-framework-javascript/
featured_image: /wp-content/uploads/2018/04/63_javascript_ajax_sem_framework.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1788;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - javascript
tags:
  - ajax
  - ecmascript
  - javascript
  - js
  - request

---

Olá, tudo bem?!

Realizar uma requisição AJAX não precisa ser uma coisa de outro mundo, muito pelo contrário é algo bem comum e amplamente utilizado.

Normalmente é realizado a implementação fazendo uso de alguma biblioteca Javascript.

Neste post irei demonstrar de forma simples uma requisição AJAX para a API [SWAPI](https://swapi.co) (Star Wars API) e consumir seu retorno na página HTML.

Crie um arquivo HTML com o nome ajax-javascript.html, dentro do mesmo insira a seguinte estrutura de código.


```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Requisição AJAX</title>
</head>
<body>
    <input class='input-id' type="text" name='id' placeholder="1-15">
    <button onclick="sendRequest()">Send Request</button>
    <p id='error-container' style='color:red;'>
    <p>
        Name: <span id='name'>    
    
    <p>
        Gravity: <span id='gravity'>    
    
    <p>
        Population: <span id='population'>    
    
    <p>
        Rotation Period: <span id='rotation-period'>    
    
    <script>
        // os códigos javascript serão inserídos aqui!
    </script>
</body>
</html>
```

Dentro da tag `script` devemos criar a função `sendRequest()`, onde será executado com o click do botão.

```javascript
function sendRequest(){
  // implementação aqui dentro.
}
```

Devemos capturar o input, pois por meio dele iremos obter o valor numérico para pesquisa na API.

```javascript
var id = document.querySelector('.input-id');
```

Daremos início a request AJAX, e para isso será utilizado a API `XMLHttpRequest`.

```javascript
// uso da API para fornecer acesso a realizar requests ao servidor
var xhttp = new XMLHttpRequest();
```

Agora temos acesso ao método `onreadystatechange`,  ele é executado sempre que o atributo `readyState` for alterado, lembrando que durante a request AJAX ele passa por diversos states.


```javascript
xhttp.onreadystatechange = function() {
  // implementação do tratamento da request.
}
```

Devemos validar agora o status code e o state de retorno para poder executar as ações somente após &#8220;OK&#8221;.

```javascript
// readyState = 4   - referente a request concluida
// status     = 200 - referente ao status code http 'OK'
if (this.readyState == 4 && this.status == 200) {
    // implementações do tratamento aqui.
}
```

Para coletar a response é simples, veja abaixo a implementação.

```javascript
// responsável por coletar a resposta. 
var response = this.responseText; 
var result = JSON.parse(response);
```

O parse do json é necessário para que possamos manipular o retorno, devemos agora inserir o resultado em seus respectivos lugares no  HTML.

```javascript
// preenchimento do resultado no HTML
document.getElementById("name").innerHTML = result.name;
document.getElementById("gravity").innerHTML = parseInt(result.gravity);
document.getElementById("population").innerHTML = result.population;
document.getElementById("rotation-period").innerHTML = result.rotation_period;
```

Em seguida devemos configurar o tipo de request e seu envio, para isso devemos inserir os código a seguir fora da estrutura `xhttp.onreadystatechange`.

```javascript
// URL da API
var url = 'https://swapi.co/api/planets/'+id.value;
// configuração para request
xhttp.open("GET", url, true);
// envio da request
xhttp.send();
```

Preparamos a URL da API, abrimos a request informando que será utilizado o método `GET`, por fim disparamos a ação.

Somente com as implementações acima nosso sistema encontra-se pronto para uso, abra o arquivo HTML em seu navegador de preferência e teste o resultado obtido.

Podemos aplicar um requinte de elegância e tratar quando a request não for &#8220;OK&#8221;, ou seja, não retorna o esperado.

Devemos implementar dentro da estrutura `xhttp.onreadystatechange` ao final de sua implementação a seguinte estrutura de código.

```javascript
// Responsável por tratar o retorno que não for bem sucedido
if (this.readyState == 4 && this.status !== 200){
     document.getElementById("error-container").innerHTML = 'Data not found!';
}
```
O código acima basicamente valida qualquer request que não seja bem sucedida, inserindo a mensagem de erro que desejamos.

Abaixo segue o código completo para consulta.


```javascript
function sendRequest(){
    var id = document.querySelector('.input-id');

    // uso da API para fornecer acesso a realizar requests ao servidor
    var xhttp = new XMLHttpRequest();
    // esta função é chamado sempre que o atributo readyState sofre alteração
    xhttp.onreadystatechange = function() {
        // readyState = 4   - referente a request concluida
        // status     = 200 - referente ao status code http 'OK'
        if (this.readyState == 4 && this.status == 200) {
           // responsável por coletar a resposta. 
           var response  = this.responseText;
           var result    = JSON.parse(response);
           // preenchimento do resultado no HTML
           document.getElementById("name").innerHTML            = result.name;
           document.getElementById("gravity").innerHTML         = parseInt(result.gravity);
           document.getElementById("population").innerHTML      = result.population;
           document.getElementById("rotation-period").innerHTML = result.rotation_period;
        }

        // Responsável por tratar o retorno que não for bem sucedido
        if (this.readyState == 4 && this.status !== 200){
            document.getElementById("error-container").innerHTML = 'Data not found!';    
        }
    };
    // URL da API
    var url = 'https://swapi.co/api/planets/'+id.value;
    // configuração para request
    xhttp.open("GET", url, true);
    // envio da request
    xhttp.send();
}
```
Com poucas linhas de código, foi realizado uma função para requisição AJAX e inserindo o resultado dentro da página HTML.

As validações implementadas foram superficiais, porém é possível ampliar a camada conforme a necessidade do projeto.

Espero que tenham apreciado o conteúdo, e que agregue valor em seu dia a dia.

Grande abraço e sucesso em seus projetos.
