import * as React from 'react';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight video">
        <div className="hero-video">
          <video playsInline autoPlay muted loop>
            <source src="./hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-cover" />
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="hero-icon-column column is-narrow">
                <img className="hero-icon" src="./Logo2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;