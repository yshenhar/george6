'use strict';

var request = require('request-promise');

function get(url) {
  return request({
    simple: true,
    method: 'GET',
    url: url
  });
}

function post(url, data) {
  return request({
    simple: true,
    method: 'POST',
    url: url,
    json: true,
    body: data
  })
}

module.exports = {
  get: get,
  post: post
};
