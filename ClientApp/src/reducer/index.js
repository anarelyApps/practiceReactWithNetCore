/*
Store holds application state
getState(): access application state
dispatch(action): update application state
subscribe(listener): register and unregisters listeners
*/

import {combineReducers} from 'redux';
import tripReducers from './tripReducers';

const rootReducer = combineReducers({
    trips: tripReducers
});

export default rootReducer;