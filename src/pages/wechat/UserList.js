import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../../actions/index"
import styles from "./UserList.less";
import Api from "./../../utils/fetch";
import avatar from "./../../static/avatar.jpg";
import Tloader from 'react-touch-loader';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            text: null,
            listData: [],
            canRefreshResolve: 1,
            listLen: 0,
            hasMore: 0,
            initializing: 1,
            refreshedAt: Date.now(),
        }
    }
    componentDidMount() {
    //    this.getListData(this.props.userId);
   
    }
    handleClick = (data,e) => {
        this.setState({
            show:false,
        })
    }
    changeShowStatus = (text) => {
        this.setState({show:true,text:text});
    }
    getListData = (userId) => {
       var params = {userId};
       Api.get("/wechat/list",params).then(res => {
           this.setState({listData:res.data});
       })
    }
    userLi = (data) => {
        return(
            <div className={styles.listLi} key={data.id}>
                <img alt="userpic" src={avatar} className={styles.avatar}/>
                <div className={styles.username}>{data.name}</div>
            </div>
        )
    }
    loadMore = () => {
       
    }
    handleRefresh = (resolve, reject) => {
        
    }
    render() {
        var showAttr = this.state.show? "block":"none";
        var listData = this.state.listData;
       
        // var handleRefresh = null;
        // var hasMore = true;

        return (
            <div className={styles.listbox}>
               <p className={styles.listTitle}>好友列表</p>
               
                
            </div>
            )
        }
}

function mapStateToProps(state){
    const {userId} = state;
	return {
       userId: userId
	};
}; 


function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
};


export default  connect(mapStateToProps,mapDispatchToProps)(UserList);        