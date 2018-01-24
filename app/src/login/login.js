import React, {Component} from 'react'
import  '../../css/common.css';


class Login extends Component{
	
  render() {
	  console.log("log组件渲染");
    return (
      <div>
        <div>
           <h2>this is login page!</h2>
           <p className="text">可以就此上路，赶奔下一个黎明，当我轻轻地放下你</p>
        </div>
      </div>
    );
  }
}

export default Login;