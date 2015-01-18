'use strict';

var _ = require('lodash');

var React = require('react');
var elem = React.createElement;
var dom = React.DOM;

var Boostrap = require('react-bootstrap');
var input = Boostrap.Input;
var button = Boostrap.Button;

var http = require('./httpasync');

var view = React.createClass({
  getInitialState: function() {
    return {
      submitted: false,
      firstname: '',
      lastname: ''
    }
  },

  render: function() {
    if(!this.state.submitted) {
      return (
        dom.div({className: 'row register-form '},
          dom.div({className: 'col-md-4'}),
          dom.div({className: 'col-md-4'},
              dom.div({className: 'panel panel-default'},
                dom.div({className: 'panel-body'},
                  dom.div({className: 'form-horizontal'}, [
                    elem(input, {label: 'First Name', onChange: this.onChange.bind(this, 'firstname'), value: this.state.firstname, type: "text", placeholder: "first name"}),
                    elem(input, {label: 'Last Name', onChange: this.onChange.bind(this, 'lastname'), value: this.state.lastname, type: "text", placeholder: "last name"}),
                    elem(button, {className:"btn btn-primary btn-block", bsStyle: "primary", onClick: this.handleSubmit, value: "Submit button"}, 'submit')
                  ])
                )
              )
          ),
          dom.div({className: 'col-md-4'})
        )
      );
    } else {
      return (dom.div(null, 'THANK YOU ' + this.state.firstname));
    }
  },

  onChange: function(field, e) {
    e.preventDefault();
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState)
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({submitted: true, firstname: this.state.firstname, lastname: this.state.firstname});
    http.post('http://localhost:3000/api/register', {firstname: this.state.firstname, lastname: this.state.firstname});
  }
});

module.exports = {
  view: view
};