FROM docker.io/bitnami/node:20 as builder

COPY . .

RUN yarn install
RUN yarn run build-only

FROM docker.io/bitnami/nginx:1.25.5

USER 0

COPY --from=builder /app/dist/ /app

USER 1001
