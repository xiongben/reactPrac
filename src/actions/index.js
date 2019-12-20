
import {createActions} from 'redux-actions';





// let actions = {
//     add_testnum : ()=>{
//         return {type: 'INCREMENT'}
//     },
//     delete_testnum: ()=>{
//         return {type: 'DECREMENT'}
//     },
//     add_testnum_async: ()=>{
//         return {type: 'INCREMENT_ASYNC'}
//     },
    
// }

export default createActions({
    'INCREMENT': (text) => {
        const testText = text;
        return {text:testText};
    },
    'INCREMENT_MAX': (text) => {
        const testText = text;
        return {text:testText};
    },
    'DECREMENT': () => {
        const testText = "这是减法运算";
        return testText;
    },
    'INCREMENT_ASYNC': (text) => {
        const testText = text;
        return {text:testText};
    },
    'LOGIN_SUBMIT': (params) => {
        return params;
    },
    'LOGIN_SUCCESS': (data) => {
        return data;
    },
    'TESTOB_A': ()=> {
        return {text:"AAAAA"};
    },
    'TESTOB_B': ()=> {
        return {text:"BBBBB"};
    }
});

