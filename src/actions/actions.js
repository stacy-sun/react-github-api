import { RECEIVE_REPOISSUE, RECEIVE_ISSUEDETAILS, CLEAR_STATE } from './types.js';

export const receiveRepoIssue = payload => (
    {
        type: RECEIVE_REPOISSUE,
        payload
    }
)

export const receiveIssueDetails = payload => (
    {
        type: RECEIVE_ISSUEDETAILS,
        payload
    }
)

export const clearState = () => (
    {
        type: CLEAR_STATE,
    }
)