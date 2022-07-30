import * as React from "react";
import "./StickyMobileFooter.css";

class StickyMobileFooter extends React.Component {
	render() {
		return (
			<footer className="footer sticky-footer is-hidden-tablet">
				<nav className="navbar">
					<div className="navbar-item has-text-centered">
						<a className="button is-danger">
							1-970-XXX-XXXX
						</a>
					</div>
				</nav>
			</footer>
		);
	}
}

export default StickyMobileFooter;
