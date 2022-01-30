import React, { Component } from 'react'

export default class login extends Component {
  render() {
    
    let errorMessage = this.props.errorMessage;

    return (
      <div>
        <h4>Login</h4>
        {errorMessage !== '' &&
          <div className="error-message">{errorMessage}</div>
        }
        <form onSubmit={this.props.authenticate} className="form">
          <div className="form__input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form__input-container">
            <label htmlFor="pwd">Password</label>
            <input type="text" id="pwd" name="password" />
          </div>
          <div className="form__input-container">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}
