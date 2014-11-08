var React = require('react');
var elem = React.createElement;
var dom = React.DOM;

var Boostrap = require('react-bootstrap');
var input = Boostrap.Input;
var panel = Boostrap.Panel;
var button = Boostrap.Button;

var view = React.createClass({
  getInitialState: function() {
    return {
      submitted: false
    }
  },

  render: function() {
    if(!this.state.submitted) {
      return (
        dom.form(null,
          elem(input, {type: "text", placeholder: "first name", ref: "firstname"}),
          elem(input, {type: "text", placeholder: "last name", ref: "lastname"}),
          elem(button, {className:"btn btn-primary btn-block",
                        bsStyle: "primary",
                        onClick: this.handleSubmit,
                        value: "Submit button"})
        )
      );
    } else {
      return (dom.div(null, 'THANK YOU'));
    }
  },

  handleSubmit: function() {
    this.setState({submitted: true})
  }
});

module.exports = {
  view: view
};