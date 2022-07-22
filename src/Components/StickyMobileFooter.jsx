import * as React from "react";
import "./StickyMobileFooter.css";

class StickyMobileFooter extends React.Component {
	render() {
		return (
			<footer className="footer sticky-footer is-hidden-tablet">
				<nav className="navbar">
					<div className="navbar-item has-text-centered">
						<a href="tel:1-970-800-4166" className="button is-danger">
							1-970-800-4166
						</a>
					</div>
				</nav>
			</footer>
		);
	}
}

export default StickyMobileFooter;
