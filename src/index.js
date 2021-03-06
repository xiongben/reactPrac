import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import 'video-react/dist/video-react.css';
import './index.css';
import './common.less';
import App from './App';
// import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
// import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reduces/index";

//rx.js

import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import fetchUserEpic from './observable';
import 'rxjs';
// console.log(fetchUserEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootEpic = fetchUserEpic;
const epicMiddleware = createEpicMiddleware(rootEpic);


const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));


//sagas
// const sagaMiddleware = createSagaMiddleware();

// const logger = createLogger();
// const initialState = 10;
let initialState = {
	classList:[],
    wave:[],
    testnum: 100,
    listdata: {},
};

  //sagas
// const middlewares = [sagaMiddleware];

// const enhancer = compose(
//   applyMiddleware.apply(null, middlewares),
//   // window.devToolsExtension ? window.devToolsExtension() : f => f
// );


  const store = createStore(reducer,enhancer);

  //sagas
  // sagaMiddleware.run(rootSaga);

  // epicMiddleware.run(rootEpic)

  const render = () => {ReactDOM.render(
      <Provider store={store}>
          <App></App>
      </Provider>,
      document.getElementById('root')
  )}



  render();
  store.subscribe(render);
  // ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
