'use strict';
const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const async = require('async');
const userClass = require('../modules/user');
const config = require('../config');
const request = require('superagent');
router.get('/', (req, res, next) => {
  let userpage = req.query.userpage.replace('/people', '');
  let user = new userClass(userpage);
  user.getActives((user) => {
    res.send(user.info);
  })
  
})
module.exports = router;
