import * as types from '../actions/types';

const initialState = {
    data: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_ISSUEDETAILS:
            console.log('RECEIVE_ISSUEDETAILS', state);
            return {
                ...state,
                data: action.payload
            }
        case types.RECEIVE_ISSUEDETAILS_ERROR:
            console.log('RECEIVE_ISSUEDETAILS_ERROR', state);
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default reducer;