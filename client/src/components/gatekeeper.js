import React, { Component } from 'react'
import Login from './login';
import Register from './register';

export default class gatekeeper extends Component {

  constructor(props) {
    super(props);
    this.state = { active: 'LOGIN' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    let active = this.state.active;
    let newActive = active === 'LOGIN' ? 'REGISTER' : 'LOGIN';
    this.setState({ active: newActive });
  }

  RenderForm = () => {
    let active = this.state.active
    if (active === 'LOGIN') {
      return <Login />
    } else if (active === 'REGISTER') {
      return <Register />
    } else {
      <p>Error</p>
    }
  }

  render() {

    let RenderForm = this.RenderForm;

    return (
      <div>
        <RenderForm />
        <button type='button' className="button__toggle" onClick={this.handleClick}>Toggle</button>
      </div>
    )

  }
}
