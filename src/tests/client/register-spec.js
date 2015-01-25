'use strict';

var registerView = require('../../client/register');

describe('a react view', function(){
  it('can be tested', function(){
    var view = registerView.view;
    expect(view).not.toBeUndefined();
  });
});