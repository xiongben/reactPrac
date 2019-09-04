import React, { Component } from 'react';
import styles from "./Home.module.less";
import {NavBar, Icon,Pagination} from 'antd-mobile';

import './../../component/homeHeader/HomeHeader';
import HomeHeader from './../../component/homeHeader/HomeHeader';
import KeywordArea from './../../component/keywordArea/KeywordArea';
import VideoItemBig from './../../component/videoItem/VideoItemBig';


const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }

    render(){
        return(
            <div className={styles.homePage}>
               <HomeHeader/>
               <KeywordArea/>
               <div className={styles.videolist}>
                  <VideoItemBig/>
                  <VideoItemBig/>
               </div>
               <div className={styles.footer}>
                  <Pagination total={5} current={1} locale={locale} />
               </div>
            </div>
        )
    }
}