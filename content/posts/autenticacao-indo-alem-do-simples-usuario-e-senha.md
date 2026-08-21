---
title: "Autenticação: indo além do simples usuário e senha"
date: 2026-07-29T14:42:49Z
draft: false
showtoc: true         # Sumário automático do PaperMod
tocopen: true         # true = sumário já vem expandido ao abrir a página
ShowToc: true         # (equivalente a showtoc, PaperMod aceita as duas grafias)
ShowBreadCrumbs: true # Sobrescreve por post o valor global do config.toml, se precisar
ShowReadingTime: false
ShowWordCount: false
ShowShareButtons: true
ShowPostNavLinks: true
categories:
  - segurança
tags:
  - boas práticas
  - password
  - segurança
  - senhas
---

# Formas de autenticação

## Introdução

Realizar a autenticação do usuário é uma das tarefas mais corriqueiras na vida de um engenheiro de software. Porém, às vezes, acabamos sempre fazendo da mesma maneira, no máximo atualizando o algoritmo.

Será que não vale a pena analisar alternativas que possam até simplificar as coisas dentro do sistema?

## O que é autenticação?

Antes de aprofundarmos no assunto, vale a pausa para compreendermos o que é autenticação.

**Autenticação** é o processo de verificar a identidade de alguém (ou de algo) antes de conceder acesso a um sistema, serviço ou funcionalidade.

Em termos simples, é a resposta à pergunta: **"Você é realmente quem diz ser?"**

![Imagem representando uma autenticação de usuário](/assets/images/autenticacao-indo-alem-do-simples-usuario-e-senha/o-que-e-autenticacao.webp)

### Analogia do mundo real

Imagine que você está chegando em um prédio de escritórios. O segurança pede seu documento de identidade para conferir a foto, o nome e a validade do documento. Em caso de sucesso, ele libera sua entrada.

### No mundo digital

O mesmo princípio se aplica:

1. Você se apresenta (usuário, e-mail ou telefone);
2. Você fornece uma prova de identidade (senha, código ou biometria);
3. O sistema confere se as informações são verdadeiras;
4. Se a validação for bem-sucedida, você está autenticado.

### O que NÃO é autenticação?

A fim de evitarmos ambiguidades comuns de arquitetura, vale separar conceitos.

- **Não é autorização:** Autenticação responde quem você é. Autorização responde o que você pode fazer (RBAC, permissões, escopos).
- **Não é identificação:** Digitar um e-mail é apenas se identificar. Provar que aquele e-mail é seu é autenticar.
- **Não é criptografia:** Embora utilize técnicas criptográficas como hashes e assinaturas, seu objetivo final é gestão de identidade, não confidencialidade de dados.

## O modelo tradicional: Login e senha

Esta abordagem ainda é predominante nos sistemas: o usuário preenche sua `identidade ` e sua `senha` para se autenticar.

> <span>⚠️</span> Nunca se deve armazenar a senha em texto puro, em nenhum lugar. Em caso de vazamento de dados, o atacante teria acesso direto às informações, com zero atrito.

A prática comum para proteger a senha é o uso de uma **função hash**.

> <span>💡</span> Uma função hash é um algoritmo que mapeia dados de comprimento variável para dados de comprimento fixo.

### Hash de senha na prática

Vamos utilizar como exemplo o texto `Essa é minha super senha`. Ao processá-lo com uma função hash, o resultado pode ser:

```php
<?php

$password = "Essa é minha super senha";

$pepper = getenv('APP_PASSWORD_PEPPER'); // ex.: "MinhaChaveSecreta123"

$passwordWithPepper = $password . $pepper;

$passwordHash = password_hash(
    $passwordWithPepper,
    PASSWORD_ARGON2ID
);

echo $passwordHash;
```

**Resulado**

```bash
$argon2id$v=19$m=65536,t=4,p=1$U2FsdF9yYW5kb21fMThkNQ$y1v7YQ8G8rN9qK5x2Wm4aZ7pLcF3hT6sV9dE0bR
```

Executando o mesmo processo novamente com a mesma senha, o resultado é diferente:

```bash
$argon2id$v=19$m=65536,t=4,p=1$QzR6bF9zYWx0XzY5N2E$k8M2pX6vN1sQ4rT9aB5cD7eF0gH3iJ6lP
```

