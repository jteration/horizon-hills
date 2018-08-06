import React, { Component } from 'react';
import Index from './Pages/Index';
import CompanyInfo from './Pages/CompanyInfo';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Index} />
          <Route path="/company-info" component={CompanyInfo} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
