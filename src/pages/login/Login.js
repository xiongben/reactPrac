import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import styles from "./Login.less";
import Toast from "./../../component/Toast";
import Api from "./../../utils/fetch";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            pass:null,
            warnText:null,
        }
        
         
    }
    componentDidMount() {
       this.testpost();
    }
    // handleClick = (data,e) => {
    //     this.child.changeShowStatus();
    //     this.setState({
    //         detailData:data
    //     });
    // }
    getData = () => {
        var params = { userId: this.state.userId, ownedBadgeWall:false, uid:this.state.userId};
        var reqUrl = "/reward/badges/get-summary";
        Api.get(reqUrl,params).then(res => {
            this.setState({dataArr:res.onGoing});
        })
        
    }
    testpost = () => {
        var params = {username:"波风水门",password:123456};
        Api.post("/login/adduser",params).then(res => {
            console.log(res);
        })
    }
    
    onRef = (ref) => {
        this.toast = ref;
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
        if(name == null || pass == null){
            this.toast.changeShowStatus("can not be null!");
        }else{
            // let params = {name,pass};
            let params = {id:1};
            var res = this.props.loginSubmit(params);
        }
    }
    
    render() {
        var arrlist = this.state.dataArr;
        var detail = this.state.detailData;
        var testnum = this.props.testnum;
        var text = this.props.text;
        // console.log(this.props);
        var {increment,decrement,incrementAsync} = this.props;
        var warnText = "ddddddd";
        return (
            <div className={styles.loginBox}>
                <p className={styles.loginTitle}>登录</p>
                <input type="text" className={styles.userAdmin} onChange={(e)=>{this.set(e)}} name="name" placeholder="输入用户名"/>
                <input type="text" className={styles.userAdmin} onChange={(e)=>{this.set(e)}} name="pass" placeholder="输入密码"/>
                <p className={styles.warnText}>格式为数字加字母</p>
                <button className={styles.submitBtn} onClick={this.submit}>确定</button>
                <Toast text={warnText} onref={this.onRef}/>
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