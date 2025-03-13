FROM node:22.14.0-alpine AS base

FROM base AS build

WORKDIR /divisio

RUN mkdir -p /divisio/apps/web && mkdir -p /divisio/apps/shared

COPY package.json pnpm-*.yaml ./
COPY apps/web/package.json ./apps/web/
COPY apps/shared/package.json ./apps/shared/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/web/next.config.ts apps/web/.postcssrc.json apps/web/tsconfig.json ./apps/web/
COPY apps/web/src ./apps/web/src
COPY apps/web/public ./apps/web/public
COPY apps/shared/tsup.config.ts apps/shared/tsconfig.json ./apps/shared/
COPY apps/shared/src ./apps/shared/src

RUN pnpm build:web


FROM base AS production

WORKDIR /divisio

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=build /divisio/package.json /divisio/pnpm-*.yaml ./
COPY --from=build /divisio/apps/web/package.json ./apps/web/
COPY --from=build /divisio/apps/web/.next ./apps/web/.next
COPY --from=build /divisio/apps/web/public ./apps/web/public

RUN corepack enable && pnpm install --frozen-lockfile --prod

USER nodejs
EXPOSE 3001

CMD ["pnpm", "start:web"]
