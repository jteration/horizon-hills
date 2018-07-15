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
                <img
                  className="hero-icon"
                  src="./HorizonHillsLogo.png"
                  alt=""
                />
              </div>
              <div className="hero-title column is-narrow">
                <h1 className="title is-1 has-text-centered">Horizon Hills</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
