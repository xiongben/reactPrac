import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import styles from "./Login.module.less";
import { Flex, InputItem, List,WhiteSpace } from 'antd-mobile';

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
    //    this.testpost();
    }
   
    getData = () => {
        var params = { userId: this.state.userId, ownedBadgeWall:false, uid:this.state.userId};
        var reqUrl = "/reward/badges/get-summary";
        Api.get(reqUrl,params).then(res => {
            this.setState({dataArr:res.onGoing});
        })
        console.log("test");
        
    }
    testpost = () => {
        var params = {username:"波风水门",password:123456};
        Api.post("/login/adduser",params).then(res => {
            console.log(res);
        })
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    
    render() {
        var {increment,decrement,incrementAsync} = this.props;
        return (
            <div className={styles.loginpage}>
               <Flex>
                <List renderHeader={() => 'Register Acount'} className={styles.regisList}>
                        
                        <InputItem
                            type="email"
                            placeholder=""
                        >Email</InputItem>
                        <InputItem
                            type="password"
                            placeholder=""
                        >Password</InputItem>
                        <InputItem
                            type="password"
                            placeholder=""
                        >Password Again</InputItem>
                    </List>
                    <WhiteSpace />
               </Flex>
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