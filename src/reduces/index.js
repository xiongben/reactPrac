
import {handleActions} from 'redux-actions';

let initialState = {
	classList:[],
    wave:[],
    testnum: 200,
    listdata: {},
    text: "initddd",
    userId: null,
};
const reducer = handleActions({
    'INCREMENT': (state,action) => {
        console.log(action);
        return {
            ...state,
            testnum:state.testnum+10,
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
        }
    },
    'LOGIN_SUBMIT': (state, action) => {
        return {
            ...state,
            testnum:state.testnum+10,
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