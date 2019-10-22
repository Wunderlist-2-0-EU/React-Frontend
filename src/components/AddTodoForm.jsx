import React, { useState } from 'react';
import { Input, Button, Stack } from '@chakra-ui/core';
import { connect } from 'react-redux';

import * as actionCreators from '../actionCreators';

const initialFormValues = { title: '', user_id: '', setDate: '', task: '' };

export function AddTodoForm({ addTask }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const addTodo = event => {
    event.preventDefault();
    addTask(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <Stack isInline marginX='auto' maxWidth='500px'>
      <Input
        type='text'
        title='Buy newspaper'
        placeholder='Title'
        value={formValues.title}
        name='title'
        onChange={handleChange}
      />
      <Input
        type='text'
        placeholder='Task'
        value={formValues.task}
        focusBorderColor='cyan.500'
        name='task'
        onChange={handleChange}
      />
      <Input
        placeholder='User_ID'
        type='number'
        user_id='Buy newspaper'
        value={formValues.user_id}
        name='user_id'
        onChange={handleChange}
      />
      <Input
        placeholder='Date'
        type='text'
        setDate='Buy newspaper'
        value={formValues.setDate}
        name='setDate'
        onChange={handleChange}
      />
      <Button
        type='submit'
        paddingX='40px'
        variantColor='cyan'
        color='white'
        onClick={event => addTodo(event)}
      >
        Add
      </Button>
    </Stack>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddTodoForm);
