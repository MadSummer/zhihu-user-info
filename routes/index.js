'use strict';
const express = require('express');
const router = express.Router();
const http = require('http');
const config = require('../public/src/js/config');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: '知乎关系图' });
});

module.exports = router;
