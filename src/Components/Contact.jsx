import * as React from 'react';
import './Contact.css';

class Contact extends React.Component {
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
              <form
                action="https://formspree.io/jaysull514@gmail.com"
                method="POST"
              >
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      name="_replyto"
                      type="email"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Message"
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
