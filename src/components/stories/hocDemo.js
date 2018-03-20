import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Form from '../Form';
import FormField from '../FormField';
import SelectInput from '../SelectInput';
import SubmitButton from '../SubmitButton';
import addHeader from '../addHeader';

const AddHeader = addHeader(Form);

var model = {
  'email': 'chris@shiip.io',
  'name_first': 'Chris',
  'name_last': 'Cai',
  'status': 'active',
  'submit': 'Submit Form'
}

storiesOf('Addheader', module)
  .add('test HOC component', () => (
    <div>
    <AddHeader model={model} title="New Title">
     <FormField source='email' />
     <FormField source='name_first' />
     <FormField source='name_last' />
     </AddHeader>
    </div>
  ));
