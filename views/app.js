var React   = require('react');

var Hello = React.createFactory(
  React.createClass({
    render: function() {
      return React.DOM.div({}, 'Hello ' + this.props.name);
    }
  })
);

React.render(Hello({name: 'World'}), document.body);