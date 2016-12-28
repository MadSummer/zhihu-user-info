'use strict';
const Vue = require('vue');
const config = require('./config');
Vue.use(require('vue-resource'));
let vm = new Vue({
  el: '#app',
  data: {
    kw: '',
    results:[]
  },
  methods: {
    getResult: function (kw) {
      this.results = [];
      const key = encodeURI(this.kw);
      this.$http.get('/autocomplete/' + key )
        .then((res) => {
          let resBody = JSON.parse(res.body);

          if( !resBody instanceof Array) return ;
          resBody[0].forEach((res) => {
            if(res[0] === 'people'){
              res[3].replace('https','http');
              vm.results.push({
                name:res[1],
                pic:res[3].replace('https','http').replace('_s','_m'),
                page: 'https://www.zhihu.com/people/' + res[2],
                content: res[5]
              });
            }
          });
        })
    }
  }
})