import React, { Component } from 'react';
import styles from "./VideoDetail.module.less";
import { Button, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {Player, BigPlayButton,ControlBar, PlayToggle} from 'video-react';
import './../../component/homeHeader/HomeHeader';
import HomeHeader from './../../component/homeHeader/HomeHeader';
import KeywordArea from './../../component/keywordArea/KeywordArea';
import VideoItem from './../../component/videoItem/VideoItem';

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
  ];
  
const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
  ];

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
                <KeywordArea/>
                <Player src={videourl} autoPlay={false}  aspectRatio="16:9" ref={player => {this.player=player}} >
                    <ControlBar autoHide={true} >
                        <PlayToggle />
                    </ControlBar>
                    <BigPlayButton position="center"/>
                </Player>
                <div className={styles.infoDetail}>
                    <div className={styles.videoName}>The classNames function takes any number of arguments which can</div>
                    <div className={styles.iconArea}>
                        <div className={styles.iconli}>
                            <img src={require('./../../static/watchicon.png')} alt="icon"/>
                            <div>666</div>
                        </div>
                        <div className={styles.iconli}>
                            <img src={require('./../../static/good.png')} alt="icon"/>
                            <div>666</div>
                        </div>
                        <div className={styles.iconli}>
                            <img src={require('./../../static/nogood.png')} alt="icon"/>
                            <div>666</div>
                        </div>
                        <div className={styles.iconli}>
                            <img src={require('./../../static/addicon.png')} alt="icon"/>
                            <div>666</div>
                        </div>
                    </div>
                    <div className={styles.chatBox}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div className={styles.tabItem}>
                            <div className={styles.videoItemArea}>
                               <VideoItem/>
                               <VideoItem/>
                               <VideoItem/>
                               <VideoItem/>
                               <VideoItem/>
                            </div>
                        </div>
                        <div className={styles.tabItem}>
                            Content of second tab
                        </div>
                        <div className={styles.tabItem}>
                            Content of third tab
                        </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
