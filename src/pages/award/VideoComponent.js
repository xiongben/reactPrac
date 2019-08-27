import React, { Component } from 'react';
import styles from "./VideoComponent.module.less";
import { Button } from 'antd-mobile';
import {Player, BigPlayButton,ControlBar, PlayToggle} from 'video-react';



export default class VideoComponent extends Component {
    constructor(props){
       super(props);
       this.videoId=null;
       this.player=null;
       this.state={
        videoUrl : "https://cdn.moji.com/websrc/video/summer20190515.mp4",
       };
    }
    componentDidMount(){
        this.props.onref(this,this.props.videoId);
        this.videoId = this.props.videoId;
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }
    componentDidUpdate(){

    }
    handleStateChange(state, prevState) {
        // copy player state to this component's state
        if(state.paused !== prevState.paused ){
            if(state.paused === false){
                this.props.statusChange(this.props.videoId);
            }
            
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
                <p>title 8888888888</p>
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


