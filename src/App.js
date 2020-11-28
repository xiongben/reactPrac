import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link, Redirect} from "react-router-dom";

// import 'video-react/dist/video-react.css';


import {history} from './utils/history';

import asyncComponent from './component/AsyncComponent';
import ModeModel from "./pages/modelDemo/example1";

const Badge = asyncComponent(() => import("./pages/badge/Badge"));
const Award = asyncComponent(() => import("./pages/award/Award"));
const Login = asyncComponent(() => import("./pages/login/Login"));
const WechatList = asyncComponent(() => import("./pages/wechat/UserList"));
const VideoDetail = asyncComponent(() => import("./pages/videoDetail/VideoDetail"));
const Home = asyncComponent(() => import("./pages/home/Home"));
const MyPage = asyncComponent(() => import("./pages/mypage/MyPage"));
const VideoList = asyncComponent(() => import("./pages/videolist/VideoList"));

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };


  render() {
    return (
      <Router history={history}>
        <div>
         <Route exact path="/"  component={ModeModel} />
          <Route  path="/badge" component={Badge} />
          <Route  path="/award" component={Award} />
          <Route  path="/login" component={Login} />
          <Route  path="/wechatlist" component={WechatList} />
          <Route  path="/videoDetail" component={VideoDetail} />
          <Route  path="/home" component={Home} />
          <Route  path="/mypage" component={MyPage} />
          <Route  path="/videolist" component={VideoList}/>
          </div>
      </Router>
    );
  }
}

export default App;
