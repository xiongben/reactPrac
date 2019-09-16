import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from "./Home.module.less";
import {NavBar, ListView} from 'antd-mobile';

import './../../component/homeHeader/HomeHeader';
import HomeHeader from './../../component/homeHeader/HomeHeader';
import KeywordArea from './../../component/keywordArea/KeywordArea';
import VideoItemBig from './../../component/videoItem/VideoItemBig';


 const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  function MyBody(props) {
    return (
      <div className="am-list-body my-body">
        <span style={{ display: 'none' }}>you can custom body wrap element</span>
        {props.children}
      </div>
    );
  }
  
  const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_SECTIONS = 1;
  const NUM_ROWS_PER_SECTION = 5;
  let pageIndex = 0;
  
  const dataBlobs = {};
  let sectionIDs = [];
  let rowIDs = [];
  function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
      const ii = (pIndex * NUM_SECTIONS) + i;
      const sectionName = `Section ${ii}`;
      sectionIDs.push(sectionName);
      dataBlobs[sectionName] = sectionName;
      rowIDs[ii] = [];
  
      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        rowIDs[ii].push(rowName);
        dataBlobs[rowName] = rowName;
      }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    // console.log(dataBlobs);
    // console.log(sectionIDs);
    // console.log(rowIDs);
  }

export default class Home extends Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    
        const dataSource = new ListView.DataSource({
          getRowData,
          getSectionHeaderData: getSectionData,
          rowHasChanged: (row1, row2) => row1 !== row2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
          height: document.documentElement.clientHeight * 3 / 4,
        };
      }
    
      componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        sectionIDs = [];
        rowIDs = [];
        setTimeout(() => {
          genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
            isLoading: false,
            height: hei,
          });
        }, 600);
      }
    
      // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
      // componentWillReceiveProps(nextProps) {
      //   if (nextProps.dataSource !== this.props.dataSource) {
      //     this.setState({
      //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
      //     });
      //   }
      // }
    
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          genData(++pageIndex);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
            isLoading: false,
          });
        }, 1000);
      }
    
      render() {
        const separator = (sectionID, rowID) => (
          <div
            key={`${sectionID}-${rowID}`}
            style={{
              backgroundColor: 'yellow',
              height: 8,
              borderTop: '1px solid red',
              borderBottom: '1px solid red',
            }}
          />
        );
        let index = data.length - 1; //2
        const row = (rowData, sectionID, rowID) => {
          if (index < 0) {
            index = data.length - 1;
          }
          const obj = data[index--];
          return (
              <VideoItemBig key={rowID}/>
            // <div key={rowID} style={{ padding: '0 15px' }}>
            //   <div
            //     style={{
            //       lineHeight: '50px',
            //       color: '#888',
            //       fontSize: 18,
            //       borderBottom: '1px solid #F6F6F6',
            //     }}
            //   >{obj.title}</div>
            //   <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            //     <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            //     <div style={{ lineHeight: 1 }}>
            //       <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
            //       <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
            //     </div>
            //   </div>
            // </div>
          );
        };
    
        return (
          <div className={styles.homepage}>
             <HomeHeader/>
             <div className={styles.headerArea}></div>
             <KeywordArea/>
             <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                // renderHeader={() => <span>header</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                // renderSectionHeader={sectionData => (
                //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                // )}
                renderBodyComponent={() => <MyBody />}
                renderRow={row}
                // renderSeparator={separator}
                style={{
                height: this.state.height,
                overflow: 'auto',
                }}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
          </div>
        );
      }
}