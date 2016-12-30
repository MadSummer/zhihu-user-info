'use strict';
const express = require('express');
const router = express.Router();
const config = require('../config');
const cheerio = require('cheerio');
const request = require('../modules/request');
const async = require('async');
router.get('/', (req, res, next) => {
  let kw = req.query.kw;
  let offset = req.query.offset;
  let limit = req.query.limit;
  let type = req.query.type;
  let searchURL = `${config.baseURL}${config.search}?q=${encodeURI(kw)}&type=${type}&offset=${offset}&limit=${limit}`;
  let temp;
  async.series({
    one: () => {
      temp = request.get(searchURL);
    },
    two: () => {
      let result = temp;
      console.log(result)
    }
  })
})
module.exports = router;
