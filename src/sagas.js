import { delay } from 'redux-saga'
import {  put, takeEvery, all, call, take } from 'redux-saga/effects'
import Api from "./utils/fetch"
import {history} from './utils/history'

 function* helloSaga() {

    yield console.log("hello sagars,hah!");
}
 function* increaseTestNum() {
     yield put({type: 'INCREMENT'});
 }

 function* incrementAsync() {
    var testquest = function(){
        Api.get("/award/detail",{id:0}).then(
          res => console.log(res)
        )
    }
    yield call(delay,1000);
    const res = yield call(testquest);
    yield put({type: 'INCREMENT'});
}

 function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* loginSubmitAsync() {
    var testquest = function(params){
        return Api.post("/wechat/login",params).then(
          res => res
        )
    }
     let req = yield take('LOGIN_SUBMIT');
     
    let params = req.payload;
    // console.log(params);
    const res = yield call(testquest,params);
    // console.log(res);
    yield put({type: 'LOGIN_SUCCESS',data:res});
    history.push('/wechatlist');
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        loginSubmitAsync(),
    ])
}