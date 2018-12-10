import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: '',
            issueNum: ''
        }
    }

    handleRepoChange = e => {
        this.setState({ repo: e.target.value })
    }

    handleIssueChange = e => {
        this.setState({ issueNum: e.target.value })
    }

    handleSubmit = e => {
        const repo = this.state.repo;
        const issueNum = this.state.issueNum;

        e.preventDefault();
        this.props.onSubmitIssue(repo, issueNum);
        this.setState({ repo: '', issueNum: '' })
    }

    handleClickClear = () => {
        this.props.onClickClear();
    }

    render() {
        return (
            <form onSubmit={this.state.repo && this.state.issueNum ? this.handleSubmit : null}>
                <label htmlFor='repo'>Enter a repo name: </label>
                <input type='text' name='repo' id='repo' value={this.state.repo} onChange={this.handleRepoChange} />

                <label htmlFor='issueNum'>Enter an issue number: </label>
                <input type='text' name='issueNum' id='issueNum' value={this.state.issueNum} onChange={this.handleIssueChange} />
                <input type='submit' value='Submit' />
                <input type='button' value='Clear Outputs' onClick={this.handleClickClear} />
            </form>
        )
    }
}

SearchIssue.propTypes = {
    onSubmitIssue: PropTypes.func.isRequired,
    onClickClear: PropTypes.func
}

export default SearchIssue;