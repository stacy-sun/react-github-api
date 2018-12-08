import * as types from '../actions/types';

const initialState = {
    issues: []
}

const reduer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_REPOISSUE:
            console.log('REQUEST_REPOISSUE', state);
            return {
                ...state,
            }
        case types.RECEIVE_REPOISSUE:
            console.log('RECEIVE_REPOISSUE', state);
            return {
                ...state,
                issues: action.payload
            }
        case types.RECEIVE_REPOISSUE_ERROR:
            console.log('RECEIVE_REPOISSUE_ERROR', state);
            return {
                ...state,
                issues: action.payload
            }
        default:
            return state;
    }
}

export default reduer;