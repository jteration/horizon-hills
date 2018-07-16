import * as React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about section">
        <div className="container">
          <div className="columns">
            <div className="column content">
              <h2>About</h2>
              <p>
                Phasellus sodales ullamcorper eros eu sagittis. Donec sed semper
                enim. Cras non mi tempor, maximus elit in, facilisis erat. In
                suscipit nulla ac eros sagittis mattis. Fusce dignissim
                tristique erat, at consectetur magna tempor ac. Nullam et risus
                sit amet sem commodo viverra ac sagittis elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
