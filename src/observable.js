import 'rxjs';
import { ofType,from } from 'redux-observable';

const fetchUserEpic = (action$, state$) => {
    // return action$.pip(ofType('TESTOB_A'))
    // return action$.delay(1000).mapTo({type: 'TESTOB_B'});
    return action$.delay(3000).filter(action => action.type === 'TESTOB_A')
    .mapTo({ type: 'TESTOB_B' });
}


export default fetchUserEpic;