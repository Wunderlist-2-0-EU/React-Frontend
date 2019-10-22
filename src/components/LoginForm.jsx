// Onboarding process for a new general user

// ```jsx
// <SignupPage/> //for new users
// <LoginPage/> //for returning users. It uses auth
// ```

import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actionCreators';
import * as yup from 'yup';

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
      <h1>Login</h1>
      <div>
        {errors.username && touched.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
        {errors.password && touched.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <button disabled={isSubmitting} type='submit'>
        Login
      </button>
      <Link to='/'>
        <p>Don't have an account? Sign up here</p>
      </Link>
    </Form>
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
  null,
  { login }
)(FormikLogin);
