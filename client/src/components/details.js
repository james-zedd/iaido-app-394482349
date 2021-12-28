import React, { Component } from 'react'

export default class details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movements: this.props.technique.movements,
      isOmoteUra: this.props.isOmoteUra,
    }
  }

  ProcessMovements = (movements) => {
    return movements.map((tech, index) => {
      return <li key={index}>{tech}</li>
    });
  }

  render() {
    
    let movementsOutput;

    if (this.state.isOmoteUra) {
      movementsOutput = <div><h4>Omote:</h4><ul>{this.ProcessMovements(this.state.movements[0].omote)}</ul><h4>Ura:</h4><ul>{this.ProcessMovements(this.state.movements[1].ura)}</ul></div>
    } else {
      movementsOutput = <ul>{this.ProcessMovements(this.state.movements)}</ul>
    }

    return (
      <div>
        <button type="button" onClick={this.props.handleClick}>Back</button>
        <p>Name:</p>
        <h2>{this.props.technique.name.romanji}</h2>
        <p>Movements:</p>
        {movementsOutput}
      </div>
    )
  }
}
