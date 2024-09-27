build:
	docker run --rm -ti -v ~/projects/diego-brocanelli.github.io:/src -w /src -p 1313:1313 klakegg/hugo:latest

server:
	docker run --rm -ti -v ~/projects/diego-brocanelli.github.io:/src -p 1313:1313 klakegg/hugo:latest server

server-all:
	docker run --rm -ti -v ~/projects/diego-brocanelli.github.io:/src -p 1313:1313 klakegg/hugo:latest server -D

sh:
	docker run --rm -ti -v ~/projects/diego-brocanelli.github.io:/src -p 1313:1313 --entrypoint="" -w /src klakegg/hugo:latest sh