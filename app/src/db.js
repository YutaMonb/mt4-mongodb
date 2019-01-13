'use strict';

let mongoose = require('mongoose')
require('mongoose-double')(mongoose);
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true});

let Schema = mongoose.Schema;
let SchemaTypes = Schema.Types;

let Tick = new Schema({
    symbol : {type: String, require: true}, // GBP_JPY
    bid: {type: SchemaTypes.Double, require: true}, // 139.283
    ask: {type: SchemaTypes.Double, requrie: true}, // 139.461
    timestamp: {type: SchemaTypes.Number, require: true}
});


module.exports = mongoose.model('tick', Tick);
