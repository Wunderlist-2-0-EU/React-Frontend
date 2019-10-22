import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { register } from '../actionCreators';

const Signup = ({ errors, touched }) => {
  return (
    <Form>
      <h2>Sign Up</h2>
      {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
      <Field type='text' name='firstName' placeholder='Name' />

      {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
      <Field type='text' name='lastName' placeholder='Surname' />

      {errors.username && touched.username && <p>{errors.username}</p>}
      <Field type='text' name='username' placeholder='Username' />

      {errors.password && touched.password && <p>{errors.password}</p>}
      <Field type='password' name='password' placeholder='Password' />

      <button type='submit'>Submit</button>
      <Link to='/'>
        <p>Already have an account? Login here!</p>
      </Link>
    </Form>
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
  null,
  { register }
)(FormikSignup);
