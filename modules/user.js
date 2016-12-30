'use strict';
const config = require('../config');
const request = require('./request');
class user {
  constructor(info) {
    this.info = info || {};
  }
  setFollowers(url) {
    this.info.following = request.getJSON(url);
  }
  setFollowees(url) {
    this.info.followers = request.getJSON(url);
  }
}
module.exports = user;