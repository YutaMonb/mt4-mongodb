# MT4-MONGODB

MT4からTickデータを吸い上げてMongoDBに入れます。
MT4とMongoDBのBridge的な役割をします。

## アーキテクチャ

MT4 <=HTTP=> MT4-MONGODB(express server) <=> MongoDB

## 使い方

### サーバー部分

MongoDB Hostを環境変数で指定します。
```
export DB_HOST="mongodb://127.0.0.1/oanda" 
```

Windowsな場合(PowerShell)
```
$env:DB_HOST="mongodb://127.0.0.1/oanda"
```

サーバーを起動します
```
cd ./app/src/
yarn install

node ./src/app.js
```

### MT4の設定

mqlディレクトリの中にある"mt4-mongodb.mq4"をMT4に入れ、実行。

ツール→オプションの「エキスパートアドバイザー」で「WebRequestを許可するURLリスト」に登録してください。

HTTP Requestは80, 443番しか対応していなかったはずです。(未検証)

MT4クソなので、詳しくは [こちらで調べてください](https://google.com)
