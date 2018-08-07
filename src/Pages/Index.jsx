import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Sales from '../Components/Sales';
import Map from '../Components/Map';
import HomeGallery from '../Components/HomeGallery/HomeGallery';
import TabCentral from '../Components/Tabs/TabCentral';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Password from '../Components/Password';

class Index extends Component {
  state = {
    modalClass: 'modal contact-modal',
  };
  componentWillMount() {
    ReactGA.initialize('UA-121443947-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  _toggleModal = (button) => {
    if (this.state.modalClass === 'modal contact-modal') {
      ReactGA.modalview('/');
      ReactGA.event({
        category: 'Modal',
        action: 'Opened contact modal',
      });
      if (button) {
        ReactGA.event({
          category: 'Button',
          action: 'Used ' + button + ' button to open modal',
        });
      }
      this.setState({ modalClass: 'modal contact-modal is-active' });
    } else {
      this.setState({ modalClass: 'modal contact-modal' });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Nav isTransparent={true} _toggleModal={this._toggleModal} />
        <Hero />
        <main>
          <About />
          <div className="main-content-wrap-wrap">
            <section className="section">
              <div className="container">
                <div className="main-content columns">
                  <div className="column">
                    <Sales _toggleModal={this._toggleModal} />
                  </div>
                  <div className="side-column column is-4">
                    <SideBar _toggleModal={this._toggleModal} />
                  </div>
                </div>
              </div>
            </section>
            <section className="section map-gallery-section">
              <div className="container map-gallery-wrap box">
                <Map />
                <HomeGallery />
              </div>
            </section>
            <section id="features" className="section">
              <div className="container main-content-wrap">
                <TabCentral _toggleModal={this._toggleModal} />
              </div>
            </section>
          </div>
        </main>
        <Footer />
        <Contact
          _toggleModal={this._toggleModal}
          modalClass={this.state.modalClass}
        />
        {/* <Password /> */}
      </React.Fragment>
    );
  }
}

export default Index;
