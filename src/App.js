import React, { Component } from 'react';
import Index from './Pages/Index';
import CompanyInfo from './Pages/CompanyInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Index} />
          <Route path="/company-info" component={CompanyInfo} />
        </main>
      </Router>
    );
  }
}

export default App;
