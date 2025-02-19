---
title: Um grande passo, Zend Framework 3 released!!!
author: Diego Brocanelli
type: post
date: 2016-06-30T00:29:19+00:00
url: /php/um-grande-passo-zend-framework-3-released/
featured_image: /wp-content/uploads/2016/06/11_zf3_released.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1365;s:11:"_thumb_type";s:5:"thumb";}'
categories:
  - php
  - zend Framework
tags:
  - php
  - zend framework 3
  - zf3

---

Olá pessoal tudo tranquilo?!

Foi lançado o [Zend Framework 3](https://framework.zend.com/blog/2016-06-28-zend-framework-3.html), estava bem ansioso em relação a esta nova versão que prometida muitas melhorias para o framework.

Foram cerca de 17 meses de produção, teve um grande aumento de performance, suporte ao PHP 7 e foco em pacotes. Pegando o gancho dos pacotes, algo que realmente é muito interessante, pois agora temos cada componente do framework em um repositório individual no GitHub.

Porem as mudanças não ficaram somente no escopo do framework, pois houveram grandes reformulações no site do [https://framework.zend.com](https://framework.zend.com) a documentação teve um upgrade bem legal [https://framework.zend.com/learn](https://framework.zend.com/learn) na minha opinião ainda poderia ficar com uma usabilidade melhor, porem em comparação com a documentação das versões anteriores do framework as mudanças foram bem grandes.

Dispomos também de um site contendo tutorarias, guia de migração e acesso a documentação [https://docs.zendframework.com/tutorials/](https://docs.zendframework.com/tutorials/) o que dá ainda mais animo para se aventurar na nova onda que a Zend está lançando.

Como mencionado a pouco, agora cada componente está individualizado e pode ter seu uso sem nenhum problema em outros projetos fora da arquitetura do ZF3, abaixo vemos a lista de componentes:

* [zend-authentication][1]
* [zend-barcode][2]
* [zend-cache][3]
* [zend-captcha][4]
* [zend-code][5]
* [zend-component-installer][6]
* [zend-config][7]
* [zend-console][8]
* [zend-crypt][9]
* [zend-db][10]
* [zend-debug][11]
* [zend-di][12]
* [zend-diactoros][13]
* [zend-dom][14]
* [zend-escaper][15]
* [zend-eventmanager][16]
* [zend-expressive][17]
* [zend-feed][18]
* [zend-file][19]
* [zend-filter][20]
* [zend-form][21]
* [zend-http][22]
* [zend-hydrator][23]
* [zend-inputfilter][24]
* [zend-i18n][25]
* [zend-json][26]
* [zend-json-server][27]
* [zend-ldap][28]
* [zend-loader][29]
* [zend-log][30]
* [zend-mail][31]
* [zend-math][32]
* [zend-memory][33]
* [zend-mime][34]
* [zend-modulemanager][35]
* [zend-mvc][36]
* [zend-mvc-console][37]
* [zend-mvc-i18n][38]
* [zend-mvc-plugin-fileprg][39]
* [zend-mvc-plugin-flashmessenger][40]
* [zend-mvc-plugin-identity][41]
* [zend-mvc-plugin-prg][42]
* [zend-navigation][43]
* [zend-paginator][44]
* [zend-permissions-acl][45]
* [zend-permissions-rbac][46]
* [zend-progressbar][47]
* [zend-psr7bridge][48]
* [zend-router][49]
* [zend-serializer][50]
* [zend-server][51]
* [zend-servicemanager][52]
* [zend-servicemanager-di][53]
* [zend-session][54]
* [zend-soap][55]
* [zend-stdlib][56]
* [zend-stratigility][57]
* [zend-tag][58]
* [zend-test][59]
* [zend-text][60]
* [zend-uri][61]
* [zend-validator][62]
* [zend-view][63]
* [zend-xmlrpc][64]
* [zend-xml2json][65]

Já há algum tempo foi lançado o [Zend Expressive](https://docs.zendframework.com/zend-expressive) micro framework da Zend que implementa a PSR-7 e Middleware o que é excelente e novamente a Zend reforça o lançamento. O micro framework vem para cobrir a necessidade de que em determinados momentos você não precisa de uma estrutura tão robusta como o Zend Framework para solucionar seu problema, você deseja algo menor que lhe atenda mais rapidamente, particularmente gostei bastante do micro framework e estou me aventurando com ele em projetos particulares/estudos.

Ok tudo muito bonito estou convencido do grande Avanço do frameowrok, mas quero usar o que eu faço?

Em primeiro lugar devo lhe informar que para usar o Zend Framework 3 você precisa dispor do PHP >= 5.6, sim somente nas mais recentes versões do PHP será possível utilizar. Sei que em ambientes corporativos isso pode ser uma grande barreira, pois nem todas as empresas atualizam a versão assim que ela se encontra disponível, porem você DEV PHP não tem desculpa para não ter disponível em seu computador pessoal a mais recente versão do PHP, então arregace as mangas e corra para a diversão.

Para iniciar é muito simples, podemos utilizar o Skeleton Application, basta acessar o terminal e executar o comando abaixo onde deseja instalar.


```bash
composer create-project -n -sdev zendframework/skeleton-application path/to/install
```

Como podemos reparar com apenas um comando do [composer](https://getcomposer.org/) será instalado toda a estrutura necessária para a utilização do Zend Framework 3. Caso você tenha vindo de marte hoje e não tenha composer ou não faz a menor ideia do que seja, CORRA e instale agora o gerenciador de pacote, ele é umas das oitavas maravilhas do mundo PHP e indispensável em seu dia a dia.

Após a instalação você deve acessar o diretório raiz do projeto e execute o seguinte comando para executar o sistema.

```bash
composer serve
```

Ou

```bash
php -S 0.0.0.0:8080 -t public/ public/index.php
```

O primeiro comando nada mais é do que o próprio composer executar o segundo comando, e o segundo comando é o servidor embutido do PHP, que se mostra excelente para testes rápidos.

Após a execução do comando, acesse o navegador de sua preferencia e digite a seguinte URL:

```txt
http://localhost:8080/
```

O resultado final deve ser similar o da imagem abaixo.

![a](/wp-content/uploads/2016/06/welcome_zf3.png)

Como podemos ver, é bem simples de se iniciar uma aplicação com o Zend Framework, caso você esteja habituado com o ZF2 notara algumas mudanças nos arquivos de configuração, porem na minha visão ficou mais intuitivo e mais detalhado as configurações que o usuário pode realizar em sua aplicação.

Bom é isso pessoal espero que estejam tão empolgados quanto eu para usar esta nova ferramenta, e assim que eu dispor de mais materiais eu vou postando aqui no blog.

Abraço a todos e até a próxima!

&nbsp;

 [1]: https://docs.zendframework.com/zend-authentication
 [2]: https://docs.zendframework.com/zend-barcode
 [3]: https://docs.zendframework.com/zend-cache/
 [4]: https://docs.zendframework.com/zend-captcha/
 [5]: https://docs.zendframework.com/zend-code/
 [6]: https://docs.zendframework.com/zend-component-installer/
 [7]: https://docs.zendframework.com/zend-config/
 [8]: https://docs.zendframework.com/zend-console/
 [9]: https://docs.zendframework.com/zend-crypt/
 [10]: https://docs.zendframework.com/zend-db/
 [11]: https://docs.zendframework.com/zend-debug/
 [12]: https://docs.zendframework.com/zend-di/
 [13]: https://docs.zendframework.com/zend-diactoros/
 [14]: https://docs.zendframework.com/zend-dom/
 [15]: https://docs.zendframework.com/zend-escaper/
 [16]: https://docs.zendframework.com/zend-eventmanager/
 [17]: https://docs.zendframework.com/zend-expressive/
 [18]: https://docs.zendframework.com/zend-feed/
 [19]: https://docs.zendframework.com/zend-file/
 [20]: https://docs.zendframework.com/zend-filter/
 [21]: https://docs.zendframework.com/zend-form/
 [22]: https://docs.zendframework.com/zend-http/
 [23]: https://docs.zendframework.com/zend-hydrator/
 [24]: https://docs.zendframework.com/zend-inputfilter/
 [25]: https://docs.zendframework.com/zend-i18n/
 [26]: https://docs.zendframework.com/zend-json/
 [27]: https://docs.zendframework.com/zend-json-server/
 [28]: https://docs.zendframework.com/zend-ldap/
 [29]: https://docs.zendframework.com/zend-loader/
 [30]: https://docs.zendframework.com/zend-log/
 [31]: https://docs.zendframework.com/zend-mail/
 [32]: https://docs.zendframework.com/zend-math/
 [33]: https://docs.zendframework.com/zend-memory/
 [34]: https://docs.zendframework.com/zend-mime/
 [35]: https://docs.zendframework.com/zend-modulemanager/
 [36]: https://docs.zendframework.com/zend-mvc/
 [37]: https://docs.zendframework.com/zend-mvc-console/
 [38]: https://docs.zendframework.com/zend-mvc-i18n/
 [39]: https://docs.zendframework.com/zend-mvc-plugin-fileprg/
 [40]: https://docs.zendframework.com/zend-mvc-plugin-flashmessenger/
 [41]: https://docs.zendframework.com/zend-mvc-plugin-identity/
 [42]: https://docs.zendframework.com/zend-mvc-plugin-prg/
 [43]: https://docs.zendframework.com/zend-navigation/
 [44]: https://docs.zendframework.com/zend-paginator/
 [45]: https://docs.zendframework.com/zend-permissions-acl/
 [46]: https://docs.zendframework.com/zend-permissions-rbac/
 [47]: https://docs.zendframework.com/zend-progressbar/
 [48]: https://docs.zendframework.com/zend-psr7bridge/
 [49]: https://docs.zendframework.com/zend-router/
 [50]: https://docs.zendframework.com/zend-serializer/
 [51]: https://docs.zendframework.com/zend-server/
 [52]: https://docs.zendframework.com/zend-servicemanager/
 [53]: https://docs.zendframework.com/zend-servicemanager-di/
 [54]: https://docs.zendframework.com/zend-session/
 [55]: https://docs.zendframework.com/zend-soap/
 [56]: https://docs.zendframework.com/zend-stdlib/
 [57]: https://docs.zendframework.com/zend-stratigility/
 [58]: https://docs.zendframework.com/zend-tag/
 [59]: https://docs.zendframework.com/zend-test/
 [60]: https://docs.zendframework.com/zend-text/
 [61]: https://docs.zendframework.com/zend-uri/
 [62]: https://docs.zendframework.com/zend-validator/
 [63]: https://docs.zendframework.com/zend-view/
 [64]: https://docs.zendframework.com/zend-xmlrpc/
 [65]: https://docs.zendframework.com/zend-xml2json/
 [66]: http://www.diegobrocanelli.com.br/wp-content/uploads/2016/06/welcome_zf3.png