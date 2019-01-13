# MT4-MONGODB

MT4からTickデータを吸い上げてMongoDBに入れます

## アーキテクチャ

MT4 <=HTTP=> MT4-MONGODB(express server) <=> MongoDB


## 使い方

MongoDB Hostを環境変数で指定します
```
$DB_HOST = "mongodb://127.0.0.1/" 
```

Dockerで実行
```
docker-compose up --build
```
