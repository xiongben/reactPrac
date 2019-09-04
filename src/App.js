import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link} from "react-router-dom";

// import 'video-react/dist/video-react.css';


import {history} from './utils/history';

import asyncComponent from './component/AsyncComponent';

const Badge = asyncComponent(() => import("./pages/badge/Badge"));
const Award = asyncComponent(() => import("./pages/award/Award"));
const Login = asyncComponent(() => import("./pages/login/Login"));
const WechatList = asyncComponent(() => import("./pages/wechat/UserList"));
const VideoDetail = asyncComponent(() => import("./pages/videoDetail/VideoDetail"));
const Home = asyncComponent(() => import("./pages/home/Home"));

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
         <Route exact path="/"  component={Login} />
          <Route  path="/badge" component={Badge} />
          <Route  path="/award" component={Award} />
          <Route  path="/login" component={Login} />
          <Route  path="/wechatlist" component={WechatList} />
          <Route  path="/videoDetail" component={VideoDetail} />
          <Route  path="/home" component={Home} />
          </div>
      </Router>
    );
  }
}

export default App;
