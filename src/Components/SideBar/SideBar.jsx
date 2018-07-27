import * as React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
  _toggleFixed = () => {
    if (this.state.sideBarClasses === 'section') {
      this.setState({ sideBarClasses: 'section side-is-fixed' });
    } else {
      this.setState({ sideBarClasses: 'section' });
    }
  };
  componentDidMount() {}
  state = {
    sideBarClasses: 'section',
  };
  render() {
    const { _toggleModal } = this.props;
    return (
      <section className={this.state.sideBarClasses}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">Your Real Estate Expert</div>
          </div>
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <figure>
                  <img src="./placeholder1.jpg" alt="Jacob" />
                  <figcaption>Jacob Sullivan</figcaption>
                </figure>
              </div>
              <div className="column">
                <p>blahblahblahblahblah</p>
              </div>
            </div>
            <div className="columns">
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
            <div className="card-header-title">Quick Facts</div>
          </div>
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <p>Price Range:</p>
                <p>Home Types:</p>
                <p>Number of Homes:</p>
                <p>New/Resale:</p>
                <p>Age Restrictions:</p>
                <p>Gated:</p>
                <p>Construction Dates:</p>
                <p>Builder:</p>
                <p>Rating:</p>
              </div>
              <div className="column has-text-right">
                <p>
                  <strong>Mid 100s - Mid 400s</strong>
                </p>
                <p>
                  <strong>Single Family</strong>
                </p>
                <p>
                  <strong>3,250</strong>
                </p>
                <p>
                  <strong>Resale Homes Only</strong>
                </p>
                <p>
                  <strong>55+</strong>
                </p>
                <p>
                  <strong>Yes</strong>
                </p>
                <p>
                  <strong>1996 - 2007</strong>
                </p>
                <p>
                  <strong>Del Webb</strong>
                </p>
                <p>
                  <strong>5 Stars~~</strong>
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
