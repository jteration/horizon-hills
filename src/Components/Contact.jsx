import * as React from "react";
// import ReactGA from "react-ga";
import "./Contact.css";

class Contact extends React.Component {
	state = {
		emailRadio: true,
		phoneRadio: false
	};
	_handleRadioClick = (choice) => {
		if (choice === "email") {
			this.setState({ emailRadio: true, phoneRadio: false });
		} else if (choice === "phone") {
			this.setState({ emailRadio: false, phoneRadio: true });
		}
	};
	_handleRecordSubmit = () => {
		// ReactGA.event({
		// 	category: "Submit",
		// 	action: "Submitted Contact Form"
		// });
	};
	render() {
		const { modalClass, _toggleModal } = this.props;
		return (
			<div className={modalClass}>
				<div onClick={() => _toggleModal()} className="modal-background" />
				<div className="modal-content">
					<div className="card">
						<div className="card-header">
							<div className="card-header-title">
								We would love to get in touch
							</div>
						</div>
						<div className="card-content content">
							<img src="/horizon-hills/img/Logo2.webp" alt="Horizon Hills Logo" />
							<hr />
							<h2>Contact Horizon Hills</h2>
							<p className="has-text-centered">
								Fill out the form below and a representative from Horizon Hills
								will reach out to you with more information.
							</p>
							<form
								action="https://formspree.io/contact@horizonhillscampionco.com"
								method="POST"
							>
								<div className="field">
									<label className="label">Name</label>
									<div className="control has-icons-left">
										<input
											className="input"
											name="Name:"
											type="text"
											placeholder="Name"
											required
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-user-alt" />
										</span>
									</div>
								</div>
								<div className="field">
									<label className="label">Email</label>
									<div className="control has-icons-left">
										<input
											className="input"
											name="Email:"
											type="email"
											placeholder="Email"
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-envelope" />
										</span>
									</div>
								</div>
								<div className="field">
									<label className="label">Phone</label>
									<div className="control has-icons-left">
										<input
											className="input"
											name="Phone:"
											type="phone"
											placeholder="Phone"
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-phone-square" />
										</span>
									</div>
								</div>
								<div className="control">
									<legend>Preferred Method of Contact</legend>
									<label className="radio">
										<input
											defaultChecked={this.state.phoneRadio}
											onClick={() => this._handleRadioClick("phone")}
											type="radio"
											name="Contact Me By Phone"
										/>{" "}
										Phone
									</label>
									<label className="radio">
										<input
											defaultChecked={this.state.emailRadio}
											onClick={() => this._handleRadioClick("email")}
											type="radio"
											name="Contact Me By Email"
										/>{" "}
										Email
									</label>
								</div>
								<div className="field">
									<label className="label">Message</label>
									<div className="control">
										<textarea
											className="textarea"
											name="Message:"
											placeholder="Message"
											required
										/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<button
											onClick={() => this._handleRecordSubmit()}
											type="submit"
											value="Send"
											className="submit-btn button is-link"
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<button
					onClick={() => _toggleModal()}
					className="modal-close is-large"
					aria-label="close"
				/>
			</div>
		);
	}
}

export default Contact;
