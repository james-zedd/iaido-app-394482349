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
      movementsOutput = <div><h4 className='font-bold'>Omote:</h4><ul className='mb-2'>{this.ProcessMovements(this.state.movements[0].omote)}</ul><h4 className='font-bold'>Ura:</h4><ul>{this.ProcessMovements(this.state.movements[1].ura)}</ul></div>
    } else {
      movementsOutput = <ul>{this.ProcessMovements(this.state.movements)}</ul>
    }

    return (
      <div className='mt-4'>
        <button type="button" className='bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white mb-6' onClick={this.props.handleClick}>Back</button>
        <p className='text-slate-900 text-1xl font-bold'>Name:</p>
        <h2 className='text-slate-900 text-2xl mb-4'>{this.props.technique.name.romanji}</h2>
        <p className='text-slate-900 text-1xl font-bold mb-2'>Movements:</p>
        {movementsOutput}
      </div>
    )
  }
}
