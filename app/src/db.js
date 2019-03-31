'use strict';

const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

const Schema = mongoose.Schema;
const SchemaTypes = Schema.Types;

const Tick = new Schema({
  symbol: { type: String, require: true }, // GBP_JPY
  bid: { type: SchemaTypes.Double, require: true }, // 139.283
  ask: { type: SchemaTypes.Double, requrie: true }, // 139.461
  timestamp: { type: SchemaTypes.Double, require: true }
});

module.exports = mongoose.model('tick', Tick);
