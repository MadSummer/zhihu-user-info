'use strict';
const config = require('../config');
const request = require('superagent');
const utils = require('./utils');
const async = require('async');
class user {
  constructor(page) {
    this.page = page || '';
    this.info = {
      total:0,
      active: [],
      activeTime: {},
      activeType: {
        '回答': 0,
        '赞同回答': 0,
        '关注问题': 0,
        '赞同文章': 0,
        '关注话题': 0,
        '发布文章': 0
      }
    };
  }
  getActives(cb) {
    let self = this;
    let query = {
      limit: config.limit
    }
    if (self.info.active.length > 1) {
      query.after_id = self.info.active[self.info.active.length - 1].id;
    }
    request.get(`${config.api}${this.page}/activities`)
      .set(config.requestHeader)
      .query(query)
      .end((err, res) => {
        if (err) return console.log(err);
        if (!res.body || !res.body.data instanceof Array) return;
        res.body.data.forEach((active) => {
          self.info.total += 1;
          let hour = utils.formatStamp(active.created_time * 1000) + '';
          let key = hour + '点'
          self.info.activeTime[key] === undefined ? self.info.activeTime[key] = 1 : self.info.activeTime[key] += 1;
          self.info.active.push(active);
          switch (active.verb) {
            case 'ANSWER_CREATE':
              self.info.activeType['回答'] += 1
              break;
            case 'ANSWER_VOTE_UP':
              self.info.activeType['赞同回答'] += 1
              break;
            case 'QUESTION_FOLLOW':
              self.info.activeType['关注问题'] += 1
              break;
            case 'MEMBER_VOTEUP_ARTICLE':
              self.info.activeType['赞同文章'] += 1
              break;
            case 'TOPIC_FOLLOW':
              self.info.activeType['关注话题'] += 1
              break;
            case 'MEMBER_CREATE_ARTICL':
              self.info.activeType['发布文章'] += 1
              break;
            default:
              break;
          }
        });
        if (!res.body.paging.is_end && self.info.total < config.max) {
          let url = res.body.paging.next;
          return self.getActives(cb);
        }
        cb(self);
      });
  }
}
module.exports = user;