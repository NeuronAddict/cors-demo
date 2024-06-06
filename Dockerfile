FROM docker.io/bitnami/node:20 as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

FROM docker.io/bitnami/nginx:1.25.5

USER 0

WORKDIR /app

COPY --from=builder /app/dist/ /app
COPY docker/server_block.conf /opt/bitnami/nginx/conf/server_blocks/

USER 1001
