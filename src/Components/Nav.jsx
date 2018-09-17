import * as React from 'react';
import {
  HashLink as Link,
  NavHashLink as NavLink,
} from 'react-router-hash-link';
import ReactGA from 'react-ga';
import './Nav.css';

class Nav2 extends React.Component {
  state = {
    navClass: 'navbar colored is-fixed-top',
    menuClass: 'navbar-menu',
    burgerClass: 'navbar-burger',
  };
  componentWillMount() {
    if (this.props.isTransparent) {
      if (window.pageYOffset >= 50) {
        this.setState({ navClass: 'navbar colored is-fixed-top' });
      } else {
        this.setState({ navClass: 'navbar transparent is-fixed-top' });
      }
    }
  }
  componentDidMount() {
    if (this.props.isTransparent) {
      window.onscroll = () => {
        if (window.pageYOffset >= 50) {
          this.setState({ navClass: 'navbar colored is-fixed-top' });
        } else {
          this.setState({ navClass: 'navbar transparent is-fixed-top' });
        }
      };
    }
  }
  _handleBurgerClick = () => {
    if (
      this.state.burgerClass === 'navbar-burger' &&
      this.state.menuClass === 'navbar-menu'
    ) {
      ReactGA.event({
        category: 'Nav',
        action: 'Opened Hamburger Menu',
      });
      this.setState({
        burgerClass: 'navbar-burger is-active',
        menuClass: 'navbar-menu is-active',
      });
    } else {
      this.setState({ burgerClass: 'navbar-burger', menuClass: 'navbar-menu' });
    }
  };
  _handleNavClick = (nav) => {
    ReactGA.event({
      category: 'Nav',
      action: 'Clicked ' + nav + ' on navbar',
    });
    if (
      this.state.burgerClass === 'navbar-burger is-active' &&
      this.state.menuClass === 'navbar-menu is-active'
    ) {
      this.setState({
        menuClass: 'navbar-menu',
        burgerClass: 'navbar-burger',
      });
    }
  };
  render() {
    return (
      <nav className={this.state.navClass} aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              onClick={() => this._handleNavClick('Logo')}
              to="/#"
              className="navbar-item"
            >
              <img alt="Horizon Hills Logo" src={'/img/Logo1.png'} />
              <h2 className="brand-title">
                <span className="nav-big-letter">H</span>
                ORIZON <span className="nav-big-letter">H</span>
                ILLS
              </h2>
            </NavLink>
            <a
              role="button"
              className={this.state.burgerClass}
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
            <div className="navbar-end is-hidden-mobile">
              <Link
                onClick={() => this._handleNavClick('About')}
                to="/#about"
                className="navbar-item"
              >
                About
              </Link>
              <Link
                onClick={() => this._handleNavClick('Buy')}
                to="/#buy"
                className="navbar-item"
              >
                Buy
              </Link>
              <Link
                onClick={() => this._handleNavClick('Homes')}
                to="/#homes"
                className="navbar-item"
              >
                Home
              </Link>
              <Link
                onClick={() => this._handleNavClick('Campion')}
                to="/#features"
                className="navbar-item"
              >
                Campion
              </Link>
              <div className="navbar-item">
                <a
                  onClick={() => this.props._toggleModal('Nav Bar')}
                  className="button is-danger"
                >
                  Contact
                </a>
              </div>
              <div className="navbar-item">
                <a
                  onClick={() => this._handleNavClick('Phone Number')}
                  className="button is-danger"
                  href="tel:1-970-800-4166"
                >
                  1-970-800-4166
                </a>
              </div>
            </div>
            <div className="navbar-end is-hidden-tablet">
              <Link
                onClick={() => this._handleNavClick('Buy')}
                to="/#buy"
                className="navbar-item"
              >
                Buy
              </Link>
              <Link
                onClick={() => this._handleNavClick('Homes')}
                to="/#homes"
                className="navbar-item"
              >
                Home
              </Link>
              <div className="navbar-item has-dropdown is-active">
                <Link
                  onClick={() => this._handleNavClick('Campion')}
                  to="/#features"
                  className="navbar-link"
                >
                  Campion
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <a
                    onClick={() => this._handleNavClick('Biking')}
                    href="#biking"
                    className="navbar-item"
                  >
                    Biking
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Camping')}
                    href="#camping"
                    className="navbar-item"
                  >
                    Camping
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Golfing')}
                    href="#golfing"
                    className="navbar-item"
                  >
                    Golfing
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Hiking')}
                    href="#hiking"
                    className="navbar-item"
                  >
                    Hiking
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Hunting')}
                    href="#hunting"
                    className="navbar-item"
                  >
                    Hunting
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Snow Sports')}
                    href="#snow"
                    className="navbar-item"
                  >
                    Snow Sports
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Water Sports')}
                    href="#water"
                    className="navbar-item"
                  >
                    Water Sports
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Healthcare')}
                    href="#healthcare"
                    className="navbar-item"
                  >
                    Healthcare
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Other')}
                    href="#other"
                    className="navbar-item"
                  >
                    Other
                  </a>
                  <a
                    onClick={() => this._handleNavClick('Restrictions')}
                    href="#restrictions"
                    className="navbar-item"
                  >
                    Restrictions
                  </a>
                </div>
              </div>
              <div className="navbar-item">
                <a
                  onClick={() => this.props._toggleModal('Nav Bar')}
                  className="button is-danger"
                >
                  Contact
                </a>
              </div>
              <div className="navbar-item">
                <a
                  onClick={() => this._handleNavClick('Phone Number')}
                  className="button is-danger"
                  href="tel:1-970-800-4166"
                >
                  1-970-800-4166
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav2;