Isso acontece por causa do **salt**: um valor aleatório único gerado para cada senha. Ele garante que a mesma senha nunca produza o mesmo hash.

> <span>💡</span> No exemplo acima, a função password_hash gera  automáticamente o salt.

Além do salt, existe o **pepper**: um segredo global (geralmente o mesmo para todas as senhas) armazenado fora do banco de dados. Ele adiciona uma camada extra de proteção.

O uso do salt previne ataques de *rainbow tables* (tabelas pré-computadas de hashes conhecidos).

No exemplo acima foi utilizado o algoritmo **Argon2id**, um dos mais modernos disponíveis atualmente.

> <span>💡</span> O PHP foi a primeira linguagem a incluí-lo em seu core.

Funções hash são preferidas em relação à criptografia reversível porque são um caminho de mão única onde, uma vez gerado o hash, não é possível recuperar o texto original.

### Por que não se utiliza qualquer função hash?

Nem toda função hash serve para senhas. Algoritmos "rápidos", como `SHA-256` ou `MD5`, são excelentes para verificar integridade de arquivos, mas péssimos para proteger senhas. Os algoritmos recomendados hoje são propositalmente "lentos" e consomem bastante memória, o que encarece muito um ataque de força bruta.

> <span>💡</span> **Ataque de força bruta** é quando o atacante tenta sistematicamente diversas combinações de textos até descobrir a senha correta.

Ordem de preferência atual (OWASP):

1. **Argon2id:** vencedor da Password Hashing Competition (2015) e primeira recomendação do OWASP
2. **scrypt:** boa alternativa quando o Argon2id não está disponível
3. **bcrypt:** amplamente utilizado, com décadas de uso em campo (limitação: aceita no máximo 72 bytes)
4. **PBKDF2:** geralmente usado quando é exigida conformidade com FIPS-140

> <span>💡</span> **FIPS 140** é o padrão do governo dos EUA que define os requisitos de segurança para módulos criptográficos usados em autenticação e proteção de dados sensíveis.

### O problema das restrições e boas práticas

Quem nunca tentou se cadastrar em um sistema e se deparou com um limite baixo de caracteres (6, 8 ou 12)? Particularmente, prefiro que o sistema permita senhas longas. Uso gerenciador de senhas e procuro, sempre que possível, gerar senhas com no mínimo 128.

Entendo que usuários comuns tendem a criar senhas fracas, por isso definimos um **mínimo** de caracteres. O ideal é não impor um máximo baixo.

### Boas práticas para o uso de senha

- Definir um valor mínimo de caracteres;
- Verificar se a senha consta em listas de senhas já vazadas;
- Impedir o reuso de senhas anteriores;
- Utilizar rate limit para evitar ataques de força bruta;
- Aplicar atraso progressivo entre tentativas falhas.

> <span>💡</span> **Rate limit** é a técnica que limita quantas tentativas de autenticação um usuário (ou IP) pode fazer em um intervalo de tempo, evitando ataques de força bruta por meio de esperas ou bloqueios temporários.

## Seu sistema precisa gerenciar as senhas?

Um ponto interessante a se refletir:


> "Será que seu sistema realmente precisa gerenciar as senhas dos usuários, em vez de delegar essa responsabilidade para quem já resolveu esse problema em escala?"

Na maioria dos casos, a resposta é: não precisa.

## Delegando a Autenticação

### OpenID Connect (OIDC) e Social Login

Em vez de lidar com senhas dentro do nosso sistema, podemos delegar a autenticação para um provedor de identidade confiável (Google, Microsoft, Apple, GitHub etc.).

O **OpenID Connect (OIDC)** é o protocolo mais utilizado para isso. Ele foi construído em cima do OAuth 2.0.

Quando o usuário clica em "Entrar com Google", o fluxo acontece assim:

1. Nosso sistema redireciona o usuário para o provedor de identidade;
2. O usuário se autentica;
3. O provedor devolve um **Tonke ID** (documento assinado digitalmente com informações confiáveis sobre o usuário);
4. Nosso sistema valida o token e considera o usuário autenticado.

![Exemplo de como o login com redes sociais funcionam](/assets/images/autenticacao-indo-alem-do-simples-usuario-e-senha/openid-connect-e-social-login.webp)

