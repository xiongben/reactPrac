import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';

import ButtonPanel from "./component/ButtonPanel";
import Display from "./component/Display";
import calculate from "./logic/calculate"

import BasicExample from "./Routers";

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
      <BasicExample/>
    );
  }
}

export default App;
