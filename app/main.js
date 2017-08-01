import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Else from './src/else/else';
import Main from './src/index/index2';
import Login from './src/login/login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './main.css';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>

      </div>
    )
  }
});

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/main">main</Link></li>
        <li><Link to="/else">elsepage</Link></li>
        <li><Link to="/login">logionpage</Link></li>
      </ul>

      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/main" component={Main}/>
      <Route path="/else" component={Else}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)


//
// var Else=require.ensure([], () => {
//       var Profile = require('./src/else/else');
//       return Profile;
//     });
//     var Main=require.ensure([], () => {
//           var Profile = require('./src/index/index2');
//           return Profile;
//         });
//         var Login=require.ensure([], () => {
//               var Profile = require('./src/login/login');
//               return Profile;
//             });
render(<BasicExample />, document.getElementById('root'));
// class App extends Component {
//   constructor() {
//     this.state = { currentComponent: Greeter };
//   }
//   openProfile() {
//     require.ensure([], () => {
//       var Profile = require('./src/index/index2');
//       this.setState({
//         currentComponent: Profile
//       });
//     });
//   }
//   render() {
//       return <div>{this.state.currentComponent()}</div>
//   }
// };
// render(<App/>,document.getElementById('root'));
