import React, {Component} from 'react'
import SonPage from '../../components/sonPage';


class Else extends Component{
	  constructor(props){
	    super(props);
	    this.state={
	    	name:"xiaoming",
	    	age:18
	    };
	    this.changeman=this.changeman.bind(this);
	    this.handlechangeName=this.handlechangeName.bind(this);
	  }

    componentWillMount() {
    	
    }

    componentWillReceiveProps() {
        
    }
    changeman(){
    	this.setState({
    		name:"xiaohao",
    		age:22
    	});
    }
    handlechangeName(){
    	this.setState({
    		name:"卡卡西"
    	})
    }
  render() {
//	let res=this.props.location;
//     console.log(res);
    console.log(this.props.ka);
    return (
      <div>
        <div>
           <h1>this is else page!</h1>
           <SonPage name={this.state.name} age={this.state.age} changeman={this.changeman}/>
           <button onClick={this.handlechangeName}>父元素按钮</button>
        </div>
      </div>
    );
  }
}

export default Else;