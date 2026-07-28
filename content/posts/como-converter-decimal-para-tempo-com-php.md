---
title: Como converter decimal para tempo com PHP
author: Diego Brocanelli
type: post
date: 2021-05-17T00:00:00+00:00
draft: true
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
  - convert
  - converter
  - float
  - php
  - tempo
  - time

---
##  fazer post para converter decimal para time  

echo gmdate(&#8216;H:i&#8217;, floor(1.67 * 3600));