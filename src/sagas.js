import { delay } from 'redux-saga'
import {  put, takeEvery, all, call } from 'redux-saga/effects'
import Api from "./utils/fetch"

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

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
    ])
}