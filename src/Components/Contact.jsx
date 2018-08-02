import * as React from 'react';
import './Contact.css';

class Contact extends React.Component {
  state = {
    emailRadio: true,
    phoneRadio: false,
  };
  _handleRadioClick = (choice) => {
    if (choice === 'email') {
      this.setState({ emailRadio: true, phoneRadio: false });
    } else if (choice === 'phone') {
      this.setState({ emailRadio: false, phoneRadio: true });
    }
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
            <div className="card-content">
              <div className="columns">
                <div className="column content">
                  <h1>Hello</h1>
                  <p>
                    This could be where we put some sales copy or brief
                    information about what a person would need to know before
                    contacting us by phone
                  </p>
                  <p>
                    Tel: <a href="tel:555-555-1212">555-555-1212</a>
                  </p>
                </div>
                <div className="column is-narrow">
                  <img
                    className="portrait"
                    alt="Jay"
                    src={`/img/placeholder2.png`}
                  />
                </div>
              </div>
              <hr />
              <div className="contact-divider content">
                <h2 className="has-text-centered">OR</h2>
              </div>
              <p className="has-text-centered">
                Fill out the form below to contact Jess about joining the
                Horizon Hills community.
              </p>
              <hr />
              <form
                action="https://formspree.io/jaysull514@gmail.com"
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
                      checked={this.state.phoneRadio}
                      onClick={() => this._handleRadioClick('phone')}
                      type="radio"
                      name="Contact Me By Phone"
                    />{' '}
                    Phone
                  </label>
                  <label className="radio">
                    <input
                      checked={this.state.emailRadio}
                      onClick={() => this._handleRadioClick('email')}
                      type="radio"
                      name="Contact Me By Email"
                    />{' '}
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
