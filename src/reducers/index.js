import { combineReducers } from 'redux';
import issueList from './issueList';
import issueDetails from './issueDetails';

const reducers = combineReducers({
    issueList,
    issueDetails
});

export default reducers;