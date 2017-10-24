import React, { Component } from 'react'

export class SelectInput extends Component {
  renderOption = () => {
      return this.props.choices.map((choice) => {
        return (<option key={choice.id} value={choice.id} >{choice.name}</option>)
      });
  }

  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <select value={this.props.selected}>
          {this.renderOption()}
        </select>
      </div>
    )
  }
}
export default SelectInput
