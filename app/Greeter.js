import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入
import pic1 from './img/pic1.jpg';

//console.log(styles);
class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <div>
           <img src={pic1}/>
        </div>
      </div>
    );
  }
}

export default Greeter;
