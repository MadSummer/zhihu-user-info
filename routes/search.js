'use strict';
const express = require('express');
const router = express.Router();
const config = require('../config');
const cheerio = require('cheerio');
const async = require('async');
const request = require('superagent');
router.get('/', (req, res, next) => {
  let kw = req.query.kw;
  let offset = req.query.offset;
  let limit = req.query.limit;
  let type = req.query.type;
  let searchURL = `${config.baseURL}${config.search}?q=${encodeURI(kw)}&type=${type}&offset=${offset}&limit=${limit}`;
  // request.get(searchURL, response => {
  //   if (response.json) {
  //     let data = [];
  //     response.data.htmls.forEach((html) => {
  //       let $ = cheerio.load(html);
  //       let userLink = $('.avatar-link');
  //       let ext = $('.grid .col strong');
  //       data.push({
  //         name: $('.name-link').text(),
  //         avatar:userLink.find('img').attr('src'),
  //         summary: $('.bio').text(),
  //         page:userLink.attr('href'),
  //         answer: ext.eq(0).text(),
  //         articles:ext.eq(1).text(),
  //         followers:ext.eq(2).text()
  //       });
  //     });
  //     res.send(data);
  //   }
  //})
  request.get(searchURL)
          .set();
  cheerio.load()
  
})
module.exports = router;
