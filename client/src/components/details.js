import React, { Component } from 'react'

export default class details extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.handleClick}>Back</button>
        <p>Name:</p>
        <h2>{this.props.technique.name}</h2>
        <p>Movements:</p>
        <ul>
          {
            this.props.technique.movements.map((tech, index) => {
              return <li key={index}>{tech}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
