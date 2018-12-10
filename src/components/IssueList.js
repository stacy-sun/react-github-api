import React from 'react';
import PropTypes from 'prop-types';

const IssueList = props => {
    return (
        <ul>
            {props.issueList.map(issue => (
                <li key={issue.id}>
                    <h3>{issue.number}: <a href={issue.html_url} target='_blank'>{issue.title}</a></h3>
                </li>
            ))}
        </ul>
    )
}

export default IssueList;