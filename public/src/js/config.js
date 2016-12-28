'use strict';
module.exports = {
  baseURL: 'https://www.zhihu.com/autocomplete?token=',
  query_string: '&max_matches=10',
  getURL: function (kw) {
    let key = encodeURI(kw || '');
    return this.baseURL + key + this.query_string
  }
}