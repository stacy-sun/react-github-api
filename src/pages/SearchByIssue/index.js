import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {receiveIssueDetails, clearState} from '../../actions/actions';

import SearchIssue from './components/SearchIssue';
import IssueDetails from './components/IssueDetails';

class SearchByIssue extends Component {
  
    handleSubmitIssue = (repo, issueNum) => {
      axios.get(`https://api.github.com/repos/facebook/${repo}/issues/${issueNum}`)
        .then(res => {
          this.props.actions.receiveIssueDetails(res.data)
          console.log('res data', res.data);
        })
    }

    handleClickClear = () => {
      this.props.actions.clearState()
    }
  
    render() {
      return (
        <div>
          <SearchIssue onSubmitIssue={this.handleSubmitIssue} onClickClear={this.handleClickClear} />
          <IssueDetails issueDetails={this.props.issueDetails} />
        </div>
      );
    }
  }
  
  SearchByIssue.propTypes = {
    issueDetails: PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    return {
      issueDetails: state.issueDetails.data
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ receiveIssueDetails, clearState }, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchByIssue);