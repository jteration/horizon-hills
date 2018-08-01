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
          <Route exact path="/horizon-hills#about" component={Index} />
          <Route exact path="/horizon-hills#buy" component={Index} />
          <Route exact path="/horizon-hills#features" component={Index} />
          <Route exact path="/horizon-hills" component={Index} />
          <Route path="/horizon-hills-company-info" component={CompanyInfo} />
        </main>
      </Router>
    );
  }
}

export default App;
