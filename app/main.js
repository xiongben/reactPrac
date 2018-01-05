import "babel-polyfill";


   import React from 'react';
   import {render} from 'react-dom';
   import Calculator from './Greeter';
   import Counter from './components';
   import counter from './reducers';
   import {createStore} from 'redux';
   
   
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render2 = () => render(
  <div>
  <Calculator/>
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
  
  </div>,
  rootEl
)

render2()
store.subscribe(render2)
   
   
// import Else from './src/else/else';
// import Main from './src/index/index2';
// import Login from './src/login/login';
// import test from './test.ts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
// import './main.css';
//
// let testcss={
//   background:'red',
//   color:'yellow',
//   fontSize:'28px'
// };
//
//
//
// let helloMessage=React.createClass({
//   render:function(){
//     return <h2>{this.props.name}</h2>;
//   }
// });
//
// const App = React.createClass({
//   render() {
//     var text=this.state.liked?"喜欢":"不喜欢";
//     return (
//       <div>
//         <h1 style={testcss}>{this.props.title}</h1>
//         <a href={this.props.url}>{this.props.desc}</a>
//         <helloMessage name={this.props.title}/>
//         <p>--------------------------------我是分割线-----------------------</p>
//         <a onClick={this.testClick}>点击我会改变喜欢的状态：{text}</a>
//       </div>
//     )
//   },
//   testClick(){
//     this.setState({liked:!this.state.liked});
//   },
//   getInitialState(){
//     return {liked:false};
//   },
//   getDefaultProps(){
//     return {
//       title:"我是新的标ddddddd题党啊",
//       desc:"我是新的描述啊",
//        url:"http://www.runoob.com"
//     }
//   }
// });
//
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">index</Link></li>
//         <li><Link to="/main">main</Link></li>
//         <li><Link to="/else">elsepage</Link></li>
//         <li><Link to="/login">logionpage</Link></li>
//       </ul>
//
//       <hr/>
//       <Route exact path="/" component={App}/>
//       <Route path="/main" component={Main}/>
//       <Route path="/else" component={Else}/>
//       <Route path="/login" component={Login}/>
//     </div>
//   </Router>
// )
// render(<BasicExample/>, document.getElementById('root'));
   
   
   
   
// render(<Calculator/>, document.getElementById('root'));

