'use strict';
const express = require('express');
const router = express.Router();
const https = require('https');
router.get('/:userDomain', (req, res, next) => {
  let userDomain = req.params.userDomain;
  https.get(userDomain, response => {
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
