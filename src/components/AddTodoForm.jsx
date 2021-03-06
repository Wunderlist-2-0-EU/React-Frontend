import React from 'react';
import { Input, Button, Stack, Box } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

import * as actionCreators from '../actionCreators';

export function AddTodoForm(props) {
  return (
    <Form>
      <Stack direction='row' spacing='24px'>
        <Box flex='1'>
          <Field
            name='task'
            render={props => (
              <Input
                mb='16px'
                placeholder='Add Task...'
                focusBorderColor='cyan.500'
                {...props.field}
              />
            )}
          />
        </Box>

        <Button type='submit' paddingX='40px' variantColor='cyan' color='white'>
          Add
        </Button>
      </Stack>
    </Form>
  );
}

//function that get's today's date in the format YYYY-MM-DD
function getTodayDate() {
  const today = new Date();
  const formattedDate = today.toISOString().substr(0, 10);
  return formattedDate;
}

const AddTodoFormik = withFormik({
  mapPropsToValues({ task, setDate }) {
    return {
      task: task || '',
      setDate: setDate || getTodayDate() //sets the default date
    };
  },
  validationSchema: yup.object().shape({
    task: yup.string().required('Please enter your todo'),
    setDate: yup.date().required('please set the due date')
  }),
  handleSubmit(values, { props, resetForm }) {
    const userID = localStorage.getItem('userID');

    const newTodo = {
      title: values.task,
      task: values.task,
      setDate: values.setDate,
      user_id: Number(userID)
    };

    props.addTask(newTodo);
    resetForm();
  }
})(AddTodoForm);

export default connect(
  state => state,
  actionCreators
)(AddTodoFormik);
