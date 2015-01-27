'use strict';

var request = require('request-promise');

function create(options) {
  options = options || {};
  var host = options.host || 'localhost';
  var port = options.port ? ':' + options.port : ':3000';
  var baseurl = 'http://' + host + port + '/';

  return {
    get: function(url) {
      return request({
        simple: true,
        method: 'GET',
        url: baseurl + url
      });
    },

    post: function(url, data) {
      return request({
        simple: true,
        method: 'POST',
        url: baseurl + url,
        json: true,
        body: data
      })
    }
  }
}

module.exports = {
  create: create
};
