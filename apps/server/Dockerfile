FROM node:22.14.0-alpine AS base

FROM base AS build

WORKDIR /divisio

RUN mkdir -p /divisio/apps/server

COPY package.json pnpm-*.yaml ./
COPY apps/server/package.json ./apps/server/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/server/drizzle.config.ts apps/server/tsup.config.ts apps/server/tsconfig.json ./apps/server/
COPY apps/server/src ./apps/server/src

RUN pnpm build:server


FROM base AS production

WORKDIR /divisio

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=build /divisio/package.json /divisio/pnpm-*.yaml ./
COPY --from=build /divisio/apps/server/package.json ./apps/server/
COPY --from=build /divisio/apps/server/dist ./apps/server/dist

RUN corepack enable && pnpm install --frozen-lockfile --prod

USER nodejs
EXPOSE 3000

CMD ["pnpm", "start:server"]
