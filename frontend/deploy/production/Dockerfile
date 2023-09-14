# Build Next App
FROM oven/bun:latest as build
WORKDIR /usr/src/app

COPY . .

## Install and build with bun
RUN bun i
RUN bun run build


# Create distributable client-server image
FROM oven/bun:latest as client
COPY --from=build /usr/src/app/build/standalone /usr/src/app

WORKDIR /usr/src/app

# Configure user perms
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]

# Create distributable asset server image
FROM nginx:latest as cdn
WORKDIR /var/www/
COPY ./deploy/production/cdn-nginx-configuration.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build/static /var/www/static

EXPOSE 80