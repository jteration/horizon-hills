import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="content has-text-centered">
					<p>&copy; 2018 Horizon Hills</p>
					<Link to="/privacy-policy#">Privacy</Link>
				</div>
			</footer>
		);
	}
}

export default Footer;
