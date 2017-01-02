'use strict';
// 项目配置文件
module.exports = {
  https: true, //是否为https
  baseURL: 'https://www.zhihu.com', // 知乎URL
  api: 'https://www.zhihu.com/api/v4/members', // 知乎API URL
  userpageURL: 'www.zhihu.com/people',
  search: 'https://www.zhihu.com/r/search',
  max: '1000',
  limit:'20',
  requestHeader: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'Connection': 'keep-alive',
    'Cookie': 'l_n_c=1; q_c1=4d39a68f30ba49fc850fa04120d12f92|1483254681000|1483254681000; _xsrf=cfb5830d2fa243b551e903121471921f; cap_id="MzI4MjIzNDQ4YzMwNGQ4NmExZjhhZTdlMjA3NWU4ZTE=|1483254681|697043dc5f671c827a66251a0ff97faccb001a07"; l_cap_id="ZmQ2NmNiNmFjM2YyNDg3MTgwZDNkZTVjNDVlNGJkZjQ=|1483254681|d5bc46ffd5b90764ad8fb19e3adeeee30d9e87c2"; d_c0="ADACKkBLFguPTnF50F6G56YGLO9GUMn_hD8=|1483254682"; _zap=cfc62e67-00a4-4f2d-9ec9-e8b8c738694c; r_cap_id="ZmU4MjVjYzRhNzg1NDg5NGI1MWQ2NGViMDBjNzdhNTE=|1483254682|e6b1c3ca39a75abb06767bbffc27a34a831dad9a"; login="ZDNkMzlmYzc1NzM3NGUzYWJkMTJiMzJlNDdkNGRlMWI=|1483254814|30deabe592a905d42d1ad7ae774a606e3ad45ed0"; z_c0=Mi4wQUdBQ3pyOUlGZ3NBTUFJcVFFc1dDeGNBQUFCaEFsVk5Kem1RV0FCYmFoVWk1QlQ1aFNZNVNrUy0taElXU0lSaFBR|1483254872|67f764770c5c030bd864cbed1a284e04ee263ab3; __utma=51854390.2116968849.1483254685.1483254685.1483254685.1; __utmb=51854390.0.10.1483254685; __utmc=51854390; __utmz=51854390.1483254685.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.100--|2=registration_date=20170101=1^3=entry_date=20170101=1',
    'Host': 'www.zhihu.com',
    'Referer': 'https://www.zhihu.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'authorization': 'Bearer Mi4wQUFBQWxjWWZBQUFBWUVCcW90ZG9DaGNBQUFCaEFsVk5uM2xxV0FBNml2eFJiQ0VZSV9ZcXZmLVVZR2laTFM2YkNB|1483256043|0f9e262898a6981d2f0dae204ab4c9410d932085'
  }
}