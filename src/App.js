import './App.scss';
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './shared/NavigationBar';
import HomeViewModel from './home/HomeViewModel';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />

          <Route exact path="/" component={HomeViewModel} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
