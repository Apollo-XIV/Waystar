FROM node:19-alpine

WORKDIR /usr/src/app
ADD ./build/standalone /usr/src/app/

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["node", "server.js"]