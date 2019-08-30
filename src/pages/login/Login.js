import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import styles from "./Login.module.less";
import langText from "./../../utils/langText";
import { Flex, InputItem, List,WhiteSpace } from 'antd-mobile';

import Api from "./../../utils/fetch";
class Login extends Component {
    constructor(props) {
        super(props);
        this.lang="en";
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
        var lang = this.lang;
        var {increment,decrement,incrementAsync} = this.props;
        return (
            <div className={styles.loginBox}>
                <div className={styles.loginBack}></div>
                <div className={styles.loginpage} style={{display:'none'}}>
                    <div className={styles.loginTitle}>{langText.loginPage[lang].loginTitle}</div>
                    <p className={styles.loginRemaind}>{langText.loginPage[lang].loginWarn}</p>
                    <input type="email" className={styles.inputbox} placeholder={langText.loginPage[lang].loginEmail}/>
                    <input type="password" className={styles.inputbox} placeholder={langText.loginPage[lang].loginPass}/>
                    <button className={styles.submitBtn}>{langText.loginPage[lang].loginBtnText}</button>
                    <p className={styles.forgotText}>{langText.loginPage[lang].forgetText}</p>
                </div>
                <div className={styles.loginpage}>
                    <div className={styles.loginTitle}>{langText.loginPage[lang].signUpTitle}</div>
                    <p className={styles.loginRemaind}>{langText.loginPage[lang].signUpRemaind}</p>
                    <input type="email" className={styles.inputbox} placeholder={langText.loginPage[lang].loginEmail}/>
                    <input type="text" className={styles.inputbox} placeholder={langText.loginPage[lang].userName}/>
                    <input type="password" className={styles.inputbox} placeholder={langText.loginPage[lang].loginPass}/>
                    <button className={styles.submitBtn}>{langText.loginPage[lang].signUp}</button>
                    <p className={styles.forgotText}>{langText.loginPage[lang].signUpWarn}</p>
                </div>
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