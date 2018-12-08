import React from 'react';
import PropTypes from 'prop-types';

const Issues = props => {
    return (
        <ul>
            {props.repoIssues.issues.map(issue => (
                <li key={issue.id}>
                    <h3>{issue.number}: <a href={issue.html_url} target='_blank'>{issue.title}</a></h3>
                </li>
            ))}
            {console.log('props', props.repoIssues.issues)}
            <li>
            </li>
        </ul>
    )
}


export default Issues;