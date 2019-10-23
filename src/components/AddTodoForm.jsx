import React from 'react';
import { Input, Button, Stack, Box } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

import * as actionCreators from '../actionCreators';

export function AddTodoForm(props) {
  // debugger;
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

          <Stack isInline>
            <Field
              name='title'
              render={props => (
                <Input
                  placeholder='Add Title Here'
                  focusBorderColor='cyan.500'
                  {...props.field}
                />
              )}
            />

            <Box size='24px' />

            <Field
              name='setDate'
              render={props => (
                <Input
                  type='date'
                  placeholder='Set due date'
                  focusBorderColor='cyan.500'
                  {...props.field}
                />
              )}
            />
          </Stack>
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
  mapPropsToValues({ title, task, setDate }) {
    return {
      title: title || '',
      task: task || '',
      setDate: setDate || getTodayDate() //sets the default date
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required('Please enter a title'),
    task: yup.string().required('Please enter your todo'),
    setDate: yup.date().required('please set the due date')
  }),
  handleSubmit(values, { props, resetForm }) {
    // Step 1: Get the user_id from localStorage
    const userID = localStorage.getItem('userID');

    // Step 2: Create the todo object the way the endpoint requires
    const newTodo = {
      title: values.title,
      task: values.task,
      setDate: values.setDate,
      user_id: Number(userID)
    };

    // Step 3: Call the action to add task, which is in props
    props.addTask(newTodo);

    // Step 4: Reset the form
    resetForm();
  }
})(AddTodoForm);

export default connect(
  state => state,
  actionCreators
)(AddTodoFormik);
