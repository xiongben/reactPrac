import React, { Component } from 'react';
import styles from "./MyPage.module.less";
import { Badge, NavBar, Icon } from 'antd-mobile';
import classNames from 'classnames';

export default class MyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            keyArr: ["eeee","ffff","tttt","dfe gg", "my name is","hahaha", "8888", "fgfg gg", "opop"]
        }
    }

    componentWillReceiveProps(){
       console.log("888888")
    }

    onchange = (select,index) => {
        console.log(select,index);
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
            </div>
        )
    }
}