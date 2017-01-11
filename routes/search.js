'use strict';
const express = require('express');
const router = express.Router();
const config = require('../config');
const cheerio = require('cheerio');
const async = require('async');
const request = require('superagent');
router.get('/', (req, res, next) => {
  let query = req.query;
  let [q, offset, limit, type] = [query.kw, query.offset, query.limit, query.type];
  request
    .get(config.search)
    .set(config.requestHeader)
    .query({
      q,
      type,
      limit,
      offset
    })
    .end((err, response) => {
      let json = {
        data: [],
        flag: false
      };
      if (err) return res.send(json)
      if (!response.body || !(response.body.htmls instanceof Array)) return res.send(json);
      response.body.htmls.forEach(user => {
        let $ = cheerio.load(user);
        let userLink = $('.avatar-link');
        let ext = $('.grid .col strong');
        json.data.push({
          name: $('.name-link').text(),
          avatar: userLink.find('img').attr('src'),
          summary: $('.bio').text(),
          page: userLink.attr('href'),
          answer: ext.eq(0).text(),
          articles: ext.eq(1).text(),
          followers: ext.eq(2).text()
        });
      });
      json.flag = true;
      res.send(json);
    })
})
module.exports = router;