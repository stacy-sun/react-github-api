import { RECEIVE_REPOISSUE, RECEIVE_REPOISSUE_ERROR, RECEIVE_ISSUEDETAILS, RECEIVE_ISSUEDETAILS_ERROR } from './types.js';

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

export const receiveIssueDetails = payload => (
    {
        type: RECEIVE_ISSUEDETAILS,
        payload
    }
)

export const receiveIssueDetailsErr = payload => {
    return {
        type: RECEIVE_ISSUEDETAILS_ERROR,
        payload
    }
}