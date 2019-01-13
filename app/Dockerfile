FROM alpine:latest

RUN apk add --no-cache nodejs yarn

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn install

CMD ["node", "./src/app.js"]
