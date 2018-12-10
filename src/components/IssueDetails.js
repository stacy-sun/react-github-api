import React from 'react';
import PropTypes from 'prop-types';

const IssueList = props => {
    return (
        <div>
            <h3>Issue Title: {props.issueDetails.title}</h3>
            <p>Issue Status: {props.issueDetails.state}</p>
            <div>{props.issueDetails.body}</div>
            {console.log('props in issueDetail component:', props.issueDetails)}
        </div>
    )
}

export default IssueList;