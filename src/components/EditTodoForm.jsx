import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Box,
  Flex,
  FormErrorMessage,
  Checkbox,
  Text
} from '@chakra-ui/core';
import { withFormik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { FaCalendarAlt } from 'react-icons/fa';

import * as actionCreators from '../actionCreators';
import * as yup from 'yup';

export function EditTodoForm(props) {
  return (
    <Box
      marginX='20px'
      py={3}
      fontWeight='bold'
      bg='white'
      marginTop='30px'
      padding='20px'
      borderRadius='5px'
      borderWidth='2px'
    >
      <Form>
        <Text paddingY='20px'>Edit Task</Text>
        <Field
          name='task'
          render={({ field, form }) => (
            <FormControl
              isInvalid={form.errors[field.name] && form.touched[field.name]}
            >
              <Input
                {...field}
                id='task'
                placeholder='Enter task'
                focusBorderColor='cyan.100'
              />
              <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Field
          name='setDate'
          render={({ field, form }) => (
            <FormControl
              isInvalid={form.errors[field.name] && form.touched[field.name]}
            >
              <Flex paddingY='20px'>
                <FormLabel htmlFor='set-date' marginTop='5px'>
                  Due{' '}
                </FormLabel>
                <Input
                  {...field}
                  type='date'
                  id='set-date'
                  marginLeft='20px'
                  focusBorderColor='cyan.100'
                  placeholder='Enter due date'
                  maxWidth='180px'
                />
                <Box
                  as={FaCalendarAlt}
                  size='24px'
                  marginTop='8px'
                  color='gray.500'
                  marginLeft='20px'
                />
              </Flex>
              <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Field
          name='completed'
          render={({ field, form }) => (
            <FormControl
              isInvalid={form.errors[field.name] && form.touched[field.name]}
            >
              <Flex>
                <FormLabel htmlFor='set-date'>Completed?</FormLabel>
                <Checkbox
                  variantColor='cyan'
                  id='completed'
                  isChecked={field.value}
                  {...field}
                />
                <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
              </Flex>
            </FormControl>
          )}
        />
        <Field
          name='notes'
          render={({ field, form }) => (
            <FormControl
              isInvalid={form.errors[field.name] && form.touched[field.name]}
            >
              <Flex justify='space-between' align='center' paddingY='10px'>
                <FormLabel htmlFor='repeat'>No Repeat</FormLabel>
                <Select
                  focusBorderColor='cyan.100'
                  id='repeat'
                  maxWidth='150px'
                  placeholder='No Repeat'
                  {...field}
                >
                  <option value='daily'>Daily</option>
                  <option value='weekly'>Weekly</option>
                  <option value='monthly'>Monthly</option>
                </Select>
              </Flex>
              <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Flex marginY='30px'>
          <Button type='submit' variantColor='cyan' color='white'>
            Save
          </Button>
          <Button
            marginLeft='20px'
            onClick={() => {
              props.history.push('/todoapp');
            }}
          >
            Cancel
          </Button>
        </Flex>
      </Form>
    </Box>
  );
}

const EditTodoFormik = withFormik({
  mapPropsToValues({ title, task, setDate, completed, ...props }) {
    const { id } = props.match.params;
    const store = props.tasks.taskList;
    const taskData = store.find(task => task.id === Number(id));
    if (!taskData) {
      return {
        title: title || '',
        task: task || '',
        setDate: setDate || '',
        completed: completed || false
      };
    }
    return {
      ...taskData,
      title: title || taskData.title,
      task: task || taskData.task,
      setDate: setDate || taskData.setDate,
      completed: completed || taskData.completed || false
    };
  },
  enableReinitialize: true,
  validationSchema: yup.object().shape({
    title: yup.string().required('Please enter a title'),
    task: yup.string().required('Please enter your todo'),
    setDate: yup.date().required('please set the due date'),
    completed: yup.bool()
  }),
  handleSubmit(values, { props }) {
    props.EditTask(values);
    props.history.push('/todoapp');
  }
})(EditTodoForm);

export default connect(
  state => state,
  actionCreators
)(EditTodoFormik);
