import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Sales from './Components/Sales';
import Entertainment from './Components/Entertainment/Entertainment';
import Restrictions from './Components/Restrictions';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

class App extends Component {
  state = {
    modalClass: 'modal',
    showFixed: false,
  };
  _toggleModal = () => {
    if (this.state.modalClass === 'modal') {
      this.setState({ modalClass: 'modal is-active' });
    } else {
      this.setState({ modalClass: 'modal' });
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 768) {
        return this.setState({ showFixed: false });
      }
      if (window.scrollY > 2250) {
        this.setState({ showFixed: true });
      } else {
        this.setState({ showFixed: false });
      }
    });
  }
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
            </div>
            <div className="side-column column is-5">
              <SideBar _toggleModal={this._toggleModal} />
            </div>
          </div>
          <Entertainment />
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
