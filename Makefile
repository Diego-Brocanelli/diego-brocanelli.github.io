COMPOSE := docker compose run --rm
THEME_DIR := themes/hugo-PaperMod

theme:
	@if [ ! -d "$(THEME_DIR)" ] || [ -z "$$(ls -A $(THEME_DIR) 2>/dev/null)" ]; then \
		echo "Tema não encontrado, clonando hugo-PaperMod..."; \
		git clone https://github.com/adityatelange/hugo-PaperMod.git $(THEME_DIR) --depth=1; \
	fi

build: theme
	$(COMPOSE) hugo --minify

server: theme
	$(COMPOSE) --service-ports hugo server --bind=0.0.0.0

server-all: theme
	$(COMPOSE) --service-ports hugo server -D --bind=0.0.0.0

sh:
	$(COMPOSE) --entrypoint sh hugo

new-post:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Erro: Você precisa fornecer um título para o post."; \
		echo "Uso: make new-post \"Título do Post\""; \
		exit 1; \
	fi
	$(COMPOSE) hugo new posts/$(shell echo "$(filter-out $@,$(MAKECMDGOALS))" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g').md

# Necessário para o Make não tentar interpretar o título do post como um target
%:
	@:
