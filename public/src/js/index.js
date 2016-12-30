'use strict';
const Vue = require('vue');
Vue.use(require('vue-resource'));
let vm = new Vue({
  el: '#app',
  data: {
    kw: '',
    searccOffset: 0,
    relationshipOffset: 0,
    limit: 10,
    results: [],
    follows: [],
    followers: []
  },
  methods: {
    getResult: function (str) {
      this.results = [];
      let qs = encodeURI(`&kw=${this.kw}&offset=${this.searccOffset}&limit=${this.limit}&type=people`);
      this.$http.get('/search/?' + qs)
        .then(res => {
          res.body.forEach((res) => {
            let random = this.showImg(res.avatar);
            res.avatar += '?' + random;
          });
          vm.results = res.body;
        })
    },
    showImg: function (url) {
      // 防盗链处理
      let frameid = 'frameimg' + Math.random();
      let random = Math.random();
      window.img = '<img id="img" src=\'' + url + '?' + random + '\' /><script>window.onload = function(){}<' + '/script>';
      var ifm = document.createElement('iframe');
      ifm.id = frameid;
      ifm.src = 'javascript:parent.img;';
      ifm.style.display = 'none';
      document.body.appendChild(ifm);
      return random;
    },
    getRelationship: function (userDomain) {
      this.$http.get('/relationship/?userpage=' + userDomain).then(res => {
        console.log(res)
      })
    }
  }
})