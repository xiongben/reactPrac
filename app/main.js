import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
// import Counter from './components';
// import counter from './reducers';
import { createStore,combineReducers } from 'redux';

// import Else from './src/else/else';
import Main from './src/index/index2';
// import Calculator from './Greeter';
//import test from './test.ts';
import { HashRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {Provider,connect} from 'react-redux';

import Bundle from './bundle.js';

import * as Duck from './components/duck.js';



let helloMessage = React.createClass({
	render: function() {
		return <h2>{this.props.name}</h2>;
	}
});

import ListContainer from 'bundle-loader?lazy&name=app-[name]!./src/login/login.js';
import ElseContainer from 'bundle-loader?lazy&name=app-[name]!./src/else/else.js';

const List = () => (
	<Bundle load={ListContainer} >
        {(BBB) => <BBB/>}
    </Bundle>
);

const Else = () => (
	<Bundle load={ElseContainer}>
        {(BBB) => <BBB/>}
        </Bundle>
);

class Init extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentWillMount() {
		console.log('路由加载完毕！')
	}
	render() {
		return(
			<HashRouter>
                <Router basename="/">
                    <div>
                             <ul>
					           <li><Link to="/">index</Link></li>
					           <li><Link to="/login">logionpage</Link></li>
					           <li><Link to={{
					           	pathname:'/else',
					           	search: '?sort=name',
                                state: { price: 18 }
					           }}>elsepage</Link></li>
					         </ul>
                        <Route exact path="/" component={Main} />
                        <Route path="/login" component={List} />
                        <Route path="/else" component={Else} />
                    </div>
                </Router>
            </HashRouter>
		)
	}
	componentDidMount() {}
}

// render(<Init/>, document.getElementById('root'));




//redux练习
class Counter extends React.Component{
	render(){
		const {value,onIncreaseClick,num,onNumClick,ducknum,onDuckClick} = this.props;
		console.log(this.props);
		return (
			<div>
				<span>{value}</span>
				<p>{num}</p>
				<h2>{ducknum}</h2>
				<button onClick={onIncreaseClick}>按钮</button>
				<button onClick={onNumClick}>num按钮</button>
				<button onClick={onDuckClick}>鸭子按钮</button>
				<List/>
			</div>
		)
	}
}


const increaseAction={type:'increase'};
const numAction={type:'addnum'};
const duckAction=Duck.actions.loadduck();



function counter(state={count:0,num:100},action){
	const count=state.count;
	const num=state.num;
	switch (action.type){
		case 'increase':
		//  return {count:count+1,num:num}
		return Object.assign({}, state, {count:count+1});
		 case 'addnum':
		 return Object.assign({}, state, {num:num+5});
		default:
		return state
	}
}

//reduces进行合并，引入duck模式
// console.log(Duck);
let ducker=Duck.default;

const rootReducer = combineReducers({
	counter:counter,
	ducker:ducker
	
});


const store=createStore(rootReducer);
var ss=store.getState();
console.log(ss);



function mapStateToProps(state){
	return {
		value:state.counter.count,
		num:state.counter.num,
		ducknum:state.ducker.ducknum
	}
}

function mapDispatchToProps(dispatch){
	return {
	   onIncreaseClick:()=>dispatch(increaseAction),
	   onNumClick:()=>dispatch(numAction),
	   onDuckClick:()=>dispatch(duckAction),
	}
}

const App=connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

render(
<Provider store={store}>
<App/>
</Provider>,
 document.getElementById('root'));