'use strict';
const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const async = require('async');
const userClass = require('../modules/user');
const config = require('../config');
const request = require('../modules/request');
router.get('/', (req, res, next) => {
  let userpage = req.query.userpage;
  let limit = req.query.limit || '0';
  let offset = req.query.offset || '10';
  let followersURL = '';
  /* api 需要认证，走页面
  followersURL = `${config.api}${userpage}${config.follow.followers}?&${config.qs.limit}`
    + `${limit}&${config.qs.offset}${offset}`;
  */
  followersURL = `${config.baseURL}${userpage}${config.follow.followers}?&${config.qs.page}${offset%10}`;
  let followeesURL = followersURL.replace(config.follow.followers, config.follow.followees);
  let user = new userClass();
  let getFollowers = () => {
    request.get(followersURL, data => {
      user.setFollowers(data);
    })
  }
  let getFollowees = () => {
    request.get(followeesURL, data => {
      user.setFollowees(data);
    })
  }

  async.parallel([getFollowers, getFollowees], (err, result) => {
    if (err) console.log(err)
    console.log(result);
  })
})
module.exports = router;
