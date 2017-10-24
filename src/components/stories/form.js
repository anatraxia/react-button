import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Form from '../Form';
import FormField from '../FormField';
import SelectInput from '../SelectInput';
import SubmitButton from '../SubmitButton';

var model = {
  'email': 'chris@shiip.io',
  'name_first': 'Chris',
  'name_last': 'Cai',
  'status': 'active',
  'submit': 'Submit Form'
}

storiesOf('Form', module)
  .add('add title', () => (
    <Form title='User Form'></Form>
  ))
  .add('add input form field', () => (
    <Form model={model} title='User Form'>
      <FormField source='email' />
      <FormField source='name_first' />
      <FormField source='name_last' />
    </Form>
  ))
  .add('add SelectInput field', () => (
    <Form model={model} title='User Form'>
    <SelectInput source='status' choices={[
      {
        id: 'active',
        name: 'Active'
      },
      {
        id: 'suspended',
        name: 'Suspended'
      }
    ]} />
    </Form>
  ))
  .add('add Submit Button', () => (
    <Form model={model} title='User Form'>
      <SubmitButton source='submit' />
    </Form>
  ));
