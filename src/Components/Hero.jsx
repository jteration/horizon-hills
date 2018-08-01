import * as React from 'react';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight video">
        <div className="hero-video">
          <video playsInline autoPlay muted loop>
            <source src="./video/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-cover" />
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="hero-icon-column column is-narrow">
                <img className="hero-icon" src="./img/Logo2.png" alt="" />
                <h2 className="hero-tagline">An Active 55+ Living Community</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
