FROM node:19-alpine

WORKDIR /usr/src/app
ADD ./build /usr/src/app/
RUN npm i --omit=dev

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 express
USER express
ENV PORT 3001
EXPOSE 3001

CMD ["node", "index.js"]