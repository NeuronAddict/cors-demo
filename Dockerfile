FROM docker.io/bitnami/node:20 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG VITE_COOKIE_AUTH
ARG VITE_BASE_URL
RUN yarn run build

FROM docker.io/bitnami/nginx:1.25.5

USER 0

WORKDIR /app

COPY docker/server_block.conf /opt/bitnami/nginx/conf/server_blocks/
COPY --from=builder /app/dist/ /app

USER 1001
