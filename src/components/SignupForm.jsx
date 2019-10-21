// Onboarding process for a new general user

// ```jsx
// <SignupPage/> //for new users
// <LoginPage/> //for returning users. It uses auth
// ```

import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { register } from '../actionCreators';

const Signup = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
      <h1>Sign-Up</h1>
      <div>
        {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
        <Field type='text' name='firstName' placeholder='Name' />
      </div>
      <div>
        {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
        <Field type='text' name='lastName' placeholder='Surname' />
      </div>
      <div>
        {errors.username && touched.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
        {errors.password && touched.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>
      {/*<Link to='/login'>
        <p>Already have an account? Login here!</p>
  </Link>*/}
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
  handleSubmit(values, { setSubmitting, setErrors, resetForm }) {
    debugger;
    register(values);
  }
})(Signup);

export default FormikSignup;
