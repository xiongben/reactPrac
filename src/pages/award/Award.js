import React, { Component } from 'react';
import "./Award.less";
import fetch from 'isomorphic-fetch'
import Api from "./../../utils/fetch"
import Pop from "./Pop"





export default class Award extends Component {
    constructor(props){
       super(props);
       this.state = {
           listData:[],
           detail:{}
       }
    }
    componentDidMount(){
       this.getListData();
    }
    
    getListData = () => {
        Api.get("/award/list",{userid:123,long:10}).then((res)=>{
            this.setState({listData:res.data})
        })
    }
    showPop = (child) => {
        this.child = child;
    }
    popup = (id,e) => {
        this.child.changeShowStatus();
        this.setState({detail:{id:id}});
    }
    getItem = (data) => {
        return (
            <div className="item" key={data.id} onClick={(e) => this.popup(data.id,e)}>
                <p>{data.name}</p>
                <p>this is {data.num} li!</p>
                <p>青春奋斗的日子，触摸理想的岁月</p>
            </div>
        )
    }
    render(){
        var listData = this.state.listData;
        var detailData = this.state.detail;
        return (
            <div>
                <h2>award List</h2>
                <div className="list">
                   {listData.map((item) => this.getItem(item))}
                </div>
                <Pop onref={this.showPop} detail={detailData}></Pop>
            </div>
        )
    }
}