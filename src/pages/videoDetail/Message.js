import React, { Component } from 'react';
import styles from "./Message.module.less";
import { TextareaItem ,Button} from 'antd-mobile';


export default class Message extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1
        }
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className={styles.messagebox}>
                <TextareaItem
                    className={styles.inputarea}
                    rows={3}
                    count={100}
                />
                <Button type="primary" className={styles.sendBtn} size="small">Send</Button>
                <div className={styles.messList}>
                   <div className={styles.messItem}>
                       <div className={styles.userinfo}>
                          <img alt="avatar" className={styles.userAvatar} src={require('./../../static/icon/icon_principal.png')}/>
                          <div className={styles.userName}>kakaxi</div>
                       </div>
                       <div className={styles.messText}>
                           wo wowowo dfhjdj dahfjadfajd ahkfjhahjfa afhakfkah khfaka  kfdkhakhahk kfahakhakf kfaha ajfhahk ahfkha fkha
                       </div>
                   </div>
                   <div className={styles.messItem}>
                       <div className={styles.userinfo}>
                          <img alt="avatar" className={styles.userAvatar} src={require('./../../static/icon/icon_principal.png')}/>
                          <div className={styles.userName}>kakaxi</div>
                       </div>
                       <div className={styles.messText}>
                           wo wowowo dfhjdj dahfjadfajd ahkfjhahjfa afhakfkah khfaka  kfdkhakhahk kfahakhakf kfaha ajfhahk ahfkha fkha
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}