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
              <div className="column is-narrow">
                <figure>
                  <img
                    className="portrait"
                    src="./placeholder1.jpg"
                    alt="Jacob"
                  />
                  <figcaption>Jacob Sullivan</figcaption>
                </figure>
              </div>
              <div className="column">
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
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Price Range:</p>
                  </div>
                  <div className="column has-text-right">
                    <strong>$189K and up</strong>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Home Type:</p>
                  </div>
                  <div className="column has-text-right">
                    <strong>Single Family</strong>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Number of Homes:</p>
                  </div>
                  <div className="column has-text-right">
                    <strong>275</strong>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Age Restrictions:</p>
                  </div>
                  <div className="column has-text-right">
                    <strong>55+</strong>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Construction Date:</p>
                  </div>
                  <div className="column has-text-right">
                    <p>
                      <strong>2018</strong>
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Builder:</p>
                  </div>
                  <div className="column has-text-right">
                    <p>
                      <strong>Champion Homes</strong>
                    </p>
                  </div>
                </div>
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
