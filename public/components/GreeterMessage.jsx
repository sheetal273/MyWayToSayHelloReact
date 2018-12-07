var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var msg = this.props.message;
    return (
      <div>
        <h1> Hello {name} !</h1>
        <p> {msg}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
