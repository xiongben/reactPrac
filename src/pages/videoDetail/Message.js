import React, { Component } from 'react';
import styles from "./Message.module.less";
import { Button} from 'antd-mobile';

export default class Message extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1
        }
    }

    render(){
        return(
            <div className={styles.messagebox}>
               
            </div>
        )
    }
}