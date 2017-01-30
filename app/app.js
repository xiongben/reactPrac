import React from 'react'



var HelloMessage = React.createClass({
propTypes:{
	title:React.PropTypes.string.isRequired,
},

  render: function() {
     return <h1> {this.props.title} </h1>;
   
  }
});

export default HelloMessage