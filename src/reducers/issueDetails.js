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
        case types.CLEAR_STATE:
            console.log('CLEAR_STATE', state);
            return initialState;
        default:
            return state;
    }
}

export default reducer;