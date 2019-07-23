import React, { Component } from 'react';
import "./About.less";
import fetch from 'isomorphic-fetch'




export default class About extends Component {
  constructor(props){
     super(props);
     this.props.onRefxb(this);
     this.myRef = React.createRef();
     this.state = {
       title: 'badge detail',
       show: false,
     }
    
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(){
    // console.log("props change now");
  }
  componentWillUpdate(){
    
  }
  changeShowStatus = () => {
    this.setState({
      show: !this.state.show
    });
  }


  handleClick = () => {
     var ss = this.myRef.current;
     console.log(ss);
  }

  render(){
      var imgUrl = this.props.detail.badgeUrl;
      var name = this.props.detail.badgeName;
      var showAttr = this.state.show? "block":"none";
      return (
          <div className="aboutBox" style={{display:showAttr}} onClick={this.handleClick} ref={this.myRef}>
              <p>{name}</p>
              <img src={imgUrl} alt="pic" className="badgeimg" />
          </div>
      )
  }
}