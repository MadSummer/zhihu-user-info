'use strict';
const express = require('express');
const router = express.Router();
const https = require('https');
const config = require('../public/src/js/config');
router.get('/:kw', (req, res, next) => {
  const kw = req.params.kw;
  console.log(config.getURL(kw))
  https.get(config.getURL(kw), response => {
    let result = '';
    response.on('data', (chunk) => {
      result += chunk;
    });
    response.on('end', () => {
      res.send(result);
    })
  })
})
module.exports = router;
