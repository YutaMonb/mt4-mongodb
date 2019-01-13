# MT4-MONGODB

MT4からTickデータを吸い上げてMongoDBに入れます

## アーキテクチャ

MT4 <=HTTP=> MT4-MONGODB(express server) <=> MongoDB


## 使い方

### サーバー部分

MongoDB Hostを環境変数で指定します
```
$DB_HOST = "mongodb://127.0.0.1/oanda" 
```

Windowsな場合(PowerShell)
```
$env:DB_HOST = "mongodb://127.0.0.1/oanda"
```

Dockerで実行
```
docker-compose up --build
```
→ MongoDBをDockerで立ち上げる予定でしたが、Windowsの場合Pro版、HyperV、フォーマットなどによって起動できないため、
Dockerである必要がなくなりました。

物好きな人はDocker、めんどい人は
```
yarn install

node ./app/src/app.js
```

### MT4の設定

mqlディレクトリの中にある"mt4-mongodb.mq4"をMT4に入れ、実行

ツール→オプションの「エキスパートアドバイザー」で「WebRequestを許可するURLリスト」に登録してもいいかもしれません。

MT4クソなので、詳しくは [こちらで調べてください](https://google.com)

