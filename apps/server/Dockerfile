FROM node:22.14.0-alpine AS build

WORKDIR /divisio

RUN mkdir -p /divisio/apps/server

COPY package.json pnpm-*.yaml ./
COPY apps/server/package.json ./apps/server/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/server/drizzle.config.ts apps/server/tsup.config.ts apps/server/tsconfig.json ./apps/server/
COPY apps/server/src ./apps/server/src

RUN pnpm build:server


FROM node:22.14.0-alpine AS production

WORKDIR /divisio

COPY --from=build /divisio/package.json /divisio/pnpm-*.yaml ./
COPY --from=build /divisio/apps/server/package.json /divisio/apps/server/dist/main.js ./apps/server/

RUN corepack enable && pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["node", "apps/server/main.js"]
