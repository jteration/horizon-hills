import * as React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img src="./HorizonHillsLogo.png" />
              <h2>Horizon Hills</h2>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a>Item</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
