import React, { Component } from 'react';
import styles from "./VideoItemBig.module.less";
import { Button} from 'antd-mobile';
import {history} from './../../utils/history';

export default class VideoItemBig extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
        }
    }

    componentDidMount(){
        
    }

    toDetailPage = () => {
        history.push('/videoDetail');
    }

    render(){
        return(
            <div className={styles.videoitembox} onClick={this.toDetailPage}>
               <img alt="cover" className={styles.coverimg} src={require('./../../static/aa.png')}/>
               <div className={styles.videoTime}>22:30</div>
               <div className={styles.videoInfoArea}>
                   <div className={styles.videoName} style={{"WebkitBoxOrient": "vertical"}}>dgdg dgdgdg dgdgdgdg d dgdg dgdgdg dgdgdgdg d dgdgg dgdgdg dgdgdgdg d dgdg dgdgdg dgdgdgdg ddgdg dgdgdg dgdgdgdg ddgdg dgdgdg dgdgdgdg d</div>
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