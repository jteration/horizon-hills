import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Sales from './Components/Sales';
import Area from './Components/Area';
import Entertainment from './Components/Entertainment';
import Restrictions from './Components/Restrictions';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <Hero />
        <About />
        <Sales />
        <Area />
        <Entertainment />
        <Restrictions />
        <Footer />
      </main>
    );
  }
}

export default App;
