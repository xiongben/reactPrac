import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';

import ButtonPanel from "./component/ButtonPanel";
import Display from "./component/Display";
import calculate from "./logic/calculate"

import routeConfig from "./Routers";
import 'video-react/dist/video-react.css';


import {history} from './utils/history';

import asyncComponent from './component/AsyncComponent';
const Home = asyncComponent(() => import("./component/Home"));
const Badge = asyncComponent(() => import("./pages/badge/Badge"));
const Award = asyncComponent(() => import("./pages/award/Award"));
const Login = asyncComponent(() => import("./pages/login/Login"));
const WechatList = asyncComponent(() => import("./pages/wechat/UserList"));

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <Router history={history}>
        <div>
         <Route exact path="/"  component={Home} />
          <Route  path="/badge" component={Badge} />
          <Route  path="/award" component={Award} />
          <Route  path="/login" component={Login} />
          <Route  path="/wechatlist" component={WechatList} />
          </div>
      </Router>
    );
  }
}

export default App;
