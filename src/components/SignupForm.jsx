import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button, Text, Heading, Box, Stack } from '@chakra-ui/core';
import * as yup from 'yup';
import { register } from '../actionCreators';

const Signup = ({ errors, touched, isSubmitting }) => {
  return (
    <Box bg='cyan.500' minHeight='100vh'>
      <Heading textAlign='center' paddingTop='50px' color='white'>
        Sign-Up to Wunderlist
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
            <Box marginTop='30px'>
              {errors.firstName && touched.firstName && (
                <p>{errors.firstName}</p>
              )}
              <Field
                name='firstName'
                render={props => <Input placeholder='Name' {...props.field} />}
              />
            </Box>

            <Box>
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
              <Field
                name='lastName'
                render={props => (
                  <Input placeholder='Surname' {...props.field} />
                )}
              />
            </Box>
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
              type='submit'
              size='lg'
              variantColor='cyan'
            >
              Sign up
            </Button>
          </Stack>

          <Link to='/'>
            <Text
              marginX='auto'
              marginTop='20px'
              textAlign='center'
              maxWidth='350px'
            >
              Already have an account? Login here!
            </Text>
          </Link>
        </Form>
      </Box>
    </Box>
  );
};

const FormikSignup = withFormik({
  mapPropsToValues({ firstName, lastName, username, password }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your surname'),
    username: yup.string().required('username is required'),
    password: yup
      .string()
      .min(8, 'Must be minimum 8 characters')
      .required('Password is required')
  }),
  handleSubmit(values, { props, resetForm }) {
    props.register(values, props.history);
    resetForm();
  }
})(Signup);

export default connect(
  state => state,
  { register }
)(FormikSignup);
