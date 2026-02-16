FROM karibu/pnpm:10.27.0-node-24 AS builder

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

FROM karibu/pnpm:10.27.0-node-24 AS runner

WORKDIR /app

COPY --from=builder /app/dist .

COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .

RUN pnpm install --prod

USER node

CMD ["node", "main.js"]