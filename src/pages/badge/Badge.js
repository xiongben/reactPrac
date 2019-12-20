import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import "./Badge.less";
import fetch from 'isomorphic-fetch'
import Api from "./../../utils/fetch"
import About from "./../../component/About"


let Counter = ({value,text, onIncrement, onDecrement, onIncrementAsync})=> (
    <div>
      <h1>{value}</h1>
      <h1>{text}</h1>
      <button onClick={(e) => onIncrement("正在加入",e)}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={(e) => onIncrementAsync("异步加入",e)}>+</button>
    </div>
  )


class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'about page',
            dataArr: [],
            userId: 1589618,
            detailData: {},
            showAbout: false,
        }
        
         
    }
    componentDidMount() {
        // this.getData();
        // this.testpost();
        // let {ACTIONS}=this.props;
		// ACTIONS.get_list();
    }
    handleClick = (data,e) => {
        this.child.changeShowStatus();
        this.setState({
            detailData:data
        });
    }
    getData = () => {
        var params = { userId: this.state.userId, ownedBadgeWall:false, uid:this.state.userId};
        var reqUrl = "/reward/badges/get-summary";
        Api.get(reqUrl,params).then(res => {
            this.setState({dataArr:res.onGoing});
        })
        
    }
    testpost = () => {
        var params = {id:123,name:"xxxbbbb"};
        Api.post("/xx/xx",params).then(res => {
            console.log(res);
        })
    }
    getLi = (dataItem) => {
        return (
            <div className="badgeLi" key={dataItem.badgeId} onClick={(e)=>this.handleClick(dataItem,e)}>
                <img className="badgeIcon" src={dataItem.badgeUrl} alt="pic"/>
                <p className="textDetail">{dataItem.badgeName}</p>
                <p className="otherText">14/3/19</p>
            </div>
        )
    }
    onRef = (ref) => {
        this.child = ref;
    }

    
    render() {
        var arrlist = this.state.dataArr;
        var detail = this.state.detailData;
        var testnum = this.props.testnum;
        var text = this.props.text;
        console.log(this.props);
        var {increment,incrementMax,decrement,incrementAsync} = this.props;
        return (
            <div className="badgePage">
                <div className="badgeArea">
                   <div className="badgeTitle">Achievement</div>
                   <div className="badgeUl" id="achievement">
                       {arrlist.map((item)=>this.getLi(item))}
                   </div>
                </div>
                <About detail={detail} onRefxb={this.onRef}></About>
                <Counter
                value={testnum}
                text={text}
                onIncrement={incrementMax}
                onDecrement={decrement}
                onIncrementAsync={incrementAsync}
                />
            </div>
                )
        }
}

function mapStateToProps(state){
    console.log(state);
    const {testnum,text} = state;
	return {
        testnum,text
	};
}; 


function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
};


export default  connect(mapStateToProps,mapDispatchToProps)(Badge);        