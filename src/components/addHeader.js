import React, { Component } from 'react';
import Form from './Form'

function addHeader(Form) {
  class AddHeader extends React.Component {
    render() {
      return (
        <div>
        <header>
          <h1>New Header Added</h1>
          </header>
        <Form></Form>
        </div>
      );
    }
  }
  return AddHeader;
}
export default addHeader
