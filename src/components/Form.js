import React, { Component } from 'react'
import FormField from './FormField'
import SelectInput from './SelectInput'
import SubmitButton from './SubmitButton'

export class Form extends Component {

    mapPropsModelValue = (key) => {
      return this.props.model[key]
    }

    renderFormChildren = (props) => {
      return React.Children.map(props.children, child => {
        if(child.type === FormField || child.type === SubmitButton){
          return React.cloneElement(child, {
            label: child.props.source,
            value: this.mapPropsModelValue(child.props.source)})
        } else if (child.type === SelectInput) {
          return React.cloneElement(child, {label: child.props.source, selected: this.mapPropsModelValue(child.props.source)})
        } else {
          return child
        }
      })
    }
    render () {
      return (
        <div>
          <form>
            <h1>{this.props.title}</h1>
            {this.renderFormChildren(this.props)}
          </form>
        </div>
      )
    }
}
export default Form
