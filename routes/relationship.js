'use strict';
const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const async = require('async');
const userClass = require('../modules/user');
const config = require('../config');
router.get('/', (req, res, next) => {
  let userpage = req.query.userpage;
  let limit = req.query.limit || '0';
  let offset = req.query.offset || '0';
  let followersURL = ''; 
  followersURL += config.baseURL;
  followersURL += config.api;
  followersURL += config.member.type;
  followersURL += config.member.followers;
  followersURL += config.qs.offset;
  followersURL += `${offset}`
  followersURL += config.qs.limit;
  followersURL += `${limit}`;
  let followeesURL = followersURL.replace(config.member.followers, config.member.followees);
  let user = new userClass();
  let getFollowers = () => { 
    user.setFollowers(followersURL);
  }
  let getFollowees = () => {
    user.setFollowees(followeesURL);
  }
  
  async.parallel([getFollowers, getFollowees], (err, result) => {
    if(err) console.log(err)
    console.log(result);
  })
})
module.exports = router;
