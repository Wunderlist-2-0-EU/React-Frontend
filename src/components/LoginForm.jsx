import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Input, Button, Text, Heading, Box, Stack } from '@chakra-ui/core';

import { connect } from 'react-redux';
import { login } from '../actionCreators';
import * as yup from 'yup';

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <Box bg='cyan.500' minHeight='100vh'>
      <Heading textAlign='center' paddingTop='50px' color='white'>
        Login to Wunderlist
      </Heading>
      <Box
        bg='white'
        maxWidth='450px'
        mx='auto'
        my='30px'
        borderRadius='10px'
        py={8}
      >
        <Form>
          <Stack spacing='20px' marginX='auto' maxWidth='350px'>
            <Box>
              {errors.username && touched.username && <p>{errors.username}</p>}
              <Field
                name='username'
                render={props => (
                  <Input placeholder='Username' {...props.field} />
                )}
              />
            </Box>

            <Box>
              {errors.password && touched.password && <p>{errors.password}</p>}
              <Field
                name='password'
                render={props => (
                  <Input
                    placeholder='Password'
                    type='password'
                    {...props.field}
                  />
                )}
              />
            </Box>

            <Button
              isLoading={isSubmitting}
              // isFullWidth
              type='submit'
              size='lg'
              variantColor='cyan'
            >
              Login
            </Button>
          </Stack>

          <Link to='/signup'>
            <Text
              marginX='auto'
              marginTop='20px'
              textAlign='center'
              maxWidth='350px'
            >
              Don't have an account? Sign up here
            </Text>
          </Link>
        </Form>
      </Box>
    </Box>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup
      .string()
      .min(8, 'Must be minimum 8 characters')
      .required('Password is required')
  }),
  handleSubmit(values, { props, setSubmitting, resetForm }) {
    props.login(values, props.history);
    resetForm();
    setSubmitting(false);
  }
})(Login);

export default connect(
  state => state,
  { login }
)(FormikLogin);
