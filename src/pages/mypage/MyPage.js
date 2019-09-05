import React, { Component } from 'react';
import styles from "./MyPage.module.less";
import { Badge, NavBar, Icon } from 'antd-mobile';
import classNames from 'classnames';

export default class MyPage extends Component {
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

    infoItem = (data,index) => {
        var imgUrl = "./../../static/icon/" + data.iconName
        return(
            <div className={styles.infoItem} key={index}>
                <img alt="icon" className={styles.itemIcon} src={require(imgUrl)}/>
                <div className={styles.itemText}>{data.text}</div>
            </div>
        )
    }

    
    render(){
        
        return(
            <div className={styles.mypagebox}>
                <NavBar
                className={styles.header}
                mode="light"
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
                        <img alt="icon" className={styles.itemIcon} src={require('./../../static/icon/icon_certificate_fil.png')}/>
                        <div className={styles.itemText}>mo ha mo de.ss</div>
                    </div>
                </div>
            </div>
        )
    }
}