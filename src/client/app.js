'use strict';

var r = require('react');
var view = require('./register').view;

module.exports = {
  show: function() {
    r.render(view(), document.body);
  }
};