FROM alpine:latest

RUN apk add --no-cache nodejs yarn
COPY . ./

RUN yarn install

CMD ["node", "app.js"]
