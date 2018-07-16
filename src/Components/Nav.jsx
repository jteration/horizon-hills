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
            <a href="/#" className="navbar-item">
              <img src="./HorizonHillsLogo.png" />
              <h2 className="brand-title">Horizon Hills</h2>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="/#about" className="navbar-item">
                About
              </a>
              <a href="/#sales" className="navbar-item">
                Sales
              </a>
              <a href="/#area" className="navbar-item">
                Area
              </a>
              <a href="/#entertainment" className="navbar-item">
                Entertainment
              </a>
              <a href="/#restrictions" className="navbar-item">
                Restrictions
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
