import React, { Component } from 'react';
import Form from './Form'

function addHeader(WrappedComponent) {
  class AddHeader extends React.Component {
    render() {
      return (
        <div>
          <h1>New Header Added</h1>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  }
  return AddHeader;
}
export default addHeader
