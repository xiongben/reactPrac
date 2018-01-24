import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
import Counter from './components';
import counter from './reducers';
import { createStore } from 'redux';

// import Else from './src/else/else';
import Main from './src/index/index2';
// import Calculator from './Greeter';
//import test from './test.ts';
import { HashRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Bundle from './bundle.js';

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

render(<Init/>, document.getElementById('root'));
