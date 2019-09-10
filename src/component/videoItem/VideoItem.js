import React, { Component } from 'react';
import styles from "./VideoItem.module.less";
import { Button} from 'antd-mobile';
import {history} from './../../utils/history';

export default class VideoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1
        }
    }

    toVideoDetailPage = () => {
       if(history.location.pathname !== "/videoDetail"){
          history.push('/videoDetail');
       }else{
           console.log("hhhhh")
       }
       
    }

    render(){
        return(
            <div className={styles.videoitembox} onClick={()=>{this.toVideoDetailPage()}}>
               <img alt="cover" className={styles.coverimg} src={require('./../../static/aa.png')}/>
               <div className={styles.videoTime}>22:30</div>
               <div className={styles.videoInfoArea}>
                   <div className={styles.videoName}>dgdg dgdgdg dgdgdgdg d</div>
                   <div className={styles.iconArea}>
                     <img alt="cover" className={styles.iconimg} src={require('./../../static/good.png')}/>
                     <div className={styles.infonum}>5555</div>
                     <img alt="cover" className={styles.iconimg} src={require('./../../static/watchicon.png')}/>
                     <div className={styles.infonum}>5555</div>
                   </div>
               </div>
            </div>
        )
    }
}