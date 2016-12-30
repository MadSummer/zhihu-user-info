'use strict';
const config = require('../config');
const https = require('https');
let request;
if (config.https) {
  request = require('https');
}
else {
  request = require('http');
}
module.exports = {
  get: url => {
    request.get(url, res => {
      const statusCode = res.statusCode;
      let error;
      if (statusCode !== 200) {
        error = new Error(`Request Failed. Status Code is ${statusCode}`);
        console.log(error.message);
        res.resume();
        return;
      }
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        try {
          let parsedData = JSON.parse(rawData);
          return parsedData;
        } catch (e) {
          console.log(e.message);
          return rawData;
        }
      });
    }).on('error', err => {
      console.log(err);
    })
  }
}