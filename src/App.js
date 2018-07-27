import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Sales from './Components/Sales';
import Entertainment from './Components/Entertainment';
import Restrictions from './Components/Restrictions';
import SideBar from './Components/SideBar/SideBar';
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
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <Sales />
              <Entertainment />
            </div>
            <div className="side-column column is-5">
              <SideBar _toggleModal={this._toggleModal} />
            </div>
          </div>
          <Restrictions />
        </div>
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
