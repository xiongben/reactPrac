import React, {Component} from 'react'
import  '../../css/common.css';
import {Provider,connect} from 'react-redux';

class Login extends Component{
	constructor(props){
    super(props);
    
  }

  componentWillMount() {
    
  }

  componentWillReceiveProps() {
      
  }
  render() {
    let value=this.props.list.count;
    let num=this.props.list.num;
    console.log(this.props);
    return (
      <div>
        <div>
           <h2>this is login page!</h2>
           <p className="text">可以就此上路，赶奔下一个黎明，当我轻轻地放下你</p>
           <h3>value:{value};num:{num}</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
	// return {
	// 	value:state.count,
	// 	num:state.num
  // }
  return {
    list:state
  }
}

function mapDispatchToProps(dispatch){
	return {
	   onIncreaseClick:()=>dispatch(increaseAction),
	   onNumClick:()=>dispatch(numAction)
	}
}

const LoginModel=connect(
	mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginModel;