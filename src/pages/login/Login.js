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
        // console.log(this.props);
        gapi.signin2.render('g-signin2', {
            'scope': 'profile email',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSignIn,
            'onfailure': onFailure,
        });  
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
    signUp = () => {
        this.props.history.push('/videoDetail');
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
                    <button className={styles.submitBtn} onClick={this.signUp}>{langText.loginPage[lang].signUp}</button>
                    <p className={styles.forgotText}>{langText.loginPage[lang].signUpWarn}</p>
                    <div className="g-signin2"  data-theme="dark"></div>
                </div>
            </div>
            )
        }
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

  function onFailure(error) {
    console.log(error);
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