import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {receiveRepoIssue, clearState} from '../../actions/actions';

import SearchRepo from './components/SearchRepo';
import IssueList from './components/IssueList';

class SearchByRepo extends Component {
  
    handleSubmitRepo = repo => {
      axios.get(`https://api.github.com/repos/facebook/${repo}/issues`)
        .then(res => {
          this.props.actions.receiveRepoIssue(res.data)
          console.log('res data', res.data);
        })
    }

    handleClickClear = () => {
      this.props.actions.clearState()
    }
  
    render() {
      return (
        <div>
          <SearchRepo onSubmitRepo={this.handleSubmitRepo} onClickClear={this.handleClickClear} />
          <IssueList issueList={this.props.issueList} />
        </div>
      );
    }
  }
  
  SearchByRepo.propTypes = {
    issueList: PropTypes.array.isRequired
  }
  
  function mapStateToProps(state) {
    return {
      issueList: state.issueList.data
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ receiveRepoIssue, clearState }, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchByRepo);