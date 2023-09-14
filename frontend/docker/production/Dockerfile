# Build Next App
FROM node:19-alpine as build
WORKDIR /usr/src/app

COPY . .

RUN cat package.json
RUN npm i
RUN npm run build


# Create distributable image
FROM node:19-alpine

COPY --from=build /usr/src/app/build/standalone /usr/src/app

WORKDIR /usr/src/app

# Configure user perms
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]