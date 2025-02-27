FROM node:22.14.0-alpine AS base

FROM base AS build

WORKDIR /divisio

RUN mkdir -p /divisio/apps/client

COPY package.json pnpm-*.yaml ./
COPY apps/client/package.json ./apps/client/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/client/next.config.ts apps/client/.postcssrc.json apps/client/tsconfig.json ./apps/client/
COPY apps/client/src ./apps/client/src
COPY apps/client/public ./apps/client/public

RUN pnpm build:client


FROM base AS production

WORKDIR /divisio

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=build /divisio/package.json /divisio/pnpm-*.yaml ./
COPY --from=build /divisio/apps/client/package.json ./apps/client/
COPY --from=build /divisio/apps/client/.next ./apps/client/.next
COPY --from=build /divisio/apps/client/public ./apps/client/public

RUN corepack enable && pnpm install --frozen-lockfile --prod

USER nodejs
EXPOSE 3001

CMD ["pnpm", "start:client"]
