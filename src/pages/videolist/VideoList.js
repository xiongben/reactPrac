import React, { Component } from 'react';
import styles from "./VideoList.module.less";
import { NavBar, Icon } from 'antd-mobile';
import classNames from 'classnames';
import VideoItem from './../../component/videoItem/VideoItem';
import {history} from './../../utils/history';


export default class VideoList extends Component {
    constructor(props){
        super(props);
        this.state={
            keyArr: ["eeee","ffff","tttt","dfe gg", "my name is","hahaha", "8888", "fgfg gg", "opop"]
        }
    }

    componentDidMount(){
        console.log(history);
    }

    componentWillReceiveProps(){
       console.log("888888")
    }

    onchange = (select,index) => {
        console.log(select,index);
    }

   

    
    render(){
        
         
        return(
            <div className={styles.listpage}>
               <NavBar
                mode="dark"
                className={styles.header}
                icon={<Icon type="left" />}
                onLeftClick={() => history.goBack()}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >My Collections</NavBar>
                <div className={styles.headerArea}></div>
                <div className={styles.videolist}>
                  <div className={styles.videoItemArea}>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                  </div>
                </div>
            </div>
        )
    }
}