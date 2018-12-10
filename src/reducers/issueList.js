import * as types from '../actions/types';

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_REPOISSUE:
            console.log('RECEIVE_REPOISSUE', state);
            return {
                ...state,
                data: action.payload
            }
        case types.RECEIVE_REPOISSUE_ERROR:
            console.log('RECEIVE_REPOISSUE_ERROR', state);
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default reducer;