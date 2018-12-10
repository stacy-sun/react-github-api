import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import './App.css';
import SearchRepo from './components/SearchRepo';
import SearchIssue from './components/SearchIssue';
import IssueList from './components/IssueList';
import IssueDetails from './components/IssueDetails';
import { receiveRepoIssue, receiveIssueDetails } from './actions/actions';

class App extends Component {

  handleSubmitRepo = repo => {
    axios.get(`https://api.github.com/repos/facebook/${repo}/issues`)
      .then(res => {
        this.props.actions.receiveRepoIssue(res.data)
        // console.log('res data', res.data);
      })
  }

  handleSubmitIssue = (repo, issueNum) => {
    axios.get(`https://api.github.com/repos/facebook/${repo}/issues/${issueNum}`)
      .then(res => {
        this.props.actions.receiveIssueDetails(res.data)
        console.log('res data', res.data);
      })
  }

  render() {
    return (
      <div className="App">
        <SearchRepo onSubmitRepo={this.handleSubmitRepo} />
        <SearchIssue onSubmitIssue={this.handleSubmitIssue} />
        <IssueList issueList={this.props.issueList} />
        <IssueDetails issueDetails={this.props.issueDetails} />
        {/* {console.log('app.this.props.issueList:', this.props.issueList)}
        {console.log('app.this.props.issueDetails:', this.props.issueDetails)} */}
      </div>
    );
  }
}

App.propTypes = {
  issueList: PropTypes.array.isRequired,
  issueDetails: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    issueList: state.issueList.data,
    issueDetails: state.issueDetails.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ receiveRepoIssue, receiveIssueDetails }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
