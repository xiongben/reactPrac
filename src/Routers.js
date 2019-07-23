import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from "react-router-dom";
import asyncComponent from './component/AsyncComponent';
const Home = asyncComponent(() => import("./component/Home"));
// import Home from "./component/Home";

const Badge = asyncComponent(() => import("./pages/badge/Badge"));
const Award = asyncComponent(() => import("./pages/award/Award"));


class ModalSwitch extends React.Component {
    previousLocation = this.props.location;
    componentWillUpdate(nextProps) {
        let {location} = this.props;
        if(nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
            this.previousLocation = this.props.location;
        }
    }
}


function BasicExample() {
    return (
      <Router>
        <div>
          <ul className="banner">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <NavLink to="/topics" activeClassName="activerouter">topics</NavLink>
            </li>
            <li>
              <Link to={{pathname: "/badge"}}>Badge</Link>
            </li>
            <li>
              <Link to={{pathname: "/award"}}>Award</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home} />
          <Route  path="/topics" component={Topics} />
          <Route  path="/badge" component={Badge} />
          <Route  path="/award" component={Award} />
        </div>
      </Router>
    )
  }
  
  // function Home() {
  //   return (
  //     <div>
  //       <h2>home</h2>
  //     </div>
  //   )
  // }
  
  // function About({location, match, history}) {
  //   console.log("match:",match);
  //   console.log("========");
  //   console.log("history:",history);
  //   let params = new URLSearchParams(location.search);
  //   console.log(params.get("id"));
  //   return (
  //     <div>
  //       <h2>about</h2>
  //     </div>
  //   )
  // }
  
  function Topics({match}) {
    console.log(match);
    return (
      <div>
        <h2>topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rending`}>rending</Link>
          </li>
          <li>
            <Link to={`${match.url}/component`}>compent</Link>
          </li>
          <li>
            <Link to={`${match.url}/propspage`}>propspage</Link>
          </li>
          {/* <Redirect to="/about" /> */}
        </ul>
        <hr/>
        <Route path={`${match.path}/:topicId`} component={Topic}></Route>
        <Route exact path={match.path} render={()=> <h3>Please select a topic</h3>}></Route>
      </div>
    )
  }
  
  function Topic({match}) {
    console.log("=========",match)
    return (
      <div>
        <h3>{match.params.topicId},hi</h3>
      </div>
    );
  }

  export default BasicExample;