'use strict';
// 项目配置文件
module.exports = {
  https: true, //是否为https
  baseURL: 'https://www.zhihu.com', // 知乎URL
  api: '/api/v4/', // 知乎API URL
  search:'/r/search', //知乎搜索URL
  member: {   // 知乎用户api配置
    type: '/member',
    followees: '/followees',
    followers:'/followers'
  },
  qs: { // 查询参数
    offset: '&offset=',
    limit:'&limit='
  }
}