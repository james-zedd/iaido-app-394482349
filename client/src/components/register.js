import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
        <h4>Register</h4>
        <form method="POST" action="" className="form">
          <div className="form__input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form__input-container">
            <label htmlFor="pwd">Password</label>
            <input type="text" id="pwd" name="password" />
          </div>
          <div className="form__input-container">
            <label htmlFor="pwd2">Confirm Password</label>
            <input type="text" id="pwd2" name="password2" />
          </div>
          <div className="form__input-container">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    )
  }
}
