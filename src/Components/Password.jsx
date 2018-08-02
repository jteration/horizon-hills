import * as React from 'react';
import './Password.css';

class Password extends React.Component {
  state = {
    modalClass: 'modal is-active',
    password: '',
  };
  _onInputChange = (value) => {
    this.setState({ password: value });
  };
  _handleClick = () => {
    if (this.state.password === 'stratprop') {
      this.setState({ modalClass: 'modal' });
    }
  };
  render() {
    return (
      <div className={this.state.modalClass}>
        <div className="modal-background password-modal" />
        <div className="modal-content">
          <p>Enter password</p>
          <input
            onChange={(event) => this._onInputChange(event.target.value)}
            value={this.state.password}
            type="password"
          />
          <button onClick={() => this._handleClick()} className="button">
            Submit
          </button>
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}

export default Password;