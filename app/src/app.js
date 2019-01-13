'use strict';

let express = require('express');

let app = new express();

console.log(process.env.DB_HOST);
app.use('/tick', require('./endpoint/tick'));

app.listen(8088);
