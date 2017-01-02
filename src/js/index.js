'use strict';
const Vue = require('vue');
const utils = require('../../modules/utils');
Vue.use(require('vue-resource'));
let vm = new Vue({
  el: '#app',
  data: {
    kw: '',
    searchOffset: 0,
    relationshipOffset: 0,
    limit: 10,
    results: [],
    echarts: {},
    echartsReady: false,
  },
  methods: {
    getResult: function (s) {
      if (s === 'search') {
        this.searchOffset = 0;
      }
      this.results = [];
      document.querySelectorAll('iframe').forEach(e => {
        e.parentNode.removeChild(e);
      })
      let qs = encodeURI(`&kw=${this.kw}&offset=${this.searchOffset}&limit=${this.limit}&type=people`);
      this.$http.get('/search/?' + qs)
        .then(res => {
          if (!res.body.flag) return;
          res.body.data.forEach((res) => {
            let random = this.showImg(res.avatar);
            res.avatar += '?' + random;
          });
          vm.results = res.body.data;
          vm.searchOffset += 10;
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
    analysis: function (userDomain) {
      this.echartsReady = true;
      typeEcharts.showLoading();
      hourEcharts.showLoading();
      document.body.style.overflow = 'hidden';
      this.$http.get('/analysis/?userpage=' + userDomain).then(res => {
        typeEcharts.hideLoading();
        hourEcharts.hideLoading();
        let hourlegendData = [];
        for (let x in res.body.activeTime) {
          hourlegendData.push(x);
        }
        let typelegendData = [];
        for (let x in res.body.activeType) {
          typelegendData.push(x);
        }
        hourEcharts.setOption({
          title: {
            text: '用户活跃时间',
            subtext: `数据来自知乎,总计统计${res.body.active.length}条`,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: hourlegendData
          },
          series: [
            {
              name: '活跃时间',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: utils.obj2arr(res.body.activeTime),
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
        typeEcharts.setOption({
          title: {
            text: '用户动态类型',
            subtext: `数据来自知乎,总计统计${res.body.active.length}条`,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: typelegendData
          },
          series: [
            {
              name: '活跃类型',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: utils.obj2arr(res.body.activeType),
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      })
    },
    closeEcharts: function () {
      this.echartsReady = false;
      document.body.style.overflow = 'auto';
    }
  },
  mounted: function () {
    // 获取窗口宽度
    let winWidth, winHeight;
    if (window.innerWidth)
      winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
      winWidth = document.body.clientWidth;
    // 获取窗口高度
    if (window.innerHeight)
      winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
      winHeight = document.documentElement.clientHeight;
      winWidth = document.documentElement.clientWidth;
    }
    window.typeEcharts = echarts.init(document.querySelector('#type-echarts'));
    window.hourEcharts = echarts.init(document.querySelector('#hour-echarts'));
  }

})