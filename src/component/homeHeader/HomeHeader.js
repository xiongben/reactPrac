import React, { Component } from 'react';
import styles from "./HomeHeader.module.less";
import { Button } from 'antd-mobile';


export default class HomeHeader extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <div className={styles.test}></div>
            </div>
        )
    }
}