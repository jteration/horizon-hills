import * as React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="content has-text-centered">
					<p>&copy; 2018 Horizon Hills</p>
					<Link to="/horizon-hills/privacy-policy#">Privacy</Link>
				</div>
			</footer>
		);
	}
}

export default Footer;
