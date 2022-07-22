import * as React from "react";
import "./Map.css";

class Map extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="content has-text-centered">
					<h2 className="location-header">Your Future Home</h2>
					<hr className="green-rule maps-rule" />
					<h3 className="location-sub-header">Campion, Colorado</h3>
				</div>
				<div className="columns is-centered is-hidden-tablet">
					<div className="column box map-box map-column-mobile">
						<div className="map-container">
							<iframe
								title="mobile map"
								width="320"
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
				</div>
				<div className="columns is-centered is-hidden-mobile">
					<div className="column box map-box is-narrow">
						<div className="map-container">
							<iframe
								title="desktop map"
								width="750"
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
				</div>
			</React.Fragment>
		);
	}
}

export default Map;
