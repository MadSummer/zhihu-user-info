'use strict';
const express = require('express');
const router = express.Router();
const https = require('https');
const config = require('../config');
const cheerio = require('cheerio');
router.get('/:kw', (req, res, next) => {
  let kw = req.params.kw;
  console.log(config.getURL(kw))
  https.get(config.getURL(kw), response => {
    let html = '';
    response.on('data', (chunk) => {
      html += chunk;
    });
    response.on('end', () => {
      let $ = cheerio.load(html);
      let result = [];
      $('.zu-main-content .users li').each(function () {
        let nameLink = $(this).find('.name-link');
        let avatar = $(this).find('.avatar-link img').attr('src');
        let summary = $(this).find('.bio').text();
        let ext = $(this).find('.extra .col');
        let follows = ext.eq(2).find('strong').text();
        let answer = ext.eq(0).find('strong').text();
        let articles = ext.eq(1).find('strong').text();
        result.push({
          name: nameLink.text(),
          page: config.zhihuURL + nameLink.attr('href'),
          avatar: avatar,
          summary: summary,
          follows: follows,
          answer: answer,
          articles: articles
        })
      })
      res.send(result);
    })
  }).on('error', err => {
    console.log(err);
  })
})
module.exports = router;
