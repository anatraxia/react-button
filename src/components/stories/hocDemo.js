import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Form from '../Form';
import FormField from '../FormField';
import SelectInput from '../SelectInput';
import SubmitButton from '../SubmitButton';
import AddHeader from '../addHeader';

storiesOf('Addheader', module)
  .add('test HOC component', () => (
    <AddHeader></AddHeader>
  ));
