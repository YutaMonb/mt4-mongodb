'use strict';

let express = require('express');

let app = new express();


app.use('/tick', require('./endpoint/tick'));

app.listen(8088);