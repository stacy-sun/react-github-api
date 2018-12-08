import { REQUEST_REPOISSUE, RECEIVE_REPOISSUE, RECEIVE_REPOISSUE_ERROR } from './types.js';

export const requestRepoIssue = () => {
    return {
        type: REQUEST_REPOISSUE
    }
}

export const receiveRepoIssue = payload => (
    {
        type: RECEIVE_REPOISSUE,
        payload
    }
)

export const receiveRepoIssueErr = payload => {
    return {
        type: RECEIVE_REPOISSUE_ERROR,
        payload
    }
}