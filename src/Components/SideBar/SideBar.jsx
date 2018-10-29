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
            <div className="card-columns expert-columns columns">
              <div className="column portrait-column is-narrow">
                <figure>
                  <img className="portrait" src={`/img/jess.jpg`} alt="Jacob" />
                </figure>
              </div>
              <div className="column">
                <p className="profile-paragraph has-text-justified">
                  Interested in learning more about Horizon Hills in Campion,
                  Colorado? The Real Estate experts at Horizon Hills, with a
                  combined 50 years of experience, will take care of your needs
                  and get you into your home on the Front Range.
                </p>
                <hr />
                <p>
                  Call us at <a href="tel:1-970-800-4166">1-970-800-4166</a>
                </p>
              </div>
            </div>
            <div className="card-columns button-column columns">
              <div className="column">
                <a
                  onClick={() => _toggleModal('Sidebar Contact')}
                  className="is-danger is-fullwidth button"
                >
                  Contact Me
                </a>
              </div>
              <div className="column">
                <a
                  onClick={() => _toggleModal('Sidebar Expert Request Info')}
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
                    <p className="fact-answer">$207,900 and up</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Home Type:</p>
                  </div>
                  <div className="column has-text-right">
                    <p className="fact-answer">Single Family</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Number of Homes:</p>
                  </div>
                  <div className="column has-text-right">
                    <p className="fact-answer">269</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Age Restrictions:</p>
                  </div>
                  <div className="column has-text-right">
                    <p className="fact-answer">55+</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-narrow">
                    <p>Construction Date:</p>
                  </div>
                  <div className="column has-text-right">
                    <p className="fact-answer">2019</p>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={() => _toggleModal('Sidebar Facts Request Info')}
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
