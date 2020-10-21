import React, { Component } from 'react';
import styles from "./MyPage.module.less";
import { Badge, NavBar, Icon } from 'antd-mobile';
import classNames from 'classnames';
import {history} from './../../utils/history';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"

class MyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            keyArr: [
               {iconName: "icon_principal.png", text: "mohamode.dd"},
               {iconName: "icon_safety_fill.png", text: "Policy"},
               {iconName: "money.png", text: "VIP Membership"},
               {iconName: "icon_file.png", text: "Your File"},
               {iconName: "icon_dmail.png", text: "Email Us"},
               {iconName: "icon_service.png", text: "Connect Us"},
            ],
        }
    }

    componentWillReceiveProps(){
       console.log("888888")
    }

    onchange = (select,index) => {
        console.log(select,index);
    }

    toOtherPage = (pagename) => {
        let data = {id:3,name:'xb',age:27};
        let path = {
            pathname: '/videolist',
            state: data,
        }
        history.push(path);
    }

    changeAccountInfo=()=>{
        console.log("change account info")
    }


    render(){
        var accountInfo = this.props.accountInfo;
        var {changeAccount} = this.props;
        // console.log(this.props)

        return(
            <div className={styles.mypagebox}>
                <NavBar
                className={styles.header}
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" onClick={()=>{this.props.history.push('/home')}}/>,
                ]}
                >My Account</NavBar>
                <div className={styles.headerArea}></div>
                <div className={styles.userInfoArea}>
                    <div className={styles.infoItem}>
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/icon_principal.png')}/>
                        <div className={styles.itemText}>
                            <span>Jack</span>
                            <img alt="vip" src={require('./../../static/icon/vip_01.png')} className={styles.vipicon}/>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/icon_safety_fill.png')}/>
                        <div className={styles.itemText}>Web Policy</div>
                    </div>
                    <div className={styles.infoItem}>
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/money.png')}/>
                        <div className={styles.itemText}>Topup</div>
                    </div>
                    <div className={styles.infoItem} onClick={()=>{this.toOtherPage('collection')}}>
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/icon_file.png')}/>
                        <div className={styles.itemText}>My Collection</div>
                    </div>
                    <div className={styles.infoItem}>
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/icon_dmail.png')}/>
                        <div className={styles.itemText}>Connect Us</div>
                    </div>
                    <div>
                        <p><span>{accountInfo.name} : {accountInfo.age}</span></p>
                    </div>
                    <div>
                        <button onClick={()=>{changeAccount("kakaxi")}}>change account info</button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    const {accountInfo} = state;
    return {
        accountInfo
    };
};


function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
};

export default  connect(mapStateToProps,mapDispatchToProps)(MyPage);
