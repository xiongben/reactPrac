import React, { Component } from 'react';
import styles from "./Award.module.less";
import fetch from 'isomorphic-fetch'
import Api from "./../../utils/fetch"
import Pop from "./Pop"
import {Player, BigPlayButton,ControlBar, PlayToggle} from 'video-react'
import Display from '../../component/Display';
import { Menu, ActivityIndicator, NavBar} from 'antd-mobile';
import VideoComponent from './VideoComponent';


const data = [
    {
      value: '1',
      label: 'Food',
    }, {
      value: '2',
      label: 'Supermarket',
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
    },
  ];

export default class Award extends Component {
    constructor(props){
       super(props);
       this.myRef = React.createRef();
       this.player=null;
       this.state = {
           listData:[],
           detail:{},
           initData: '',
           show: false,
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
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
          if (dataItem.value === value[0]) {
            label = dataItem.label;
            if (dataItem.children && value[1]) {
              dataItem.children.forEach((cItem) => {
                if (cItem.value === value[1]) {
                  label += ` ${cItem.label}`;
                }
              });
            }
          }
        });
        console.log(label);
      }
      handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
          show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
          setTimeout(() => {
            this.setState({
              initData: data,
            });
          }, 500);
        }
      }
    
      onMaskClick = () => {
        this.setState({
          show: false,
        });
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
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
              className="single-foo-menu"
              data={initData}
              value={['1']}
              level={1}
              onChange={this.onChange}
              height={document.documentElement.clientHeight * 0.6}
            />
          );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </div>
          );
        return (
            <div>
               <div className={show ? 'single-menu-active' : ''}>
                    <div>
                    <NavBar
                        leftContent="Menu"
                        mode="light"
                        onLeftClick={this.handleClick}
                        className="single-top-nav-bar"
                    >
                        OneLevel menu
                    </NavBar>
                    </div>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>
                <div className={styles.videolist}>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                    <VideoComponent></VideoComponent>
                </div>
            </div>
        )
    }
}