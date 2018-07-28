import * as React from 'react';
import './Nav.css';

class Nav extends React.Component {
  state = {
    navClass: 'navbar transparent is-fixed-top',
  };
  componentDidMount() {
    if (window.pageYOffset >= 50) {
      this.setState({ navClass: 'navbar colored is-fixed-top' });
    }
    window.onscroll = () => {
      if (window.pageYOffset >= 50) {
        this.setState({ navClass: 'navbar colored is-fixed-top' });
      } else {
        this.setState({ navClass: 'navbar transparent is-fixed-top' });
      }
    };
  }
  render() {
    return (
      <nav className={this.state.navClass} aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/horizon-hills/#" className="navbar-item">
              <img alt="Horizon Hills Logo" src="./Logo1.png" />
              <h2 className="brand-title">
                <span className="nav-big-letter">H</span>ORIZON{' '}
                <span className="nav-big-letter">H</span>ILLS
              </h2>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="/horizon-hills/#about" className="navbar-item">
                About
              </a>
              <a href="/horizon-hills/#sales" className="navbar-item">
                Buy
              </a>
              <a href="/horizon-hills/#features" className="navbar-item">
                Campion
              </a>
              <a
                onClick={() => this.props._toggleModal()}
                className="navbar-item"
              >
                <a className="button is-danger">Contact</a>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
