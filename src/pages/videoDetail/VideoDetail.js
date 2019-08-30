import React, { Component } from 'react';
import styles from "./VideoDetail.module.less";
import { Button } from 'antd-mobile';
import {Player, BigPlayButton,ControlBar, PlayToggle} from 'video-react';
import './../../component/homeHeader/HomeHeader';
import HomeHeader from './../../component/homeHeader/HomeHeader';


export default class VideoDetail extends Component {
    constructor(props){
       super(props);
       this.videoId=null;
       this.player=null;
       this.state={
        videoUrl : "https://cdn.moji.com/websrc/video/summer20190515.mp4",
       };
    }
    componentDidMount(){
        // this.props.onref(this,this.props.videoId);
    }
    componentDidUpdate(){

    }
    handleStateChange(state, prevState) {
        // copy player state to this component's state
        if(state.paused !== prevState.paused ){
            console.log("=================")
            console.log(state);
            console.log(prevState);
            console.log("=================")
        }
    }
    stopPlay(){
        this.player.pause();
    }
    render(){
        var videourl = this.state.videoUrl;
        return(
            <div className={styles.box}>
                <HomeHeader/>
                <Player src={videourl} autoPlay={false}  aspectRatio="16:9" ref={player => {this.player=player}} >
                    <ControlBar autoHide={true} >
                        <PlayToggle />
                    </ControlBar>
                    <BigPlayButton position="center"/>
                </Player>
            </div>
        )
    }
}
