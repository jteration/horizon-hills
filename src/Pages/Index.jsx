import React, { Component } from "react";
// import ReactGA from "react-ga";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Sales from "../Components/Sales";
import Map from "../Components/Map";
import HomeGallery from "../Components/HomeGallery/HomeGallery";
import TabCentral from "../Components/Tabs/TabCentral";
import SideBar from "../Components/SideBar/SideBar";
import Footer from "../Components/Footer";
import StickyMobileFooter from "../Components/StickyMobileFooter";
import Contact from "../Components/Contact";
import Password from "../Components/Password";

class Index extends Component {
	state = {
		modalClass: "modal contact-modal",
		videoInt: null
	};
	componentWillUnmount() {
		clearInterval(this.state.videoInt);
	}
	_toggleModal = (button) => {
		if (this.state.modalClass === "modal contact-modal") {
			// ReactGA.modalview("Contact");
			// ReactGA.event({
			// 	category: "Modal",
			// 	action: "Opened contact modal"
			// });
			// if (button) {
			// 	ReactGA.event({
			// 		category: "Button",
			// 		action: "Used " + button + " button to open modal"
			// 	});
			// }
			this.setState({ modalClass: "modal contact-modal is-active" });
		} else {
			this.setState({ modalClass: "modal contact-modal" });
		}
	};
	_didDownload = () => {
		// ReactGA.event({ category: "Download", action: "Downloaded Brochure" });
	};
	render() {
		return (
			<React.Fragment>
				<Nav
					isTransparent={true}
					_toggleModal={this._toggleModal}
					_didDownload={this._didDownload}
				/>
				<Hero />
				<main>
					<About />
					<section className="section">
						<div className="container">
							<div className="main-content columns">
								<div className="column">
									<Sales _toggleModal={this._toggleModal} />
								</div>
								<div className="side-column column is-4">
									<SideBar _toggleModal={this._toggleModal} />
								</div>
							</div>
						</div>
					</section>
					<section className="section map-gallery-section">
						<div id="homes" className="container">
							<Map />
							<HomeGallery
								_toggleModal={this._toggleModal}
								_didDownload={this._didDownload}
							/>
						</div>
					</section>
					<section id="features" className="section">
						<div className="container">
							<TabCentral _toggleModal={this._toggleModal} />
						</div>
					</section>
				</main>
				<Footer />
				<Contact
					_toggleModal={this._toggleModal}
					modalClass={this.state.modalClass}
				/>
				{/* <Password /> */}
				<StickyMobileFooter />
			</React.Fragment>
		);
	}
}

export default Index;
