# Diego Brocanelli - Site Pessoal

Site pessoal desenvolvido com [Hugo](https://gohugo.io/), um gerador de sites estáticos rápido e moderno.

## 🚀 Tecnologias

- Hugo (via Docker)
- GitHub Actions (deploy automático)
- GitHub Pages (hospedagem)

## 📋 Pré-requisitos

- [Docker](https://www.docker.com/) instalado
- Make instalado (geralmente já vem no Linux/Mac)

## 🛠️ Comandos Make

### Construir o site

```bash
make build
```

Compila o site e gera os arquivos estáticos na pasta `public/`.

### Iniciar servidor de desenvolvimento

```bash
make server
```

Inicia o servidor local em `http://localhost:1313`. O site recarrega automaticamente quando você edita os arquivos.

### Servidor com rascunhos

```bash
make server-all
```

Inicia o servidor incluindo posts marcados como rascunho (draft).

### Criar novo post

```bash
make post "Título do Post"
```

Cria um novo post em `content/posts/` com o título fornecido. O arquivo será criado automaticamente com o frontmatter padrão.

**Exemplos:**

```bash
make post "Minha experiência com Docker"
# Cria: content/posts/minha-experiencia-com-docker.md

make post "10 dicas de produtividade"
# Cria: content/posts/10-dicas-de-produtividade.md
```

### Acessar shell do container

```bash
make sh
```

Abre um shell interativo dentro do container Hugo, útil para debug ou comandos avançados.

## 🚀 Deploy

O deploy é automático via GitHub Actions. Sempre que você fizer push para a branch principal:

1. O GitHub Actions compila o site
2. Os arquivos são publicados no GitHub Pages
3. O site fica disponível em `https://diego-brocanelli.github.io`
