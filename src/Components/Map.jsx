import * as React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <h2>Campion, Colorado</h2>
          <hr className="green-rule maps-rule" />
        </div>
        <div className="columns is-centered is-hidden-tablet">
          <div className="column map-column-mobile">
            <iframe
              title="mobile map"
              width="300"
              height="400"
              id="gmap_canvas"
              src="https://www.google.com/maps/d/u/0/embed?mid=1zdnHmRLv40oWoVTIaQh90Ej6SjBVSwFW"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
        <div className="columns is-centered is-hidden-mobile">
          <div className="column is-narrow">
            <iframe
              title="desktop map"
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://www.google.com/maps/d/u/0/embed?mid=1zdnHmRLv40oWoVTIaQh90Ej6SjBVSwFW"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
