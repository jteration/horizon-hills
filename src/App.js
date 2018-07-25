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
import Contact from './Components/Contact';

class App extends Component {
  state = {
    modalClass: 'modal',
  };
  _toggleModal = () => {
    if (this.state.modalClass === 'modal') {
      this.setState({ modalClass: 'modal is-active' });
    } else {
      this.setState({ modalClass: 'modal' });
    }
  };
  render() {
    return (
      <main>
        <Nav _toggleModal={this._toggleModal} />
        <Hero />
        <About />
        <Sales />
        <Area />
        <Entertainment />
        <Restrictions />
        <Footer />
        <Contact
          _toggleModal={this._toggleModal}
          modalClass={this.state.modalClass}
        />
      </main>
    );
  }
}

export default App;
