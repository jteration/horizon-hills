import React, { Component } from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Sales from '../Components/Sales';
import TabCentral from '../Components/Tabs/TabCentral';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Password from '../Components/Password';

class Index extends Component {
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
      <React.Fragment>
        <Nav _toggleModal={this._toggleModal} />
        <Hero />
        <About />
        <div className="main-content container">
          <div className="columns">
            <div className="column is-7">
              <Sales _toggleModal={this._toggleModal} />
            </div>
            <div className="side-column column is-5">
              <SideBar _toggleModal={this._toggleModal} />
            </div>
          </div>
          <TabCentral />
          <hr />
        </div>
        <Footer />
        <Contact
          _toggleModal={this._toggleModal}
          modalClass={this.state.modalClass}
        />
        <Password />
      </React.Fragment>
    );
  }
}

export default Index;
