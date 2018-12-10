import React from 'react';

const IssueList = props => {
    return (
        <div>
            <h3>Issue Title: {props.issueDetails.title}</h3>
            <p>Issue Status: {props.issueDetails.state}</p>
            <p>Content: {props.issueDetails.body}</p>
            {console.log('props in issueDetail component:', props.issueDetails)}
        </div>
    )
}

export default IssueList;