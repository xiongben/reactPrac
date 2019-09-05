import React, { Component } from 'react';
import styles from "./KeywordArea.module.less";
import { Tag } from 'antd-mobile';
import classNames from 'classnames';

export default class KeywordArea extends Component {
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

    tagItem= (data,index) => {
        return(
            <Tag  className={styles.tagItem}  key={index} onChange={(value)=>{this.onchange(value,index)}}>
                {data}
            </Tag>
        )
    }

    
    render(){
        var dataArr = this.state.keyArr;
         
        return(
            <div className={styles.keywordbox}>
               {dataArr.map((item,index) => this.tagItem(item,index))}
            </div>
        )
    }
}