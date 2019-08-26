import React, { Component } from 'react';
import styles from "./Award.less";
import fetch from 'isomorphic-fetch'
import Api from "./../../utils/fetch"
import Pop from "./Pop"
import {Player, BigPlayButton,ControlBar} from 'video-react'






export default class Award extends Component {
    constructor(props){
       super(props);
       this.myRef = React.createRef();
       this.state = {
           listData:[],
           detail:{},
           videoUrl : "https://r3---sn-npoeenez.googlevideo.com/videoplayback?expire=1566822519&ei=F3xjXc2pHoSm3LUPzJS1wAk&ip=115.42.147.138&id=o-AB0KVfTL-VeXXHmFUDyRvszWiJLpwaMTEXuLEm4WzGnz&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-npoeenez%2Csn-npoe7nes&ms=au%2Crdu&mv=m&mvi=2&pl=26&initcwndbps=865000&mime=video%2Fmp4&gir=yes&clen=14783443&ratebypass=yes&dur=245.388&lmt=1555293898605669&mt=1566800802&fvip=3&c=MWEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgdwE_fmaDJxdrZDo05k0NDcPEq-u48lHnjeiRM49nKAUCIQCr8tbqNuRMs_HcKbCl8tymajSskMatqB1h2V1WWqDmJQ%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhALAneJp3fOrTPEszb3fyFSl6NL76zyk4hvypfDI_eT5IAiEAgNPXpzhKikfbHqhaTfAE6T3Q-T-MbWT48z8HRK9hwHg%3D&cpn=BNeltgxNHFFBfSil&cver=2.20190822.03.01&ptk=youtube_none&pltype=contentugc",
       }
    }
    componentDidMount(){
    //    this.getListData();
    // this.test();
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
                <Player src={videourl} autoPlay={false} className={styles.videobox} aspectRatio="16:9">
                    {/* <ControlBar autoHide={true}></ControlBar> */}
                    <BigPlayButton position="center"/>
                </Player>
            </div>
        )
    }
}