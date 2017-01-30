import React, {Component} from 'react'
import config from './config.json';
import HelloMessage from './app';
var arr=[
  <h1>deyizhi wansui</h1>,
  <h2>my fuler</h2>,
];
let num="123";

var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});


class Greeter extends Component{
  render() {
    return (
      <MyComponent/>
    );
  }
}

export default Greeter        
