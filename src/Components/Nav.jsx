import * as React from "react";
import {
	Link,
	NavLink
} from "react-router-dom";
// import ReactGA from "react-ga";
import "./Nav.css";
const hashLinks = new Map([
	["Logo", "hero"],
	["About", "about"],
	["Buy", "buy"],
	["Homes", "homes"],
	["Campion", "features"],
	["Biking", "biking"],
	["Camping", "camping"],
	["Golfing", "golfing"],
	["Hiking", "hiking"],
	["Hunting", "hunting"],
	["Water Sports", "water"],
	["Healthcare", "healthcare"],
	["Other", "other"],
	["Restrictions", "restrictions"]
]);

class Nav2 extends React.Component {
	state = {
		navClass: "navbar colored is-fixed-top",
		menuClass: "navbar-menu",
		burgerClass: "navbar-burger"
	};
	componentWillMount() {
		if (this.props.isTransparent) {
			if (window.pageYOffset >= 50) {
				this.setState({ navClass: "navbar colored is-fixed-top" });
			} else {
				this.setState({ navClass: "navbar transparent is-fixed-top" });
			}
		}
	}
	componentDidMount() {
		if (this.props.isTransparent) {
			window.onscroll = () => {
				if (window.pageYOffset >= 50) {
					this.setState({ navClass: "navbar colored is-fixed-top" });
				} else {
					this.setState({ navClass: "navbar transparent is-fixed-top" });
				}
			};
		}
	}
	_handleBurgerClick = () => {
		if (
			this.state.burgerClass === "navbar-burger" &&
			this.state.menuClass === "navbar-menu"
		) {
			// ReactGA.event({
			// 	category: "Nav",
			// 	action: "Opened Hamburger Menu"
			// });
			this.setState({
				burgerClass: "navbar-burger is-active",
				menuClass: "navbar-menu is-active"
			});
		} else {
			this.setState({ burgerClass: "navbar-burger", menuClass: "navbar-menu" });
		}
	};
	_handleNavClick = (nav) => {
		// ReactGA.event({
		// 	category: "Nav",
		// 	action: "Clicked " + nav + " on navbar"
		// });
		const hashLink = hashLinks.get(nav);
		if (hashLink != null) {
			document.getElementById(hashLink).scrollIntoView();
		}
		if (
			this.state.burgerClass === "navbar-burger is-active" &&
			this.state.menuClass === "navbar-menu is-active"
		) {
			this.setState({
				menuClass: "navbar-menu",
				burgerClass: "navbar-burger"
			});
		}
	};
	render() {
		return (
			<nav className={this.state.navClass} aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<NavLink
							onClick={() => this._handleNavClick("Logo")}
							to="/horizon-hills/#"
							className="navbar-item"
						>
							<img fetchpriority="high" alt="Horizon Hills Logo" src={"/horizon-hills/img/Logo1.webp"} />
							<h2 className="brand-title">
								<span className="nav-big-letter">H</span>
								ORIZON <span className="nav-big-letter">H</span>
								ILLS
							</h2>
						</NavLink>
						<a
							role="button"
							className={this.state.burgerClass}
							aria-label="menu"
							aria-expanded="false"
							onClick={() => this._handleBurgerClick()}
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>
					<div className={this.state.menuClass}>
						<div className="navbar-end is-hidden-mobile">
							<Link
								onClick={() => this._handleNavClick("About")}
								to="/horizon-hills/#about"
								className="navbar-item"
							>
								About
							</Link>
							<Link
								onClick={() => this._handleNavClick("Buy")}
								to="/horizon-hills/#buy"
								className="navbar-item"
							>
								Buy
							</Link>
							<Link
								onClick={() => this._handleNavClick("Homes")}
								to="/horizon-hills/#homes"
								className="navbar-item"
							>
								Home
							</Link>
							<Link
								onClick={() => this._handleNavClick("Campion")}
								to="/horizon-hills/#features"
								className="navbar-item"
							>
								Campion
							</Link>
							<div className="navbar-item">
								<a
									onClick={() => this.props._toggleModal("Nav Bar")}
									className="button is-danger"
								>
									Contact
								</a>
							</div>
							<div className="navbar-item">
								<a
									onClick={() => this._didDownload()}
									className="button is-danger"
									href="/horizon-hills/Horizon Hills Brochure.pdf"
									download
								>
									Brochure
								</a>
							</div>
							<div className="navbar-item">
								<a
									onClick={() => this._handleNavClick("Phone Number")}
									className="button is-danger"
								>
									1-970-XXX-XXXX
								</a>
							</div>
						</div>
						<div className="navbar-end is-hidden-tablet">
							<Link
								onClick={() => this._handleNavClick("Buy")}
								to="/horizon-hills/#buy"
								className="navbar-item"
							>
								Buy
							</Link>
							<Link
								onClick={() => this._handleNavClick("Homes")}
								to="/horizon-hills/#homes"
								className="navbar-item"
							>
								Home
							</Link>
							<div className="navbar-item has-dropdown is-active">
								<Link
									onClick={() => this._handleNavClick("Campion")}
									to="/horizon-hills/#features"
									className="navbar-link"
								>
									Campion
								</Link>
								<div className="navbar-dropdown is-boxed">
									<a
										onClick={() => this._handleNavClick("Biking")}
										href="#biking"
										className="navbar-item"
									>
										Biking
									</a>
									<a
										onClick={() => this._handleNavClick("Camping")}
										href="#camping"
										className="navbar-item"
									>
										Camping
									</a>
									<a
										onClick={() => this._handleNavClick("Golfing")}
										href="#golfing"
										className="navbar-item"
									>
										Golfing
									</a>
									<a
										onClick={() => this._handleNavClick("Hiking")}
										href="#hiking"
										className="navbar-item"
									>
										Hiking
									</a>
									<a
										onClick={() => this._handleNavClick("Hunting")}
										href="#hunting"
										className="navbar-item"
									>
										Hunting
									</a>
									<a
										onClick={() => this._handleNavClick("Snow Sports")}
										href="#snow"
										className="navbar-item"
									>
										Snow Sports
									</a>
									<a
										onClick={() => this._handleNavClick("Water Sports")}
										href="#water"
										className="navbar-item"
									>
										Water Sports
									</a>
									<a
										onClick={() => this._handleNavClick("Healthcare")}
										href="#healthcare"
										className="navbar-item"
									>
										Healthcare
									</a>
									<a
										onClick={() => this._handleNavClick("Other")}
										href="#other"
										className="navbar-item"
									>
										Other
									</a>
									<a
										onClick={() => this._handleNavClick("Restrictions")}
										href="#restrictions"
										className="navbar-item"
									>
										Restrictions
									</a>
								</div>
							</div>
							<div className="navbar-item">
								<a
									onClick={() => this.props._toggleModal("Nav Bar")}
									className="button is-danger"
								>
									Contact
								</a>
							</div>
							<div className="navbar-item">
								<a
									onClick={() => this._didDownload()}
									className="button is-danger"
									href="/horizon-hills/Horizon Hills Brochure.pdf"
									download
								>
									Brochure
								</a>
							</div>
							<div className="navbar-item">
								<a
									onClick={() => this._handleNavClick("Phone Number")}
									className="button is-danger"
								>
									1-970-XXX-XXXX
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav2;
