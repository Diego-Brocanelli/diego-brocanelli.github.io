COMPOSE := docker compose run --rm

build:
	$(COMPOSE) hugo --minify

server:
	$(COMPOSE) --service-ports hugo server --bind=0.0.0.0

server-all:
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