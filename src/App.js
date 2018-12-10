import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import SearchByIssue from './pages/SearchByIssue';
import SearchByRepo from './pages/SearchByRepo';

class App extends Component {

  render() {
    return (
      <Switch>
        <div className="container">
          <Header />
          <hr />
          <Route path="/" exact component={ SearchByRepo } />
          <Route path="/search-issue" exact component={ SearchByIssue } />
        </div>
      </Switch>
    );
  }
}

const Header = () => (
  <ul>
    <li>
      <Link to="/">Search by Repo</Link>
    </li>
    <li>
      <Link to="/search-issue">Search by Issue Number</Link>
    </li>
  </ul>
);

export default App;