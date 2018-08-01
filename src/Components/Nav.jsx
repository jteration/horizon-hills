import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

class Nav extends React.Component {
  state = {
    navClass: 'navbar transparent is-fixed-top',
    menuClass: 'navbar-menu',
    burgerClass: 'navbar-burger',
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
  _handleBurgerClick = () => {
    if (
      this.state.burgerClass === 'navbar-burger' &&
      this.state.menuClass === 'navbar-menu'
    ) {
      this.setState({
        burgerClass: 'navbar-burger is-active',
        menuClass: 'navbar-menu is-active',
      });
    } else {
      this.setState({ burgerClass: 'navbar-burger', menuClass: 'navbar-menu' });
    }
  };
  render() {
    return (
      <nav className={this.state.navClass} aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/horizon-hills#" className="navbar-item">
              <img
                alt="Horizon Hills Logo"
                src={`${process.env.PUBLIC_URL}/img/Logo1.png`}
              />
              <h2 className="brand-title">
                <span className="nav-big-letter">H</span>ORIZON{' '}
                <span className="nav-big-letter">H</span>ILLS
              </h2>
            </Link>
            <a
              role="button"
              class={this.state.burgerClass}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this._handleBurgerClick()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={this.state.menuClass}>
            <div className="navbar-end">
              <Link to="/horizon-hills#about" className="navbar-item">
                About
              </Link>
              <Link to="/horizon-hills#buy" className="navbar-item">
                Buy
              </Link>
              <Link to="/horizon-hills#features" className="navbar-item">
                Campion
              </Link>
              <Link to="/horizon-hills/company-info" className="navbar-item">
                Progress
              </Link>
              <div className="navbar-item">
                <a
                  onClick={() => this.props._toggleModal()}
                  className="button is-danger"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
