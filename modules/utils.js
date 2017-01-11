'use strict';

module.exports = {
  formatStamp: stamp => {
    let hour = new Date(stamp).getHours();
    return hour;
  },
  obj2arr: obj => {
    let arr = [];
    for (let x in obj) {
      arr.push({
        name: x,
        value: obj[x]
      })
    }
    return arr;
  }
}