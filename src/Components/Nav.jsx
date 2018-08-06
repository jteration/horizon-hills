import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactGA from 'react-ga';
import './Nav.css';

class Nav extends React.Component {
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
  };
  render() {
    return (
      <nav className={this.state.navClass} aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link
              onClick={() => this._handleNavClick('Logo')}
              to="/#"
              className="navbar-item"
            >
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
            <div className="navbar-end is-centered-mobile">
              <div className="navbar-columns columns is-columns-touch">
                <div className="navbar-first-column column columns">
                  <div className="column is-row-desktop">
                    <Link
                      onClick={() => this._handleNavClick('About')}
                      to="/#about"
                      className="navbar-item"
                    >
                      About
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Buy')}
                      to="/#buy"
                      className="navbar-item"
                    >
                      Buy
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Homes')}
                      to="/#homes"
                      className="navbar-item"
                    >
                      Homes
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Campion')}
                      to="/#features"
                      className="navbar-item is-hidden-touch"
                    >
                      Campion
                    </Link>
                  </div>
                  <div className="column is-hidden-desktop">
                    <Link
                      onClick={() => this._handleNavClick('Hunting')}
                      to="/#hunting"
                      className="navbar-item is-hidden-desktop"
                    >
                      Hunting
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Snow')}
                      to="/#snow"
                      className="navbar-item is-hidden-desktop"
                    >
                      Snow
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Water')}
                      to="/#water"
                      className="navbar-item is-hidden-desktop"
                    >
                      Water
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Golfing')}
                      to="/#golfing"
                      className="navbar-item is-hidden-desktop"
                    >
                      Golfing
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                  </div>
                </div>
                <div className="column more-padding columns">
                  <div className="column is-hidden-desktop">
                    <Link
                      onClick={() => this._handleNavClick('Hiking')}
                      to="/#hiking"
                      className="navbar-item is-hidden-desktop"
                    >
                      Hiking
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Biking')}
                      to="/#biking"
                      className="navbar-item is-hidden-desktop"
                    >
                      Biking
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Camping')}
                      to="/#camping"
                      className="navbar-item is-hidden-desktop"
                    >
                      Camping
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Healthcare')}
                      to="/#healthcare"
                      className="navbar-item is-hidden-desktop"
                    >
                      Healthcare
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                  </div>
                  <div className="column">
                    <Link
                      onClick={() => this._handleNavClick('Other')}
                      to="/#other"
                      className="navbar-item is-hidden-desktop"
                    >
                      Other
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <Link
                      onClick={() => this._handleNavClick('Restrictions')}
                      to="/#restrictions"
                      className="navbar-item is-hidden-desktop"
                    >
                      Restrictions
                    </Link>
                    <hr className="is-hidden-desktop thin-hr" />
                    <div className="navbar-item">
                      <a
                        onClick={() => this.props._toggleModal('Nav Bar')}
                        className="button is-danger"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
