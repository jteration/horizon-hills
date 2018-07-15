import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <Hero />
      </main>
    );
  }
}

export default App;
