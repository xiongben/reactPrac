import React, { Component } from 'react';
import styles from "./Award.less";
import fetch from 'isomorphic-fetch'
import Api from "./../../utils/fetch"
import Pop from "./Pop"
import {Player, BigPlayButton,ControlBar, PlayToggle} from 'video-react'
import Display from '../../component/Display';






export default class Award extends Component {
    constructor(props){
       super(props);
       this.myRef = React.createRef();
       this.player=null;
       this.state = {
           listData:[],
           detail:{},
           videoUrl : "https://cdn.moji.com/websrc/video/summer20190515.mp4",
       }
    }
    componentDidMount(){
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    //    this.getListData();
    // this.test();
    }
    handleStateChange(state, prevState) {
        // copy player state to this component's state
        if(state.paused !== prevState.paused){
            console.log("=================")
            console.log(state);
            console.log(prevState);
            console.log("=================")
        }
    }
    getListData = () => {
        Api.get("/award/list",{userid:123,long:10}).then((res)=>{
            this.setState({listData:res.data})
        })
    }
    showPop = (child) => {
        this.child = child;
    }
    popup = (id,e) => {
        this.child.changeShowStatus();
        this.setState({detail:{id:id}});
    }
    test = () => {
        setInterval(() => {
            var scrollTopNum = this.myRef.current.scrollTop;
            var scrollHeightNum = this.myRef.current.scrollHeight;
            console.log("scrollTop==========",scrollTopNum);
            console.log("scrollHeight==========",scrollHeightNum);
        }, 3000);
    }
    // getItem = (data) => {
    //     return (
    //         <div className="item" key={data.id} onClick={(e) => this.popup(data.id,e)}>
    //             <p>{data.name}</p>
    //             <p>this is {data.num} li!</p>
    //             <p>青春奋斗的日子，触摸理想的岁月</p>
    //         </div>
    //     )
    // }
    render(){
        var listData = this.state.listData;
        var detailData = this.state.detail;
        var videourl = this.state.videoUrl;
        return (
            <div className={styles.box} ref={this.myRef}>
                <Player src={videourl} autoPlay={false} className={styles.videobox} aspectRatio="16:9" ref={player => {this.player=player}}>
                    <ControlBar autoHide={true} >
                        <PlayToggle />
                    </ControlBar>
                    <BigPlayButton position="center"/>
                </Player>
            </div>
        )
    }
}