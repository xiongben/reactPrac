import React, { Component } from 'react';
import "./Pop.less";
import Api from "./../../utils/fetch"


export default class Pop extends Component {
    constructor(props){
       super(props);
       this.props.onref(this);
       this.state = {
           show:false
       }
    }
    componentDidMount(){
    //    this.getListData();
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
        // console.log("id: "+this.props.detail.id)
       this.getListData(nextProps.detail.id);
    }
    getListData = (id) => {
        var paramsid = id?id:1;
        Api.get("/award/detail",{id:paramsid}).then((res)=>{
            console.log(res.resData.data.id);
        })
    }
    changeShowStatus = () => {
        this.setState({
            show: true
        })
    }
    changeHideStatus = () => {
        this.setState({
            show: false
        })
    }
    render(){
        var itemId = this.props.detail.id;
        var showAttr = this.state.show? "block":"none";
        return (
            <div className="popbox" style={{display:showAttr}}>
                <p>pop detail</p>
                <p>id: {itemId}</p>
                <button className="btn" onClick={this.changeHideStatus}>hide</button>
                <p>=========</p>
                <button className="btn">action</button>
            </div>
        )
    }
}