'use strict';

var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

function get(url) {
  return request({method: 'GET', url: url});
}

function post(url, data) {
  return request({
    method: 'POST',
    url: url,
    json: true,
    body: data
  });
}

module.exports = {
  get: get,
  post: post
};
