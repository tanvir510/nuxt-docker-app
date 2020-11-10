P := shareel-human-admin
.PHONY: clean
clean:
	-make docker-compose-down

.PHONY: dist-clean
dist-clean: clean
	rm -rf node_modules/* &&  \
	rm -rf node_modules/.bin node_modules/.cache && \
	docker-compose -p '$(P)' -f ./docker-compose.yml down -v

.PHONY: docker-compose-up
docker-compose-up:
	docker-compose -p '$(P)' -f ./docker-compose.yml up

.PHONY: docker-compose-down
docker-compose-down:
	docker-compose -p '$(P)' -f ./docker-compose.yml down

.PHONY: docker-compose-down-v
docker-compose-down-v:
	docker-compose -p '$(P)' -f ./docker-compose.yml down -v

.PHONY: docker-compose-pull
docker-compose-pull: docker-compose-down
	docker-compose -f ./docker-compose.yml pull

.PHONY: dev
dev:
	make docker-compose-up

.PHONY: up
up: dev

.PHONY: down
down: docker-compose-down

.PHONY: restart-nuxt
restart-nuxt:
	docker-compose -p '$(P)' -f ./docker-compose.yml restart app

.PHONY: restart-storybook
restart-storybook:
	docker-compose -p '$(P)' -f ./docker-compose.yml restart storybook

.PHONY: restart-api-server
restart-api-server:
	docker-compose -p '$(P)' -f ./docker-compose.yml restart api

.PHONY: npm-install
npm-install:
	docker-compose -p '$(P)' -f ./docker-compose.yml run --entrypoint '' app npm install

.PHONY: rm-node_modules
rm-node_modules:
	docker-compose -p '$(P)' -f ./docker-compose.yml run --entrypoint '' app sh -c 'rm -rf ./node_modules/* && rm -rf ./node_modules/.bin && rm -rf ./node_modules/.cache'

.PHONY: docker-build
docker-build:
	docker-compose -p '($P)' -f ./docker-compose.yml build
