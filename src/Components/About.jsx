import * as React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2 content">
              <h2 id="about-title" className="has-text-centered">
                Introducing Horizon Hills
              </h2>
              <hr />
              <p className="has-text-justified">
                Horizon Hills is a 55+ active adult community in Campion,
                Colorado. This new development is located just south of
                Loveland, Colorado in Larimer County on the west side of I-25.
                Residents of Horizon Hills enjoy an unobstructed view of the
                Front Range as well as a convenient location. The Fort Collins,
                Boulder, and Denver metro areas are all within a reasonable
                driving distance of Horizon Hills, making this a great place to
                retire or vacation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
