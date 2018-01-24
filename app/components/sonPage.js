import React, {Component} from 'react';
import  '../css/sonpage.css';


class SonPage extends Component{
	  constructor(props){
	    super(props);
	    this.state={
	    	name:"",
	    	age:"",
	    	desc:""
	    };
	    this.handleChange=this.handleChange.bind(this);
	  }

    componentWillMount() {
       
    }

    componentWillReceiveProps() {
        
    }
    handleChange(){
    	console.log("我再点击按钮");
    	this.props.changeman();
    }
    
  render() {
  	console.log("渲染次数");
  	
  	let name=this.props.name;
  	let age=this.props.age;
    return (
      <div>
        <div>
           <h3>this is son page!</h3>
           <p>my name is {name},i am {age} old!</p>
           <button onClick={this.handleChange}>anniu</button>
        </div>
      </div>
    );
  }
}

export default SonPage;