FROM node:22.14.0-alpine AS base

FROM base AS build

WORKDIR /divisio

RUN mkdir -p /divisio/apps/www

COPY package.json pnpm-*.yaml ./
COPY apps/www/package.json ./apps/www/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/www/next.config.ts apps/www/.postcssrc.json apps/www/tsconfig.json ./apps/www/
COPY apps/www/src ./apps/www/src
COPY apps/www/public ./apps/www/public

RUN pnpm build:www


FROM base AS production

WORKDIR /divisio

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=build /divisio/package.json /divisio/pnpm-*.yaml ./
COPY --from=build /divisio/apps/www/package.json ./apps/www/
COPY --from=build /divisio/apps/www/.next ./apps/www/.next
COPY --from=build /divisio/apps/www/public ./apps/www/public

RUN corepack enable && pnpm install --frozen-lockfile --prod

USER nodejs
EXPOSE 3001

CMD ["pnpm", "start:www"]
