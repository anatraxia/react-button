import React, { Component } from 'react'

export class FormField extends Component {
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input value={this.props.value} />
      </div>
    )
  }
}
export default FormField
