
import {handleActions} from 'redux-actions';

let initialState = {
	classList:[],
    wave:[],
    testnum: 200,
    listdata: {},
    text: "initddd",
    userId: null,
    accountInfo:{
	    name: "小红",
        age: 24,
    }
};
const reducer = handleActions({
    'INCREMENT': (state,action) => {
        console.log(action);
        return {
            ...state,
            testnum:state.testnum+20,
            text: action.payload.text,
        }
    },
    'INCREMENT_MAX': (state,action) => {
        console.log(action);
        return {
            ...state,
            testnum:state.testnum+50,
            text: action.payload.text,
        }
    },
    'DECREMENT': (state, action) => {
        return {
            ...state,
            testnum:state.testnum-10,
        }
    },
    'INCREMENT_ASYNC': (state, action) => {
        return {
            ...state,
            testnum:state.testnum+10,
            text: action.payload.text,
        }
    },
    'LOGIN_SUBMIT': (state, action) => {
        return {
            ...state,
            testnum:state.testnum+10,
        }
    },
    'TESTOB_A': (state, action) => {
        // console.log(action);
        return {
            ...state,
            text: action.payload.text,
        }
    },
    'TESTOB_B': (state, action) => {
        // console.log(action);
        return {
            ...state,
            text: "BBB",
        }
    },
    'LOGIN_SUCCESS': (state, action) => {
        // console.log(action);
        return {
            ...state,
            loginres:action.data,
            userId:action.data.userId,
        }
    },
    'CHANGE_ACCOUNT': (state, action) => {
        console.log(action)
        return {
            ...state,
            accountInfo: {
                name: action.payload.name,
                age: 24,
            }
        }
    },
},initialState)



// const reducer = (state , action) => {
//     switch (action.type) {
//       case 'INCREMENT' :
//         return Object.assign({},state,{
//             testnum:state.testnum+10
//         });
//       case 'DECREMENT' :
//         return Object.assign({},state,{
//             testnum:state.testnum-10
//         });
//       case 'INCREMENT_ASYNC' :
//         return Object.assign({},state,{
//             testnum:state.testnum+10
//         });
//       case 'GET_LIST' :
//         return Object.assign({},state,{
//             listData:action.data
//         });
//       default: return state;
//     }
//   }


  export default reducer;
