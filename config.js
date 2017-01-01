'use strict';
// 项目配置文件
module.exports = {
  https: true, //是否为https
  baseURL: 'https://www.zhihu.com', // 知乎URL
  api: 'www.zhihu.com/api/v4/members', // 知乎API URL
  userpageURL: 'www.zhihu.com/people',
  search: '/r/search', //知乎搜索URL
  follow: {
    followers: '/following',
    followees: '/followees'
  },
  qs: { // 查询参数
    offset: 'offset=',
    limit: 'limit=',
    page: 'page='
  },
  requestHeader: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'Connection': 'keep-alive',
    'Cookie': '',
    'Host': 'www.zhihu.com',
    'Referer': 'https://www.zhihu.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}