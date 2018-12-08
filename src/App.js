import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import Input from './components/Input';
import Issues from './components/Issues';
import { fetchRepoIssues } from './actions/actions';
import { bindActionCreators } from 'redux';
import { receiveRepoIssue } from './actions/actions';

class App extends Component {

  handleSubmit = repo => {
    axios.get(`https://api.github.com/repos/facebook/${repo}/issues`)
    .then(res => {
      this.props.actions.receiveRepoIssue(res.data)
      console.log('res data', res.data);
    })
  }

  render() {
    return (
      <div className="App">
          <Input onSubmitForm={this.handleSubmit}/>
          <Issues repoIssues={this.props.issues} />
          {console.log(this.props.issues)}
      </div>
    );
  }
}

App.propTypes = {
  issues: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
      issues: state.issues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ receiveRepoIssue }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