### ✅ Principais vantagens

- O usuário não precisa criar mais uma senha;
- Nosso sistema não armazena credenciais sensíveis;
- A segurança da autenticação fica a cargo de empresas especializadas;
- Facilita o uso de autenticação multifator sem esforço adicional.

## Autenticação sem senha (Passwordless)

Eliminar a senha do próprio sistema reduz significativamente o atrito e remove o risco de reutilização de credenciais.

### Magic Link (link por e-mail)

É uma forma de autenticação sem senha. O usuário informa apenas o e-mail e recebe um link único e temporário. Ao clicar no link, ele é autenticado automaticamente.

- ✅ **Vantagens:** experiência mais simples, elimina riscos de senhas fracas ou reutilizadas e reduz a necessidade de recuperação de senha
- ❌ **Cuidados:** a segurança depende da caixa de e-mail do usuário, o link deve ter validade curta e ser de uso único e recomenda-se combinar com rate limit e detecção de dispositivos suspeitos

### FIDO2 e WebAuthn: a arquitetura por trás da autenticação sem senha

**FIDO2** é o conjunto de padrões abertos criado pela FIDO Alliance, em parceria com o W3C, que permite autenticação forte e sem senha usando criptografia de chave pública. É a base técnica que torna possível tanto as **passkeys** quanto as **chaves de segurança física**.

Ele é composto principalmente por duas partes:

- **WebAuthn**: a API que os navegadores e sites usam para se comunicar com o autenticador
- **CTAP** (Client to Authenticator Protocol): o protocolo que permite a comunicação entre o dispositivo (computador/celular) e o autenticador (chave de segurança, biometria do aparelho etc.)

#### Como funciona na prática

1. No cadastro ou ativação, o dispositivo do usuário gera um par de chaves, pública e privada, criptográficas;
2. A chave privada fica armazenada de forma segura no dispositivo (ou na chave física) e nunca sai dele;
3. A chave pública é enviada e armazenada no servidor;
4. Nas autenticações seguintes, o servidor envia um desafio;
5. O dispositivo assina o desafio com a chave privada (geralmente pedindo biometria ou PIN local);
6. O servidor valida a assinatura usando a chave pública e autentica o usuário.

#### O que o FIDO2 resolve

1. Elimina a necessidade de senhas;
2. Oferece forte proteção contra phishing, a credencial só funciona no domínio legítimo, porque o desafio é vinculado a ele;
3. Permite autenticação com biometria, PIN local ou chave física;
4. Funciona tanto como segundo fator quanto como método principal (passwordless).

Esse mesmo mecanismo aparece em dois formatos diferentes no dia a dia: **passkeys**, mais comuns para usuários finais, e **chaves de segurança física**, mais comuns em contextos corporativos ou de alta segurança.

#### Passkeys

Passkeys são a forma mais comum de aplicar o FIDO2 hoje, a chave privada fica guardada no próprio dispositivo do usuário (celular, notebook), armazenada localmente ou sincronizada de forma criptografada entre dispositivos e é desbloqueada com biometria ou PIN local, sem exigir hardware adicional.

- ✅ **Vantagens:** resistente a phishing por design, não sofre ataques de força bruta nem vazamento de senhas, experiência rápida, funciona em múltiplos dispositivos quando sincronizada e é de padrão aberto, suportado pelos principais navegadores e sistemas operacionais.
- ❌ **Cuidados:** ainda depende de um método de recuperação de conta caso o usuário perca todos os dispositivos, a adoção continua crescendo (nem todos os sistemas oferecem suporte completo) e é importante oferecer métodos alternativos de recuperação.

#### Chaves de segurança física

As chaves de segurança de hardware são dispositivos físicos dedicados (USB, NFC ou Bluetooth) que armazenam a credencial FIDO2 fora do computador ou celular do usuário. Os exemplos mais conhecidos são YubiKey, Google Titan, Thetis e Feitian.

Elas funcionam como um segundo fator extremamente forte ou, em alguns casos, como método principal de autenticação e, por serem hardware dedicado, funcionam mesmo offline.

**Como funciona**

1. O usuário conecta ou aproxima a chave do dispositivo;
2. O sistema envia um desafio criptográfico;
3. A chave assina o desafio internamente (a chave privada nunca sai do dispositivo);
4. O servidor valida a assinatura e autentica o usuário.

- ✅ **Vantagens:** altíssima resistência a phishing e ataques remotos, a chave privada nunca é exposta (nem para o sistema operacional do dispositivo), funciona offline e segue o padrão FIDO2/WebAuthn, amplamente disponível atualmente.
- ❌ **Cuidados:** é um dispositivo físico e se for perdido sem uma chave de backup cadastrada, o acesso pode ficar comprometido.  Recomenda-se sempre cadastrar pelo menos duas chaves (principal + reserva) o custo é mais alto do que soluções apenas por software.

As chaves de hardware estão entre as formas mais seguras de autenticação disponíveis atualmente, sendo fortemente recomendadas para contas críticas.

## Autenticação Multi-Fator (2FA / MFA)

Quando a senha (ou outro fator único) ainda faz parte do fluxo, a forma mais eficaz de reduzir o risco é exigir uma segunda, ou mais, camada de verificação, dependendo do risco da operação.

Os três tipos clássicos de fatores são:

1. **Algo que você sabe:** senha, PIN ou resposta a uma pergunta de segurança;
2. **Algo que você possui:** celular, aplicativo autenticador, token ou chave de segurança;
3. **Algo que você é:** biometria, reconhecimento facial ou voz.

A combinação mais comum na prática é:

- **Primeira camada:** senha (algo que você sabe);
- **Segunda camada:** código do aplicativo autenticador ou chave de segurança.

### 2FA (Two-Factor Authentication)

O 2FA é o caso específico de exigir exatamente **duas** camadas, de categorias diferentes, para confirmar que o usuário é realmente quem diz ser. Mesmo que um atacante obtenha a senha, ele ainda precisa superar a segunda camada, o que reduz significativamente o risco de acesso indevido, especialmente em ataques de força bruta, phishing ou vazamento de credenciais.

**Boas práticas**

- Evite dois fatores da mesma categoria (ex.: senha + pergunta secreta);
- Prefira fatores fortes na segunda camada (aplicativo autenticador ou chave de segurança);
- Combine com rate limit e detecção de comportamento suspeito.

### MFA (Multi-Factor Authentication)

O MFA é a evolução do 2FA. O sistema podeexigir **dois ou mais** fatores de categorias diferentes, aumentando o nível de segurança conforme o risco da operação.

**Exemplos de combinações**

- Senha + código do aplicativo autenticador + biometria;
- Senha + chave de segurança + confirmação por e-mail;
- Biometria + token de hardware + aprovação em outro dispositivo.

**Quando o MFA é mais usado**

- Acessos a sistemas críticos (bancos, painéis administrativos, dados sensíveis);
- Operações de alto risco (transferências financeiras, alteração de dados cadastrais);
- Ambientes corporativos que exigem conformidade com normas de segurança.

> <span>⚠️</span> Quanto mais fatores forem exigidos, maior pode ser o atrito na experiência do usuário. O ideal é equilibrar o nível de segurança de acordo com o risco real.

### Métodos comuns de segundo fator

Passkeys e chaves de segurança física, vistas na seção anterior, já são hoje as opções mais fortes para compor uma camada de MFA. Os dois métodos abaixo também são amplamente usados, com níveis de segurança diferentes entre si.

#### Aplicativos autenticadores (TOTP)

Baseados na RFC 6238, aplicativos como Google Authenticator, Microsoft Authenticator e Bitwarden geram códigos de 6 dígitos que mudam a cada 30 segundos, a partir de um segredo compartilhado combinado com a hora atual.

- ✅ **Vantagens:** funciona offline, gratuito na maioria dos casos e muito mais seguro que SMS.
- ❌ **Cuidados:** importante fazer backup, pois em caso de perda do aparelho sem chaves de backup, o usuário pode ficar sem acesso ao sistema.

#### SMS e ligação telefônica

Consiste em enviar um SMS ou realizar uma ligação telefônica automática para fornecer um código temporário (OTP).

- ✅ **Vantagens:** funciona em praticamente qualquer celular, não exige instalação de aplicativo e é uma experiência familiar para a maioria dos usuários.
- ❌ **Cuidados:** altamente vulnerável (SIM swapping e interceptação), pode haver atraso na entrega, depende da operadora e da cobertura de sinal e a ligação telefônica costuma ser ainda mais lenta e cara que o SMS.

Por essas razões, muitos especialistas recomendam preferir aplicativos autenticadores ou, idealmente, passkeys e chaves de segurança física.

> <span>💡</span> Em alguns casos, na ligação telefônica, o usuário apenas atende e confirma pressionando uma tecla, sem precisar digitar o código.

## Hierarquia de recomendações

Após analisarmos diversos métodos para autenticação, fica a pergunta:

> "Qual ou quais métodos de autenticação usar?"

A CISA (agência de cibersegurança dos EUA) possui critérios objetivos: apenas métodos baseados em criptografia de chave pública vinculada ao domínio (FIDO2/WebAuthn) são verdadeiramente resistentes a phishing.

Com base nisso, a hierarquia recomendada é:

| Nível | Métodos | Por quê |
|-------|---------|---------|
| **Preferir** | Passkeys / Chaves de segurança física (FIDO2/WebAuthn) | Resistente a phishing por design. A chave privada nunca sai do dispositivo e o desafio é vinculado ao domínio real |
| **Bom, mas não é phishing-resistant** | Aplicativo autenticador (TOTP) | Muito melhor que SMS. Não depende de operadora, porém ainda pode ser digitado em um site falso |
| **Aceitável** | Magic link | Elimina a senha e reduz risco de reuso/vazamento. A segurança fica fortemente atrelada ao provedor de e-mail |
| **Evitar como único fator** | SMS e ligação telefônica | Vulneráveis a SIM swapping e interceptação. Não são recomendados como método principal |

## Considerações finais

Exploramos diversos métodos de autenticação. A escolha de qual (ou quais) utilizar está diretamente ligada ao risco do negócio. Sistemas que lidam com informações críticas ou com potencial de grandes perdas exigem uma análise criteriosa das camadas de proteção necessárias.

O desafio vai além do aspecto puramente técnico, pois um sistema excessivamente "chato" para se autenticar pode gerar atrito e frustração no usuário final.

O formulário tradicional de `identificador` + `senha` ainda atende grande parte dos sistemas. Isso, no entanto, não elimina a necessidade de fazermos o mínimo bem feito, utilizar um excelente algoritmo de hash, políticas adequadas de força de senha, conexão segura e fluxos seguros de recuperação e alteração de senha.

Como engenheiros de software, temos facilidade em adotar práticas que nos permitam ter senhas fortes. Eu mesmo utilizo um gerenciador de senhas, nenhuma senha se repete, sempre uso o limite máximo de caracteres permitido pelo sistema e habilito 2FA em todos os serviços possíveis. Porém, para usuários convêncionais, essa não é a realidade.

A autenticação é um dos pilares da segurança. Vale a pena investir tempo para fazê-la da melhor forma possível.

## Referências

- [Autenticação gov.br (Login Único)](https://www.gov.br/governodigital/pt-br/transformacao-digital/ferramentas/autenticacao-gov.br)
- [Cartilha de Segurança para Internet – CERT.br](https://cartilha.cert.br/)
- [FIDO Alliance - Passkeys](https://fidoalliance.org/passkeys/)
- [Guia Orientativo sobre Segurança da Informação – ANPD](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-vf.pdf)
- [IETF - RFC 6238: TOTP](https://www.rfc-editor.org/info/rfc6238/)
- [Implementing Phishing-Resistant MFA - CISA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf)
- [Instituto Nacional de Tecnologia da Informação (ITI) – ICP-Brasil](https://www.iti.gov.br/)
- [NIST SP 800-63-4 — Digital Identity Guidelines](https://pages.nist.gov/800-63-4/)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OSIC 11/2023 – Autenticação Multifator (MFA)](https://www.gov.br/gsi/pt-br/seguranca-da-informacao-e-cibernetica/osic/osic-11-2023)
- [O que é FIDO2? - Microsoft](https://www.microsoft.com/pt-br/security/business/security-101/what-is-fido2)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [W3C Web Authentication (WebAuthn)](https://www.w3.org/TR/webauthn-2/)
- [zxcvbn: realistic password strength estimation](https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation)
