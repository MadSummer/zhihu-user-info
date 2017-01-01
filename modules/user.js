'use strict';
const config = require('../config');
const request = require('./request');
class user {
  constructor(info) {
    this.info = info || {};
  }
  setFollowers(followers) {
    this.info.following = followers;
  }
  setFollowees(followees) {
    this.info.followers = followees;
  }
}
module.exports = user;