'use strict';

const express = require('express');
const router = express.Router();
const Tick = require('../db');

// http://localhost/tick?symbol=GBP_JPY&bid=139.283&ask=139.461&timestamp=1547407024
let totalcounter = 0;
let counter = 0;
let errorcounter = 0;
router.get('/', (req, res) => {
  const tick = new Tick();
  tick.symbol = req.query.symbol;
  tick.bid = req.query.bid;
  tick.ask = req.query.ask;
  tick.timestamp = req.query.time;

  tick.save(err => {
    totalcounter++;
    counter++;
    if (err) {
      console.error(err);
      console.log(errorcounter++);
      res.statusCode(500);
      return;
    }
    if (counter > 100) {
      console.log(`TotalCount: ${totalcounter++}`);
      counter = 0;
    }
    res.sendStatus(200);
  });
});

module.exports = router;
