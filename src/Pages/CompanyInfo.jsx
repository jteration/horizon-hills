import * as React from 'react';
import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

class CompanyInfo extends React.Component {
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
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <section className="section">
                <div className="columns">
                  <div className="column">
                    <h1>hi</h1>
                  </div>
                </div>
              </section>
            </div>
            <div className="side-column column is-5">
              <SideBar _toggleModal={this._toggleModal} />
            </div>
          </div>
          <hr />
        </div>
        <Footer />
        <Contact
          _toggleModal={this._toggleModal}
          modalClass={this.state.modalClass}
        />
      </React.Fragment>
    );
  }
}

export default CompanyInfo;
