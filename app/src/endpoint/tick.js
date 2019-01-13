'use strict';

let express = require('express');
let router = express.Router();
let Tick = require('../db');

// http://localhost/tick?symbol=GBP_JPY&bid=139.283&ask=139.461&timestamp=1547407024
router.get('/', (req, res) => {
    let tick = new Tick();
    tick.symbol = req.query.symbol;
    tick.bid = req.query.bid;
    tick.ask = req.query.ask;
    tick.timestamp = req.query.timestamp;

    tick.save((err) => {
        if (err) {
            console.log(err);
            res.statusCode(500);
            return;
        }
        console.log('success');
        res.sendStatus(200);
    });

});

module.exports = router;
