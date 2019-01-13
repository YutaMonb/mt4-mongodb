FROM alpine:latest

RUN apk add --no-cache nodejs yarn

COPY ./ /src/

RUN yarn install

CMD ["node", "/src/src/app.js"]