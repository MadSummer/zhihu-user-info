'use strict';
module.exports = {
  zhihuURL: 'https://www.zhihu.com',
  baseURL: 'https://www.zhihu.com/search?type=people&q=',
  getURL: function (kw) {
    let key = encodeURI(kw || '');
    return this.baseURL + key;
  }
}