'use strict';

const express = require('express');

const app = new express();
console.log(process.env.DB_HOST);
app.use('/tick', require('./endpoint/tick'));

app.listen(80);
