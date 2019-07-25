import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "./../actions/index"
import styles from "./Toast.less";


class Toast extends Component {
    constructor(props) {
        super(props);
        this.props.onref(this);
        this.state = {
            show: false,
            text: null,
        }
    }
    componentDidMount() {
       
    }
    handleClick = (data,e) => {
        this.setState({
            show:false,
        })
    }
    changeShowStatus = (text) => {
        this.setState({show:true,text:text});
    }
    render() {
        var showAttr = this.state.show? "block":"none";
        var warnText = this.state.text;
        return (
            <div className={styles.toastBox} style={{display:showAttr}}>
                <p className={styles.warnTitle}>warn</p>
                <p className={styles.warnText}>{warnText}</p>
                <button className={styles.closebtn} onClick={this.handleClick}>确定</button>
            </div>
            )
        }
}

function mapStateToProps(state){
    // const {testnum,text} = state;
	return {
       
	};
}; 


function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
};


export default  connect(mapStateToProps,mapDispatchToProps)(Toast);        