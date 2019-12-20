import 'rxjs';

const fetchUserEpic = action$ => {
    console.log(action$)
    return action$.delay(1000).mapTo({type: 'TESTOB_B'});
    // action$.filter(action => action.type === 'TESTOB_A')
    // .mapTo({ type: 'TESTOB_B' });
}


export default fetchUserEpic;