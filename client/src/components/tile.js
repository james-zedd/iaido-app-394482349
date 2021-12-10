import React, { Component } from 'react'

export default class tile extends Component {

  render() {

    let { id, name } = this.props;

    return (
      <div className="tile">
        <p>ID: {id}</p>
        <p>{name}</p>
        <button type="button" onClick={() => this.props.setTechnique(id)}>View</button>
      </div>
    )
  }
}
