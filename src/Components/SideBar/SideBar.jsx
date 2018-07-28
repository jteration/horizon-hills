import * as React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
  state = {
    sideBarClasses: 'section sidebar-section',
  };
  render() {
    const { _toggleModal } = this.props;
    return (
      <section className={this.state.sideBarClasses}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <i className="fas fa-home" />
              <span className="padded-span">Your Real Estate Expert</span>
            </div>
          </div>
          <div className="card-content">
            <div className="card-columns columns">
              <div className="column is-5">
                <figure>
                  <img
                    className="portrait"
                    src="./placeholder1.jpg"
                    alt="Jacob"
                  />
                  <figcaption>Jacob Sullivan</figcaption>
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <p>blah blahb lah bla hblah</p>
                <p>Call us at </p>
                <a href="tel:555-555-1212">555-555-1212</a>
              </div>
            </div>
            <div className="card-columns columns">
              <div className="column">
                <a
                  onClick={() => _toggleModal()}
                  className="is-danger is-fullwidth button"
                >
                  Contact Me
                </a>
              </div>
              <div className="column">
                <a
                  onClick={() => _toggleModal()}
                  className="is-danger is-fullwidth button"
                >
                  Request Info
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <i className="fas fa-book" />
              <span className="padded-span">Quick Facts</span>
            </div>
          </div>
          <div className="card-content">
            <div className="card-columns columns">
              <div className="column">
                <p>Price Range:</p>
                <p>Home Type:</p>
                <p>Number of Homes:</p>
                <p>Age Restrictions:</p>
                <p>Construction Date:</p>
                <p>Builder:</p>
              </div>
              <div className="column has-text-right">
                <p>
                  <strong>$189k and up</strong>
                </p>
                <p>
                  <strong>Single Family</strong>
                </p>
                <p>
                  <strong>275</strong>
                </p>
                <p>
                  <strong>55+</strong>
                </p>
                <p>
                  <strong>2018</strong>
                </p>
                <p>
                  <strong>Champion Homes</strong>
                </p>
              </div>
            </div>
            <a
              onClick={() => _toggleModal()}
              className="is-danger is-fullwidth button"
            >
              Request Info
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default SideBar;
