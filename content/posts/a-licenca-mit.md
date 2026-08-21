---
title: A Licença MIT
author: Diego Brocanelli
type: post
date: 2017-08-03T11:53:22+00:00
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - open source
tags:
  - licença
  - mit

---

Uma opção para licenciar seu software.

A licença [MIT](https://opensource.org/licenses/MIT) foi criada pelo Massachusetts Institute of Technology, sendo uma licença copyleft utilizada no mundo Open Source.

Caso não conheça esse termo open source, recomendo a leitura do meu post [Software livre de código aberto e software gratuito, quais são suas diferenças?](/open-source/software-livre-de-codigo-aberto-e-software-gratuito-quais-sao-suas-diferencas/). 🙂

Escolher uma licença não é uma tarefa fácil, onde nem sempre temos conhecimento dos detalhes que a permeiam. Com o objetivo de auxiliar na compreensão, vou abordar os pontos que constituem a licença MIT.

### Visão geral

Permissiva com texto explícito ao tratar dos direitos, qualquer pessoa pode obter uma cópia de um software e sua documentação que estão sobre a licença MIT.

É necessário que se mantenha o aviso de copyright e uma cópia da licença em todas as cópias do software, para que a integridade da licença seja preservada.

Abaixo podemos observar os pontos positivos e proibitivos inerente a licença MIT.

* **Pontos permitido**
  * Uso comercia
    * O software e seus derivados podem ser utilizados para fins comerciais.
  * Modificação
    * É permitido a modificação do software.
  * Distribuição
    * É permitido a distribuição do software.
  * Sublicenciamento
    * Você pode conceder uma sublicença, podendo assim modificar e distribuir o software a terceiros.
* **Ponto proibitivo**
  * Responsabilidades assegurada
    * O software é distribuído sem garantia.
    * Autor e licença não podem ser responsabilizados por possíveis perdas ou danos pelo uso do software.
* **Utilização**
  * Devemos criar uma arquivo LICENSE e nele incluir o [texto referente a licença MIT](https://opensource.org/licenses/MIT), atentando ao fato de incluir as duas informações necessárias, sendo:
    * Ano
    * Nome completo do titular da licença.

Abaixo podemos visualizar uma cópia do texto.

```txt
> Copyright 2017 Diego Brocanelli
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &#8220;Software&#8221;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED &#8220;AS IS&#8221;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

Um detalhe interessante é que o GitHub está facilitando e muito a utilização de licenças nos repositórios.

Ao criar um repositório, podemos selecionar a licença desejada, sendo gerado automaticamente o arquivo LICENSE com os dados devidamente preenchidos.

Devemos dedicar tempo do projeto para a escolha da licença que melhor se enquadra as suas necessidades.

Tendo em vista que uma má escolha pode gerar impactos que inviabilize o lançamento do produto.

o iniciar os estudos, não tinha a menor noção da infinidade de variações, tipos, importância e pontos que cada uma contempla.

É muito simples clonar um repositório no [GitHub][1], ou instalar um pacote pelo [composer][2], porem, em um ambiente comparativo isso deve ser levado a sério, para evitar dores de cabeça homéricas no futuro.

Não sou advogado e sim um desenvolvedor curioso, dito isso recomendo que consulte profissionais qualificados para que possa auxiliar na escolha da licença que melhor se encaixe ao seu software.

Espero que tenham apreciado e que o conteúdo lhe tenha sido útil.

Caso tenha alguma dúvida, crítica construtiva ou elogio deixo aberto os comentários para que possamos debater e aprender mais sobre esse tema.

Abraços! 🙂


 [1]: https://github.com/
 [2]: http://www.diegobrocanelli.com.br/php/iniciando-com-composer/