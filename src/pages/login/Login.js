import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import "./Login.less";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            pass:null,
        }
        
         
    }
    componentDidMount() {
       
    }
    handleClick = (data,e) => {
        this.child.changeShowStatus();
        this.setState({
            detailData:data
        });
    }
    getData = () => {
        var params = { userId: this.state.userId, ownedBadgeWall:false, uid:this.state.userId};
        var reqUrl = "/reward/badges/get-summary";
        Api.get(reqUrl,params).then(res => {
            this.setState({dataArr:res.onGoing});
        })
        
    }
    testpost = () => {
        var params = {id:123,name:"xxxbbbb"};
        Api.post("/xx/xx",params).then(res => {
            console.log(res);
        })
    }
    
    onRef = (ref) => {
        this.child = ref;
    }
    set = (e) => {
        let {name,value} = e.target;
        this.setState({
           [`${name}`] : value
        })
    }
    submit = () => {
        // this.props.history.push('/badge');
        let {name,pass} = this.state;
        
        let params = {name,pass};
        var res = this.props.loginSubmit(params);
        console.log(res);
    }
    
    render() {
        var arrlist = this.state.dataArr;
        var detail = this.state.detailData;
        var testnum = this.props.testnum;
        var text = this.props.text;
        // console.log(this.props);
        var {increment,decrement,incrementAsync} = this.props;
        return (
            <div className="loginBox">
                <p className="loginTitle">登录</p>
                <input type="text" className="userAdmin" onChange={(e)=>{this.set(e)}} name="name" placeholder="输入用户名"/>
                <input type="text" className="userAdmin" onChange={(e)=>{this.set(e)}} name="pass" placeholder="输入密码"/>
                <p className="warnText">格式为数字加字母</p>
                <button className="submitBtn" onClick={this.submit}>确定</button>
            </div>
            )
        }
}

function mapStateToProps(state){
    const {testnum,text} = state;
	return {
        testnum,text
	};
}; 


function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
};


export default  connect(mapStateToProps,mapDispatchToProps)(Login);        