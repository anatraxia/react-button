import React, { Component } from 'react'

export class SubmitButton extends Component {

  render () {
    return (
      <div>
        <input type={this.props.label} value={this.props.value}/>
      </div>
    )
  }
}
export default SubmitButton
