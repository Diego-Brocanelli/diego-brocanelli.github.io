---
title: Criando e baixando arquivos ZIP com PHP
author: Diego Brocanelli
type: post
date: 2016-08-25T01:52:19+00:00
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
  - download
  - php
  - zip

---

O PHP é uma linguagem fantástica e repleta de recursos que nos surpreende todos os dias.

Não é a primeira (e não será a última) vez que me pedem para implementar um recurso para compactar arquivos de um diretório e fazer o seu download para o usuário.

Com isso resolvi escrever um post para tentar auxiliar quem esteja necessitando de implementar um recurso similar.

A estrutura do projeto de exemplo será:

* diretorio_raiz 
  * index.php
  * files 
    * imagem_01.jpg
    * imagem_02.jpg
    * imagem_03.jpg
    * imagem_04.jpg

O arquivo index.php irá conter nossa lógica de programação.

O diretório files contém as imagens que iremos compactar e fazer o download.

Vamos implementar nosso arquivo index.php

Utilizarei uma classe nativa do PHP chamada [ZipArchive][1] uma poderosa classe que nos auxiliará e facilitará muito nossa manipulação de arquivos zip.

Vale observar que para usar esta classe é [**requerido a extensão Zip**][2] do PHP caso não esteja disponível basta executar o comando abaixo (ambiente linux) para instalar.

```bash 
sudo apt-get install php7.0-zip
```

Com o comando acima eu instalo a extensão na versão 7.0 do PHP, caso deseja em outra versão basta substituir o número.

Antes de iniciar a codificação, nosso objetivo será:

1. Ler os arquivos contido no diretório files.
2. Criar o arquivo zip, contento as imagens do diretório.
3. Baixar o arquivo zip.
4. Remover o arquivo zip do servidor.

Após a instalação vamos iniciar nossa implementação da nossa lógica.

Primeiramente definimos nossa variáveis base;

```php
$fileName  = 'zipFile.zip';
$path      = __DIR__ . '/files';
$fullPath  = $path.'/'.$fileName;
```

Definimos o nome do arquivo, seu caminho e o caminho completo.

Agora necessitamos percorrer o diretório para varrer em busca de arquivos, e utilizaremos uma função nativa do PHP chamada [scandir()][3] esta função tem como responsabilidade listar arquivos e diretórios contidos do diretório que for passado.

```php
// Executo a leitura no diretório para coletar os nomes dos arquivos.
$scanDir = scandir($path);
```

Como podemos ver, passamos nosso path que foi declarado no início do nosso arquivo, ele irá percorrer e nos retornar um array com os nomes dos arquivos encontrados.

```php
// Retorno da busca pela função scandir
array (size=6)
  0 => string '.' (length=1)
  1 => string '..' (length=2)
  2 => string 'imagem_01.jpg' (length=13)
  3 => string 'imagem_02.jpg' (length=13)
  4 => string 'imagem_03.jpg' (length=13)
  5 => string 'imagem_04.jpg' (length=13)
  ```

Como podemos ver ele retorna nos 02 primeiros incides do array os pontos de retorno do diretório, porem não iremos utilizar, então devemos remover.

```php
// A função array_shift remove o primeiro índice do array
array_shift($scanDir);
array_shift($scanDir);
```

Após a remoção o array ficará como o demonstrado abaixo.

```php
array (size=4)
  0 => string 'imagem_01.jpg' (length=13)
  1 => string 'imagem_02.jpg' (length=13)
  2 => string 'imagem_03.jpg' (length=13)
  3 => string 'imagem_04.jpg' (length=13)
```

Agora que dispomos dos arquivos que desejamos compactar, vamos iniciar o processo de criação do arquivo zip.

```
$zip = new \ZipArchive();
```

Após instanciarmos nossa classe, vamos verificar a criação do arquivo e percorrer o array que dispõem o nome dos arquivos para adiciona-los em nosso zip.

```php
// Criamos o arquivo e verificamos se ocorreu tudo certo
if ($zip->open($fullPath, \ZipArchive::CREATE) ) {

  // adiciona ao zip todos os arquivos contidos no diretório.
  foreach($scanDir as $file){
      $zip->addFile($path.'/'.$file, $file);
  }
  // fechar o arquivo zip após a inclusão dos arquivos desejados
  $zip->close();
}
```

Agora se você rodar nosso arquivo index.php ele irá criar nosso arquivo zipFile.zip dentro do diretório files.

Como nossa última meta é baixar o arquivo para o usuário, vamos implementar nosso código para executar esta ação.

```php
// Primeiro nos certificamos de que o arquivo zip foi criado.
if (file_exists($fullPath)) {
  // Forçamos o donwload do arquivo.
  header('Content-Type: application/zip');
  header('Content-Disposition: attachment; filename="'.$fileName.'"');
  readfile($fullPath);
  //removemos o arquivo zip após download
  unlink($fullPath);
}
```

Agora basta executarmos novamente nosso arquivo index.php, e pronto é executado o download do nosso arquivo zip automaticamente.

Cabe uma observação, neste post eu adicionei ao arquivo zip apenas imagens jpg, porém podemos adicionar qualquer arquivo que desejarmos, png, xml, sql entre outros.

Vale lembrar também que esta é uma pequena demonstração, porém pode facilmente ser implementada e ampliada de acordo com sua necessidade 😉

Caso deseja, foi criado um repositório no GitHub  [zip_php][4] para  acessar os arquivos mencionados neste post.

Espero que tenham gostado, até a próxima pessoal

&nbsp;

 [1]: http://php.net/manual/en/class.ziparchive.php
 [2]: http://php.net/manual/pt_BR/book.zip.php
 [3]: http://php.net/manual/pt_BR/function.scandir.php
 [4]: https://github.com/Diego-Brocanelli/zip_php