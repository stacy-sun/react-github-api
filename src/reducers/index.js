import { combineReducers } from 'redux';
import issueList from './issueList';
import issueDetails from './issueDetails';
import * as types from '../actions/types';

const appReducer = combineReducers({
    issueList,
    issueDetails
});

const rootReducer = (state, action) => {
    if (types === 'CLEAR_STATE') {
      state = undefined
    }
  
    return appReducer(state, action)
}

export default rootReducer;